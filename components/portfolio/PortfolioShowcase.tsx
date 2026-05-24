'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import type { DrivePortfolioItem } from '@/lib/drivePortfolio';
import {
  formatPortfolioCategoryLine,
  coerceMediaFilter,
  getDefaultMediaFilter,
  matchesMediaFilter,
  PORTFOLIO_DRIVE_TABS,
  type MediaFilterId,
  type PortfolioDriveTabId,
} from '@/lib/portfolioCategories';
import {
  buildPortfolioCatalog,
  getSubcategoriesForDriveRoot,
  pickFeaturedItems,
  type DriveFolderNode,
  type PortfolioDisplayItem,
} from '@/lib/portfolioNormalize';
import {
  interleavePortfolioItems,
  shouldInterleavePortfolioItems,
} from '@/lib/portfolioShuffle';
import { PortfolioCardMedia } from '@/components/portfolio/PortfolioCardMedia';
import {
  PortfolioLightbox,
  type PortfolioLightboxGalleryEntry,
} from '@/components/portfolio/PortfolioLightbox';
import { PremiumButton } from '@/components/ui/PremiumButton';
import { MobileFiltersDrawer, PortfolioFilters } from '@/components/portfolio/PortfolioFilters';

export interface PortfolioShowcaseProps {
  driveItems?: DrivePortfolioItem[];
  folderTree?: DriveFolderNode[];
  mode?: 'full' | 'featured';
  featuredLimit?: number;
  showViewAllLink?: boolean;
  sectionId?: string;
  layout?: 'home' | 'work';
}

function PortfolioGrid({
  pageItems,
  setLightbox,
  currentPage,
  totalPages,
  filteredLength,
  onPage,
}: {
  pageItems: PortfolioDisplayItem[];
  setLightbox: (item: PortfolioDisplayItem) => void;
  currentPage: number;
  totalPages: number;
  filteredLength: number;
  onPage: (page: number) => void;
}) {
  return (
    <>
      <motion.div layout className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 xl:gap-6">
        <AnimatePresence mode="popLayout">
          {pageItems.length === 0 ? (
            <motion.p
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full py-20 text-center text-sm uppercase tracking-[0.25em] text-white/30"
            >
              No projects match these filters
            </motion.p>
          ) : (
            pageItems.map((item) => (
              <motion.article
                layout
                key={item.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="group"
              >
                <button
                  type="button"
                  onClick={() => setLightbox(item)}
                  className="relative block w-full overflow-hidden rounded-2xl bg-black text-left ring-1 ring-white/10 transition-all duration-500 hover:ring-accent/35 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
                >
                  <div className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[16/11]">
                    <PortfolioCardMedia item={item} />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 z-10 p-5">
                      <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
                        {formatPortfolioCategoryLine(item.driveRoot, item.subCategory) ||
                          item.serviceCategory}
                      </p>
                      <h3 className="line-clamp-2 text-lg font-semibold leading-snug text-white">{item.title}</h3>
                    </div>
                    <div className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/50 opacity-0 backdrop-blur-md transition-opacity group-hover:opacity-100">
                      <ArrowUpRight className="h-4 w-4 text-accent" />
                    </div>
                  </div>
                </button>
              </motion.article>
            ))
          )}
        </AnimatePresence>
      </motion.div>

      <PaginationBar
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={filteredLength}
        onPage={onPage}
      />
    </>
  );
}

const PORTFOLIO_STICKY_SCROLL_OFFSET = 152;

function scrollToPortfolioGrid(anchor: HTMLElement | null) {
  if (!anchor) return;
  const top = anchor.getBoundingClientRect().top + window.scrollY - PORTFOLIO_STICKY_SCROLL_OFFSET;
  window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
}

function PaginationBar({
  currentPage,
  totalPages,
  totalItems,
  onPage,
}: {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  onPage: (page: number) => void;
}) {
  if (totalPages <= 1) return null;

  const goToPage = (page: number) => {
    if (page === currentPage) return;
    onPage(page);
  };

  return (
    <div className="mt-12 flex flex-col items-center gap-3">
      <p className="text-xs text-white/40" aria-live="polite">
        Page <span className="font-semibold text-white/70">{currentPage}</span> of{' '}
        <span className="text-white/55">{totalPages}</span>
        <span className="mx-2 text-white/20">·</span>
        {totalItems} projects
      </p>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => goToPage(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 text-white/50 disabled:opacity-30 hover:border-accent/40 hover:text-white"
          aria-label="Previous page"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => goToPage(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 text-white/50 disabled:opacity-30 hover:border-accent/40 hover:text-white"
          aria-label="Next page"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

export function PortfolioShowcase({
  driveItems = [],
  folderTree = [],
  mode = 'full',
  featuredLimit = 6,
  showViewAllLink = false,
  sectionId = 'work',
  layout = 'home',
}: PortfolioShowcaseProps) {
  const catalog = useMemo(
    () => buildPortfolioCatalog(driveItems, folderTree),
    [driveItems, folderTree]
  );
  const isFeatured = mode === 'featured';
  const itemsPerPage = isFeatured ? 6 : 12;

  const [activeTab, setActiveTab] = useState<PortfolioDriveTabId>('social-media');
  const [activeMedia, setActiveMedia] = useState<MediaFilterId>('all');
  const [activeSub, setActiveSub] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [lightbox, setLightbox] = useState<PortfolioDisplayItem | null>(null);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const gridScrollRef = useRef<HTMLDivElement>(null);

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
    requestAnimationFrame(() => scrollToPortfolioGrid(gridScrollRef.current));
  }, []);

  const activeTabConfig = PORTFOLIO_DRIVE_TABS.find((t) => t.id === activeTab)!;
  const activeDriveRoot = activeTabConfig.driveRoot;
  const isWebsiteTab = activeTab === 'websites';
  const effectiveMedia = activeDriveRoot
    ? coerceMediaFilter(activeDriveRoot, activeMedia)
    : activeMedia;

  useEffect(() => {
    if (!activeDriveRoot) return;
    setActiveMedia((prev) => {
      const next = coerceMediaFilter(activeDriveRoot, prev);
      return next === prev ? prev : next;
    });
  }, [activeDriveRoot]);

  useEffect(() => {
    if (!isFeatured) return;
    const first = PORTFOLIO_DRIVE_TABS.find((tab) => {
      if (tab.driveRoot === null) return catalog.some((i) => i.kind === 'website');
      return catalog.some((i) => i.driveRoot === tab.driveRoot);
    });
    if (first) setActiveTab(first.id);
  }, [isFeatured, catalog]);

  const filtered = useMemo(() => {
    let pool: PortfolioDisplayItem[];

    if (isWebsiteTab) {
      pool = catalog.filter((i) => i.kind === 'website');
    } else if (activeDriveRoot) {
      pool = catalog.filter(
        (i) =>
          i.kind === 'drive' &&
          i.driveRoot === activeDriveRoot &&
          matchesMediaFilter(i.mediaType, effectiveMedia)
      );
    } else {
      pool = [];
    }

    if (!isWebsiteTab && activeSub !== 'All') {
      pool = pool.filter((i) => i.subCategory === activeSub);
    }

    return pool;
  }, [catalog, activeTab, activeDriveRoot, effectiveMedia, activeSub, isWebsiteTab]);

  const subcategories = useMemo(() => {
    if (isWebsiteTab || !activeDriveRoot) return ['All'];
    return getSubcategoriesForDriveRoot(catalog, activeDriveRoot);
  }, [catalog, activeDriveRoot, isWebsiteTab]);

  const orderedPool = useMemo(() => {
    if (!shouldInterleavePortfolioItems(activeSub)) {
      return filtered;
    }
    const seed = `${activeTab}-${effectiveMedia}-${activeDriveRoot ?? 'websites'}-${isFeatured ? 'featured' : 'full'}`;
    return interleavePortfolioItems(filtered, seed);
  }, [filtered, activeSub, activeTab, effectiveMedia, activeDriveRoot, isFeatured]);

  const displayItems = useMemo(() => {
    if (isFeatured) {
      return pickFeaturedItems(orderedPool, featuredLimit);
    }
    return orderedPool;
  }, [orderedPool, isFeatured, featuredLimit]);

  const totalPages = Math.max(1, Math.ceil(displayItems.length / itemsPerPage));
  const pageItems = displayItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const lightboxEntries = useMemo<PortfolioLightboxGalleryEntry[]>(
    () =>
      displayItems.map((entry) => ({
        item: {
          title: entry.title,
          previewUrl: entry.previewUrl,
          thumbnailUrl: entry.thumbnailUrl,
          thumbnailFallback: entry.thumbnailFallback,
          driveFileId: entry.driveFileId,
          mimeType: entry.mimeType,
          categoryPath: entry.categoryPath,
          externalUrl: entry.externalUrl,
          kind: entry.kind,
        },
        caseStudy: entry.caseStudy,
        subtitle: formatPortfolioCategoryLine(entry.driveRoot, entry.subCategory),
      })),
    [displayItems]
  );

  const lightboxIndex = useMemo(() => {
    if (!lightbox) return -1;
    return displayItems.findIndex((entry) => entry.id === lightbox.id);
  }, [lightbox, displayItems]);

  const countsByTab = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const tab of PORTFOLIO_DRIVE_TABS) {
      if (tab.driveRoot === null) {
        counts[tab.id] = catalog.filter((i) => i.kind === 'website').length;
      } else {
        counts[tab.id] = catalog.filter((i) => i.driveRoot === tab.driveRoot).length;
      }
    }
    return counts;
  }, [catalog]);

  const handleTabChange = (tabId: PortfolioDriveTabId) => {
    const tab = PORTFOLIO_DRIVE_TABS.find((t) => t.id === tabId)!;
    setActiveTab(tabId);
    setActiveSub('All');
    setActiveMedia(tab.driveRoot ? getDefaultMediaFilter(tab.driveRoot) : 'all');
    setCurrentPage(1);
  };

  const handleClearRefinements = () => {
    setActiveSub('All');
    if (activeDriveRoot) setActiveMedia(getDefaultMediaFilter(activeDriveRoot));
    else setActiveMedia('all');
    setCurrentPage(1);
  };

  const handleMediaChange = useCallback(
    (media: MediaFilterId) => {
      setActiveMedia(activeDriveRoot ? coerceMediaFilter(activeDriveRoot, media) : media);
      setCurrentPage(1);
    },
    [activeDriveRoot]
  );

  useEffect(() => {
    setCurrentPage(1);
    setActiveSub('All');
    setMobileFiltersOpen(false);
  }, [activeTab, activeMedia]);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeSub]);

  useEffect(() => {
    if (currentPage > totalPages) setCurrentPage(totalPages);
  }, [currentPage, totalPages]);

  const sectionTop =
    layout === 'work' ? 'pt-36 pb-20 md:pt-44 md:pb-28' : 'pt-24 pb-16 md:pt-32 md:pb-24';

  return (
    <section id={sectionId} className={`relative bg-black ${sectionTop}`}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(217,255,0,0.07),transparent)]" />

      <div className="relative mx-auto max-w-[1600px] px-4 md:px-10">
        <header className="mb-12 text-center md:mb-16">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.5em] text-accent">
            {isFeatured ? 'Featured' : 'Portfolio'}
          </p>
          <h2 className="text-4xl font-medium tracking-tight text-white md:text-6xl heading-platinum">
            Our Work<span className="text-accent">.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-white/45 md:text-base">
            {isFeatured
              ? 'A curated selection from our archive — browse by category or open the full portfolio.'
              : 'Film, photography, branding, and digital work — organised by discipline and project.'}
          </p>
        </header>

        <div className="sticky top-[88px] z-40 -mx-4 border-b border-white/[0.06] bg-black/95 backdrop-blur-lg md:-mx-10">
          <div className="space-y-0 px-4 pb-3 pt-0 md:px-10 md:pb-4">
            <PortfolioFilters
              variant="category-bar"
              activeTab={activeTab}
              activeMedia={effectiveMedia}
              activeSub={activeSub}
              countsByTab={countsByTab}
              subcategories={subcategories}
              resultCount={displayItems.length}
              isWebsiteTab={isWebsiteTab}
              isFeatured={isFeatured}
              showMediaFilters={Boolean(activeDriveRoot)}
              driveRoot={activeDriveRoot}
              onTabChange={handleTabChange}
              onMediaChange={handleMediaChange}
              onSubChange={setActiveSub}
              onClearRefinements={handleClearRefinements}
            />

            <div className="border-t border-white/[0.06] pt-3">
              <MobileFiltersDrawer
                open={mobileFiltersOpen}
                onToggle={() => setMobileFiltersOpen((o) => !o)}
                activeMedia={effectiveMedia}
                activeSub={activeSub}
                resultCount={displayItems.length}
                isWebsiteTab={isWebsiteTab}
                subcategories={subcategories}
                driveRoot={activeDriveRoot}
              >
                <PortfolioFilters
                  variant="sidebar"
                  activeTab={activeTab}
                  activeMedia={effectiveMedia}
                  activeSub={activeSub}
                  countsByTab={countsByTab}
                  subcategories={subcategories}
                  resultCount={displayItems.length}
                  isWebsiteTab={isWebsiteTab}
                  isFeatured={isFeatured}
                  showMediaFilters={Boolean(activeDriveRoot)}
                  driveRoot={activeDriveRoot}
                  onTabChange={handleTabChange}
                  onMediaChange={handleMediaChange}
                  onSubChange={(sub) => {
                    setActiveSub(sub);
                    setCurrentPage(1);
                  }}
                  onClearRefinements={() => {
                    handleClearRefinements();
                    setMobileFiltersOpen(false);
                  }}
                />
              </MobileFiltersDrawer>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-5 sm:gap-6 lg:mt-10 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-8 xl:grid-cols-[300px_minmax(0,1fr)] xl:gap-10">
          <div className="relative hidden min-h-0 lg:block">
            <div className="sticky top-[152px] z-20 max-h-[calc(100dvh-152px)] overflow-y-auto overscroll-contain [scrollbar-width:thin]">
              <PortfolioFilters
                variant="sidebar"
                activeTab={activeTab}
                activeMedia={effectiveMedia}
                activeSub={activeSub}
                countsByTab={countsByTab}
                subcategories={subcategories}
                resultCount={displayItems.length}
                isWebsiteTab={isWebsiteTab}
                isFeatured={isFeatured}
                showMediaFilters={Boolean(activeDriveRoot)}
                driveRoot={activeDriveRoot}
                onTabChange={handleTabChange}
                onMediaChange={handleMediaChange}
                onSubChange={setActiveSub}
                onClearRefinements={handleClearRefinements}
              />
            </div>
          </div>

          <div ref={gridScrollRef} className="min-w-0 scroll-mt-[152px]">
            <PortfolioGrid
              pageItems={pageItems}
              setLightbox={setLightbox}
              currentPage={currentPage}
              totalPages={totalPages}
              filteredLength={displayItems.length}
              onPage={handlePageChange}
            />
          </div>
        </div>

        {(showViewAllLink || isFeatured) && (
          <div className="mt-10 flex justify-center md:mt-14">
            <PremiumButton href="/work">View full portfolio</PremiumButton>
          </div>
        )}
      </div>

      <PortfolioLightbox
        entries={lightboxEntries}
        activeIndex={lightboxIndex}
        onActiveIndexChange={(index) => setLightbox(displayItems[index] ?? null)}
        onClose={() => setLightbox(null)}
      />
    </section>
  );
}

export default PortfolioShowcase;
