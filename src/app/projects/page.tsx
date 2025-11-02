import React from 'react';
import { headers } from 'next/headers';
import * as S from '@/app/projects/pageStyle';

interface Project {
  id: number;
  title: string;
  name: string;
  thumbnail: string;
}

interface SubjectGroup {
  subject: string;
  projects: Project[];
}

async function getProjects(): Promise<SubjectGroup[]> {
  const host = (await headers()).get('host');
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
  const baseUrl = `${protocol}://${host}`;

  const res = await fetch(`${baseUrl}/api/projects`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch project data');
  return res.json();
}

export default async function ProjectsPage() {
  const subjectGroups = await getProjects();

  return (
    <S.Container>
      <h1>프로젝트 목록</h1>
      {subjectGroups.map((group) => (
        <div key={group.subject}>
          <h2>{group.subject}</h2>
          <ul>
            {group.projects.map((project, idx) => (
              <li key={idx}>
                <div>
                  <img src={project.thumbnail} alt={project.title} style={{ width: '200px', height: '200px' }} />
                  <div>
                    <p>
                      <strong>{project.title}</strong>
                    </p>
                    <p>학생: {project.name}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </S.Container>
  );
}
