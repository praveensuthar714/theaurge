'use client';

import React from 'react';

export const GlobalBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden select-none bg-black">
      {/* Body Texture / Noise */}
      <div 
        className="absolute inset-0 opacity-[0.2]"
        style={{ 
          backgroundImage: 'url("/body-bg.png")', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* Top Gradient Blend (ensure smooth header area) */}
      <div className="absolute inset-x-0 top-0 h-[400px] bg-gradient-to-b from-[#0A0A0A] to-transparent" />
      
      {/* Radial Gradient Glow (Subtle depth) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[radial-gradient(circle_at_center,rgba(217,255,0,0.03)_0%,transparent_70%)]" />
      
      {/* Noise Overlay Effect (matches homepage logic) */}
      <div className="noise-overlay absolute inset-0 opacity-20" />
    </div>
  );
};

export default GlobalBackground;
