import styled from '@emotion/styled';
import { media, theme } from '@/styles/theme';
import IcInsta from '@/assets/icon/ic-instagram.svg';

export const Container = styled.div`
  width: 100%;
  padding: 42px 58px;
  display: flex;
  flex-direction: column;
  gap: 105px;
  background-color: ${theme.colors.gray};

  ${media.tablet} {
    padding: 28px 38px;
    gap: 70px;
  }

  ${media.mobile} {
    display: none;
  }
`;

export const TopContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 90px;

  ${media.tablet} {
    gap: 60px;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;

  ${media.tablet} {
    gap: 21px;
  }
`;

export const IconInstagram = styled(IcInsta)`
  width: 34px;
  height: 34px;
  cursor: pointer;

  ${media.tablet} {
    width: 22.667px;
    height: 22.667px;
  }
`;

export const TextContainer = styled.div``;

export const Text = styled.div<{ $isBold?: boolean }>`
  color: ${theme.colors.paleBlue};
  font-family: 'Pretendard';
  font-size: 15px;
  font-weight: ${({ $isBold }) => ($isBold ? 700 : 300)};
  line-height: 146.667%;
  letter-spacing: -0.375px;

  ${media.tablet} {
    font-size: 10px;
    letter-spacing: -0.25px;
  }
`;

export const BottomContainer = styled.div`
  color: ${theme.colors.subGray};
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 500;
  line-height: 170%;

  ${media.tablet} {
    font-size: 10.667px;
  }
`;
