/**
 * @component DesignerCard
 *
 * @param {Designer} designer - 디자이너 정보 객체
 *
 * @returns {JSX.Element} 디자이너 카드 컴포넌트
 *
 * @example
 * <DesignerCard designer={designerData} />
 *
 * @note
 * - 모바일 환경에서는 기본적으로 프로젝트 영역이 닫힌 상태로 표시됩니다.
 * - 데스크톱 환경에서는 기본적으로 프로젝트 영역이 열린 상태로 표시됩니다.
 * - 프로젝트 카드 클릭 시 해당 프로젝트 상세 페이지로 이동합니다.
 *
 * @author 김서윤
 */

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import * as S from '@/app/designers/components/designCardStyle';

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

interface DesignerCardProps {
  designer: Designer;
}

export default function DesignerCard({ designer }: DesignerCardProps) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true); // 데스크톱 기본값: 열림
  const project1 = designer.projects[0];
  const project2 = designer.projects[1];
  const hasProject2 = !!project2;

  useEffect(() => {
    const handleResize = () => {
      // 모바일 breakpoint 체크 (768px 이하)
      const isMobile = window.innerWidth <= 768;
      setIsOpen(!isMobile); // 모바일이면 닫힘, 아니면 열림
    };

    // 초기 실행
    handleResize();

    // resize 이벤트 리스너 등록
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleProjectClick = (projectId: number) => {
    router.push(`/projects/${projectId}`);
  };

  return (
    <S.Container>
      <S.LeftContainer>
        <S.NameText>{designer.name}</S.NameText>
        <S.ProfileImage
          style={{ backgroundImage: `url(${designer.profile})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <S.RowContainer>
          <S.ProfileContainer>
            <S.ProfileData>
              <S.BoldText>Email</S.BoldText>
              <S.RegularText>{designer.email || '-'}</S.RegularText>
            </S.ProfileData>
            <S.ProfileData>
              <S.BoldText>Phone</S.BoldText>
              <S.RegularText>{designer.phone || '-'}</S.RegularText>
            </S.ProfileData>
          </S.ProfileContainer>
        </S.RowContainer>
      </S.LeftContainer>

      <S.MidContainer>
        <S.BtnMore onClick={toggleOpen} $isOpen={isOpen} />
      </S.MidContainer>

      <S.RightContainer $isOpen={isOpen}>
        {project1 && (
          <S.ProjectCard>
            <S.ProjectLabel>Project 1</S.ProjectLabel>
            <S.ProjectInner onClick={() => handleProjectClick(project1.id)}>
              <S.ProjectImage
                style={{
                  backgroundImage: `url(${project1.thumbnail})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <S.ProjectName>{project1.title}</S.ProjectName>
            </S.ProjectInner>
          </S.ProjectCard>
        )}
        <S.ProjectCard $isEmpty={!hasProject2}>
          <S.ProjectLabel>Project 2</S.ProjectLabel>
          <S.ProjectInner $isEmpty={!hasProject2} onClick={() => project2 && handleProjectClick(project2.id)}>
            {project2 && (
              <>
                <S.ProjectImage
                  style={{
                    backgroundImage: `url(${project2.thumbnail})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                <S.ProjectName>{project2.title}</S.ProjectName>
              </>
            )}
          </S.ProjectInner>
        </S.ProjectCard>
      </S.RightContainer>
    </S.Container>
  );
}
