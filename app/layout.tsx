import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from 'next/dynamic';

// Client-side only components to prevent hydration errors
const CustomCursor = dynamic(() => import("@/components/CustomCursor"), { ssr: false });

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "theAurge | Cinematic Brand Assembly",
  description: "High-end visual storytelling and brand engineering.",
};

import PageWrapper from "@/components/PageWrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark bg-black">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <div className="noise-overlay" />
        <CustomCursor />
        <PageWrapper>
          {children}
        </PageWrapper>
      </body>
    </html>
  );
}
