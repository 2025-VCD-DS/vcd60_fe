/**
 * @component Shortcut
 *
 * @param {string} label - 바로가기 메뉴에 표시될 텍스트
 * @param {string} path - 이동할 경로
 *
 * @returns {JSX.Element} 클릭 가능한 네비게이션 아이템
 *
 * @example
 * <Shortcut label="HOME" path="/" />
 *
 * @note
 * - 현재 경로와 일치하면 active 상태로 표시됩니다.
 * - hover 시 배경색이 primary 색상으로 변경됩니다.
 *
 * @author 김서윤
 */

'use client';

import { useRouter, usePathname } from 'next/navigation';
import * as S from '@/app/components/shortcut/shortcutStyle';

interface ShortcutProps {
  label: string;
  path: string;
}

export default function Shortcut({ label, path }: ShortcutProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigate = () => {
    router.push(path);
  };

  return (
    <S.Container onClick={handleNavigate} $isActive={pathname === path}>
      {label}
    </S.Container>
  );
}
