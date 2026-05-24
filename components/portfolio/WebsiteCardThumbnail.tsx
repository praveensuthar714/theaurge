'use client';

import { Globe } from 'lucide-react';

/** Dark, minimal website card — no white panels. */
export function WebsiteCardThumbnail({ title, industry }: { title: string; industry?: string }) {
  const host = title.replace(/\s+/g, '').toLowerCase();

  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden bg-[#080808]">
      <div className="flex h-7 shrink-0 items-center gap-1.5 border-b border-white/[0.06] bg-[#0c0c0c] px-2.5">
        <span className="h-1.5 w-1.5 rounded-full bg-red-500/70" />
        <span className="h-1.5 w-1.5 rounded-full bg-amber-400/70" />
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500/70" />
        <span className="ml-1 truncate font-mono text-[9px] text-white/30">{host}.com</span>
      </div>
      <div className="relative flex flex-1 flex-col items-center justify-center gap-2 overflow-hidden p-4">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(217,255,0,0.08),transparent_50%)]" />
        <div className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-black/60 backdrop-blur-sm">
          <Globe className="h-5 w-5 text-accent" strokeWidth={1.5} />
        </div>
        <p className="relative text-center text-sm font-semibold tracking-tight text-white">{title}</p>
        {industry && (
          <p className="relative text-[9px] font-bold uppercase tracking-[0.3em] text-white/35">{industry}</p>
        )}
      </div>
    </div>
  );
}

export default WebsiteCardThumbnail;
