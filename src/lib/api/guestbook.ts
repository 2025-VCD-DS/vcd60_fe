import { apiClient } from './apiClient';

/**
 * 방명록 단일 항목 타입
 */
export interface GuestbookItem {
  id: number;
  author: string;
  recipient: string;
  content: string;
  createdAt: string;
}

/**
 * 방명록 리스트 응답 타입
 */
export interface GuestbookListResponse {
  guestbooks: GuestbookItem[];
  listSize: number;
  totalPage: number;
  totalElements: number;
  isFirst: boolean;
  isLast: boolean;
}

/**
 * 방명록 API 공통 응답 타입
 */
interface ApiResponse<T> {
  isSuccess: boolean;
  code: string;
  message: string;
  result: T;
}

/**
 * 방명록 조회 (GET /guestbook)
 *
 * @param page - 조회할 페이지 (0부터 시작)
 * @param size - 페이지 크기 (기본 6)
 * @returns {Promise<GuestbookListResponse>}
 */
export async function getGuestbook(page = 0, size = 6): Promise<GuestbookListResponse> {
  const response: ApiResponse<GuestbookListResponse> = await apiClient(`/guestbook?page=${page}&size=${size}`);
  return response.result;
}

/**
 * 방명록 검색 (GET /guestbook/search)
 *
 * @param keyword - 검색 키워드
 * @param page - 조회할 페이지 (0부터 시작)
 * @param size - 페이지 크기 (기본 6)
 * @returns {Promise<GuestbookListResponse>}
 */
export async function searchGuestbook(keyword: string, page = 0, size = 6): Promise<GuestbookListResponse> {
  const response: ApiResponse<GuestbookListResponse> = await apiClient(
    `/guestbook/search?keyword=${encodeURIComponent(keyword)}&page=${page}&size=${size}`,
  );
  return response.result;
}

/**
 * 방명록 작성 (POST /guestbook/create)
 *
 * @param entry - 작성자, 수신자, 내용
 * @returns {Promise<GuestbookItem>} 생성된 방명록 항목
 */
export async function createGuestbook(entry: {
  author: string;
  recipient: string;
  content: string;
}): Promise<GuestbookItem> {
  const response: ApiResponse<GuestbookItem> = await apiClient('/guestbook/create', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(entry),
  });

  return response.result;
}
