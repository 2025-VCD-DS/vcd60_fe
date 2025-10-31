import React from 'react';
import { headers } from 'next/headers';
import * as S from '@/app/projects/[id]/pageStyle';

interface Designer {
  profile: string;
  name: string;
  email: string;
  phone: string;
}

interface ProjectDetail {
  projectId: number;
  title: string;
  content: string;
  workImg: string;
  designer: Designer;
}

interface PageProps {
  params: {
    id: string;
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params;

  // 현재 호스트 정보
  const host = (await headers()).get('host');
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
  const baseUrl = `${protocol}://${host}`;

  // API 호출
  const res = await fetch(`${baseUrl}/api/projects/${id}`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch project data');

  const project: ProjectDetail = await res.json();

  return (
    <S.Container>
      <h1>프로젝트 상세 페이지</h1>
      <h2>{project.title}</h2>
      <p>{project.content}</p>
      <img src={project.workImg} alt={project.title} style={{ width: '300px', height: 'auto' }} />
      <div>
        <img
          src={project.designer.profile}
          alt={`${project.designer.name} 프로필`}
          style={{ width: '80px', height: '80px' }}
        />
        <h2>{project.designer.name}</h2>
        <p>이메일: {project.designer.email || '-'}</p>
        <p>전화번호: {project.designer.phone || '-'}</p>
      </div>
    </S.Container>
  );
}
