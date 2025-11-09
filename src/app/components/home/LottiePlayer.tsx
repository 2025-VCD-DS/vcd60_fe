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
  width: 50%;
  height: auto;
  position: absolute;
  top: 230px;
  right: 60px;
  pointer-events: none;

  ${media.mobile} {
    top: 80px;
    right: 10px;
  }
`;

export default function LottiePlayer({ src, autoplay = true, loop = true }: LottiePlayerProps) {
  return <PlayerWrapper autoplay={autoplay} loop={loop} src={src} />;
}
