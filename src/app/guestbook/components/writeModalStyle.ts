import styled from '@emotion/styled';
import { media, theme } from '@/styles/theme';

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalBox = styled.div`
  background: ${theme.colors.gray};
  color: ${theme.colors.white};
  border-radius: 10px;
  width: clamp(250px, calc(80vw), 868px);
  padding: 32px 28px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);

  ${media.mobile} {
    padding: 20px 18px;
    gap: 12px;
  }

  textarea {
    width: 100%;
    background: ${theme.colors.white};
    color: ${theme.colors.black};
    border: none;
    border-radius: 8px;
    padding: 16px 20px;
    font-family: Pretendard;
    font-size: 20px;
    font-weight: 400;
    height: 319px;
    resize: none;
    line-height: 1.4;
    overflow: hidden;
    resize: none;

    :focus {
      outline: none;
      box-shadow: none;
    }

    &::placeholder {
      color: #878c9e;
    }

    ${media.mobile} {
      font-size: 14px;
      height: 220px;
    }
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: end;

  label {
    font-family: Pretendard;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: 42px;

    ${media.mobile} {
      font-size: 16px;
      line-height: 36px;
    }
  }

  input {
    width: 100%;
    background: none;
    color: ${theme.colors.white};
    border: none;
    padding: 10px 12px 10px 5px;
    font-family: Pretendard;
    font-size: 19px;
    font-weight: 400;
    overflow: hidden;
    resize: none;

    :focus {
      outline: none;
      box-shadow: none;
    }

    &::placeholder {
      color: #878c9e;
    }

    ${media.mobile} {
      font-size: 16px;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  gap: 14px;
  margin-top: 10px;

  ${media.mobile} {
    margin-top: 0;
  }

  button {
    width: 180px;
    height: 46px;
    font-family: Pretendard;
    font-size: 20px;
    border-radius: 10px;
    border: 1px solid transparent;
    cursor: pointer;
    transition: all 0.2s ease;
    color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};

    ${media.mobile} {
      font-size: 16px;
      width: 160px;
      height: 38px;
    }

    &:first-of-type {
      background: transparent;

      &:hover {
        background: ${theme.colors.primary};
        color: ${theme.colors.white};
      }
    }

    &:last-of-type {
      background: ${theme.colors.white};

      &:hover {
        background: ${theme.colors.primary};
        color: ${theme.colors.white};
      }
    }
  }
`;
