'use client';

import { ThemeProvider } from '@emotion/react';
import { theme } from '@/styles/theme';
import EmotionRegistry from '@/lib/emotionRegistry';
import GlobalStyles from '@/styles/globalStyles';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <EmotionRegistry>
      <GlobalStyles />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </EmotionRegistry>
  );
}
