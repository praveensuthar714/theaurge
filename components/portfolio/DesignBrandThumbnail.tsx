'use client';

import { Palette } from 'lucide-react';

/** Uniform branding / design card when Drive assets are folder-only. */
export function DesignBrandThumbnail({ title }: { title: string }) {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#121212] via-[#0a0a0a] to-black p-6">
      <div className="absolute inset-0 opacity-20">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              'linear-gradient(rgba(217,255,0,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(217,255,0,0.08) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
      </div>
      <div className="relative mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-accent/30 bg-accent/10">
        <Palette className="h-8 w-8 text-accent" strokeWidth={1.25} />
      </div>
      <p className="relative text-[10px] font-bold uppercase tracking-[0.4em] text-accent">Brand & Design</p>
      <p className="relative mt-3 max-w-full truncate text-center text-sm font-semibold text-white">{title}</p>
    </div>
  );
}

export default DesignBrandThumbnail;
