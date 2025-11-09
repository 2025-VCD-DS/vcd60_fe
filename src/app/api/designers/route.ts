import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

/**
 * @typedef Project
 * @property {number} id - 프로젝트 ID
 * @property {string} title - 작품 제목
 * @property {string} thumbnail - 작품 썸네일 이미지 URL
 */
interface Project {
  id: number;
  title: string;
  thumbnail: string;
}

/**
 * @typedef Student
 * @property {string} studentId - 학번
 * @property {string} name - 학생 이름
 * @property {string} email - 이메일
 * @property {string} phone - 연락처
 * @property {string} profile - 프로필 이미지 URL
 * @property {boolean} agreement - 동의 여부
 * @property {project[]} projects - 학생의 작품 리스트
 */
interface Student {
  studentId: string;
  name: string;
  email: string;
  phone: string;
  profile: string;
  agreement: boolean;
  projects: Project[];
}

interface CSVRecord {
  studentId: string;
  name: string;
  email: string;
  phone: string;
  profileImg: string;
  agreement: string;
  projectId: string;
  title: string;
  thumbnailImg: string;
}

/**
 * GET 요청 핸들러
 *
 * CSV 파일(`src/data/data.csv`)을 읽어서 학번 기준으로 학생 정보를 그룹화하고
 * 각 학생의 작품을 배열로 묶어 JSON 형태로 반환합니다.
 *
 * @returns {NextResponse} - 학번별 학생 정보와 작품 배열을 포함한 JSON 응답
 */
export async function GET() {
  try {
    const DEFAULT_PROFILE = '/profiles/default-profile.jpg';

    // CSV 파일 경로 지정
    const filePath = path.join(process.cwd(), 'src/data/data.csv');
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    // CSV 파싱
    const records: CSVRecord[] = parse(fileContent, {
      columns: true,
      skip_empty_lines: true,
      trim: true,
    });

    // 학번 기준으로 그룹화
    const grouped: { [studentId: string]: Student } = records.reduce(
      (acc, cur) => {
        const studentId = cur['studentId'];
        const agreement = cur['agreement'] === 'TRUE';

        if (!acc[studentId]) {
          acc[studentId] = {
            studentId: cur['studentId'],
            name: cur['name'],
            email: cur['email'],
            phone: cur['phone'],
            profile: agreement ? cur['profileImg'] || DEFAULT_PROFILE : DEFAULT_PROFILE,
            agreement,
            projects: [],
          };
        }

        acc[studentId].projects.push({
          id: Number(cur['projectId']),
          title: cur['title'],
          thumbnail: cur['thumbnailImg'],
        });

        return acc;
      },
      {} as { [studentId: string]: Student },
    );

    // 배열로 변환 후 이름 가나다순 정렬
    const result: Student[] = Object.values(grouped).sort((a, b) => a.name.localeCompare(b.name, 'ko-KR'));

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error('CSV 파싱 중 오류 발생:', error);
    return NextResponse.json({ error: '서버 오류가 발생했습니다.' }, { status: 500 });
  }
}
