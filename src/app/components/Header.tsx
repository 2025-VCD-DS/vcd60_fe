/**
 * @component Header
 *
 * @returns {JSX.Element} 로고와 네비게이션 메뉴를 포함한 헤더
 *
 * @example
 * <Header />
 *
 * @note
 * - 로고 클릭 시 홈(/)으로 이동합니다.
 * - 모바일(767px 이하)에서는 메뉴 버튼이 표시되고, 그 외에는 바로가기 메뉴가 표시됩니다.
 * - 바로가기 메뉴: HOME, PROJECTS, DESIGNERS, GUEST BOOK
 *
 * @author 김서윤
 */

'use client';

import { useRouter } from 'next/navigation';
import * as S from '@/styles/headerStyle';
import Shortcut from '@/app/components/shortcut/Shortcut';

const SHORTCUT_ITEMS = [
  { label: 'HOME', path: '/' },
  { label: 'PROJECTS', path: '/projects' },
  { label: 'DESIGNERS', path: '/designers' },
  { label: 'GUEST BOOK', path: '/guestbook' },
];

export default function Header() {
  const router = useRouter();

  const handleLogoClick = () => {
    router.push('/');
  };

  return (
    <S.Container>
      <S.LogoContainer onClick={handleLogoClick}>
        <S.LogoDs />
        <S.LogoVcd />
      </S.LogoContainer>
      <S.ShortcutContainer>
        <S.ShortcutItems>
          {SHORTCUT_ITEMS.map((item) => (
            <Shortcut key={item.path} label={item.label} path={item.path} />
          ))}
        </S.ShortcutItems>
        <S.BtnMenu />
      </S.ShortcutContainer>
    </S.Container>
  );
}
