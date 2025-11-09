/**
 * @component InitialBox
 *
 * @param {string} text - 표시할 텍스트 (초성 또는 'All Designers')
 * @param {boolean} [selected=false] - 선택 여부
 * @param {() => void} [onClick] - 클릭 이벤트 핸들러
 *
 * @returns {JSX.Element} 초성 필터 박스 컴포넌트
 *
 * @example
 * <InitialBox text="ㄱ" selected={true} onClick={() => handleClick('ㄱ')} />
 * <InitialBox text="All Designers" onClick={handleAllClick} />
 *
 * @note
 * - 텍스트 길이가 3자를 초과하면 스타일이 자동으로 조정됩니다.
 *
 * @author 김서윤
 */

import * as S from '@/app/designers/components/initialBoxStyle';

interface InitialBoxProps {
  text: string;
  selected?: boolean;
  onClick?: () => void;
}

export default function InitialBox({ text, selected = false, onClick }: InitialBoxProps) {
  const isLongText = text.length > 3;

  return (
    <S.Container selected={selected} isLongText={isLongText} onClick={onClick}>
      {text}
    </S.Container>
  );
}
