'use client';

import { ThemeProvider } from '@emotion/react';
import { media, theme } from '@/styles/theme';
import EmotionRegistry from '@/lib/emotionRegistry';
import GlobalStyles from '@/styles/globalStyles';
import Image from 'next/image';
import styled from '@emotion/styled';
import bgBackground from '@/assets/background/bg-background.svg?url';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <EmotionRegistry>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Container>
          <BackgroundImage
            src={bgBackground}
            alt="background"
            fill
            style={{ objectFit: 'cover', objectPosition: 'top' }}
            priority
          />
          <Overlay>{children}</Overlay>
        </Container>
      </ThemeProvider>
    </EmotionRegistry>
  );
}

const Container = styled.div`
  position: relative;
  max-height: 100dvh;
  overflow-y: scroll;
`;

const BackgroundImage = styled(Image)`
  position: fixed !important;
  top: 0;
  left: 0;
  width: 100%;
  height: 100dvh;
  z-index: 0;
`;

const Overlay = styled.div`
  position: relative;
  z-index: 1;
  padding-top: 84px;

  ${media.tablet} {
    padding-top: 64px;
  }

  ${media.mobile} {
    padding-top: 50px;
  }
`;
