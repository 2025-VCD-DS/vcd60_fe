/**
 * 외부 API 요청 전용 fetch 함수
 *
 * NEXT_PUBLIC_GUESTBOOK_API 환경변수 기반 URL 사용
 * 클라이언트/서버 양쪽에서 호출 가능
 *
 * @param path - API 엔드포인트 경로
 * @param options - fetch 옵션
 *
 * @example
 * const guestbooks = await apiClient('/guestbook');
 * const searchResult = await apiClient('/guestbook/search?keyword=test');
 */
export async function apiClient<T>(path: string, options: RequestInit = {}): Promise<T> {
  const baseUrl = process.env.NEXT_PUBLIC_GUESTBOOK_API;
  if (!baseUrl) {
    throw new Error('NEXT_PUBLIC_GUESTBOOK_API 환경변수가 설정되어 있지 않습니다.');
  }

  const url = `${baseUrl}${path}`;
  const res = await fetch(url, { ...options, cache: 'no-store' });

  if (!res.ok) {
    throw new Error(`API 호출 실패: ${url} (${res.status})`);
  }

  return res.json();
}
