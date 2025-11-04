import styled from '@emotion/styled';
import { media, theme } from '@/styles/theme';

export const Container = styled.div<{ $isActive: boolean }>`
  width: fit-content;
  font-family: 'Poppins';
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -0.48px;
  cursor: pointer;
  transition: 300ms ease;
  color: ${theme.colors.white};
  background-color: ${({ $isActive }) => ($isActive ? theme.colors.primary : 'transparent')};

  &:hover {
    background-color: ${theme.colors.primary};
  }

  ${media.tablet || media.mobile} {
    font-size: 15px;
    letter-spacing: -0.3px;
  }
`;
