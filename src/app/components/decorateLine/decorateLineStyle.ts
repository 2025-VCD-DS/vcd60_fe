import styled from '@emotion/styled';
import { media, theme } from '@/styles/theme';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 7px;

  ${media.tablet} {
    gap: 5px;
  }

  ${media.mobile} {
    gap: 3.5px;
  }
`;

export const PinkLine = styled.div`
  width: 100%;
  height: 16px;
  background-color: ${theme.colors.mainPink};

  ${media.tablet} {
    height: 10px;
  }

  ${media.mobile} {
    height: 8.5px;
  }
`;

export const SemiLine = styled.div`
  width: 100%;
  height: 7px;
  background-color: ${theme.colors.black};

  ${media.tablet} {
    height: 5px;
  }

  ${media.mobile} {
    height: 3.5px;
  }
`;
