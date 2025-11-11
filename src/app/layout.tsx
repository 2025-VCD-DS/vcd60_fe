import type { Metadata } from 'next';
import Providers from '@/app/providers/Provider';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import ClientLoader from '@/app/components/ClientLoader';
import ClearLocalStorageOnNavigate from '@/lib/ClearLocalStorageOnNavigate';
import ScrollToTop from '@/lib/ScrollToTop';

export const metadata: Metadata = {
  title: 'DUKSUNG VCD 2025 졸업전시 | The Rough Sektch on the Ground',
  description: '덕성여자대학교 시각디자인전공 제60회 졸업전시회',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" type="image/png" href="/favicons/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicons/favicon.svg" />
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
      </head>
      <body>
        <Providers>
          <ClientLoader>
            <ClearLocalStorageOnNavigate />
            <ScrollToTop />
            <Header />
            <main>{children}</main>
            <Footer />
          </ClientLoader>
        </Providers>
      </body>
    </html>
  );
}
