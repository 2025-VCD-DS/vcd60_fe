'use client';

import React, { useEffect, useState } from 'react';
import * as S from '@/app/guestbook/components/topContainerStyle';
import pcBg from '@/assets/image/1920-img-gestbook.svg?url';
import tabletBg from '@/assets/image/1280-img-gestbook.svg?url';
import mobileBg from '@/assets/image/360-img-gestbook.svg?url';
import writeIc from '@/assets/icon/ic-write.svg?url';

const breakpoints = {
  mobile: 767,
  tablet: 1023,
  pc: 1024,
};

interface TopContainerProps {
  onOpenModal: () => void;
}

/**
 * @component TopContainer
 *
 * @description
 * 방명록 페이지의 상단 영역을 구성하는 컴포넌트입니다.
 * 반응형 화면 크기에 따라 서로 다른 배경 이미지를 표시하며,
 * "글 작성하기" 버튼을 통해 방명록 작성 모달을 열 수 있습니다.
 *
 * @param {() => void} onOpenModal - 글 작성 버튼 클릭 시 실행되는 콜백 함수 (모달 열기)
 *
 * @returns {JSX.Element} 방명록 상단 헤더 섹션을 렌더링합니다.
 *
 * @example
 * ```tsx
 * <TopContainer onOpenModal={() => setIsModalOpen(true)} />
 * ```
 *
 * @note
 * - PC, Tablet, Mobile 해상도에 따라 `pcBg`, `tabletBg`, `mobileBg` 배경 이미지가 자동으로 전환됩니다.
 * - `resize` 이벤트 리스너를 등록해, 창 크기가 변경될 때마다 즉시 반응형 처리를 수행합니다.
 *
 * @author 목소연
 */
export default function TopContainer({ onOpenModal }: TopContainerProps) {
  const [bgSrc, setBgSrc] = useState(pcBg);

  useEffect(() => {
    const updateBackground = () => {
      const width = window.innerWidth;
      if (width <= breakpoints.mobile) {
        setBgSrc(mobileBg);
      } else if (width <= breakpoints.tablet) {
        setBgSrc(tabletBg);
      } else {
        setBgSrc(pcBg);
      }
    };

    updateBackground();
    window.addEventListener('resize', updateBackground);

    return () => window.removeEventListener('resize', updateBackground);
  }, []);

  return (
    <S.TopContainer>
      <S.TitleContainer>
        <S.Title>방명록</S.Title>
        <S.SubTitle>Guest Book</S.SubTitle>
      </S.TitleContainer>
      <S.Button onClick={onOpenModal}>
        <S.Icon src={writeIc} alt="write" />글 작성하기
      </S.Button>
      <S.Image src={bgSrc} alt="backgrond" />
    </S.TopContainer>
  );
}
