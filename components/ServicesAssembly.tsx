'use client';

import React, { useRef, useEffect } from 'react';
import { gsap, ScrollTrigger } from '@/lib/scrollEngine';
import { InteractiveServices } from './InteractiveServices';
import { WhatWeDoSection } from './WhatWeDoSection';

export const ServicesAssembly: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  // Removed pinning and scrub logic as per request for normal reveal animations
  useEffect(() => {
    // No-op or simple refresh if needed
    ScrollTrigger.refresh();
  }, []);

  return (
    <div ref={containerRef} className="relative bg-black w-full overflow-visible">
      
      {/* 4.1 THE ORIGIN STAGE: Services Diagram */}
      <div className="relative z-40">
        <InteractiveServices />
      </div>

      {/* 4.2 THE ASSEMBLY STAGE: What We Do (Pinned) */}
      <div 
        ref={triggerRef} 
        className="relative z-20 w-full"
      >
        <WhatWeDoSection isAssembly={true} />
      </div>

    </div>
  );
};

export default ServicesAssembly;
