import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer';
import Cta from '@/components/Cta';
import Head from 'next/head';
import Header from '@/components/global/Header';

const manropeSans = Manrope({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Golden Child Promotions Publishing',
  description: 'Bringing Stories to Life, One Page at a Time.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/public/images/gcpp_logo.png" sizes="any" />
      </Head>
      <body className={`${manropeSans.className} antialiased`}>
        <Header />
        {children}
        <Cta />
        <Footer />
      </body>
    </html>
  );
}
