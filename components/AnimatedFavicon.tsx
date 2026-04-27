'use client';

import { useEffect } from 'react';

export const AnimatedFavicon = () => {
  useEffect(() => {
    // 1. Remove any existing static favicons to avoid conflicts that Chrome might freeze on
    const existingLinks = document.querySelectorAll("link[rel*='icon']");
    existingLinks.forEach(l => l.remove());

    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    
    if (!ctx) return;

    // Load the requested favicon image
    const img = new Image();
    img.src = '/favicon.png';

    let currentFrame = 0;
    const frames: string[] = [];
    const TOTAL_FRAMES = 12; // Pre-render 12 detailed frames for a full breathing cycle
    let intervalId: NodeJS.Timeout;

    img.onload = () => {
      // Ensure unstretched proportions
      const aspect = img.width / img.height;
      let drawWidth = canvas.width;
      let drawHeight = canvas.width / aspect;

      if (drawHeight > canvas.height) {
        drawHeight = canvas.height;
        drawWidth = canvas.height * aspect;
      }

      // PRE-RENDER LOOP (Calculates frames in advance so we don't block the UI thread during scrolling)
      for (let i = 0; i < TOTAL_FRAMES; i++) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Sine wave from 0 to PI over the frame range gives a clean pulse: 0% -> 100% -> 0%
        const progress = i / TOTAL_FRAMES;
        const pulse = Math.sin(progress * Math.PI); 
        
        // Premium glow effect matching the brand accent color
        ctx.shadowColor = `rgba(217, 255, 0, ${pulse})`; // Neon green glow 
        ctx.shadowBlur = 15 * pulse;
        
        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2);
        
        // Premium subtle scale-up effect
        const scale = 1 + (pulse * 0.08); 
        ctx.scale(scale, scale);
        
        ctx.drawImage(img, -drawWidth / 2, -drawHeight / 2, drawWidth, drawHeight);
        ctx.restore();

        frames.push(canvas.toDataURL('image/png'));
      }

      // PLAYBACK LOOP
      const playAnimation = () => {
        // In Chrome and Edge, modifying `href` directly on a fast interval is often ignored/throttled.
        // We force standard recreation behavior which forces the browser to paint the new tab icon.
        const prevLink = document.getElementById('dynamic-animated-favicon');
        if (prevLink) prevLink.remove();

        const newLink = document.createElement('link');
        newLink.id = 'dynamic-animated-favicon';
        newLink.rel = 'icon';
        newLink.type = 'image/png';
        newLink.href = frames[currentFrame];
        
        document.head.appendChild(newLink);

        currentFrame = (currentFrame + 1) % TOTAL_FRAMES;
      };

      // 250ms per frame = 4 FPS. Perfect cadence for a premium tab icon, avoids Chrome CPU throttling.
      intervalId = setInterval(playAnimation, 250);
      playAnimation(); // Trigger first frame immediately
    };

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return null;
};

export default AnimatedFavicon;
