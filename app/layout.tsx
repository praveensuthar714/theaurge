import React from "react";
import "./globals.css";
import PageWrapper from "@/components/PageWrapper";
import { metadata, inter } from "./layout-metadata";
import { Preloader, GlobalBackground, CustomCursor } from "@/components/ClientComponents";

export { metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark bg-black">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <Preloader />
        <GlobalBackground />
        <div className="noise-overlay" />
        <CustomCursor />
        <PageWrapper>
          {children}
        </PageWrapper>
      </body>
    </html>
  );
}
