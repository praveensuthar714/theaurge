'use client';

import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap, ScrollTrigger } from '@/lib/scrollEngine';

export const SmoothScroll: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1, // Softer momentum for premium feel
      duration: 1.5,
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.1, // Slightly snappier response
      touchMultiplier: 1.0, // Neutral for mobile
      syncTouch: false, // MANDATORY for v1.x: Use native momentum on mobile
      infinite: false,
    });

    // ── SYNC SCROLLTRIGGER WITH LENIS ──
    // This is the core fix for "glitches": updating ScrollTrigger on every Lenis frame
    lenis.on('scroll', () => {
      ScrollTrigger.update();
    });

    // ── TICKER SYNC ──
    const update = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    // Refresh after route transition (Wait for mount delay)
    const refreshTrigger = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(update);
      clearTimeout(refreshTrigger);
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;
