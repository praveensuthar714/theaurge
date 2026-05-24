'use client';

export function MediaLoadingShimmer({ label = 'Loading' }: { label?: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#0a0a0a]" aria-busy="true" aria-label={label}>
      <div className="absolute inset-0 bg-gradient-to-br from-[#141414] via-[#0a0a0a] to-black" />
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.6s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-8 w-8 rounded-full border-2 border-white/10 border-t-accent/80 animate-spin" />
      </div>
    </div>
  );
}

export default MediaLoadingShimmer;
