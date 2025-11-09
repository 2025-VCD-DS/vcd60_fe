import styled from '@emotion/styled';
import { media, theme } from '@/styles/theme';

export const TopContainer = styled.div`
  width: 100%;
  padding: 35px clamp(50px, 6vw, 120px);
  position: relative;
  display: flex;
  align-items: end;
  gap: 30px;
  overflow: hidden;

  ${media.pc} {
    min-height: 370px;
  }

  ${media.tablet} {
    min-height: 270px;
  }

  ${media.mobile} {
    padding: 20px;
    min-height: 170px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 3;

  ${media.pc} {
    gap: 20px;
  }
`;

export const Title = styled.div`
  color: ${theme.colors.primary};
  font-family: Pretendard;
  font-weight: 700;

  ${media.pc} {
    font-size: 100px;
    line-height: 71px;
  }

  ${media.tablet} {
    font-size: 60px;
  }

  ${media.mobile} {
    font-size: 40px;
  }
`;

export const SubTitle = styled.div`
  color: ${theme.colors.primary};
  font-family: Pretendard;
  font-weight: 400;

  ${media.pc} {
    font-size: 50px;
    line-height: 71px;
  }

  ${media.tablet} {
    font-size: 30px;
    line-height: 41px;
    margin-bottom: 8px;
  }

  ${media.mobile} {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 8px;
  }
`;

export const Button = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 16px;
  border: 1px solid ${theme.colors.primary};
  background: ${theme.colors.gray};
  color: ${theme.colors.primary};
  text-align: center;
  font-family: Pretendard;
  font-weight: 700;
  z-index: 3;
  cursor: pointer;

  ${media.pc} {
    width: 194px;
    padding: 12px 32px;
    margin-bottom: 18px;
    font-size: 20px;
    line-height: 24px;
  }

  ${media.tablet} {
    width: 142px;
    padding: 8px 20px;
    margin-bottom: 18px;
    font-size: 16px;
    line-height: 24px;
  }

  ${media.mobile} {
    width: 110px;
    padding: 5px 12px;
    margin-bottom: 18px;
    font-size: 14px;
  }
`;

export const Icon = styled.img`
  width: 28px;
  height: 28px;

  ${media.tablet} {
    width: 20px;
    height: 20px;
  }

  ${media.mobile} {
    width: 16px;
    height: 16px;
  }
`;

export const Image = styled.img`
  position: absolute;

  ${media.pc} {
    width: 88%;
    max-width: 1430px;
    height: auto;
    bottom: 60px;
    right: -210px;
  }

  ${media.tablet} {
    width: 78%;
    max-width: 724px;
    height: auto;
    bottom: 60px;
    right: -76px;
  }

  ${media.mobile} {
    width: 80%;
    max-width: 390px;
    height: auto;
    right: -60px;
  }
`;

export const CreateContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 2rem;

  input,
  textarea {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border-radius: 4px;
    border: 1px solid #ccc;
  }

  textarea {
    resize: vertical;
    min-height: 80px;
  }

  button {
    align-self: flex-start;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    background-color: #2196f3;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #1976d2;
    }
  }
`;
