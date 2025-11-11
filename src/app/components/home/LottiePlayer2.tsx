'use client';

import { Player } from '@lottiefiles/react-lottie-player';
import styled from '@emotion/styled';
import { media } from '@/styles/theme';

interface LottiePlayerProps {
  src: object;
  autoplay?: boolean;
  loop?: boolean;
}

const PlayerWrapper = styled(Player)`
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

export default function LottiePlayer({ src, autoplay = true, loop = true }: LottiePlayerProps) {
  return <PlayerWrapper autoplay={autoplay} loop={loop} src={src} />;
}
