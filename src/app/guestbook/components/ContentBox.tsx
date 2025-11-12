import React from 'react';
import * as S from '@/app/guestbook/components/contentBoxStyle';
import { GuestbookItem } from '@/lib/api/guestbook';

interface ContentBoxProps {
  gb: GuestbookItem;
  index: number;
}

/**
 * @component ContentBox
 *
 * @description
 * 방명록 한 항목(작성자, 수신자, 내용)을 표시하는 컴포넌트입니다.
 * - index 값에 따라 배경색 스타일이 번갈아 적용됩니다.
 * - `GuestbookPage`의 방명록 리스트 내에서 반복 렌더링됩니다.
 *
 * @param {GuestbookItem} gb - 방명록 항목 데이터 (작성자, 수신자, 내용 포함)
 * @param {number} index - 리스트 내 항목의 순서 (짝/홀에 따라 스타일 변경)
 *
 * @returns {JSX.Element} 방명록 단일 항목 UI를 반환합니다.
 *
 * @example
 * ```tsx
 * <ContentBox gb={{ id: 1, author: '작성자', recipient: '받는 사람', content: '방명록 내용' }} index={0} />
 * ```
 *
 * @note
 * `isPrimary` prop은 짝수 인덱스일 때 true로 설정되어 스타일이 다르게 적용됩니다.
 *
 * @author 목소연
 */
export default function ContentBox({ gb, index }: ContentBoxProps) {
  const formattedContent = gb.content.split('\n');

  return (
    <S.Box isPrimary={index % 2 === 0}>
      <S.Name>
        <S.Strong>To. </S.Strong>
        {gb.recipient}
      </S.Name>
      <S.Content>
        {formattedContent.map((line, i) => (
          <React.Fragment key={i}>
            {line}
            {i !== formattedContent.length - 1 && <br />}
          </React.Fragment>
        ))}
      </S.Content>
      <S.Name>
        <S.Strong>From. </S.Strong>
        {gb.author}
      </S.Name>
    </S.Box>
  );
}
