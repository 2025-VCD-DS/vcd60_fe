import styled from '@emotion/styled';
import { media, theme } from '@/styles/theme';
import BtMore from '@/assets/button/bt-more.svg';

export const Container = styled.div`
  width: 100%;
  overflow-x: scroll;
  border-top: 2px solid ${theme.colors.black};
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 80px;

  ${media.tablet} {
    padding: 15px 0;
    gap: 40px;
  }

  ${media.mobile} {
    flex-direction: column;
    align-items: flex-start;
    padding: 9px 0;
    gap: 5px;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  gap: 50px;

  ${media.tablet} {
    gap: 30px;
  }

  ${media.mobile} {
    width: 100%;
    gap: 10px;
  }
`;

export const NameText = styled.div`
  color: ${theme.colors.black};
  font-family: 'Inter';
  font-size: 24px;
  font-weight: 600;
  line-height: 148%;
  min-width: fit-content;

  ${media.tablet} {
    font-size: 18px;
  }

  ${media.mobile} {
    font-size: 12px;
  }
`;

export const ProfileImage = styled.div`
  min-width: 9vw;
  width: 9vw;
  aspect-ratio: 207 / 290;
  height: auto;
  background-color: ${theme.colors.subGray};
  /* object-fit: cover; */

  ${media.mobile} {
    width: 125px;
  }
`;

export const RowContainer = styled.div`
  display: flex;
  gap: 25px;

  ${media.tablet} {
    gap: 18px;
  }

  ${media.mobile} {
    gap: 10px;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  color: ${theme.colors.black};
  font-family: 'Pretendard';
  font-size: 19px;

  ${media.tablet} {
    gap: 15px;
    font-size: 13px;
  }

  ${media.mobile} {
    gap: 12px;
    font-size: 11px;
  }
`;

export const BoldText = styled.div`
  font-weight: 600;
  min-width: fit-content;
`;

export const RegularText = styled.div`
  font-weight: 300;
  min-width: fit-content;
`;

export const MidContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-right: 10px;
`;

export const BtnMore = styled(BtMore, {
  shouldForwardProp: (prop) => !prop.startsWith('$'),
})<{ $isOpen?: boolean }>`
  width: 8%;
  height: auto;
  cursor: pointer;
  display: none;
  transition: transform 300ms ease;

  ${media.mobile} {
    display: block;
    transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  }
`;

export const RightContainer = styled.div<{ $isOpen?: boolean }>`
  display: flex;
  gap: 40px;

  ${media.tablet} {
    gap: 30px;
  }

  ${media.mobile} {
    padding-left: 51.14px;
    gap: 12px;
    display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  }
`;

export const ProjectCard = styled.div<{ $isEmpty?: boolean }>`
  display: flex;
  gap: 25px;
  ${({ $isEmpty }) => $isEmpty && 'opacity: 0;'}

  ${media.tablet} {
    gap: 18px;
  }

  ${media.mobile} {
    gap: 0;
    ${({ $isEmpty }) => $isEmpty && 'display: none;'}
  }
`;

export const ProjectLabel = styled.div`
  font-weight: 600;
  min-width: fit-content;

  ${media.mobile} {
    display: none;
  }
`;

export const ProjectInner = styled.div<{ $isEmpty?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 13px;
  width: 10.5vw;
  cursor: pointer;

  ${media.tablet} {
    gap: 9.5px;
  }

  ${media.mobile} {
    width: 100px;
    gap: 5px;
  }
`;

export const ProjectImage = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  height: auto;
  background-color: ${theme.colors.subGray};
  /* object-fit: cover; */
`;

export const ProjectName = styled.div`
  width: 100%;
  color: ${theme.colors.gray};
  font-family: 'Pretendard';
  font-size: 18px;
  font-weight: 600;

  ${media.tablet} {
    font-size: 12px;
  }

  ${media.mobile} {
    font-size: 13px;
  }
`;
