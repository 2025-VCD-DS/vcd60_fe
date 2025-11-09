'use client';

import styled from '@emotion/styled';
import { media, theme } from '@/styles/theme';
import BtBack from '@/assets/button/bt-back.svg';

export const Container = styled.div`
  padding: 65px 90px;

  ${media.tablet} {
    padding: 50px 65px;
  }

  ${media.mobile} {
    padding: 30px 20px;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;

  background-color: ${theme.colors.white};

  ${media.tablet} {
    gap: 35px;
  }

  ${media.mobile} {
    gap: 20px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const BtnBack = styled(BtBack)`
  width: 80px;
  height: auto;
  cursor: pointer;

  ${media.tablet} {
    width: 60px;
  }

  ${media.mobile} {
    width: 23px;
  }
`;

export const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 65px;

  padding: 0 65px 65px;

  ${media.tablet} {
    padding: 0 40px 50px;
    gap: 40px;
  }

  ${media.mobile} {
    padding: 0 20px 30px;
    gap: 30px;
  }
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  ${media.tablet} {
    gap: 12px;
  }

  ${media.mobile} {
    gap: 10px;
  }
`;

export const ProjectTitle = styled.div`
  color: ${theme.colors.gray};
  font-family: 'Pretendard';
  font-size: 50px;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: 2px;

  ${media.tablet} {
    font-size: 35px;
    letter-spacing: 1px;
  }

  ${media.mobile} {
    font-size: 25px;
    letter-spacing: 1px;
  }
`;

export const ProjectDesigner = styled.div`
  color: ${theme.colors.black};
  font-family: 'Pretendard';
  font-size: 20px;
  font-weight: 300;
  line-height: 180%;

  ${media.tablet} {
    font-size: 15px;
  }

  ${media.mobile} {
    font-size: 12px;
  }
`;

export const ProjectContent = styled.div`
  width: 80%;

  color: ${theme.colors.black};
  font-family: 'Pretendard';
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  line-height: 200%;

  ${media.tablet} {
    font-size: 15px;
    line-height: 160%;
  }

  ${media.mobile} {
    width: 90%;

    font-size: 12px;
    font-weight: 500;
    line-height: 140%;
  }
`;

export const ProjectImg = styled.img`
  width: 100%;
  height: auto;
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  ${media.tablet} {
    gap: 14px;
  }

  ${media.mobile} {
    gap: 12px;
  }
`;

export const ProfileImage = styled.img`
  width: 280px;
  height: auto;

  ${media.tablet} {
    width: 200px;
  }

  ${media.mobile} {
    width: 150px;
  }
`;

export const DesignerName = styled.div`
  color: ${theme.colors.black};
  font-family: 'Pretendard';
  font-size: 22px;
  font-weight: 600;
  line-height: 140%;

  ${media.tablet} {
    font-size: 18px;
  }

  ${media.mobile} {
    font-size: 16px;
  }
`;

export const DesignerTitle = styled.div`
  color: ${theme.colors.black};
  font-family: 'Pretendard';
  font-size: 17px;
  font-weight: 600;

  ${media.tablet} {
    font-size: 15px;
  }

  ${media.mobile} {
    font-size: 13px;
  }
`;

export const DesignerContact = styled.div`
  color: ${theme.colors.black};
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 400;
  line-height: 180%;

  ${media.tablet} {
    font-size: 14px;
  }

  ${media.mobile} {
    font-size: 12px;
  }
`;
