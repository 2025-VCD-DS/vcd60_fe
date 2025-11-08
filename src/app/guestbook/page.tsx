'use client';

import React, { useEffect, useState } from 'react';
import * as S from '@/app/guestbook/pageStyle';
import TopContainer from '@/app/guestbook/components/TopContainer';
import ContentBox from '@/app/guestbook/components/ContentBox';
import WriteModal from '@/app/guestbook/components/WriteModal';
import {
  getGuestbook,
  searchGuestbook,
  createGuestbook,
  GuestbookItem,
  GuestbookListResponse,
} from '@/lib/api/guestbook';

/**
 * @component GuestbookPage
 *
 * @description
 * 방명록 전체 조회, 검색, 작성 기능을 담당하는 메인 페이지 컴포넌트입니다.
 * - 초기 렌더링 시 전체 방명록 데이터를 불러옵니다.
 * - 사용자가 입력한 키워드로 방명록을 검색할 수 있습니다.
 * - 새로운 방명록 작성 시 모달 창을 통해 작성할 수 있습니다.
 *
 * @returns {JSX.Element} 방명록 페이지 UI를 반환합니다.
 *
 * @example
 * ```tsx
 * <GuestbookPage />
 * ```
 *
 * @author 목소연
 */
export default function GuestbookPage() {
  const [guestbooks, setGuestbooks] = useState<GuestbookItem[]>([]);
  const [keyword, setKeyword] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 방명록 초기 조회
  const fetchGuestbooks = async () => {
    try {
      const data: GuestbookListResponse = await getGuestbook();
      setGuestbooks(data.guestbooks);
    } catch (err) {
      console.error(err);
    }
  };

  // 검색
  const handleSearch = async () => {
    if (!keyword.trim()) {
      fetchGuestbooks();
      return;
    }

    try {
      const data: GuestbookListResponse = await searchGuestbook(keyword);
      setGuestbooks(data.guestbooks);
    } catch (err) {
      console.error(err);
    }
  };

  // 방명록 작성
  const handleCreate = async (author: string, recipient: string, content: string) => {
    if (!author || !recipient || !content) return alert('모든 항목을 입력해주세요');
    if (author.length > 10 || recipient.length > 10) {
      alert('작성자와 받는이는 각각 10자 이내로 입력해주세요.');
      return;
    }
    if (content.length > 150) {
      alert('내용은 150자 이내로 입력해주세요.');
      return;
    }
    try {
      const newEntry = await createGuestbook({ author, recipient, content });
      setGuestbooks((prev) => [newEntry, ...prev]);
      setIsModalOpen(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchGuestbooks();
  }, []);

  return (
    <S.Container>
      <TopContainer onOpenModal={() => setIsModalOpen(true)} />
      <S.SubContainer>
        <S.SearchContainer>
          <input
            type="text"
            placeholder="Search"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSearch();
              }
            }}
          />
          <button onClick={handleSearch}>Search</button>
        </S.SearchContainer>
        <S.ListContainer>
          {guestbooks.length === 0 ? (
            <p>방명록이 없습니다.</p>
          ) : (
            guestbooks.map((gb, index) => <ContentBox key={gb.id} gb={gb} index={index} />)
          )}
        </S.ListContainer>
        {isModalOpen && <WriteModal onClose={() => setIsModalOpen(false)} onSubmit={handleCreate} />}
      </S.SubContainer>
    </S.Container>
  );
}
