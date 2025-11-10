'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import DecorateLine from '@/app/components/decorateLine/DecorateLine';
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
  params: Promise<{ id: string }>;
}

export default function ProjectDetailPage({ params }: PageProps) {
  const router = useRouter();
  const [project, setProject] = useState<ProjectDetail | null>(null);
  const [id, setId] = useState<string>('');

  useEffect(() => {
    async function getParams() {
      const resolvedParams = await params;
      setId(resolvedParams.id);
    }
    getParams();
  }, [params]);

  useEffect(() => {
    if (!id) return;

    async function fetchProject() {
      const res = await fetch(`/api/projects/${id}`, { cache: 'no-store' });
      if (!res.ok) throw new Error('Failed to fetch project data');
      const data: ProjectDetail = await res.json();
      setProject(data);
    }
    fetchProject();
  }, [id]);

  if (!project) return null;

  return (
    <S.Container>
      <S.ContentContainer>
        <S.HeaderContainer>
          <S.BtnBack onClick={() => router.back()} />
          <DecorateLine />
        </S.HeaderContainer>

        <S.InnerContainer>
          <S.ProjectContainer>
            <S.ProjectTitle>{project.title}</S.ProjectTitle>
            <S.ProjectDesigner>{project.designer.name}</S.ProjectDesigner>
            <S.ProjectContent>{project.content}</S.ProjectContent>
          </S.ProjectContainer>

          <S.ProjectImg src={project.workImg} alt={project.title} />

          <S.ProfileContainer>
            <S.ProfileImage src={project.designer.profile} alt={`${project.designer.name} 프로필`} />
            <S.DesignerName>{project.designer.name}</S.DesignerName>
            <S.DesignerTitle>contact</S.DesignerTitle>
            <S.DesignerContact>{project.designer.email || '-'}</S.DesignerContact>
            <S.DesignerContact>{project.designer.phone || '-'}</S.DesignerContact>
          </S.ProfileContainer>
        </S.InnerContainer>
      </S.ContentContainer>
    </S.Container>
  );
}
