'use client';

import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search, SlidersHorizontal, X } from 'lucide-react';
import {
  getMediaFilterAvailability,
  getMediaFilterHint,
  isMediaFilterAllowed,
  isMediaFilterMeaningfulRefinement,
  MEDIA_FILTERS,
  PORTFOLIO_DRIVE_TABS,
  type MediaFilterId,
  type PortfolioDriveTabId,
} from '@/lib/portfolioCategories';

export type PortfolioFiltersVariant = 'category-bar' | 'sidebar' | 'compact-bar';

type PortfolioFiltersProps = {
  variant?: PortfolioFiltersVariant;
  activeTab: PortfolioDriveTabId;
  activeMedia: MediaFilterId;
  activeSub: string;
  countsByTab: Record<string, number>;
  subcategories: string[];
  resultCount: number;
  isWebsiteTab: boolean;
  isFeatured: boolean;
  showMediaFilters: boolean;
  driveRoot?: string | null;
  onTabChange: (tabId: PortfolioDriveTabId) => void;
  onMediaChange: (media: MediaFilterId) => void;
  onSubChange: (sub: string) => void;
  onClearRefinements?: () => void;
};

function FilterLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-white/38">
      {children}
    </span>
  );
}

function ProjectChipList({
  subcategories,
  activeSub,
  onSubChange,
}: {
  subcategories: string[];
  activeSub: string;
  onSubChange: (sub: string) => void;
}) {
  const [query, setQuery] = useState('');
  const showSearch = subcategories.length > 7;

  const filtered = useMemo(() => {
    if (!query.trim()) return subcategories;
    const q = query.toLowerCase();
    return subcategories.filter((sub) => sub === 'All' || sub.toLowerCase().includes(q));
  }, [subcategories, query]);

  return (
    <div className="space-y-2">
      {showSearch && (
        <div className="relative">
          <Search className="pointer-events-none absolute left-2.5 top-1/2 h-3 w-3 -translate-y-1/2 text-white/30" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search…"
            className="w-full rounded-md border border-white/10 bg-black/40 py-2 pl-8 pr-2 text-xs text-white placeholder:text-white/25 focus:border-accent/35 focus:outline-none"
            aria-label="Search projects"
          />
        </div>
      )}

      <div
        className="flex flex-wrap gap-1.5"
        role="listbox"
        aria-label="Project or brand"
      >
        {filtered.map((sub) => {
          const active = activeSub === sub;
          const label = sub === 'All' ? 'All projects' : sub;

          return (
            <button
              key={sub}
              type="button"
              role="option"
              aria-selected={active}
              onClick={() => onSubChange(sub)}
              className={`rounded-full border px-3 py-2 text-left text-[12px] font-medium leading-tight transition-all duration-200 sm:text-[13px] ${
                active
                  ? 'border-accent/50 bg-accent/15 text-white shadow-[0_0_20px_rgba(217,255,0,0.08)]'
                  : 'border-white/10 bg-white/[0.03] text-white/55 hover:border-white/20 hover:bg-white/[0.06] hover:text-white/85'
              }`}
            >
              {label}
            </button>
          );
        })}
        {filtered.length === 0 && (
          <p className="px-1 py-2 text-xs text-white/35">No projects match that search.</p>
        )}
      </div>
    </div>
  );
}

/** Category tabs — sticky header rail */
export function CategoryBar({
  activeTab,
  countsByTab,
  onTabChange,
}: Pick<PortfolioFiltersProps, 'activeTab' | 'countsByTab' | 'onTabChange'>) {
  return (
    <nav aria-label="Portfolio categories" className="relative w-full py-3 md:py-4">
      <div className="no-scrollbar relative flex items-end gap-6 overflow-x-auto sm:gap-9 md:justify-center md:gap-11">
        {PORTFOLIO_DRIVE_TABS.map((tab) => {
          const count = countsByTab[tab.id] ?? 0;
          const active = activeTab === tab.id;
          const disabled = count === 0;

          return (
            <button
              key={tab.id}
              type="button"
              disabled={disabled}
              onClick={() => onTabChange(tab.id)}
              className={`group relative shrink-0 pb-3 text-left transition-colors duration-300 ${
                disabled ? 'cursor-not-allowed opacity-25' : ''
              }`}
            >
              <span
                className={`flex items-baseline gap-1.5 whitespace-nowrap transition-colors ${
                  active ? 'text-white' : 'text-white/36 group-hover:text-white/58'
                }`}
              >
                <span className="text-[13px] font-medium tracking-[-0.01em] sm:text-[15px]">
                  {tab.label}
                </span>
                {count > 0 && (
                  <span
                    className={`text-[10px] tabular-nums sm:text-[11px] ${
                      active ? 'text-accent/80' : 'text-white/22'
                    }`}
                  >
                    {count}
                  </span>
                )}
              </span>

              {active && (
                <motion.span
                  layoutId="portfolio-category-indicator"
                  className="absolute -bottom-px left-0 right-0 h-[2px] bg-accent"
                  transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}

function FormatFilterButtons({
  driveRoot,
  activeMedia,
  onMediaChange,
}: {
  driveRoot: string | null;
  activeMedia: MediaFilterId;
  onMediaChange: (media: MediaFilterId) => void;
}) {
  const availability = getMediaFilterAvailability(driveRoot);
  const hint = getMediaFilterHint(driveRoot);

  return (
    <div>
      <FilterLabel>Format</FilterLabel>
      {hint && <p className="mb-2 text-[11px] leading-snug text-white/35">{hint}</p>}
      <div className="flex flex-col gap-1">
        {MEDIA_FILTERS.map((mf) => {
          const allowed = availability ? availability[mf.id] : true;
          const active = activeMedia === mf.id;

          return (
            <button
              key={mf.id}
              type="button"
              disabled={!allowed}
              title={!allowed ? 'Not available for this category' : undefined}
              onClick={() => allowed && onMediaChange(mf.id)}
              className={`rounded-lg px-3.5 py-3 text-left text-[13px] font-medium transition-colors ${
                !allowed
                  ? 'cursor-not-allowed border border-transparent text-white/18'
                  : active
                    ? 'bg-accent text-black'
                    : 'text-white/55 hover:bg-white/[0.05] hover:text-white'
              }`}
            >
              {mf.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function SidebarFilters(props: PortfolioFiltersProps) {
  const {
    activeMedia,
    activeSub,
    subcategories,
    resultCount,
    isWebsiteTab,
    isFeatured,
    showMediaFilters,
    driveRoot = null,
    onMediaChange,
    onSubChange,
    onClearRefinements,
  } = props;

  const hasSubFilters = !isWebsiteTab && subcategories.length > 1;
  const hasFormatRefinement = isMediaFilterMeaningfulRefinement(driveRoot, activeMedia);
  const hasActiveRefinement =
    !isWebsiteTab && (hasFormatRefinement || (activeSub !== 'All' && hasSubFilters));

  return (
    <aside className="flex flex-col gap-6 rounded-xl border border-white/[0.08] bg-[#0c0c0c] p-5 md:p-6">
      {!isWebsiteTab && showMediaFilters && driveRoot && (
        <FormatFilterButtons
          driveRoot={driveRoot}
          activeMedia={activeMedia}
          onMediaChange={onMediaChange}
        />
      )}

      {!isWebsiteTab && hasSubFilters && (
        <div>
          <FilterLabel>Project</FilterLabel>
          <ProjectChipList
            subcategories={subcategories}
            activeSub={activeSub}
            onSubChange={onSubChange}
          />
        </div>
      )}

      {isWebsiteTab && (
        <p className="text-sm leading-relaxed text-white/45">
          Live website builds — open any card to preview the site in context.
        </p>
      )}

      <div className="border-t border-white/[0.08] pt-4">
        <p className="text-sm text-white/45">
          <span className="text-xl font-semibold tabular-nums text-accent">{resultCount}</span>
          <span className="ml-1.5">projects</span>
        </p>
        {hasActiveRefinement && onClearRefinements && (
          <button
            type="button"
            onClick={onClearRefinements}
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg border border-white/12 py-2.5 text-xs font-semibold text-white/55 transition-colors hover:border-white/22 hover:text-white"
          >
            <X className="h-4 w-4" />
            Clear filters
          </button>
        )}
      </div>
    </aside>
  );
}

function CompactBarFilters(props: PortfolioFiltersProps) {
  return (
    <CategoryBar
      activeTab={props.activeTab}
      countsByTab={props.countsByTab}
      onTabChange={props.onTabChange}
    />
  );
}

type MobileFiltersDrawerProps = Pick<
  PortfolioFiltersProps,
  'activeMedia' | 'activeSub' | 'resultCount' | 'isWebsiteTab' | 'subcategories' | 'driveRoot'
> & {
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
};

/** Mobile: labeled toggle + collapsible filter panel (below category tabs) */
export function MobileFiltersDrawer({
  open,
  onToggle,
  activeMedia,
  activeSub,
  resultCount,
  isWebsiteTab,
  subcategories,
  driveRoot,
  children,
}: MobileFiltersDrawerProps) {
  if (isWebsiteTab) return null;

  const hasSubFilters = subcategories.length > 1;
  const hasFormatRefinement = isMediaFilterMeaningfulRefinement(driveRoot ?? null, activeMedia);
  const hasActiveRefinement = hasFormatRefinement || (activeSub !== 'All' && hasSubFilters);

  const mediaLabel = MEDIA_FILTERS.find((m) => m.id === activeMedia)?.label;
  const summaryParts: string[] = [];
  if (hasFormatRefinement && mediaLabel) summaryParts.push(mediaLabel);
  else if (driveRoot && getMediaFilterHint(driveRoot)) summaryParts.push(getMediaFilterHint(driveRoot)!);
  if (activeSub !== 'All') summaryParts.push(activeSub);
  const summary =
    summaryParts.length > 0 ? summaryParts.join(' · ') : 'Format & project';

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls="portfolio-mobile-filters"
        className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3.5 text-left transition-all duration-300 ${
          open || hasActiveRefinement
            ? 'border-accent/30 bg-accent/[0.06]'
            : 'border-white/10 bg-white/[0.03] hover:border-white/18 hover:bg-white/[0.05]'
        }`}
      >
        <span
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border ${
            hasActiveRefinement
              ? 'border-accent/35 bg-accent/10'
              : 'border-white/10 bg-black/40'
          }`}
        >
          <SlidersHorizontal
            className={`h-[18px] w-[18px] ${hasActiveRefinement ? 'text-accent' : 'text-white/70'}`}
            aria-hidden
          />
        </span>

        <span className="min-w-0 flex-1">
          <span className="flex items-center gap-2">
            <span className="text-sm font-semibold text-white">Filters</span>
            {hasActiveRefinement && (
              <span className="rounded-full bg-accent/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-accent">
                Active
              </span>
            )}
          </span>
          <span className="mt-0.5 block truncate text-xs text-white/45">{summary}</span>
        </span>

        <span className="flex shrink-0 flex-col items-end gap-1.5">
          <span className="text-[11px] font-medium tabular-nums text-white/40">
            <span className="font-semibold text-accent">{resultCount}</span> items
          </span>
          <ChevronDown
            className={`h-4 w-4 text-white/45 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
            aria-hidden
          />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id="portfolio-mobile-filters"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pt-3">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function PortfolioFilters({ variant, ...props }: PortfolioFiltersProps) {
  if (variant === 'category-bar') {
    return (
      <CategoryBar
        activeTab={props.activeTab}
        countsByTab={props.countsByTab}
        onTabChange={props.onTabChange}
      />
    );
  }
  if (variant === 'sidebar') return <SidebarFilters {...props} />;
  return <CompactBarFilters {...props} />;
}

export default PortfolioFilters;
