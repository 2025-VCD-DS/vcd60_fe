import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

interface CSVRecord {
  projectId: string;
  title: string;
  name: string;
  thumbnailImg: string;
  subject: string;
}

/**
 * @typedef Project
 * @property {number} id - 프로젝트 ID
 * @property {string} title - 작품 제목
 * @property {string} name - 학생 이름
 * @property {string} thumbnail - 작품 썸네일 이미지 URL
 * @property {string} subject - 과목
 */
interface Project {
  id: number;
  title: string;
  name: string;
  thumbnail: string;
  subject: string;
}

/**
 * @typedef SubjectGroup
 * @property {string} subject - 과목
 * @property {Project[]} projects - 해당 주제에 속한 작품 리스트
 */
interface SubjectGroup {
  subject: string;
  projects: Project[];
}

/**
 * GET 요청 핸들러
 *
 * CSV 파일(`src/data/data.csv`)을 읽어서 subject 값 기준으로 그룹화하고
 * 각 subject마다 작품 배열을 묶어 JSON 형태로 반환합니다.
 *
 * @returns {NextResponse} - subject별 작품 배열을 포함한 JSON 응답
 */
export async function GET() {
  try {
    const DEFAULT_WORK_IMG = '/works/default-work.jpg';

    // CSV 파일 경로
    const filePath = path.join(process.cwd(), 'src/data/data.csv');
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    // CSV 파싱
    const records: CSVRecord[] = parse(fileContent, {
      columns: true,
      skip_empty_lines: true,
      trim: true,
    });

    // subject 기준 그룹화
    const grouped: { [subject: string]: SubjectGroup } = records.reduce(
      (acc, cur) => {
        const subject = cur['subject'];

        if (!acc[subject]) {
          acc[subject] = {
            subject,
            projects: [],
          };
        }

        acc[subject].projects.push({
          id: Number(cur['projectId']),
          title: cur['title'],
          name: cur['name'],
          thumbnail: cur['thumbnailImg'] || DEFAULT_WORK_IMG,
          subject: cur['subject'],
        });

        return acc;
      },
      {} as { [subject: string]: SubjectGroup },
    );

    const result: SubjectGroup[] = Object.values(grouped);

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error('CSV 파싱 중 오류 발생:', error);
    return NextResponse.json({ error: '서버 오류가 발생했습니다.' }, { status: 500 });
  }
}
