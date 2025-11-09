'use client';

import styled from '@emotion/styled';
import { media, theme } from '@/styles/theme';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 65px;
  padding: 65px 90px 0;
  overflow-x: hidden;

  ${media.tablet} {
    gap: 40px;
    padding: 50px 65px 0;
  }

  ${media.mobile} {
    gap: 34px;
    padding: 30px 20px 0;
  }
`;

export const SubjectConatiner = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  gap: 30px;

  ${media.tablet} {
    gap: 25px;
  }

  ${media.mobile} {
    gap: 23px;
  }
`;

export const SubjectImage = styled.img<{ $pcSrc: string; $tabletSrc: string; $mobileSrc: string }>`
  position: absolute;
  top: 3%;
  right: 0;
  z-index: -1;
  transform: translateX(8%);

  width: 55vw;
  height: auto;
  pointer-events: none;

  content: url(${(props) => props.$pcSrc});

  ${media.tablet} {
    top: 2%;
    transform: translateX(16%);

    width: 65vw;
    content: url(${(props) => props.$tabletSrc});
  }

  ${media.mobile} {
    top: 2.5%;
    transform: translateX(21%);
    opacity: 0.5;

    width: 78vw;
    content: url(${(props) => props.$mobileSrc});
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;

  background-color: ${theme.colors.white};

  ${media.tablet} {
    gap: 35px;
  }

  ${media.mobile} {
    gap: 20px;
  }
`;

export const InnerContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 120px;

  padding: 0 65px 65px;

  ${media.tablet} {
    padding: 0 40px 50px;
    gap: 40px;
  }

  ${media.mobile} {
    padding: 0 20px 30px;
  }
`;

export const ExplainConatiner = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 25px;

  ${media.tablet} {
    flex-direction: column;
    gap: 35px;
  }

  ${media.mobile} {
    gap: 30px;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;

  ${media.tablet} {
    gap: 20px;
  }

  ${media.mobile} {
    gap: 12px;
  }
`;

export const RightContainer = styled.div`
  width: 45%;

  ${media.tablet} {
    width: 100%;
  }
`;

export const SubjectNameContainer = styled.div`
  color: ${theme.colors.black};
  font-family: 'Pretendard';

  display: flex;
  flex-direction: column;
  gap: 5px;

  ${media.tablet} {
    gap: 4px;
  }

  ${media.mobile} {
    gap: 3px;
  }
`;

export const SubjectBoldText = styled.div`
  font-size: 31px;
  font-weight: 700;
  line-height: 103%;

  ${media.tablet} {
    font-size: 20px;
  }

  ${media.mobile} {
    font-size: 15px;
  }
`;

export const SubjectText = styled.div`
  font-size: 25px;
  font-weight: 400;
  line-height: 103%;

  ${media.tablet} {
    font-size: 17px;
  }

  ${media.mobile} {
    font-size: 12px;
  }
`;

export const ExplainText = styled.div`
  color: ${theme.colors.black};
  font-family: 'Pretendard';
  font-size: 20px;
  font-weight: 300;
  line-height: 195%;

  ${media.tablet} {
    font-size: 17px;
    line-height: 125%;
  }

  ${media.mobile} {
    font-size: 12px;
    line-height: 125%;
  }
`;

export const SubjectTextboxImage = styled.img<{
  $pcSrc: string;
  $tabletSrc: string;
  $mobileSrc: string;
  $top?: number;
}>`
  position: absolute;
  top: ${(props) => props.$top ?? 140}px;

  width: 40vw;
  height: auto;
  pointer-events: none;

  content: url(${(props) => props.$pcSrc});

  ${media.tablet} {
    top: 0;
    right: 40px;

    width: 30vw;
    content: url(${(props) => props.$tabletSrc});
  }

  ${media.mobile} {
    top: 8px;
    right: 20px;

    width: 37vw;
    content: url(${(props) => props.$mobileSrc});
  }
`;

export const CardBoxContainer = styled.div`
  z-index: 2;
  display: flex;
  flex-wrap: wrap;
  row-gap: 60px;
  column-gap: 40px;

  ${media.tablet} {
    row-gap: 40px;
    column-gap: 25px;
  }

  ${media.mobile} {
    row-gap: 23px;
    column-gap: 17px;
  }
`;
