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
 * - 바로가기 메뉴: HOME, PROJECTS, DESIGNERS, GUEST BOOK (constants/shortcuts에서 관리)
 * - 메뉴 버튼 클릭 시 오른쪽에서 Sidebar가 슬라이드되며 나타납니다.
 * - Sidebar의 Overlay, X 아이콘, 또는 메뉴 항목 클릭 시 Sidebar가 닫힙니다.
 *
 * @author 김서윤
 */

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import * as S from '@/styles/headerStyle';
import Shortcut from '@/app/components/shortcut/Shortcut';
import Sidebar from '@/app/components/sidebar/Sidebar';
import { SHORTCUT_ITEMS } from '@/constants/shortcuts';

export default function Header() {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogoClick = () => {
    router.push('/');
  };

  const handleMenuClick = () => {
    setIsSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
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
          <S.BtnMenu onClick={handleMenuClick} />
        </S.ShortcutContainer>
      </S.Container>
      <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />
    </>
  );
}
