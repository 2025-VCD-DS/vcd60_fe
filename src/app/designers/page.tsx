'use client';

import React, { useEffect, useState, useMemo } from 'react';
import * as S from '@/app/designers/pageStyle';
import { theme } from '@/styles/theme';
import DecorateLine from '@/app/components/decorateLine/DecorateLine';
import InitialBox from '@/app/designers/components/InitialBox';
import DesignerCard from '@/app/designers/components/DesignerCard';
import { INITIAL_CONSONANTS, getFirstInitialConsonant } from '@/app/designers/utils/koreanUtils';

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

export default function DesignersPage() {
  const [designers, setDesigners] = useState<Designer[]>([]);
  const [selectedInitial, setSelectedInitial] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const fetchDesigners = async () => {
      try {
        const res = await fetch('/api/designers');
        if (!res.ok) throw new Error('Failed to fetch designer data');
        const data = await res.json();
        setDesigners(data);
      } catch (error) {
        console.error('Error fetching designers:', error);
      }
    };

    fetchDesigners();
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= theme.breakpoints.mobile);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleInitialClick = (consonant: string) => {
    setSelectedInitial(consonant);
  };

  const handleAllClick = () => {
    setSelectedInitial(null);
  };

  // 선택된 초성에 맞는 디자이너 필터링
  const filteredDesigners = useMemo(() => {
    if (!selectedInitial) {
      return designers;
    }

    return designers.filter((designer) => {
      const firstInitial = getFirstInitialConsonant(designer.name);
      return firstInitial === selectedInitial;
    });
  }, [designers, selectedInitial]);

  return (
    <S.Container>
      <S.ContentContainer>
        <S.FilterContainer>
          <InitialBox text={isMobile ? 'All' : 'All Designers'} onClick={handleAllClick} />
          <S.RightContainer>
            {INITIAL_CONSONANTS.map((consonant) => (
              <InitialBox
                key={consonant}
                text={consonant}
                selected={selectedInitial === consonant}
                onClick={() => handleInitialClick(consonant)}
              />
            ))}
          </S.RightContainer>
        </S.FilterContainer>

        <DecorateLine />

        <S.DesginerListContainer>
          {filteredDesigners.map((designer) => (
            <DesignerCard key={designer.studentId} designer={designer} />
          ))}
        </S.DesginerListContainer>
      </S.ContentContainer>
    </S.Container>
  );
}
