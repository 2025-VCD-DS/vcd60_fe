import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

/**
 * GET 요청 핸들러
 *
 * @param params - URL params에서 projectId를 받음
 * @returns NextResponse - projectId 기준으로 프로젝트와 디자이너 정보 JSON 반환
 */
export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const DEFAULT_PROFILE = '/profiles/default-profile.jpg';

    const projectIdParam = Number(params.id);
    if (isNaN(projectIdParam)) {
      return NextResponse.json({ error: 'Invalid projectId' }, { status: 400 });
    }

    // CSV 파일 읽기
    const filePath = path.join(process.cwd(), 'src/data/test.csv');
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    const records: any[] = parse(fileContent, {
      columns: true,
      skip_empty_lines: true,
      trim: true,
    });

    // projectId 기준 필터링
    const projectRecords = records.filter((r) => Number(r.projectId) === projectIdParam);
    if (projectRecords.length === 0) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 });
    }

    // 첫 번째 레코드 기준으로 프로젝트 정보 추출
    const first = projectRecords[0];

    // 디자이너 정보
    const designer = {
      profile: first.agreement === 'TRUE' ? first.profileImg || DEFAULT_PROFILE : DEFAULT_PROFILE,
      name: first.name,
      email: first.email || '-',
      phone: first.phone || '-',
    };

    const response = {
      projectId: projectIdParam,
      title: first.project,
      content: first.content,
      workImg: first.workImg,
      designer,
    };

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error('CSV 처리 오류:', error);
    return NextResponse.json({ error: '서버 오류가 발생했습니다.' }, { status: 500 });
  }
}
