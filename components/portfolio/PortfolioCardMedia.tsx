'use client';

import React, { useEffect, useRef, useState } from 'react';
import { PortfolioThumbnail } from '@/components/portfolio/PortfolioThumbnail';
import { WebsiteCardThumbnail } from '@/components/portfolio/WebsiteCardThumbnail';
import { MediaLoadingShimmer } from '@/components/portfolio/MediaLoadingShimmer';
import { isVideoMime } from '@/lib/portfolioMedia';
import type { PortfolioDisplayItem } from '@/lib/portfolioNormalize';

type PortfolioCardMediaProps = {
  item: PortfolioDisplayItem;
};

/** Grid cards: static thumbnails only — video plays in lightbox on click. */
export function PortfolioCardMedia({ item }: PortfolioCardMediaProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px', threshold: 0.01 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  if (item.kind === 'website') {
    return (
      <div ref={ref} className="absolute inset-0">
        <WebsiteCardThumbnail title={item.title} industry={item.industry} />
      </div>
    );
  }

  return (
    <div ref={ref} className="absolute inset-0 bg-black">
      {inView ? (
        <PortfolioThumbnail
          item={{
            thumbnailUrl: item.thumbnailUrl,
            thumbnailFallback: item.thumbnailFallback,
            driveFileId: item.driveFileId,
            previewUrl: item.previewUrl,
            mimeType: item.mimeType,
          }}
          alt={item.title}
          variant="default"
          lazy
          showPlayIcon={item.kind === 'drive' && isVideoMime(item.mimeType)}
          imageClassName="scale-105 opacity-90 group-hover:scale-110 group-hover:opacity-100 transition-all duration-[1.2s]"
        />
      ) : (
        <MediaLoadingShimmer />
      )}
    </div>
  );
}

export default PortfolioCardMedia;
