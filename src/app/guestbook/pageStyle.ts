import styled from '@emotion/styled';
import { media, theme } from '@/styles/theme';

export const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  font-family: 'Noto Sans KR', sans-serif;
  background-color: ${theme.colors.black};
`;

export const SubContainer = styled.div`
  width: 100%;
  padding: 0 clamp(50px, 6vw, 120px) 45px;

  ${media.mobile} {
    padding: 0 20px 20px;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
  align-items: center;
  border-radius: 52px;
  background-color: ${theme.colors.gray};

  ${media.pc} {
    height: 54px;
    padding: 18px 8px 18px 20px;
    margin-bottom: 45px;
  }

  ${media.tablet} {
    height: 54px;
    padding: 18px 8px 18px 20px;
    margin-bottom: 35px;
  }

  ${media.mobile} {
    height: 42px;
    padding: 10px 8px 10px 16px;
    margin-bottom: 25px;
  }

  input {
    flex: 1;
    background: none;
    border: none;
    color: ${theme.colors.white};
    font-family: Pretendard;
    font-size: 18px;
    font-weight: 400;

    :focus {
      outline: none;
      box-shadow: none;
    }

    ::placeholder {
      color: rgba(121, 121, 121, 0.7);
    }

    ${media.tablet} {
      font-size: 16px;
    }

    ${media.mobile} {
      font-size: 14px;
    }
  }

  button {
    padding: 12px 19px;
    background: ${theme.colors.black};
    border: none;
    border-radius: 43px;
    cursor: pointer;
    color: #de0184;
    text-align: center;
    font-family: Pretendard;
    font-size: 15px;
    font-weight: 500;
    line-height: 15px;
    letter-spacing: -0.494px;
    ${media.mobile} {
      padding: 9px 16px;
      font-size: 14px;
    }
  }
`;

export const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  ${media.pc} {
    gap: clamp(30px, calc(70 * 100vw / 1905), 90px);
  }

  ${media.tablet} {
    gap: 80px;
  }

  ${media.mobile} {
    gap: clamp(20px, calc(43 * 100vw / 767), 43px);
  }
`;
