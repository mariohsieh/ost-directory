import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '@/styles/globals.css';
import MainFooter from '@/components/main-footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'ΩΣΤ Directory',
  description: 'Search for ΩΣΤ members and see their family tree',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang='en'
      // className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className='flex flex-col'>
        {children}
        <MainFooter></MainFooter>
      </body>
    </html>
  );
}
