import styled from '@emotion/styled';
import { media, theme } from '@/styles/theme';

interface selectedProps {
  selected?: boolean;
  isLongText?: boolean;
}

export const Container = styled.div<selectedProps>`
  padding: 10px 12px;
  border: 1px solid ${theme.colors.black};
  cursor: pointer;
  width: fit-content;

  color: ${theme.colors.mainPink};
  font-family: 'Pretendard';
  font-size: 30px;
  font-weight: 400;

  background-color: ${(props) => (props.selected ? theme.colors.black : theme.colors.white)};

  ${(props) =>
    props.isLongText &&
    `
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `}

  ${media.tablet} {
    padding: 8px 10px;
    font-size: 20px;
  }

  ${media.mobile} {
    padding: 2px 3px;
    font-size: 18px;
  }
`;
