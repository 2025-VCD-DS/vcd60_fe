'use client';

import { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import loadingAnimation from '@/assets/lottie/raugh.lottie.json';

export default function ClientLoader({ children }: { children: React.ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1800);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) {
    return (
      <div
        style={{
          backgroundColor: '#fff',
          width: '100vw',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
        }}>
        <Lottie animationData={loadingAnimation} loop />
      </div>
    );
  }

  return <>{children}</>;
}
