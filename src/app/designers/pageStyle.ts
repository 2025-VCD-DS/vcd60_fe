'use client';

import styled from '@emotion/styled';
import { media, theme } from '@/styles/theme';

export const Container = styled.div`
  padding: 65px 90px;

  ${media.tablet} {
    padding: 50px 65px;
  }

  ${media.mobile} {
    padding: 30px 20px;
  }
`;

export const ContentContainer = styled.div`
  background-color: ${theme.colors.white};
`;

export const FilterContainer = styled.div`
  padding: 30px 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 13px;

  ${media.tablet} {
    padding: 13px 16px;
    gap: 9.5px;
  }

  ${media.mobile} {
    padding: 5px 6px;
    gap: 3.5px;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  overflow-x: scroll;
  gap: 13px;

  ${media.tablet} {
    gap: 9.5px;
  }

  ${media.mobile} {
    gap: 3.5px;
  }
`;

export const DesginerListContainer = styled.div`
  padding: 45px 35px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  ${media.tablet} {
    padding: 30px 15px;
    gap: 15px;
  }

  ${media.mobile} {
    padding: 25px 10px;
    gap: 12px;
  }
`;
