'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SequenceScrollerProps {
  progress: number;
  className?: string;
  directory?: string;
  frameCount?: number;
  imagePrefix?: string;
  imageExtension?: string;
}

/**
 * Apple-Style Image Sequence Scroller
 * ─────────────────────────────────────
 * • Full-resolution (1920×1080) WebP frames for crisp output on any screen.
 * • createImageBitmap() decodes frames directly to GPU memory.
 * • Canvas renders with device pixel ratio for Retina sharpness.
 * • Progressive: shows the first frame as soon as it loads, so users aren't
 *   blocked behind a loading screen for the full sequence.
 * • rAF-based rendering — zero jank, no re-renders.
 */
export const SequenceScroller: React.FC<SequenceScrollerProps> = ({
  progress,
  className = '',
  directory = '/sequences/scene1',
  frameCount = 121,
  imagePrefix = 'frame_',
  imageExtension = 'webp',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const framesRef = useRef<(ImageBitmap | null)[]>(Array(frameCount).fill(null));
  const loadedCountRef = useRef(0);

  const [loadedCount, setLoadedCount] = useState(0);
  // Ready = at least the FIRST frame is loaded (start showing content immediately)
  const [firstFrameReady, setFirstFrameReady] = useState(false);
  // All loaded = preloader fully gone
  const [allLoaded, setAllLoaded] = useState(false);

  const lastFrameRef = useRef(-1);

  // ─── Cover-fit draw ────────────────────────────────────────────────────────
  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;
    const bmp = framesRef.current[frameIndex];
    if (!bmp) return;

    const { width: cW, height: cH } = canvas;
    const { width: iW, height: iH } = bmp;
    const cRatio = cW / cH;
    const iRatio = iW / iH;

    let dW: number, dH: number, dX: number, dY: number;
    if (iRatio > cRatio) {
      dH = cH; dW = cH * iRatio;
      dX = (cW - dW) / 2; dY = 0;
    } else {
      dW = cW; dH = cW / iRatio;
      dX = 0; dY = (cH - dH) / 2;
    }
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(bmp, dX, dY, dW, dH);
  }, []);

  // ─── Canvas sizing ─────────────────────────────────────────────────────────
  const syncCanvasSize = useCallback(() => {
    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;
    if (!canvas || !wrapper) return;
    const dpr = window.devicePixelRatio || 1;
    const { clientWidth: w, clientHeight: h } = wrapper;
    // Only resize if dimensions actually changed (avoids needless redraws)
    if (canvas.width === w * dpr && canvas.height === h * dpr) return;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    // Re-draw whichever frame is current
    const idx = Math.min(frameCount - 1, Math.max(0, Math.round(progress * (frameCount - 1))));
    requestAnimationFrame(() => drawFrame(idx));
  }, [progress, frameCount, drawFrame]);

  // ─── Preload sequence ──────────────────────────────────────────────────────
  useEffect(() => {
    let cancelled = false;
    loadedCountRef.current = 0;
    framesRef.current = Array(frameCount).fill(null);
    setLoadedCount(0);
    setFirstFrameReady(false);
    setAllLoaded(false);
    lastFrameRef.current = -1;

    const loadFrame = async (index: number) => {
      const paddedIndex = (index + 1).toString().padStart(4, '0');
      const src = `${directory}/${imagePrefix}${paddedIndex}.${imageExtension}`;
      try {
        const res = await fetch(src);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const blob = await res.blob();
        const bmp = await createImageBitmap(blob);
        if (cancelled) return;
        framesRef.current[index] = bmp;
        loadedCountRef.current += 1;
        setLoadedCount(loadedCountRef.current);

        // Show canvas as soon as frame 0 arrives
        if (index === 0 && !cancelled) {
          setFirstFrameReady(true);
          requestAnimationFrame(() => drawFrame(0));
        }
        if (loadedCountRef.current === frameCount) setAllLoaded(true);
      } catch {
        if (cancelled) return;
        loadedCountRef.current += 1;
        setLoadedCount(loadedCountRef.current);
        if (loadedCountRef.current === frameCount) setAllLoaded(true);
      }
    };

    // Load frame 0 first for fastest first-paint, then the rest in parallel
    loadFrame(0).then(() => {
      for (let i = 1; i < frameCount; i++) loadFrame(i);
    });

    return () => { cancelled = true; };
  }, [directory, frameCount, imagePrefix, imageExtension, drawFrame]);

  // ─── ResizeObserver ────────────────────────────────────────────────────────
  useEffect(() => {
    syncCanvasSize();
    const ro = new ResizeObserver(syncCanvasSize);
    if (wrapperRef.current) ro.observe(wrapperRef.current);
    return () => ro.disconnect();
  }, [syncCanvasSize]);

  // ─── Scrub on progress ─────────────────────────────────────────────────────
  useEffect(() => {
    if (!firstFrameReady) return;
    const frameIndex = Math.min(
      frameCount - 1,
      Math.max(0, Math.round(progress * (frameCount - 1)))
    );
    if (frameIndex === lastFrameRef.current) return;
    // Only draw if that frame has been decoded
    if (!framesRef.current[frameIndex]) return;
    lastFrameRef.current = frameIndex;
    const rafId = requestAnimationFrame(() => drawFrame(frameIndex));
    return () => cancelAnimationFrame(rafId);
  }, [progress, firstFrameReady, frameCount, drawFrame]);

  const percent = Math.round((loadedCount / frameCount) * 100);

  return (
    <div
      ref={wrapperRef}
      className={`absolute inset-0 w-full h-full bg-transparent overflow-hidden pointer-events-none ${className}`}
    >
      {/* ── Minimal loading bar (top-edge) – only while not all loaded ── */}
      <AnimatePresence>
        {!allLoaded && (
          <motion.div
            key="load-bar"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="absolute top-0 left-0 right-0 z-40 h-[2px] bg-white/5"
          >
            <motion.div
              className="h-full bg-[var(--accent)]"
              style={{ width: `${percent}%`, transition: 'width 0.15s linear' }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Full preloader — only until first frame arrives ── */}
      <AnimatePresence>
        {!firstFrameReady && (
          <motion.div
            key="seq-full-loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="absolute inset-0 flex items-center justify-center z-30 bg-[var(--background)]"
          >
            <div className="flex flex-col items-center gap-8">
              <div className="relative w-[80px] h-[80px]">
                <svg viewBox="0 0 80 80" className="w-full h-full -rotate-90">
                  <circle cx="40" cy="40" r="32" stroke="white" strokeOpacity=".06"
                    strokeWidth="2" fill="none" />
                  <circle
                    cx="40" cy="40" r="32"
                    stroke="var(--accent)"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 32}`}
                    strokeDashoffset={`${2 * Math.PI * 32 * (1 - percent / 100)}`}
                    style={{ transition: 'stroke-dashoffset 0.2s linear' }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[12px] font-mono text-white/60 tabular-nums">
                    {percent}%
                  </span>
                </div>
              </div>
              <span className="text-[8px] uppercase tracking-[0.45em] text-white/25 font-semibold">
                Preparing scene
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Canvas ── */}
      <canvas
        ref={canvasRef}
        style={{
          opacity: firstFrameReady ? 1 : 0,
          transition: 'opacity 0.8s cubic-bezier(0.4,0,0.2,1)',
        }}
      />
    </div>
  );
};

export default SequenceScroller;
