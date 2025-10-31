'use client';

import React, { useEffect, useState } from 'react';
import * as S from '@/app/guestbook/pageStyle';
import {
  getGuestbook,
  searchGuestbook,
  createGuestbook,
  GuestbookItem,
  GuestbookListResponse,
} from '@/lib/api/guestbook';

export default function GuestbookPage() {
  const [guestbooks, setGuestbooks] = useState<GuestbookItem[]>([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [keyword, setKeyword] = useState('');
  const [author, setAuthor] = useState('');
  const [recipient, setRecipient] = useState('');
  const [content, setContent] = useState('');

  // 방명록 초기 조회
  const fetchGuestbooks = async (pageNumber = 0) => {
    try {
      const data: GuestbookListResponse = await getGuestbook(pageNumber, 6);
      setGuestbooks(data.guestbooks);
      setPage(pageNumber);
      setTotalPages(data.totalPage);
    } catch (err) {
      console.error(err);
    }
  };

  // 검색
  const handleSearch = async () => {
    try {
      const data: GuestbookListResponse = await searchGuestbook(keyword, 0, 6);
      setGuestbooks(data.guestbooks);
      setPage(0);
      setTotalPages(data.totalPage);
    } catch (err) {
      console.error(err);
    }
  };

  // 방명록 작성
  const handleCreate = async () => {
    if (!author || !recipient || !content) return alert('모든 항목을 입력해주세요');
    try {
      const newEntry = await createGuestbook({ author, recipient, content });
      setGuestbooks((prev) => [newEntry, ...prev]);
      setAuthor('');
      setRecipient('');
      setContent('');
    } catch (err) {
      console.error(err);
    }
  };

  // 페이지 이동
  const handleNextPage = () => {
    if (page + 1 < totalPages) fetchGuestbooks(page + 1);
  };
  const handlePrevPage = () => {
    if (page > 0) fetchGuestbooks(page - 1);
  };

  useEffect(() => {
    fetchGuestbooks();
  }, []);

  return (
    <S.Container>
      <h1>방명록</h1>

      {/* 검색 */}
      <S.SearchContainer>
        <input type="text" placeholder="검색어 입력" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
        <button onClick={handleSearch}>검색</button>
      </S.SearchContainer>

      {/* 방명록 작성 */}
      <S.CreateContainer>
        <input type="text" placeholder="작성자" value={author} onChange={(e) => setAuthor(e.target.value)} />
        <input type="text" placeholder="수신자" value={recipient} onChange={(e) => setRecipient(e.target.value)} />
        <textarea placeholder="내용" value={content} onChange={(e) => setContent(e.target.value)} />
        <button onClick={handleCreate}>작성</button>
      </S.CreateContainer>

      {/* 방명록 리스트 */}
      <S.ListContainer>
        {guestbooks.length === 0 ? (
          <p>방명록이 없습니다.</p>
        ) : (
          guestbooks.map((gb) => (
            <S.GuestbookItem key={gb.id}>
              <p>
                <strong>{gb.author}</strong> → <strong>{gb.recipient}</strong>
              </p>
              <p>{gb.content}</p>
              <p>{new Date(gb.createdAt).toLocaleString()}</p>
            </S.GuestbookItem>
          ))
        )}
      </S.ListContainer>

      {/* 페이지네이션 */}
      <S.Pagination>
        <button onClick={handlePrevPage} disabled={page === 0}>
          이전
        </button>
        <span>
          {page + 1} / {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={page + 1 >= totalPages}>
          다음
        </button>
      </S.Pagination>
    </S.Container>
  );
}
