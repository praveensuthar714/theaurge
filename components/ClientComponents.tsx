'use client';

import dynamic from 'next/dynamic';

export const Preloader = dynamic(() => import("@/components/Preloader"), { ssr: false });
export const GlobalBackground = dynamic(() => import("@/components/GlobalBackground"), { ssr: false });
export const CustomCursor = dynamic(() => import("@/components/CustomCursor"), { ssr: false });
export const SmoothScroll = dynamic(() => import("@/components/SmoothScroll"), { ssr: false });

export default {
  Preloader,
  GlobalBackground,
  CustomCursor,
  SmoothScroll
};
