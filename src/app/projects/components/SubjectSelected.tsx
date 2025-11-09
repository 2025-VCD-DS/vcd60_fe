/**
 * @component SubjectSelected
 *
 * @param {SubjectData} subject - 표시할 과목 데이터 (아이콘, 과목명 등)
 * @param {boolean} [selected=false] - 과목이 선택된 상태인지 여부
 * @param {() => void} [onClick] - 과목 클릭 시 실행될 콜백 함수
 *
 * @returns {JSX.Element} 과목 선택 컴포넌트
 *
 * @example
 * <SubjectSelected
 *   subject={{
 *     iconUrl: '/icon.svg',
 *     subjectRough: 'Design',
 *     subjectKor: '디자인'
 *   }}
 *   selected={true}
 *   onClick={() => console.log('subject clicked')}
 * />
 *
 * @author 김서윤
 */
import * as S from '@/app/projects/components/subjectSelectedStyle';
import { SubjectData } from '@/app/projects/constants/subjectData';

interface SubjectSelectedProps {
  subject: SubjectData;
  selected?: boolean;
  onClick?: () => void;
}

export default function SubjectSelected({ subject, selected = false, onClick }: SubjectSelectedProps) {
  return (
    <S.Container selected={selected} onClick={onClick}>
      <S.Icon src={subject.iconUrl} alt={subject.subjectRough} />
      <S.TextContainer>
        <S.BoldText>{subject.subjectRough}</S.BoldText>
        <S.RegularText>{subject.subjectKor}</S.RegularText>
      </S.TextContainer>
    </S.Container>
  );
}
