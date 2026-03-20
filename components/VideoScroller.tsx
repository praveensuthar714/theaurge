'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface VideoScrollerProps {
  progress: number;
  className?: string;
  videoUrl?: string; 
}

/**
 * Optimized Video Scroller
 * Uses a single MP4 file for scrubbing to provide a high-performance experience 
 * while maintaining a small bandwidth footprint (compared to image frames).
 */
export const VideoScroller: React.FC<VideoScrollerProps> = ({
  progress,
  className,
  videoUrl = '/video/scene1_scrub.mp4'
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isReady, setIsReady] = useState(false);
  
  // Ref to track the actual playpoint vs the target progress
  const targetTimeRef = useRef(0);

  useEffect(() => {
    const video = videoRef.current;
    if (video && video.duration) {
      // Direct mapping for maximum precision at specific frame points
      targetTimeRef.current = progress * (video.duration - 0.05);
      video.currentTime = targetTimeRef.current;
    }
  }, [progress, isReady]);

  // Preloading and Readiness Logic
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
        video.load();
        
        const handleReady = () => {
             setIsReady(true);
        };
        
        // Use loadedmetadata as the primary trigger for speed on live sites
        video.addEventListener('loadedmetadata', handleReady);
        video.addEventListener('canplay', handleReady);
        
        if (video.readyState >= 1) {
             setIsReady(true);
        }

        return () => {
             video.removeEventListener('loadedmetadata', handleReady);
             video.removeEventListener('canplay', handleReady);
        };
    }
  }, [videoUrl]);

  return (
    <div className={`absolute inset-0 w-full h-full bg-[var(--background)] overflow-hidden flex items-center justify-center pointer-events-none ${className}`}>
      <AnimatePresence>
        {!isReady && (
          <motion.div 
            key="preloader"
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center z-20 bg-[var(--background)]"
          >
            <div className="flex flex-col items-center gap-6">
              <div className="w-16 h-[1px] bg-white/10 overflow-hidden rounded-full">
                 <motion.div 
                   className="h-full bg-[var(--accent)] w-full" 
                   animate={{ x: ["-100%", "100%"] }} 
                   transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                 />
              </div>
              <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-medium">Preparing Scene</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <video
        ref={videoRef}
        src={videoUrl}
        preload="auto"
        muted
        playsInline
        // @ts-ignore
        webkit-playsinline="true"
        className="w-full h-full object-cover z-0"
        style={{ opacity: isReady ? 1 : 0, transition: 'opacity 0.8s ease' }}
      />
    </div>
  );
};

export default VideoScroller;
