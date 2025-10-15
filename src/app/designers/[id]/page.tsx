'use client';

import { useParams } from 'next/navigation';
import * as S from '@/app/designers/[id]/pageStyle';

export default function DesignerDetailPage() {
  const params = useParams(); // { id: 'designerId' }
  const designerId = params.id;

  // TODO: 데이터 가져오기
  const projects = [
    { id: 1, title: '작품1' },
    { id: 2, title: '작품2' },
  ];

  return (
    <S.Container>
      <h1>디자이너 상세 페이지 - {designerId}</h1>
      {projects.map((project) => (
        <div key={project.id}>
          <h2>{project.title}</h2>
        </div>
      ))}
    </S.Container>
  );
}
