'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import * as S from '@/app/projects/pageStyle';
import DecorateLine from '@/app/components/decorateLine/DecorateLine';
import SubjectSelected from '@/app/projects/components/SubjectSelected';
import CardBox from '@/app/projects/components/CardBox';
import { SUBJECTS } from '@/app/projects/constants/subjectData';
import { SUBJECT_IMAGES } from '@/app/projects/constants/subjectImages';
import { SUBJECT_TEXTBOX_IMAGES } from '@/app/projects/constants/subjectTextboxImages';

interface Project {
  id: number;
  title: string;
  name: string;
  thumbnail: string;
  subject: string;
}

interface SubjectGroup {
  subject: string;
  projects: Project[];
}

const SUBJECT_TEXTBOX_TOP: Record<string, number> = {
  'communication-design': 120,
  'illustration-design': 0,
  'video-design': 130,
};

const SUBJECT_MAPPING: Record<string, string> = {
  'communication-design': '커뮤니케이션디자인',
  'illustration-design': '일러스트레이션',
  'video-design': '영상콘텐츠디자인',
};

export default function ProjectsPage() {
  const router = useRouter();
  const [selectedSubject, setSelectedSubject] = useState<string>('communication-design');
  const [subjectGroups, setSubjectGroups] = useState<SubjectGroup[]>([]);

  useEffect(() => {
    async function fetchProjects() {
      const res = await fetch('/api/projects', { cache: 'no-store' });
      if (!res.ok) throw new Error('Failed to fetch project data');
      const data = await res.json();
      setSubjectGroups(data);
    }
    fetchProjects();
  }, []);

  const selectedImage = SUBJECT_IMAGES[selectedSubject];
  const selectedTextboxImage = SUBJECT_TEXTBOX_IMAGES[selectedSubject];
  const selectedTextboxTop = SUBJECT_TEXTBOX_TOP[selectedSubject];
  const selectedSubjectData = SUBJECTS.find((subject) => subject.id === selectedSubject);

  const filteredProjects = subjectGroups
    .filter((group) => group.subject === SUBJECT_MAPPING[selectedSubject])
    .flatMap((group) => group.projects);

  return (
    <S.Container>
      <S.SubjectConatiner>
        {SUBJECTS.map((subject) => (
          <SubjectSelected
            key={subject.id}
            subject={subject}
            selected={selectedSubject === subject.id}
            onClick={() => setSelectedSubject(subject.id)}
          />
        ))}
      </S.SubjectConatiner>

      <S.SubjectImage
        $pcSrc={selectedImage.pc}
        $tabletSrc={selectedImage.tablet}
        $mobileSrc={selectedImage.mobile}
        alt="background"
      />

      <S.ContentContainer>
        <DecorateLine />

        <S.InnerContainer>
          <S.ExplainConatiner>
            <S.LeftContainer>
              <S.SubjectNameContainer>
                <S.SubjectBoldText>{selectedSubjectData?.subjectKor} 프로젝트</S.SubjectBoldText>
                <S.SubjectText>{selectedSubjectData?.subjectEng}</S.SubjectText>
              </S.SubjectNameContainer>
              <S.SubjectText>{selectedSubjectData?.subjectProfessor} 교수</S.SubjectText>
            </S.LeftContainer>

            <S.RightContainer>
              <S.ExplainText>
                {selectedSubjectData?.subjectText.split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    {index < selectedSubjectData.subjectText.split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </S.ExplainText>
            </S.RightContainer>
          </S.ExplainConatiner>

          <S.SubjectTextboxImage
            $pcSrc={selectedTextboxImage.pc}
            $tabletSrc={selectedTextboxImage.tablet}
            $mobileSrc={selectedTextboxImage.mobile}
            $top={selectedTextboxTop}
            alt="background"
          />

          <S.CardBoxContainer>
            {filteredProjects.map((project) => (
              <CardBox
                key={project.id}
                id={project.id}
                title={project.title}
                name={project.name}
                thumbnail={project.thumbnail}
                onClick={() => router.push(`/projects/${project.id}`)}
              />
            ))}
          </S.CardBoxContainer>
        </S.InnerContainer>
      </S.ContentContainer>
    </S.Container>
  );
}
