/**
 * @component Sidebar
 *
 * @param {boolean} isOpen - Sidebar 열림/닫힘 상태
 * @param {() => void} onClose - Sidebar 닫기 핸들러
 *
 * @returns {JSX.Element} 오른쪽에서 슬라이드되는 모바일용 사이드바
 *
 * @example
 * <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
 *
 * @note
 * - 너비: 280px (화면이 280px 이하일 경우 100%)
 * - 바로가기 메뉴: HOME, PROJECTS, DESIGNERS, GUEST BOOK (constants/shortcuts에서 관리)
 * - Overlay, X 아이콘 클릭 시 닫힙니다.
 * - 메뉴 항목 클릭 시 페이지 이동 후 자동으로 닫힙니다.
 * - 오른쪽에서 왼쪽으로 슬라이드 애니메이션 (300ms)
 *
 * @author 김서윤
 */

import * as S from '@/app/components/sidebar/sidebarStyle';
import Shortcut from '@/app/components/shortcut/Shortcut';
import { SHORTCUT_ITEMS } from '@/constants/shortcuts';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const handleShortcutClick = () => {
    onClose();
  };

  return (
    <>
      <S.Overlay isOpen={isOpen} onClick={onClose} />
      <S.Container isOpen={isOpen}>
        <S.TopContainer>
          <S.BtnClose onClick={onClose} />
        </S.TopContainer>
        <S.ShortcutContainer>
          <S.ShortcutItems>
            {SHORTCUT_ITEMS.map((item) => (
              <div key={item.path} onClick={handleShortcutClick}>
                <Shortcut label={item.label} path={item.path} />
              </div>
            ))}
          </S.ShortcutItems>
        </S.ShortcutContainer>
      </S.Container>
    </>
  );
}
