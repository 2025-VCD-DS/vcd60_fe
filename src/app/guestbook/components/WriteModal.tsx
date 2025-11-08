'use client';

import React, { useState } from 'react';
import * as S from '@/app/guestbook/components/writeModalStyle';

interface WriteModalProps {
  onClose: () => void;
  onSubmit: (author: string, recipient: string, content: string) => void;
}

/**
 * @component WriteModal
 *
 * @description
 * 방명록에 새 글을 작성할 수 있는 모달 컴포넌트입니다.
 * 작성자(`From.`), 받는이(`To.`), 그리고 메시지(`content`)를 입력받아
 * `onSubmit` 콜백을 통해 상위 컴포넌트로 데이터를 전달합니다.
 *
 * @param {() => void} onClose - 모달 닫기 버튼 클릭 시 실행되는 콜백 함수
 * @param {(author: string, recipient: string, content: string) => void} onSubmit - 작성 완료 시 호출되는 콜백 함수
 *
 * @returns {JSX.Element} 방명록 작성 모달 UI를 렌더링합니다.
 *
 * @example
 * ```tsx
 * <WriteModal
 *   onClose={() => setIsModalOpen(false)}
 *   onSubmit={(author, recipient, content) => handleCreate(author, recipient, content)}
 * />
 * ```
 *
 * @note
 * - 작성자(`author`)와 받는이(`recipient`)는 최대 10자까지 입력할 수 있습니다.
 * - 메시지(`content`)는 최대 150자까지만 입력이 가능합니다.
 * - 입력 제한은 `maxLength` 속성으로 처리되며, 입력값은 로컬 state로 관리됩니다.
 * - “등록하기” 버튼 클릭 시 `onSubmit`이 호출되고, “취소하기” 버튼 클릭 시 `onClose`가 호출됩니다.
 *
 * @author 목소연
 */
export default function WriteModal({ onClose, onSubmit }: WriteModalProps) {
  const [author, setAuthor] = useState('');
  const [recipient, setRecipient] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    onSubmit(author, recipient, content);
  };

  return (
    <S.Overlay>
      <S.ModalBox>
        <S.InputContainer>
          <label>To.</label>
          <input
            maxLength={10}
            placeholder="받는이 (최대 10자)"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
          />
        </S.InputContainer>
        <textarea
          maxLength={150}
          placeholder="응원의 메시지를 작성해주세요 (150자 이내)"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <S.InputContainer>
          <label>From. </label>
          <input
            maxLength={10}
            placeholder="작성자 (최대 10자)"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </S.InputContainer>
        <S.ButtonContainer>
          <button onClick={onClose}>취소하기</button>
          <button onClick={handleSubmit}>등록하기</button>
        </S.ButtonContainer>
      </S.ModalBox>
    </S.Overlay>
  );
}
