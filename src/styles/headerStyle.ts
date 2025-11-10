import styled from '@emotion/styled';
import { media, theme } from '@/styles/theme';
import LgDs from '@/assets/logo/logo-ds.svg';
import LgVcd from '@/assets/logo/logo-vcd.svg';
import BtMenu from '@/assets/button/bt-menu.svg';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 28px;
  background-color: ${theme.colors.black};
  z-index: 5;

  ${media.mobile} {
    padding: 0 20px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 30px;
  gap: 20px;
  cursor: pointer;

  ${media.tablet} {
    padding: 10px 22px;
  }

  ${media.mobile} {
    padding: 10px 0;
  }
`;

export const LogoDs = styled(LgDs)`
  width: 43.371px;
  height: 43.371px;

  ${media.tablet} {
    width: 31.42px;
    height: 31.42px;
  }

  ${media.mobile} {
    width: 30px;
    height: 30px;
  }
`;

export const LogoVcd = styled(LgVcd)`
  width: auto;
  height: 33.969px;

  ${media.tablet} {
    height: 24.609px;
  }

  ${media.mobile} {
    display: none;
  }
`;

export const ShortcutContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 24px 30px;

  ${media.tablet} {
    padding: 20.5px 22px;
  }

  ${media.mobile} {
    padding: 0;
  }
`;

export const ShortcutItems = styled.div`
  display: flex;
  gap: 70px;

  ${media.tablet} {
    gap: 62.5px;
  }

  ${media.mobile} {
    display: none;
  }
`;

export const BtnMenu = styled(BtMenu)`
  width: 28px;
  height: 28px;
  cursor: pointer;
  display: none;

  ${media.mobile} {
    display: block;
  }
`;
