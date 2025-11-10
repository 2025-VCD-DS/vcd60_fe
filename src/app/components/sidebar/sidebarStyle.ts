import styled from '@emotion/styled';
import { theme } from '@/styles/theme';
import BtClose from '@/assets/button/bt-close.svg';

export const Overlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100dvh;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transition:
    opacity 300ms ease,
    visibility 300ms ease;
  z-index: 999;
`;

export const Container = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 60%;
  height: 100dvh;
  background-color: ${theme.colors.black70};
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 300ms ease;
  z-index: 1000;

  @media (max-width: 280px) {
    width: 100%;
  }
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 0 20px;
`;

export const BtnClose = styled(BtClose)`
  width: 28px;
  height: 28px;
  cursor: pointer;
`;

export const ShortcutContainer = styled.div`
  padding: 15px 26px;
`;

export const ShortcutItems = styled.div`
  padding: 5px 0;
  display: flex;
  flex-direction: column;
  gap: 45px;
`;
