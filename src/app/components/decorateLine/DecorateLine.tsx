/**
 * @component DecorateLine
 *
 * @returns {JSX.Element} 장식 라인 컴포넌트
 *
 * @example
 * <DecorateLine />
 *
 * @note
 * - 전체 너비에 맞게 핑크색과 검정색 라인이 표시됩니다.
 *
 * @author 김서윤
 */

import * as S from '@/app/components/decorateLine/decorateLineStyle';

export default function DecorateLine() {
  return (
    <S.Container>
      <S.PinkLine />
      <S.SemiLine />
    </S.Container>
  );
}
