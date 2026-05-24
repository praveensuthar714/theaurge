'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { PortfolioThumbnail } from '@/components/portfolio/PortfolioThumbnail';
import { PortfolioLightbox } from '@/components/portfolio/PortfolioLightbox';

interface DrivePortfolioItem {
  id: string;
  title: string;
  slug?: string;
  originalFilename?: string;
  categoryPath: string[];
  parentFolder?: string;
  nestedFolderPath?: string;
  driveFileId: string;
  thumbnailUrl: string;
  thumbnailFallback?: string;
  previewUrl: string;
  mimeType: string;
  createdTime?: string;
  modifiedTime?: string;
  tags?: string[];
  description?: string | null;
  orderIndex?: number;
  industry?: string | null;
  campaign?: string | null;
}

interface DriveFolderNode {
  id: string;
  name: string;
  slug?: string;
  path: string[];
  parentId: string | null;
  childFolderIds: string[];
  itemIds: string[];
  itemCount: number;
  childCount: number;
  level: number;
  children?: DriveFolderNode[];
}

interface PortfolioCarouselV2Props {
  items?: DrivePortfolioItem[];
  folderTree?: DriveFolderNode[];
}

const getRootCategories = (folderTree: DriveFolderNode[] = []) => {
  if (!Array.isArray(folderTree) || folderTree.length === 0) return [];
  const root = folderTree[0];
  return Array.isArray(root?.children) ? root.children : [];
};

const PortfolioCarouselV2: React.FC<PortfolioCarouselV2Props> = ({ items = [], folderTree = [] }) => {
  const categories = useMemo(() => getRootCategories(folderTree), [folderTree]);
  const [activeCategory, setActiveCategory] = useState(categories[0]?.name || 'All');
  const [activeSub, setActiveSub] = useState('All');
  const [lightbox, setLightbox] = useState<DrivePortfolioItem | null>(null);

  const activeCategoryNode = categories.find((category) => category.name === activeCategory) || categories[0];
  const subcategories = useMemo(() => {
    const children = activeCategoryNode?.children || [];
    return ['All', ...children.map((child) => child.name)];
  }, [activeCategoryNode]);

  useEffect(() => {
    if (categories.length > 0 && activeCategory === 'All') {
      setActiveCategory(categories[0].name);
    }
  }, [categories, activeCategory]);

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      if (!item.categoryPath || item.categoryPath.length === 0) return false;
      if (activeCategory !== 'All' && item.categoryPath[0] !== activeCategory) return false;
      if (activeSub !== 'All' && item.categoryPath[1] !== activeSub) return false;
      return true;
    });
  }, [items, activeCategory, activeSub]);

  return (
    <section className="relative overflow-hidden bg-black py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(217,255,0,0.06),transparent)]" />
      <div className="section-container relative">
        <div className="mb-12 md:mb-16 max-w-3xl">
          <span className="mb-4 block text-[10px] font-bold tracking-[0.6em] text-accent uppercase">Selected Work</span>
          <h2 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
            Architectural Archive<span className="text-accent">.</span>
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-white/45">
            Curated from your Drive portfolio. Thumbnails load on demand; full previews open only when you click a project.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap items-center gap-2">
          {categories.length === 0 ? (
            <span className="rounded-full bg-white/5 px-4 py-2 text-white/50 text-sm">No categories in portfolio.json</span>
          ) : (
            categories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => {
                  setActiveCategory(category.name);
                  setActiveSub('All');
                }}
                className={`rounded-full px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.35em] transition-all duration-300 ${
                  activeCategory === category.name
                    ? 'bg-accent text-black shadow-[0_0_30px_rgba(217,255,0,0.2)]'
                    : 'bg-white/5 text-white/55 hover:bg-white/10 hover:text-white'
                }`}
              >
                {category.name}
              </button>
            ))
          )}
        </div>

        {subcategories.length > 1 && (
          <div className="mb-10 flex flex-wrap items-center gap-2 border-b border-white/5 pb-8">
            {subcategories.map((sub) => (
              <button
                key={sub}
                type="button"
                onClick={() => setActiveSub(sub)}
                className={`rounded-full px-4 py-2 text-[9px] font-bold uppercase tracking-[0.3em] transition-all duration-300 ${
                  activeSub === sub ? 'bg-white text-black' : 'text-white/40 hover:text-white/70'
                }`}
              >
                {sub}
              </button>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
          {filteredItems.length === 0 ? (
            <div className="col-span-full rounded-2xl border border-white/10 bg-white/[0.02] p-16 text-center">
              <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-white/30">No items in this category</p>
            </div>
          ) : (
            filteredItems.map((item, index) => (
              <motion.button
                key={item.id}
                type="button"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: Math.min(index * 0.04, 0.24) }}
                onClick={() => setLightbox(item)}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0A0A0A] text-left shadow-xl shadow-black/40 transition-all duration-500 hover:-translate-y-1 hover:border-accent/25 hover:shadow-[0_24px_60px_-12px_rgba(0,0,0,0.8)] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <PortfolioThumbnail
                    item={{
                      thumbnailUrl: item.thumbnailUrl,
                      thumbnailFallback: item.thumbnailFallback,
                      driveFileId: item.driveFileId,
                      previewUrl: item.previewUrl,
                      mimeType: item.mimeType,
                    }}
                    alt={item.title}
                    variant="cinematic"
                    imageClassName="group-hover:scale-105 duration-[1.2s]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-75" />
                  <div className="absolute inset-x-0 bottom-0 z-10 p-5 md:p-6">
                    <p className="mb-1.5 text-[9px] font-bold uppercase tracking-[0.35em] text-accent/90">
                      {item.categoryPath.join(' / ')}
                    </p>
                    <h3 className="truncate text-lg font-semibold tracking-tight text-white md:text-xl">{item.title}</h3>
                  </div>
                </div>
                <div className="flex items-center justify-between border-t border-white/5 bg-[#050505] px-5 py-3.5">
                  <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-white/35">Open preview</span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-500 group-hover:border-accent/40 group-hover:bg-accent group-hover:text-black">
                    <ArrowUpRight className="h-4 w-4 text-accent group-hover:text-black" />
                  </span>
                </div>
              </motion.button>
            ))
          )}
        </div>
      </div>

      <PortfolioLightbox
        item={lightbox}
        onClose={() => setLightbox(null)}
        subtitle={lightbox?.categoryPath?.join(' / ')}
      />
    </section>
  );
};

export default PortfolioCarouselV2;
