import styled from '@emotion/styled';
import { media, theme } from '@/styles/theme';

export const Box = styled.div<{ isPrimary: boolean }>`
  ${media.pc} {
    width: clamp(410px, calc(497 * 100vw / 1905), 497px);
    padding: clamp(10px, calc(23 * 100vw / 1905), 23px) clamp(12px, calc(28 * 100vw / 1905), 28px);
  }

  ${media.tablet} {
    width: clamp(250px, calc(400 * 100vw / 1024), 400px);
    padding: clamp(10px, calc(20 * 100vw / 1024), 20px) clamp(12px, calc(20 * 100vw / 1024), 20px);
  }

  ${media.mobile} {
    width: clamp(353px, calc(372 * 100vw / 767), 372px);
    padding: clamp(15px, calc(20 * 100vw / 767), 20px) clamp(12px, calc(20 * 100vw / 1024), 20px);
  }

  border-radius: 2px;
  background-color: ${({ isPrimary }) => (isPrimary ? '#E4007F' : '#F19EC2')};
  transition: all 0.3s ease;
`;

export const Name = styled.span`
  color: ${theme.colors.black};
  font-family: Pretendard;
  font-weight: 600;
  line-height: 19.75px;
  letter-spacing: -0.494px;

  @media (max-width: 1790px) {
    font-size: 18px;
  }

  ${media.pc} {
    font-size: 20px;
  }

  @media (max-width: 1790px) {
    font-size: 16px;
  }

  ${media.tablet} {
    font-size: 16px;
  }

  ${media.tablet} {
    font-size: 14px;
  }
`;

export const Strong = styled.span`
  color: rgba(255, 255, 255, 0.5);
`;

export const Content = styled.div`
  @media (max-width: 1790px) {
    font-size: 16px;
  }

  ${media.pc} {
    min-height: clamp(178px, calc(233 * 100vw / 1905), 233px);
    padding: clamp(23px, calc(32 * 100vw / 1905), 32px) 0;
    font-size: 18px;
  }

  ${media.tablet} {
    min-height: clamp(120px, calc(180 * 100vw / 1024), 180px);
    padding: 20px 0;
    font-size: 14px;
  }

  ${media.mobile} {
    min-height: clamp(135px, calc(180 * 100vw / 767), 140px);
    padding: 20px 0;
    font-size: 12px;
  }

  width: 100%;
  color: ${theme.colors.black};
  font-family: Pretendard;
  font-style: normal;
  font-weight: 600;
  line-height: 19.75px;
  letter-spacing: -0.494px;
  transition: all 0.3s ease;
`;
