'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, ExternalLink, X } from 'lucide-react';
import type { CaseStudy } from '@/lib/portfolioCaseStudies';
import {
  getThumbnailCandidates,
  isDrivePreviewable,
  isImageMime,
  isPdfMime,
  isValidHttpUrl,
  isVideoMime,
  PORTFOLIO_PLACEHOLDER,
  type PortfolioMediaFields,
} from '@/lib/portfolioMedia';
import { MediaLoadingShimmer } from '@/components/portfolio/MediaLoadingShimmer';
import {
  getWebsitePortfolioDescription,
  WEBSITE_LIGHTBOX_RETURN_MESSAGE,
} from '@/lib/websitePortfolioContent';
import { WebsiteCardThumbnail } from '@/components/portfolio/WebsiteCardThumbnail';

export type PortfolioLightboxItem = PortfolioMediaFields & {
  externalUrl?: string;
  kind?: 'drive' | 'website' | 'design-brand';
};

export type PortfolioLightboxGalleryEntry = {
  item: PortfolioLightboxItem;
  caseStudy?: CaseStudy;
  subtitle?: string;
};

export type PortfolioLightboxProps = {
  /** Full gallery for prev/next navigation */
  entries?: PortfolioLightboxGalleryEntry[];
  activeIndex?: number;
  onActiveIndexChange?: (index: number) => void;
  /** Legacy single-item API (no arrows) */
  item?: PortfolioLightboxItem | null;
  caseStudy?: CaseStudy;
  subtitle?: string;
  onClose: () => void;
};

function LightboxNavButton({
  direction,
  onClick,
  disabled,
}: {
  direction: 'prev' | 'next';
  onClick: () => void;
  disabled: boolean;
}) {
  const Icon = direction === 'prev' ? ArrowLeft : ArrowRight;
  const label = direction === 'prev' ? 'Previous project' : 'Next project';

  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      disabled={disabled}
      aria-label={label}
      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-black/75 text-white/85 backdrop-blur-md transition-all sm:h-12 sm:w-12 ${
        disabled
          ? 'pointer-events-none opacity-25'
          : 'hover:border-accent/40 hover:bg-black/90 hover:text-white active:scale-95'
      }`}
    >
      <Icon className="h-5 w-5" strokeWidth={2} />
    </button>
  );
}

type LightboxMediaKind = 'video' | 'image' | 'document' | 'website';

const DEFAULT_ASPECT: Record<LightboxMediaKind, number> = {
  video: 16 / 9,
  document: 4 / 3,
  website: 16 / 10,
  image: 4 / 5,
};

function getLightboxMediaKind(item: PortfolioLightboxItem): LightboxMediaKind {
  if (item.kind === 'website') return 'website';
  if (isVideoMime(item.mimeType)) return 'video';
  if (isPdfMime(item.mimeType)) return 'document';
  if (isImageMime(item.mimeType)) return 'image';
  const preview = isValidHttpUrl(item.previewUrl) ? item.previewUrl : null;
  if (preview && isDrivePreviewable(item.mimeType)) {
    return isVideoMime(item.mimeType) ? 'video' : 'document';
  }
  return 'image';
}

function clampAspect(ratio: number): number {
  return Math.min(2.25, Math.max(0.55, ratio));
}

function DrivePreviewFrame({
  previewUrl,
  title,
  aspectRatio = 16 / 9,
  onAspectRatio,
}: {
  previewUrl: string;
  title: string;
  aspectRatio?: number;
  onAspectRatio?: (ratio: number) => void;
}) {
  const [ready, setReady] = React.useState(false);

  useEffect(() => {
    onAspectRatio?.(aspectRatio);
  }, [onAspectRatio, previewUrl, aspectRatio]);

  return (
    <div className="absolute inset-0 bg-black">
      {!ready && <MediaLoadingShimmer label="Loading preview" />}
      <iframe
        src={previewUrl}
        title={title}
        className={`absolute inset-0 h-full w-full border-0 transition-opacity duration-500 ${
          ready ? 'opacity-100' : 'opacity-0'
        }`}
        allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
        allowFullScreen
        onLoad={() => setReady(true)}
      />
    </div>
  );
}

function WebsiteLaunchPanel({
  item,
  onAspectRatio,
}: {
  item: PortfolioLightboxItem;
  onAspectRatio?: (ratio: number) => void;
}) {
  const url = item.externalUrl!;
  const title = item.title || 'Website';
  const industry = item.industry || item.subCategory || 'Website';
  const description = getWebsitePortfolioDescription({ title, industry });

  useEffect(() => {
    onAspectRatio?.(4 / 5);
  }, [onAspectRatio]);

  return (
    <div className="absolute inset-0 flex flex-col bg-[#050505]">
      <div className="relative h-[38%] min-h-[140px] shrink-0 overflow-hidden border-b border-white/[0.06] sm:min-h-[160px]">
        <WebsiteCardThumbnail title={title} industry={industry} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
      </div>

      <div className="flex flex-1 flex-col justify-between gap-5 p-5 sm:p-6 md:p-7">
        <div className="space-y-3">
          <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-accent">{industry}</span>
          <h2 className="text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl">{title}</h2>
          <p className="text-sm leading-relaxed text-white/55 sm:text-[15px]">{description}</p>
        </div>

        <div className="space-y-4">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.14em] text-black transition-transform hover:scale-[1.02] sm:w-auto"
          >
            Visit live site
            <ExternalLink className="h-4 w-4" />
          </a>
          <p className="rounded-lg border border-accent/20 bg-accent/[0.06] px-4 py-3 text-[13px] leading-relaxed text-white/70">
            {WEBSITE_LIGHTBOX_RETURN_MESSAGE}
          </p>
        </div>
      </div>
    </div>
  );
}

function LightboxImage({
  item,
  onAspectRatio,
}: {
  item: PortfolioLightboxItem;
  onAspectRatio?: (ratio: number) => void;
}) {
  const candidates = getThumbnailCandidates(item);
  const [index, setIndex] = React.useState(0);
  const [ready, setReady] = React.useState(false);
  const src =
    candidates.length > 0 ? candidates[Math.min(index, candidates.length - 1)] : PORTFOLIO_PLACEHOLDER;

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-[#050505]">
      {!ready && <MediaLoadingShimmer />}
      <img
        key={src}
        src={src}
        alt={item.title || 'Portfolio'}
        referrerPolicy="no-referrer"
        className={`h-full w-full object-contain transition-opacity duration-500 ${
          ready ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={(e) => {
          setReady(true);
          const { naturalWidth, naturalHeight } = e.currentTarget;
          if (naturalWidth > 0 && naturalHeight > 0) {
            onAspectRatio?.(clampAspect(naturalWidth / naturalHeight));
          }
        }}
        onError={() => {
          if (index < candidates.length - 1) setIndex((i) => i + 1);
        }}
      />
    </div>
  );
}

function LightboxMedia({
  item,
  onAspectRatio,
}: {
  item: PortfolioLightboxItem;
  onAspectRatio?: (ratio: number) => void;
}) {
  if (item.kind === 'website' && isValidHttpUrl(item.externalUrl)) {
    return <WebsiteLaunchPanel item={item} onAspectRatio={onAspectRatio} />;
  }

  if (isImageMime(item.mimeType)) {
    return <LightboxImage item={item} onAspectRatio={onAspectRatio} />;
  }

  const preview = isValidHttpUrl(item.previewUrl) ? item.previewUrl : null;

  if (preview && isPdfMime(item.mimeType)) {
    return (
      <DrivePreviewFrame
        previewUrl={preview}
        title={item.title || 'Document'}
        aspectRatio={4 / 3}
        onAspectRatio={onAspectRatio}
      />
    );
  }

  if (preview && isVideoMime(item.mimeType)) {
    return <DrivePreviewFrame previewUrl={preview} title={item.title || 'Video'} onAspectRatio={onAspectRatio} />;
  }

  if (preview && (item.kind === 'drive' || item.kind === 'design-brand') && isDrivePreviewable(item.mimeType)) {
    return (
      <DrivePreviewFrame previewUrl={preview} title={item.title || 'Preview'} onAspectRatio={onAspectRatio} />
    );
  }

  return <LightboxImage item={item} onAspectRatio={onAspectRatio} />;
}

function DetailsPanel({
  item,
  caseStudy,
  subtitle,
}: {
  item: PortfolioLightboxItem;
  caseStudy?: CaseStudy;
  subtitle?: string;
}) {
  return (
    <div className="flex w-full min-h-0 flex-col justify-between gap-4 bg-[#0a0a0a] p-5 sm:p-6 xl:h-full xl:p-7">
      <div className="min-h-0 space-y-4 overflow-y-auto overscroll-contain">
        {subtitle && (
          <p className="text-[11px] font-medium tracking-wide text-accent/90">{subtitle}</p>
        )}

        {caseStudy ? (
          <>
            <div>
              <span className="mb-1.5 block text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35">
                {caseStudy.section}
              </span>
              <h2 className="text-lg font-semibold leading-tight tracking-tight text-white sm:text-xl lg:text-2xl">
                {caseStudy.title}
              </h2>
              {caseStudy.tagline && (
                <p className="mt-1.5 text-xs font-medium text-white/45">{caseStudy.tagline}</p>
              )}
              {caseStudy.associate && (
                <p className="mt-2 inline-block rounded-md border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/60">
                  {caseStudy.associate}
                </p>
              )}
            </div>
            <p className="text-[14px] leading-relaxed text-white/55 sm:text-[15px] xl:line-clamp-[10]">
              {caseStudy.description}
            </p>
            {caseStudy.credits && caseStudy.credits.length > 0 && (
              <div className="grid grid-cols-1 gap-2.5 border-t border-white/[0.06] pt-4 text-xs sm:grid-cols-2">
                {caseStudy.credits.map((credit) => (
                  <p key={credit.label} className="text-white/40">
                    <span className="mb-0.5 block font-medium text-white/70">{credit.label}</span>
                    {credit.value}
                  </p>
                ))}
              </div>
            )}
          </>
        ) : (
          <div>
            <h2 className="text-lg font-semibold leading-tight tracking-tight text-white sm:text-xl lg:text-2xl">
              {item.title || 'Portfolio'}
            </h2>
            <p className="mt-2 text-[13px] leading-relaxed text-white/45">
              {item.kind === 'website'
                ? 'Explore the live site in a new tab — then return here when you are ready.'
                : 'Project preview from the archive.'}
            </p>
            {item.kind === 'website' && isValidHttpUrl(item.externalUrl) && (
              <p className="mt-4 rounded-lg border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-xs leading-relaxed text-white/50">
                Built for performance, clarity, and brand presence across devices.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export function PortfolioLightbox({
  entries: entriesProp,
  activeIndex: activeIndexProp,
  onActiveIndexChange,
  item: legacyItem,
  caseStudy: legacyCaseStudy,
  subtitle: legacySubtitle,
  onClose,
}: PortfolioLightboxProps) {
  const [mediaAspect, setMediaAspect] = useState<number | null>(null);

  const entries = useMemo(() => {
    if (entriesProp && entriesProp.length > 0) return entriesProp;
    if (legacyItem) {
      return [{ item: legacyItem, caseStudy: legacyCaseStudy, subtitle: legacySubtitle }];
    }
    return [];
  }, [entriesProp, legacyItem, legacyCaseStudy, legacySubtitle]);

  const activeIndex =
    entriesProp && entriesProp.length > 0
      ? (activeIndexProp ?? -1)
      : legacyItem
        ? 0
        : -1;

  const isOpen = activeIndex >= 0 && activeIndex < entries.length;
  const current = isOpen ? entries[activeIndex] : null;
  const item = current?.item ?? null;
  const caseStudy = current?.caseStudy;
  const subtitle = current?.subtitle;

  const canNavigate = entries.length > 1;
  const hasPrev = canNavigate && activeIndex > 0;
  const hasNext = canNavigate && activeIndex < entries.length - 1;

  const goPrev = () => {
    if (hasPrev && onActiveIndexChange) onActiveIndexChange(activeIndex - 1);
  };

  const goNext = () => {
    if (hasNext && onActiveIndexChange) onActiveIndexChange(activeIndex + 1);
  };

  const mediaKind = item ? getLightboxMediaKind(item) : 'image';

  const aspectRatio = useMemo(() => {
    if (mediaAspect) return clampAspect(mediaAspect);
    return DEFAULT_ASPECT[mediaKind];
  }, [mediaAspect, mediaKind]);

  useEffect(() => {
    setMediaAspect(null);
  }, [item?.driveFileId, item?.title, activeIndex]);

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (onActiveIndexChange && e.key === 'ArrowLeft' && activeIndex > 0) {
        onActiveIndexChange(activeIndex - 1);
      }
      if (onActiveIndexChange && e.key === 'ArrowRight' && activeIndex < entries.length - 1) {
        onActiveIndexChange(activeIndex + 1);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen, activeIndex, entries.length, onClose, onActiveIndexChange]);

  const isPortrait = aspectRatio < 0.95;
  const isWide = aspectRatio > 1.45;

  return (
    <AnimatePresence>
      {isOpen && item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-end justify-center bg-black/94 p-0 backdrop-blur-xl sm:items-center sm:p-3 md:p-5"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={item.title || 'Portfolio preview'}
        >
          <div className="absolute inset-x-0 top-3 z-30 flex items-center justify-between px-3 sm:px-4">
            {canNavigate ? (
              <p className="rounded-full border border-white/10 bg-black/60 px-3 py-1.5 text-[11px] font-medium tabular-nums text-white/55 backdrop-blur-sm">
                <span className="text-white/85">{activeIndex + 1}</span>
                <span className="text-white/35"> / {entries.length}</span>
              </p>
            ) : (
              <span />
            )}
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-black/70 text-white/80 backdrop-blur-sm transition-colors hover:border-white/25 hover:text-white"
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {canNavigate && (
            <>
              <div className="pointer-events-none absolute inset-y-0 left-0 z-20 hidden w-14 items-center justify-center sm:flex sm:w-16 md:w-20">
                <div className="pointer-events-auto">
                  <LightboxNavButton direction="prev" onClick={goPrev} disabled={!hasPrev} />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-y-0 right-0 z-20 hidden w-14 items-center justify-center sm:flex sm:w-16 md:w-20">
                <div className="pointer-events-auto">
                  <LightboxNavButton direction="next" onClick={goNext} disabled={!hasNext} />
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-4 z-30 flex justify-center px-4 sm:hidden">
                <div className="flex items-center gap-3 rounded-full border border-white/12 bg-black/80 p-1.5 backdrop-blur-md">
                  <LightboxNavButton direction="prev" onClick={goPrev} disabled={!hasPrev} />
                  <span className="min-w-[4.5rem] text-center text-[11px] font-medium tabular-nums text-white/55">
                    {activeIndex + 1} / {entries.length}
                  </span>
                  <LightboxNavButton direction="next" onClick={goNext} disabled={!hasNext} />
                </div>
              </div>
            </>
          )}

          <motion.div
            key={`${item.driveFileId ?? item.title}-${activeIndex}`}
            initial={{ y: 20, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 12, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className={`flex max-h-[96dvh] w-full max-w-[100vw] flex-col overflow-y-auto overflow-x-hidden border border-white/10 bg-[#080808] shadow-[0_24px_120px_rgba(0,0,0,0.88)] sm:max-h-[94dvh] sm:rounded-2xl xl:max-h-[min(90dvh,900px)] xl:w-auto xl:max-w-[min(96vw,1280px)] xl:flex-row xl:overflow-hidden ${
              isWide ? '' : 'xl:max-w-[min(96vw,1100px)]'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Media — full width on mobile; shares row on xl+ */}
            <div
              className={`relative w-full shrink-0 overflow-hidden bg-[#030303] ${
                isPortrait
                  ? 'max-h-[min(50dvh,640px)] xl:h-[min(86dvh,820px)] xl:max-h-none xl:max-w-[min(58vw,720px)] xl:w-auto'
                  : mediaKind === 'website'
                    ? 'max-h-[min(72dvh,760px)] xl:h-[min(86dvh,820px)] xl:max-h-none xl:w-[min(52vw,520px)]'
                    : 'max-h-[min(50dvh,640px)] xl:h-[min(86dvh,820px)] xl:max-h-none xl:w-auto xl:max-w-[min(62vw,880px)]'
              }`}
              style={{ aspectRatio: `${aspectRatio}` }}
            >
              <LightboxMedia item={item} onAspectRatio={setMediaAspect} />
            </div>

            {/* Details — full width stacked below on mobile/tablet; fixed min width on desktop */}
            <div className="flex w-full min-w-0 shrink-0 flex-col border-t border-white/[0.08] xl:min-h-0 xl:w-[min(100%,420px)] xl:max-w-[42%] xl:shrink-0 xl:border-l xl:border-t-0">
              <DetailsPanel item={item} caseStudy={caseStudy} subtitle={subtitle} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default PortfolioLightbox;
