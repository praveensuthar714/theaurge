'use client';

import React, { useRef, useState, useEffect } from 'react';
import { gsap, ScrollTrigger } from '@/lib/scrollEngine';

interface ScrollSceneProps {
  children: (progress: number) => React.ReactNode;
  range?: string; // e.g. "200vh"
}

export const ScrollScene: React.FC<ScrollSceneProps> = ({ children, range = "500vh" }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  // Parse range (e.g. "500vh") to compute numerical multiplier
  // 500vh means 5 screens of scrolling
  const multiplier = parseInt(range) / 100 || 5;

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!containerRef.current) return;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const rect = containerRef.current!.getBoundingClientRect();
          // Total scrollable distance within the container
          const scrollDistance = rect.height - window.innerHeight;
          
          if (scrollDistance > 0) {
            // How far down the top of the container has traveled relative to the viewport top
            const scrolled = -rect.top;
            
            // Map to 0 -> 1 progress
            let p = scrolled / scrollDistance;
            p = Math.max(0, Math.min(1, p));
            setProgress(p);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger once to set initial state
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={containerRef} style={{ height: range }} className="relative w-full bg-black z-10">
      {/* 
        This is the "viewer" that stays fixed within the scrolling container.
        Using fixed/sticky inside the container wrapper:
      */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">
        {children(progress)}
      </div>
    </div>
  );
};

export default ScrollScene;
