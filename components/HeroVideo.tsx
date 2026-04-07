'use client';

import React from 'react';

export const HeroVideo: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center">
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden bg-black">
        {/* LCP Optimization: Showing a cinematic high-res placeholder background */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-40 blur-[1px] scale-[1.02]"
          style={{ backgroundImage: "url('/images/design-hero-bg.png')" }}
        />

        <iframe
          src="https://www.youtube.com/embed/xbW-c3Le0LQ?autoplay=1&mute=1&loop=1&playlist=xbW-c3Le0LQ&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1&enablejsapi=1"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[100%] min-h-[100%] w-[177.77vh] h-[56.25vw] sm:w-[177.77vh] sm:h-[56.25vw] pointer-events-none transition-opacity duration-1000 z-10"
          style={{ opacity: 1 }}
          frameBorder="0"
          allow="autoplay; encrypted-media; playsinline"
          title="Hero Video Background"
          loading="eager"
        />
      </div>

      {/* Subtle overlay for cinematic feel */}
      <div className="absolute inset-0 bg-black/30 z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60 z-10" />
    </section>
  );
};

export default HeroVideo;
