'use client';

import { usePathname } from 'next/navigation';
import { ThemeProvider } from '@emotion/react';
import { media, theme } from '@/styles/theme';
import EmotionRegistry from '@/lib/emotionRegistry';
import GlobalStyles from '@/styles/globalStyles';
import Image from 'next/image';
import styled from '@emotion/styled';
import bgBackground from '@/assets/background/bg-background.svg?url';

export default function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isGuestbook = pathname === '/guestbook';

  return (
    <EmotionRegistry>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Container $isGuestbook={isGuestbook}>
          {!isGuestbook && (
            <BackgroundImage
              src={bgBackground}
              alt="background"
              fill
              style={{ objectFit: 'cover', objectPosition: 'top' }}
              priority
            />
          )}
          <Overlay>{children}</Overlay>
        </Container>
      </ThemeProvider>
    </EmotionRegistry>
  );
}

const Container = styled.div<{ $isGuestbook: boolean }>`
  position: relative;
  max-height: 100dvh;
  overflow-y: scroll;
  /* 스크롤바 숨기기 */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
  background-color: ${({ $isGuestbook }) => ($isGuestbook ? '#000' : 'transparent')};
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
