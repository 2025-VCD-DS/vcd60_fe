import React from 'react';
import { headers } from 'next/headers';
import * as S from '@/app/designers/pageStyle';

interface Project {
  id: number;
  title: string;
  thumbnail: string;
}

interface Designer {
  studentId: string;
  name: string;
  email: string;
  phone: string;
  profile: string;
  agreement: boolean;
  projects: Project[];
}

async function getDesigners(): Promise<Designer[]> {
  const host = (await headers()).get('host');
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
  const baseUrl = `${protocol}://${host}`;

  const res = await fetch(`${baseUrl}/api/designers`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch designer data');
  return res.json();
}

export default async function DesignersPage() {
  const designers = await getDesigners();

  return (
    <S.Container>
      <h1>디자이너 목록</h1>
      <ul>
        {designers.map((designer) => (
          <li key={designer.studentId}>
            <div>
              <img src={designer.profile} alt={`${designer.name} 프로필`} style={{ width: '80px', height: '80px' }} />
              <div>
                <h2>{designer.name}</h2>
                <p>이메일: {designer.email || '-'}</p>
                <p>전화번호: {designer.phone || '-'}</p>
              </div>
            </div>

            <div>
              <h3>🎨 작품</h3>
              <ul>
                {designer.projects.map((project, idx) => (
                  <li key={idx}>
                    <img src={project.thumbnail} alt={project.title} style={{ width: '300px', height: 'auto' }} />
                    <p>{project.title}</p>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </S.Container>
  );
}
