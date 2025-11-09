/**
 * @component CardBox
 *
 * @param {number} [id] - 카드의 고유 식별자
 * @param {string} [title='제목'] - 카드에 표시될 제목
 * @param {string} [name='이름'] - 카드에 표시될 이름
 * @param {string} [thumbnail] - 카드의 썸네일 이미지 URL
 * @param {() => void} [onClick] - 카드 클릭 시 실행될 콜백 함수
 *
 * @returns {JSX.Element} 프로젝트 카드 컴포넌트
 *
 * @example
 * <CardBox
 *   id={1}
 *   title="프로젝트 제목"
 *   name="작성자 이름"
 *   thumbnail="/path/to/image.jpg"
 *   onClick={() => console.log('clicked')}
 * />
 *
 * @author 김서윤
 */
import * as S from '@/app/projects/components/cardBoxStyle';

interface CardBoxProps {
  id?: number;
  title?: string;
  name?: string;
  thumbnail?: string;
  onClick?: () => void;
}

export default function CardBox({ id, title = '제목', name = '이름', thumbnail, onClick }: CardBoxProps) {
  return (
    <S.Container onClick={onClick}>
      <S.Thumbnail src={thumbnail} />
      <S.TextContainer>
        <S.Title>{title}</S.Title>
        <S.Name>{name}</S.Name>
      </S.TextContainer>
    </S.Container>
  );
}
