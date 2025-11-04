'use client';

import { ThemeProvider } from '@emotion/react';
import { theme } from '@/styles/theme';
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
          <Image
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
  min-height: 100dvh;
`;

const Overlay = styled.div`
  position: relative;
  z-index: 1;
`;
