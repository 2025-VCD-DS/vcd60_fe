import styled from '@emotion/styled';
import { media, theme } from '@/styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;

  width: calc(33% - 26px);

  cursor: pointer;

  ${media.tablet} {
    gap: 12px;
    width: calc(50% - 12.5px);
  }

  ${media.mobile} {
    gap: 8px;
    width: calc(50% - 8.5px);
  }
`;

export const Thumbnail = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  height: auto;
  object-fit: cover;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  ${media.tablet} {
    gap: 9px;
  }

  ${media.mobile} {
    gap: 6px;
  }
`;

export const Title = styled.div`
  width: 100%;
  color: ${theme.colors.gray};
  font-family: 'Pretendard';
  font-size: 32px;
  font-weight: 600;
  letter-spacing: 2px;

  ${media.tablet} {
    font-size: 15px;
    letter-spacing: 1.2px;
  }

  ${media.mobile} {
    font-size: 13px;
    letter-spacing: 0.6px;
  }
`;

export const Name = styled.div`
  color: ${theme.colors.gray};
  font-family: 'Pretendard';
  font-size: 22px;
  font-weight: 400;
  line-height: 135%;
  letter-spacing: -0.5px;

  ${media.tablet} {
    font-size: 13px;
    letter-spacing: -0.35px;
  }

  ${media.mobile} {
    font-size: 11px;
    letter-spacing: -0.15px;
  }
`;
