'use client';

import { ThemeProvider } from '@emotion/react';
import { theme } from '@/styles/theme';
import EmotionRegistry from '@/lib/emotionRegistry';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <EmotionRegistry>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </EmotionRegistry>
  );
}
