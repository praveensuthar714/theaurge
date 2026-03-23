'use client';

import React from 'react';

export const HeroVideo: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center">
      {/* 
        ═══ YOUTUBE AUTOPLAY BACKGROUND ═══
        Video ID: xbW-c3Le0LQ
        Parameters: 
        - autoplay=1 (Play immediately)
        - mute=1 (Required for autoplay in most browsers)
        - loop=1 & playlist=ID (Required to loop a single video)
        - controls=0 (Hide player controls)
        - showinfo=0 (Hide video title/info)
        - rel=0 (Disable related videos)
        - iv_load_policy=3 (Hide annotations)
        - modestbranding=1 (Reduce YouTube logo size)
      */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        <iframe
          src="https://www.youtube.com/embed/xbW-c3Le0LQ?autoplay=1&mute=1&loop=1&playlist=xbW-c3Le0LQ&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[100%] min-h-[100%] w-[177.77vh] h-[56.25vw] pointer-events-none will-change-transform translate-z-0"
          frameBorder="0"
          allow="autoplay; encrypted-media; playsinline"
          title="Hero Video Background"
        />
      </div>

      {/* Subtle overlay for cinematic feel */}
      <div className="absolute inset-0 bg-black/30 z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60 z-10" />
    </section>
  );
};

export default HeroVideo;
