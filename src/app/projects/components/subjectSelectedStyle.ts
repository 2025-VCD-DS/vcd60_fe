'use client';

import styled from '@emotion/styled';
import { media, theme } from '@/styles/theme';

interface selectedProps {
  selected: boolean;
}

export const Container = styled.div<selectedProps>`
  display: flex;
  align-items: center;
  gap: 17px;
  cursor: pointer;

  opacity: ${({ selected }) => (selected ? 1 : 0.3)};

  ${media.tablet} {
    gap: 10px;
  }

  ${media.mobile} {
    gap: 6px;
  }
`;

export const Icon = styled.img`
  width: 35px;
  height: auto;

  ${media.tablet} {
    width: 20px;
  }

  ${media.mobile} {
    width: 12px;
  }
`;

export const TextContainer = styled.div`
  color: ${theme.colors.black};
  font-family: 'Pretendard';
  font-size: 25px;

  ${media.tablet} {
    font-size: 15px;
  }

  ${media.mobile} {
    font-size: 12px;
  }
`;

export const BoldText = styled.div`
  font-weight: 700;
  line-height: 130%;
`;

export const RegularText = styled.div`
  font-weight: 400;
  line-height: 130%;
`;
