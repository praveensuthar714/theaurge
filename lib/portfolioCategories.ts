/** Portfolio navigation aligned with Google Drive folder structure. */

export const PORTFOLIO_DRIVE_TABS = [
  {
    id: 'social-media',
    label: 'Social Media',
    shortLabel: 'Social',
    driveRoot: 'Social Media',
    description: 'Reels, campaigns & channel content',
  },
  {
    id: 'photography',
    label: 'Photography',
    shortLabel: 'Photo',
    driveRoot: 'Photography',
    description: 'Editorial, interior & product shoots',
  },
  {
    id: 'branding',
    label: 'Branding',
    shortLabel: 'Brand',
    driveRoot: 'Branding',
    description: 'Identity systems, decks & print',
  },
  {
    id: 'documentaries',
    label: 'Documentaries',
    shortLabel: 'Docs',
    driveRoot: 'Documentries',
    description: 'Long-form films & brand stories',
  },
  {
    id: 'tv-commercials',
    label: 'TV Commercials',
    shortLabel: 'TVCs',
    driveRoot: 'TV Commercials',
    description: 'Broadcast spots & ad films',
  },
  {
    id: 'election',
    label: 'Election Campaign',
    shortLabel: 'Election',
    driveRoot: 'Election campaign',
    description: 'Political films & rally content',
  },
  {
    id: 'websites',
    label: 'Websites',
    shortLabel: 'Web',
    driveRoot: null,
    description: 'Live sites & digital products',
  },
] as const;

export type PortfolioDriveTabId = (typeof PORTFOLIO_DRIVE_TABS)[number]['id'];

export const MEDIA_FILTERS = [
  { id: 'all', label: 'All media' },
  { id: 'video', label: 'Videos' },
  { id: 'visual', label: 'Photos & graphics' },
] as const;

export type MediaFilterId = (typeof MEDIA_FILTERS)[number]['id'];

export type PortfolioMediaType = 'video' | 'image' | 'document' | 'other';

export function getTabByDriveRoot(driveRoot: string) {
  return PORTFOLIO_DRIVE_TABS.find((t) => t.driveRoot === driveRoot);
}

/** Human-readable category line for cards & lightbox (maps Drive typos to proper labels). */
export function formatPortfolioCategoryLine(
  driveRoot: string | null | undefined,
  subCategory?: string | null
): string {
  const rootLabel = driveRoot ? getTabByDriveRoot(driveRoot)?.label ?? driveRoot : '';
  const parts = [rootLabel, subCategory].filter(Boolean);
  return parts.join(' · ');
}

export function getMediaTypeFromMime(mimeType?: string): PortfolioMediaType {
  if (!mimeType) return 'other';
  if (mimeType.startsWith('video/')) return 'video';
  if (mimeType.startsWith('image/')) return 'image';
  if (mimeType === 'application/pdf') return 'document';
  return 'other';
}

export function matchesMediaFilter(mediaType: PortfolioMediaType, filter: MediaFilterId): boolean {
  if (filter === 'all') return true;
  if (filter === 'video') return mediaType === 'video';
  if (filter === 'visual') return mediaType === 'image' || mediaType === 'document';
  return true;
}

export type MediaFilterAvailability = {
  all: boolean;
  video: boolean;
  visual: boolean;
};

/** Which format filters apply per Drive category (common-sense defaults). */
export function getMediaFilterAvailability(driveRoot: string | null): MediaFilterAvailability | null {
  if (!driveRoot) return null;

  switch (driveRoot) {
    case 'Documentries':
    case 'TV Commercials':
      return { all: true, video: true, visual: false };
    case 'Branding':
    case 'Photography':
      return { all: true, video: false, visual: true };
    case 'Social Media':
    case 'Election campaign':
      return { all: true, video: true, visual: true };
    default:
      return { all: true, video: true, visual: true };
  }
}

export function isMediaFilterAllowed(driveRoot: string | null, filter: MediaFilterId): boolean {
  const availability = getMediaFilterAvailability(driveRoot);
  if (!availability) return true;
  return availability[filter];
}

/** Snap to a valid filter when switching to a single-media-type category. */
export function coerceMediaFilter(driveRoot: string | null, filter: MediaFilterId): MediaFilterId {
  if (!driveRoot) return filter;
  if (isMediaFilterAllowed(driveRoot, filter)) return filter;
  return getDefaultMediaFilter(driveRoot);
}

/** Only mixed categories treat format as a real refinement (not project default). */
export function isMediaFilterMeaningfulRefinement(
  driveRoot: string | null,
  filter: MediaFilterId
): boolean {
  const availability = getMediaFilterAvailability(driveRoot);
  if (!availability?.video || !availability?.visual) return false;
  return filter !== 'all';
}

export function getMediaFilterHint(driveRoot: string | null): string | null {
  const availability = getMediaFilterAvailability(driveRoot);
  if (!availability) return null;
  if (availability.video && !availability.visual) return 'This category is video only.';
  if (availability.visual && !availability.video) return 'Images and PDFs only in this category.';
  return null;
}

/** Sensible default when switching Drive tabs. */
export function getDefaultMediaFilter(driveRoot: string | null): MediaFilterId {
  if (!driveRoot) return 'all';
  if (driveRoot === 'Branding' || driveRoot === 'Photography') return 'visual';
  if (driveRoot === 'Documentries' || driveRoot === 'TV Commercials') return 'video';
  return 'all';
}

/** @deprecated kept for types used elsewhere */
export const SERVICE_CATEGORIES = [
  { id: 'production', name: 'Production' },
  { id: 'design', name: 'Design' },
  { id: 'website', name: 'Website' },
  { id: 'marketing', name: 'Marketing' },
  { id: 'events', name: 'Events' },
] as const;

export type ServiceCategoryName = (typeof SERVICE_CATEGORIES)[number]['name'];
