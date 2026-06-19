/** Portfolio navigation categories and subcategories. */

export const PORTFOLIO_DRIVE_TABS = [
  {
    id: 'all',
    label: 'ALL',
    subcategories: [] as string[],
  },
  {
    id: 'films',
    label: 'FILMS',
    subcategories: ['Short Films', 'Feature Films'] as string[],
  },
  {
    id: 'video-production',
    label: 'VIDEO PRODUCTION',
    subcategories: ['TV Commercial', 'Documentries', 'Brand Promotion', 'Political'] as string[],
  },
  {
    id: 'design',
    label: 'DESIGN',
    subcategories: ['Branding Identity Design', 'Logo Design', 'Brochure Design', 'Booklates Design'] as string[],
  },
  {
    id: 'marketing',
    label: 'MARKETING',
    subcategories: ['Social Media Marketing', 'Performance Marketing', 'SEO', 'Offline Marketing'] as string[],
  },
  {
    id: 'website',
    label: 'WEBSITE',
    subcategories: [] as string[],
  },
  {
    id: 'events',
    label: 'EVENTS',
    subcategories: ['Stand ups', 'Plays', 'Community', 'Booklates'] as string[],
  },
] as const;

export type PortfolioDriveTabId = (typeof PORTFOLIO_DRIVE_TABS)[number]['id'];

export type PortfolioMediaType = 'video' | 'image' | 'document' | 'other';

export function getMediaTypeFromMime(mimeType?: string): PortfolioMediaType {
  if (!mimeType) return 'other';
  if (mimeType.startsWith('video/')) return 'video';
  if (mimeType.startsWith('image/')) return 'image';
  if (mimeType === 'application/pdf') return 'document';
  return 'other';
}

export interface CategoryMapping {
  categoryId: PortfolioDriveTabId;
  subcategory: string;
}

/** Matches each item to the new horizontal category and subcategory structure */
export function mapItemToCategory(item: {
  kind: string;
  driveRoot: string | null;
  categoryPath?: string[] | null;
  title: string;
}): CategoryMapping {
  if (item.kind === 'website') {
    return { categoryId: 'website', subcategory: '' };
  }

  const root = item.driveRoot || (item.categoryPath && item.categoryPath[0]);
  const subFolder = (item.categoryPath && item.categoryPath[1]) || '';
  const titleLower = item.title.toLowerCase();

  // 1. FILMS & RELATED BOOKLATES
  if (root === 'Documentries' && subFolder === 'KKLS') {
    if (titleLower.includes('book') || titleLower.includes('script') || titleLower.includes('draft')) {
      return { categoryId: 'design', subcategory: 'Booklates Design' };
    }
    if (titleLower.includes('jath')) {
      return { categoryId: 'video-production', subcategory: 'Documentries' };
    }
    return { categoryId: 'films', subcategory: 'Short Films' };
  }

  // 2. VIDEO PRODUCTION & BRAND PROMOTION
  if (root === 'TV Commercials') {
    const isPromo = titleLower.includes('ad') || 
                    titleLower.includes('short') || 
                    titleLower.includes('promo') || 
                    titleLower.includes('trailer') || 
                    titleLower.includes('run') || 
                    titleLower.includes('yoga') || 
                    titleLower.includes('work') || 
                    titleLower.includes('social') ||
                    titleLower.includes('mobster');
    if (isPromo) {
      return { categoryId: 'video-production', subcategory: 'Brand Promotion' };
    }
    return { categoryId: 'video-production', subcategory: 'TV Commercial' };
  }
  
  if (root === 'Documentries') {
    return { categoryId: 'video-production', subcategory: 'Documentries' };
  }
  
  if (root === 'Election campaign') {
    return { categoryId: 'video-production', subcategory: 'Political' };
  }

  // 3. DESIGN
  if (root === 'Branding') {
    if (titleLower.includes('logo')) {
      return { categoryId: 'design', subcategory: 'Logo Design' };
    }
    if (titleLower.includes('brochure')) {
      return { categoryId: 'design', subcategory: 'Brochure Design' };
    }
    if (titleLower.includes('book') || titleLower.includes('booklate') || titleLower.includes('booklet')) {
      return { categoryId: 'design', subcategory: 'Booklates Design' };
    }
    return { categoryId: 'design', subcategory: 'Branding Identity Design' };
  }

  // 4. MARKETING
  if (root === 'Social Media') {
    if (titleLower.includes('seo')) {
      return { categoryId: 'marketing', subcategory: 'SEO' };
    }
    if (titleLower.includes('performance')) {
      return { categoryId: 'marketing', subcategory: 'Performance Marketing' };
    }
    if (titleLower.includes('offline')) {
      return { categoryId: 'marketing', subcategory: 'Offline Marketing' };
    }
    return { categoryId: 'marketing', subcategory: 'Social Media Marketing' };
  }

  // 5. PHOTOGRAPHY mapping
  if (root === 'Photography') {
    if (subFolder === 'Interior') {
      return { categoryId: 'design', subcategory: 'Branding Identity Design' };
    }
    return { categoryId: 'marketing', subcategory: 'Social Media Marketing' };
  }

  // Fallback
  return { categoryId: 'marketing', subcategory: 'Social Media Marketing' };
}

/** Human-readable category line for cards & lightbox. */
export function formatPortfolioCategoryLine(
  driveRoot: string | null | undefined,
  subCategory?: string | null
): string {
  const parts = [driveRoot, subCategory].filter(Boolean);
  return parts.join(' · ');
}

// Deprecated fields kept for type checks in build
export const SERVICE_CATEGORIES = [
  { id: 'production', name: 'Production' },
  { id: 'design', name: 'Design' },
  { id: 'website', name: 'Website' },
  { id: 'marketing', name: 'Marketing' },
  { id: 'events', name: 'Events' },
] as const;
export type ServiceCategoryName = (typeof SERVICE_CATEGORIES)[number]['name'];
