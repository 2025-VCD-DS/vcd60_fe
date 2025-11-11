'use client';

import styled from '@emotion/styled';
import { media, theme } from '@/styles/theme';

export const Container = styled.div``;

export const BackSign = styled.img`
  width: 100%;
  height: auto;
  position: absolute;
  top: clamp(-3px, 36px - (36 - (-3)) * ((100vw - 1024px) / (1920 - 1024)), 36px);
  left: 50%;
  transform: translateX(-50%);
`;

export const WhiteContainer = styled.div`
  position: relative;
  padding-top: clamp(752px, 752px + (1000 - 752) * ((100vw - 1024px) / (1920 - 1024)), 1000px);
  padding-left: 100px;
  padding-right: 100px;

  ${media.tablet} {
    padding-top: clamp(624px, 624px + (1000 - 624) * ((100vw - 768px) / (1023 - 768)), 724px);
    padding-left: 50px;
    padding-right: 50px;
  }

  ${media.mobile} {
    padding-top: clamp(264px, calc(264px + (736 * ((100vw - 380px) / 423))), 390px);
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const Logo = styled.img`
  width: 70%;
  height: auto;
  position: absolute;
  top: 200px;
  left: 20px;

  ${media.mobile} {
    top: 78px;
    left: 10px;
  }
`;

export const LeftBox = styled.div`
  color: ${theme.colors.black};
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.9px;
  text-transform: capitalize;

  strong {
    color: ${theme.colors.primary};
    font-weight: 500;
  }

  ${media.pc} {
    font-size: 30px;
  }

  ${media.tablet} {
    font-size: 24px;
  }

  ${media.mobile} {
    font-size: 16px;
  }
`;

export const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  color: ${theme.colors.black};
  font-family: Poppins;
  font-style: normal;
  font-weight: 300;
  letter-spacing: -0.9px;
  text-transform: capitalize;

  ${media.pc} {
    margin-top: 180px;
    margin-bottom: 220px;
    font-size: 30px;
  }

  ${media.tablet} {
    margin-top: 80px;
    margin-bottom: 120px;
    font-size: 24px;
  }

  ${media.mobile} {
    margin-top: 30px;
    margin-bottom: 50px;
    font-size: 16px;
  }

  strong {
    font-weight: 700;
    &:last-of-type {
      color: ${theme.colors.primary};
    }
  }
`;

export const PosterBox = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  ${media.pc} {
    gap: 30px;
  }

  ${media.tablet} {
    gap: 20px;
  }

  ${media.mobile} {
    gap: 12px;
  }
`;

export const VideoPlayerWrapper = styled.video`
  display: block;
  object-fit: cover;

  ${media.pc} {
    --poster-width: clamp(397px, 32vw, 611px);

    width: var(--poster-width);
    height: calc(var(--poster-width) * 1.414);
  }

  ${media.tablet} {
    --poster-width: clamp(274px, 32vw, 396px);

    width: var(--poster-width);
    height: calc(var(--poster-width) * 1.414);
  }

  ${media.mobile} {
    --poster-width: calc(304px + (568 - 304) * ((100vw - 344px) / (767 - 344)));

    width: var(--poster-width);
    height: calc(var(--poster-width) * 1.414);
  }
`;

export const PosterImage = styled.div`
  background-image: url('/assets/img-main-poster.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  ${media.pc} {
    --poster-width: clamp(397px, 32vw, 611px);

    width: var(--poster-width);
    height: calc(var(--poster-width) * 1.414);
  }

  ${media.tablet} {
    --poster-width: clamp(274px, 32vw, 396px);

    width: var(--poster-width);
    height: calc(var(--poster-width) * 1.414);
  }

  ${media.mobile} {
    --poster-width: calc(304px + (568 - 304) * ((100vw - 344px) / (767 - 344)));

    width: var(--poster-width);
    height: calc(var(--poster-width) * 1.414);
  }
`;

export const BlackContainer = styled.div`
  position: relative;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000 14.35%);

  ${media.tablet} {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000 9.5%);
  }

  ${media.mobile} {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000 7.5%);
  }
`;

export const Gradient = styled.div`
  width: 100%;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(22, 22, 22, 0.77) 36.51%, #000 100%);
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  pointer-events: none;
  z-index: -1;
`;

export const CropSign = styled.img`
  width: 100%;
  height: auto;
`;

export const PinkSign = styled.img`
  width: 100%;
  height: auto;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  pointer-events: none;
  z-index: 0;
`;

export const TextArea = styled.div`
  padding: 316px 100px 300px 100px;

  ${media.tablet} {
    padding: 190px 50px 200px 50px;
  }

  ${media.mobile} {
    padding: 100px 20px 120px 20px;
  }
`;

export const Title = styled.div`
  color: ${theme.colors.primary};
  text-align: center;
  font-family: Pretendard;
  font-weight: 700;
  line-height: 40px;
  margin: 100px 0 80px 0;

  .mobile-only {
    display: none;
  }

  ${media.pc} {
    font-size: 30px;
  }

  ${media.tablet} {
    font-size: 24px;
    margin: 80px 0 50px 0;
  }

  ${media.mobile} {
    font-size: 16px;
    margin: 50px 0 20px 0;
    line-height: 20px;

    .mobile-only {
      display: block;
    }
  }
`;

export const Content = styled.div`
  color: ${theme.colors.white};
  text-align: center;
  font-family: Pretendard;
  font-weight: 500;
  line-height: 40px;

  .mobile-only {
    display: none;
  }

  ${media.pc} {
    font-size: 30px;
  }

  ${media.tablet} {
    font-size: 24px;
  }

  ${media.mobile} {
    font-size: 14px;
    line-height: 20px;

    .pc-only {
      display: none;
    }
    .mobile-only {
      display: block;
    }
  }

  @media (max-width: 370px) {
    font-size: 12px;
  }
`;

export const Credit = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  gap: 60px;
  justify-content: center;

  ${media.mobile} {
    padding-top: 30px;
  }
`;

export const Position = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 18px;
  color: ${theme.colors.white};
  font-family: Pretendard;
  font-weight: 700;
  line-height: 55px;
  letter-spacing: -0.792px;

  > div:nth-child(4) {
    margin-bottom: calc((55 + 18) * 2px);
  }

  > div:nth-child(5),
  > div:nth-child(6) {
    margin-bottom: calc((55 + 18) * 1px);
  }

  ${media.pc} {
    font-size: 30px;
  }

  ${media.tablet} {
    font-size: 24px;
  }

  ${media.mobile} {
    font-size: 14px;
    line-height: unset;
    > div:nth-child(4) {
      margin-bottom: calc((16 + 18) * 2px);
    }

    > div:nth-child(5),
    > div:nth-child(6) {
      margin-bottom: calc((16 + 18) * 1px);
    }
  }
`;

export const Person = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 18px;
  color: ${theme.colors.white};
  font-family: Pretendard;
  font-weight: 500;
  line-height: 55px;
  letter-spacing: -0.792px;

  ${media.pc} {
    font-size: 30px;
  }

  ${media.tablet} {
    font-size: 24px;
  }

  ${media.mobile} {
    font-size: 14px;
    line-height: unset;
  }
`;
