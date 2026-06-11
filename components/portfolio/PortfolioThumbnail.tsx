'use client';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Play } from 'lucide-react';
import {
  getThumbnailCandidates,
  isVideoMime,
  PORTFOLIO_PLACEHOLDER,
  type PortfolioMediaFields,
} from '@/lib/portfolioMedia';

export type PortfolioThumbnailProps = {
  item: PortfolioMediaFields;
  alt?: string;
  className?: string;
  imageClassName?: string;
  /** Cinematic card treatment: grayscale until loaded/hover parent handles color */
  variant?: 'default' | 'cinematic';
  showPlayIcon?: boolean;
  lazy?: boolean;
  onLoadStateChange?: (loaded: boolean) => void;
};

export function PortfolioThumbnail({
  item,
  alt = 'Portfolio item',
  className = '',
  imageClassName = '',
  variant = 'default',
  showPlayIcon,
  lazy = true,
  onLoadStateChange,
}: PortfolioThumbnailProps) {
  const candidates = useMemo(() => getThumbnailCandidates(item), [item]);
  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  const src = failed || candidates.length === 0 ? PORTFOLIO_PLACEHOLDER : candidates[Math.min(index, candidates.length - 1)];
  const isVideo = showPlayIcon ?? isVideoMime(item.mimeType);

  useEffect(() => {
    setIndex(0);
    setLoaded(false);
    setFailed(false);
  }, [candidates]);

  useEffect(() => {
    onLoadStateChange?.(loaded && !failed);
  }, [loaded, failed, onLoadStateChange]);

  const handleError = useCallback(() => {
    if (index < candidates.length - 1) {
      setIndex((i) => i + 1);
      setLoaded(false);
      return;
    }
    setFailed(true);
    setLoaded(true);
  }, [index, candidates.length]);

  const handleLoad = useCallback(() => {
    setLoaded(true);
  }, []);

  const cinematicImg =
    variant === 'cinematic'
      ? 'opacity-85 group-hover:opacity-100'
      : '';

  return (
    <div className={`relative h-full w-full overflow-hidden bg-[#0A0A0A] ${className}`}>
      {/* Loading skeleton */}
      <div
        className={`absolute inset-0 z-[1] bg-gradient-to-br from-white/[0.04] via-[#111] to-black transition-opacity duration-500 ${
          loaded ? 'pointer-events-none opacity-0' : 'opacity-100'
        }`}
        aria-hidden
      >
        <div className="absolute inset-0 animate-pulse bg-white/[0.04]" />
      </div>

      <img
        key={src}
        src={src}
        alt={alt}
        loading={lazy ? 'lazy' : 'eager'}
        decoding="async"
        referrerPolicy="no-referrer"
        onLoad={handleLoad}
        onError={handleError}
        className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out ${cinematicImg} ${
          loaded ? 'scale-100 opacity-100' : 'scale-[1.02] opacity-0'
        } ${imageClassName}`}
      />

      {/* Placeholder frame when all URLs failed */}
      {failed && (
        <div className="pointer-events-none absolute inset-0 z-[2] flex flex-col items-center justify-center gap-2 bg-[#0A0A0A]">
          <div className="h-px w-12 bg-accent/30" />
          <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/25">Preview</span>
        </div>
      )}

      {isVideo && (
        <div className="pointer-events-none absolute inset-0 z-[3] flex items-center justify-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/50 backdrop-blur-md opacity-80 transition-all duration-500 group-hover:scale-110 group-hover:border-accent/40 group-hover:bg-accent/10">
            <Play className="ml-0.5 h-4 w-4 fill-white text-white" />
          </div>
        </div>
      )}
    </div>
  );
}

export default PortfolioThumbnail;
