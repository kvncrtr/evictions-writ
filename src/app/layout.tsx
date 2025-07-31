import { ReactNode } from "react";
import type { Metadata } from "next";
import { Space_Grotesk } from 'next/font/google';
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700',], 
  display: 'swap',
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: 'Eviction Guide',
  description: 'How to stop your eviction today.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body>{children}</body>
    </html>
  );
}