'use client';

/**
 * @component EmotionRegistry - Next.js App Router에서 Emotion SSR 캐시 및 스타일 추출을 관리하는 컴포넌트
 *
 * 이 컴포넌트는 클라이언트 사이드와 서버 사이드에서 Emotion 스타일을 올바르게 처리합니다.
 * `useServerInsertedHTML`을 사용하여 SSR 시 초기 HTML에 Critical CSS를 주입하고,
 * `CacheProvider`를 통해 Emotion 캐시를 자식 컴포넌트에 제공합니다.
 *
 * @param children - EmotionCache 및 SSR 스타일이 적용될 자식 컴포넌트
 *
 * @note
 * - 이 컴포넌트는 'use client' 모드에서만 사용 가능합니다.
 * - App Router 환경에서 SSR과 CSR 모두에 대응하도록 설계되었습니다.
 *
 * @author 목소연
 **/

import { CacheProvider } from '@emotion/react';
import { useServerInsertedHTML } from 'next/navigation';
import { createEmotionCache } from '@/lib/emotionCache';
import createEmotionServer from '@emotion/server/create-instance';
import { useState, ReactNode } from 'react';

export default function EmotionRegistry({ children }: { children: ReactNode }) {
  const [cache] = useState(() => createEmotionCache());
  const { extractCriticalToChunks, constructStyleTagsFromChunks } = createEmotionServer(cache);

  useServerInsertedHTML(() => {
    const chunks = extractCriticalToChunks('');
    return (
      <style
        data-emotion={`${cache.key} ${chunks.styles.map((style) => style.key).join(' ')}`}
        dangerouslySetInnerHTML={{ __html: constructStyleTagsFromChunks(chunks) }}
      />
    );
  });

  return <CacheProvider value={cache}>{children}</CacheProvider>;
}
