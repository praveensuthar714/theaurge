'use client';

import React, { useRef, useEffect } from 'react';

interface VideoBackgroundProps {
  src: string;
  overlay?: boolean;
}

export const VideoBackground: React.FC<VideoBackgroundProps> = ({ src, overlay = true }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8; // Slightly slower for cinematic feel
    }
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden -z-10 bg-[var(--background)]">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover opacity-60 transition-opacity duration-1000"
        onCanPlay={() => {
          if (videoRef.current) videoRef.current.style.opacity = '0.6';
        }}
        style={{ opacity: 0 }}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {overlay && <div className="cinematic-overlay" />}
    </div>
  );
};

export default VideoBackground;
