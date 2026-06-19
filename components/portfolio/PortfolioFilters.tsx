'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DRIVE_TABS, type PortfolioDriveTabId } from '@/lib/portfolioCategories';

type PortfolioFiltersProps = {
  activeTab: PortfolioDriveTabId;
  activeSub: string;
  onTabChange: (tabId: PortfolioDriveTabId) => void;
  onSubChange: (sub: string) => void;
};

export function PortfolioFilters({
  activeTab,
  activeSub,
  onTabChange,
  onSubChange,
}: PortfolioFiltersProps) {
  // Get active tab details to get its subcategories
  const activeTabConfig = PORTFOLIO_DRIVE_TABS.find((t) => t.id === activeTab);
  const subcategories = activeTabConfig?.subcategories || [];

  return (
    <div className="w-full bg-black py-6">
      {/* 1. Core Category Navigation */}
      <nav aria-label="Portfolio categories" className="w-full">
        <div className="no-scrollbar flex items-center justify-start gap-5 overflow-x-auto px-4 pb-2 sm:gap-8 md:justify-center lg:gap-12">
          {PORTFOLIO_DRIVE_TABS.map((tab) => {
            const active = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => onTabChange(tab.id)}
                className={`group relative shrink-0 py-2 text-left transition-colors duration-300`}
              >
                <span
                  className={`text-[12px] font-bold uppercase tracking-[0.18em] transition-colors sm:text-[14px] ${
                    active ? 'text-accent' : 'text-white/60 group-hover:text-white/90'
                  }`}
                >
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Separator Line */}
      <div className="mx-auto my-3 w-full border-t border-white/[0.08]" />

      {/* 2. Subcategory Navigation (Show only if the selected category has subcategories) */}
      {subcategories.length > 0 && (
        <div className="w-full">
          <div className="no-scrollbar flex items-center justify-start gap-6 overflow-x-auto px-4 py-2 sm:gap-8 md:justify-center lg:gap-10">
            {subcategories.map((sub) => {
              const active = activeSub.toLowerCase() === sub.toLowerCase();

              return (
                <button
                  key={sub}
                  type="button"
                  onClick={() => onSubChange(sub)}
                  className="group relative shrink-0 pb-2 pt-1 transition-colors"
                >
                  <span
                    className={`text-[13px] font-medium transition-colors sm:text-[14px] ${
                      active ? 'text-white' : 'text-white/40 group-hover:text-white/70'
                    }`}
                  >
                    {sub}
                  </span>

                  {active && (
                    <motion.span
                      layoutId="active-subcategory-indicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default PortfolioFilters;
