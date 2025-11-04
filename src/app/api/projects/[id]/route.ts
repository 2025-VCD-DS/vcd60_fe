import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

/**
 * GET 요청 핸들러
 *
 * 특정 프로젝트 ID에 해당하는 프로젝트와 디자이너 정보를 CSV에서 읽어와 반환합니다.
 *
 * @param request - HTTP 요청 객체
 * @param context - URL 매개변수를 포함한 컨텍스트 객체
 * @returns NextResponse - JSON 형태의 프로젝트 상세 데이터
 */
export const dynamic = 'force-dynamic';

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const projectId = Number(id);
    const DEFAULT_PROFILE = '/profiles/default-profile.jpg';

    if (isNaN(projectId)) {
      return NextResponse.json({ error: 'Invalid projectId' }, { status: 400 });
    }

    // CSV 파일 경로
    const filePath = path.join(process.cwd(), 'src', 'data', 'test.csv');
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    // CSV 파싱
    const records: any[] = parse(fileContent, {
      columns: true,
      skip_empty_lines: true,
      trim: true,
    });

    // projectId 기준으로 필터링
    const projectRecords = records.filter((record) => Number(record.projectId) === projectId);

    if (projectRecords.length === 0) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 });
    }

    const first = projectRecords[0];

    // 디자이너 정보 구성
    const designer = {
      profile: first.agreement === 'TRUE' ? first.profileImg || DEFAULT_PROFILE : DEFAULT_PROFILE,
      name: first.name,
      email: first.email || '-',
      phone: first.phone || '-',
    };

    // 응답 데이터 구조화
    const response = {
      projectId,
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
