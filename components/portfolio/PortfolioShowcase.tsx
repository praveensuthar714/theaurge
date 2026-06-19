'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import type { DrivePortfolioItem } from '@/lib/drivePortfolio';
import {
  PORTFOLIO_DRIVE_TABS,
  mapItemToCategory,
  type PortfolioDriveTabId,
} from '@/lib/portfolioCategories';
import {
  buildPortfolioCatalog,
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
import { PortfolioFilters } from '@/components/portfolio/PortfolioFilters';

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
            pageItems.map((item) => {
              const mapping = mapItemToCategory(item);
              const catConfig = PORTFOLIO_DRIVE_TABS.find((t) => t.id === mapping.categoryId);
              const categoryLine = catConfig
                ? `${catConfig.label} · ${mapping.subcategory}`.replace(/ · $/, '')
                : '';

              return (
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

                      <div className="absolute inset-x-0 bottom-0 z-10 p-5">
                        <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
                          {categoryLine}
                        </p>
                        <h3 className="line-clamp-2 text-lg font-semibold leading-snug text-white">
                          {item.title}
                        </h3>
                      </div>
                      <div className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/50 opacity-0 backdrop-blur-md transition-opacity group-hover:opacity-100">
                        <ArrowUpRight className="h-4 w-4 text-accent" />
                      </div>
                    </div>
                  </button>
                </motion.article>
              );
            })
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

  const [activeTab, setActiveTab] = useState<PortfolioDriveTabId>('all');
  const [activeSub, setActiveSub] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [lightbox, setLightbox] = useState<PortfolioDisplayItem | null>(null);
  const gridScrollRef = useRef<HTMLDivElement>(null);

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
    requestAnimationFrame(() => scrollToPortfolioGrid(gridScrollRef.current));
  }, []);

  const filtered = useMemo(() => {
    let pool = catalog.map((item) => {
      const mapping = mapItemToCategory(item);
      return {
        ...item,
        newCategoryId: mapping.categoryId,
        newSubcategory: mapping.subcategory,
      };
    });

    // 1. Filter by category
    if (activeTab !== 'all') {
      pool = pool.filter((i) => i.newCategoryId === activeTab);
    }

    // 2. Filter by subcategory (if activeSub is set)
    if (activeSub) {
      pool = pool.filter((i) => i.newSubcategory.toLowerCase() === activeSub.toLowerCase());
    }

    return pool;
  }, [catalog, activeTab, activeSub]);

  const orderedPool = useMemo(() => {
    if (!shouldInterleavePortfolioItems(activeSub)) {
      return filtered;
    }
    const seed = `${activeTab}-${activeSub}-${isFeatured ? 'featured' : 'full'}`;
    return interleavePortfolioItems(filtered, seed);
  }, [filtered, activeTab, activeSub, isFeatured]);

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
      displayItems.map((entry) => {
        const mapping = mapItemToCategory(entry);
        return {
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
          subtitle: `${entry.driveRoot || ''} · ${mapping.subcategory}`.replace(/^ · | · $/g, ''),
        };
      }),
    [displayItems]
  );

  const lightboxIndex = useMemo(() => {
    if (!lightbox) return -1;
    return displayItems.findIndex((entry) => entry.id === lightbox.id);
  }, [lightbox, displayItems]);

  const handleTabChange = (tabId: PortfolioDriveTabId) => {
    setActiveTab(tabId);
    const tabConfig = PORTFOLIO_DRIVE_TABS.find((t) => t.id === tabId);
    if (tabConfig && tabConfig.subcategories.length > 0) {
      setActiveSub(tabConfig.subcategories[0]);
    } else {
      setActiveSub('');
    }
    setCurrentPage(1);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab, activeSub]);

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

        {/* Horizontal Category and Subcategory Sticky Filters */}
        <div className="sticky top-[56px] z-40 -mx-4 border-b border-white/[0.06] bg-black/95 backdrop-blur-lg md:top-[67px] md:-mx-10 lg:top-[74px]">
          <div className="px-4 py-1 md:px-10">
            <PortfolioFilters
              activeTab={activeTab}
              activeSub={activeSub}
              onTabChange={handleTabChange}
              onSubChange={setActiveSub}
            />
          </div>
        </div>

        {/* Portfolio Grid Layout without Sidebar */}
        <div ref={gridScrollRef} className="mt-8 w-full scroll-mt-[152px] lg:mt-12">
          <PortfolioGrid
            pageItems={pageItems}
            setLightbox={setLightbox}
            currentPage={currentPage}
            totalPages={totalPages}
            filteredLength={displayItems.length}
            onPage={handlePageChange}
          />
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
