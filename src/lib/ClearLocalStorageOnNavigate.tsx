'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ClearLocalStorageOnNavigate() {
  const pathname = usePathname();

  useEffect(() => {
    // projects 페이지가 아닌 경우에만 localStorage 삭제
    if (pathname && !pathname.startsWith('/projects')) {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('selectedSubject');
      }
    }
  }, [pathname]);

  return null;
}
