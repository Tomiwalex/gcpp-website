import type { Metadata } from "next";
import { Manrope, } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";

const manropeSans = Manrope({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});



export const metadata: Metadata = {
  title: "Golden Child Promotions Publishing",
  description: "Bringing Stories to Life, One Page at a Time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manropeSans.className} antialiased`}>
        {children}
        <Cta/>
        <Footer/>
      </body>
    </html>
  );
}
