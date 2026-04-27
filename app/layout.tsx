import React from "react";
import "./globals.css";
import PageWrapper from "@/components/PageWrapper";
import { metadata, inter } from "./layout-metadata";
import { Preloader, GlobalBackground, CustomCursor, SmoothScroll } from "@/components/ClientComponents";

export { metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark bg-black" suppressHydrationWarning>
      <body className={`${inter.className} bg-black text-white antialiased`} suppressHydrationWarning>
        <SmoothScroll>
          <Preloader />
          <GlobalBackground />
          <CustomCursor />
          <PageWrapper>
            {children}
          </PageWrapper>
        </SmoothScroll>
      </body>
    </html>
  );
}
