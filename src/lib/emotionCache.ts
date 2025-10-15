/**
 * @function createEmotionCache - Emotion 클라이언트/서버 캐시 생성 유틸 함수
 *
 * 이 함수는 Emotion의 Cache를 생성하여 SSR과 CSR 환경에서
 * 스타일 우선순위를 유지하고 스타일 깨짐 문제를 방지합니다.
 *
 * @returns {EmotionCache} 생성된 Emotion 캐시 객체
 *
 * @note
 * - `key: "css"` 옵션은 생성되는 <style> 태그의 data-emotion key를 지정합니다.
 * - `prepend: true` 옵션은 생성된 스타일을 head의 최상단에 삽입하여
 *   다른 스타일보다 우선 적용되도록 합니다.
 *
 * @author 목소연
 **/

import createCache from '@emotion/cache';

export const createEmotionCache = () => {
  return createCache({ key: 'css', prepend: true });
};
