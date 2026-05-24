import type { PortfolioDisplayItem } from '@/lib/portfolioNormalize';

/** Stable string hash for seeded ordering (same filters → same order across pages). */
function hashSeed(seed: string): number {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function seededShuffle<T>(items: T[], seed: string): T[] {
  if (items.length <= 1) return [...items];
  const out = [...items];
  let state = hashSeed(seed) || 1;

  for (let i = out.length - 1; i > 0; i--) {
    state = (Math.imul(state, 1103515245) + 12345) >>> 0;
    const j = state % (i + 1);
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/** Group key — project/brand first, then media kind for visual variety within a folder. */
function bucketKey(item: PortfolioDisplayItem): string {
  const project =
    item.subCategory?.trim() ||
    item.industry?.trim() ||
    item.categoryPath?.[1]?.trim() ||
    item.categoryPath?.slice(-1)[0]?.trim();

  const root = item.driveRoot || item.kind || 'misc';
  const base = project || root;

  if (item.mediaType === 'video') return `${base}::video`;
  if (item.mediaType === 'image') return `${base}::image`;
  if (item.mediaType === 'document') return `${base}::doc`;
  return base;
}

/** Reduce long runs from the same project (e.g. 12 interior shots in a row). */
function breakConsecutiveRuns(items: PortfolioDisplayItem[], maxRun = 2): PortfolioDisplayItem[] {
  if (items.length <= maxRun + 1) return items;

  const result = [...items];
  const keyOf = (item: PortfolioDisplayItem) =>
    item.subCategory?.trim() || item.industry?.trim() || item.driveRoot || item.id;

  for (let i = maxRun; i < result.length; i++) {
    const key = keyOf(result[i]);
    let run = 1;
    for (let j = i - 1; j >= 0 && keyOf(result[j]) === key; j--) run++;

    if (run <= maxRun) continue;

    const swapAt = result.findIndex((candidate, idx) => idx > i && keyOf(candidate) !== key);
    if (swapAt === -1) continue;
    [result[i], result[swapAt]] = [result[swapAt], result[i]];
  }

  return result;
}

/**
 * Mix items from different projects/brands so the grid does not show long runs
 * from one folder. Round-robin across buckets + shuffle within bucket.
 */
export function interleavePortfolioItems(
  items: PortfolioDisplayItem[],
  seed = 'portfolio'
): PortfolioDisplayItem[] {
  if (items.length <= 1) return items;

  const buckets = new Map<string, PortfolioDisplayItem[]>();
  for (const item of items) {
    const key = bucketKey(item);
    const list = buckets.get(key) ?? [];
    list.push(item);
    buckets.set(key, list);
  }

  if (buckets.size <= 1) {
    return breakConsecutiveRuns(seededShuffle(items, `${seed}:mono`), 2);
  }

  const bucketKeys = [...buckets.keys()].sort((a, b) => a.localeCompare(b));
  const queues = bucketKeys.map((key) => seededShuffle(buckets.get(key)!, `${seed}:${key}`));

  const mixed: PortfolioDisplayItem[] = [];
  let remaining = items.length;

  while (remaining > 0) {
    let picked = false;
    for (const queue of queues) {
      if (queue.length === 0) continue;
      mixed.push(queue.shift()!);
      remaining -= 1;
      picked = true;
    }
    if (!picked) break;
  }

  return breakConsecutiveRuns(mixed, 2);
}

export function shouldInterleavePortfolioItems(activeSub: string): boolean {
  return activeSub === 'All';
}
