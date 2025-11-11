/**
 * @component Footer
 *
 * @returns {JSX.Element} 전시회 정보와 인스타그램 링크를 포함한 푸터
 *
 * @example
 * <Footer />
 *
 * @note
 * - 덕성여자대학교 시각디자인학전공 제 60회 졸업작품전시회 정보를 표시합니다.
 * - 인스타그램 아이콘 클릭 시 @vcd_duksung 페이지가 새 탭에서 열립니다.
 * - 전시회 오픈일: 2025.11.13
 *
 * @author 김서윤
 */

'use client';

import * as S from '@/styles/footerStyle';

export default function Footer() {
  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/vcd_duksung', '_blank', 'noopener,noreferrer');
  };

  return (
    <S.Container>
      <S.TopContainer>
        <S.LeftContainer>
          <S.TextContainer>
            <S.Text>덕성여자대학교 시각디자인학전공</S.Text>
            <S.Text $isBold>제 60회 졸업작품전시회</S.Text>
          </S.TextContainer>
          <S.IconInstagram onClick={handleInstagramClick} />
        </S.LeftContainer>
        <S.Text>
          Duksung Women&apos;s University Visual Communication Design
          <br />
          The 60th Graduation Exhibition
        </S.Text>
      </S.TopContainer>
      <S.BottomContainer>OPEN | 2025.11.12</S.BottomContainer>
    </S.Container>
  );
}
