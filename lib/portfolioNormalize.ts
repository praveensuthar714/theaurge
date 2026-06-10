import type { DrivePortfolioItem } from '@/lib/drivePortfolio';
import { websitePortfolio } from '@/lib/websiteData';
import { findCaseStudyForItem, type CaseStudy } from '@/lib/portfolioCaseStudies';
import {
  getMediaTypeFromMime,
  type PortfolioMediaType,
  type ServiceCategoryName,
} from '@/lib/portfolioCategories';

export type PortfolioItemKind = 'drive' | 'website' | 'design-brand';

export type DriveFolderNode = {
  id: string;
  name: string;
  path?: string[];
  children?: DriveFolderNode[];
};

export interface PortfolioDisplayItem {
  id: string;
  title: string;
  kind: PortfolioItemKind;
  /** Drive root folder name — primary filter key */
  driveRoot: string | null;
  driveCategory?: string;
  subCategory?: string;
  categoryPath?: string[];
  mediaType: PortfolioMediaType;
  thumbnailUrl?: string;
  thumbnailFallback?: string;
  previewUrl?: string;
  driveFileId?: string;
  mimeType?: string;
  externalUrl?: string;
  industry?: string;
  caseStudy?: CaseStudy;
  featured?: boolean;
  /** @deprecated use driveRoot */
  serviceCategory?: ServiceCategoryName;
}

function inferLegacyService(driveRoot: string): ServiceCategoryName {
  if (driveRoot === 'Social Media' || driveRoot === 'Election campaign') return 'Marketing';
  if (driveRoot === 'Branding') return 'Design';
  if (driveRoot === 'Photography' || driveRoot === 'Documentries' || driveRoot === 'TV Commercials') {
    return 'Production';
  }
  return 'Production';
}

export function mapItemToNewCategory(item: {
  id: string;
  title: string;
  driveRoot: string | null;
  subCategory?: string;
  kind: string;
}): { categoryId: string; subCategoryName: string } {
  if (item.kind === 'website' || !item.driveRoot) {
    return { categoryId: 'websites', subCategoryName: 'All' };
  }

  const getDeterministicIndex = (str: string, max: number) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return Math.abs(hash) % max;
  };

  const titleLower = item.title.toLowerCase();
  const root = item.driveRoot;

  // 1. EVENTS (Stand ups, Plays, Community, Booklates)
  if (titleLower.includes('standup') || titleLower.includes('comedy') || titleLower.includes('show') || titleLower.includes('event') || titleLower.includes('play') || titleLower.includes('theatre') || titleLower.includes('drama')) {
    const subs = ['Stand ups', 'Plays', 'Community', 'Booklates'];
    const idx = getDeterministicIndex(item.id, subs.length);
    return { categoryId: 'events', subCategoryName: subs[idx] };
  }

  // 2. FILMS (Short Films, Feature Films)
  if (root === 'Documentries' && (titleLower.includes('film') || titleLower.includes('movie') || titleLower.includes('short') || getDeterministicIndex(item.id, 2) === 0)) {
    const subs = ['Short Films', 'Feature Films'];
    const idx = getDeterministicIndex(item.id, subs.length);
    return { categoryId: 'films', subCategoryName: subs[idx] };
  }

  // 3. VIDEO PRODUCTION (TV Commercial, Documentries, Brand Promotion, Political)
  if (root === 'TV Commercials') {
    return { categoryId: 'video-production', subCategoryName: 'TV Commercial' };
  }
  if (root === 'Documentries') {
    return { categoryId: 'video-production', subCategoryName: 'Documentries' };
  }
  if (root === 'Election campaign') {
    return { categoryId: 'video-production', subCategoryName: 'Political' };
  }
  if (root === 'Social Media' && (titleLower.includes('promo') || titleLower.includes('ad') || titleLower.includes('commercial') || titleLower.includes('brand') || titleLower.includes('product'))) {
    return { categoryId: 'video-production', subCategoryName: 'Brand Promotion' };
  }

  // 4. DESIGN (Branding Identity Design, Logo Design, Brochure Design, Booklates Design)
  if (root === 'Branding') {
    if (titleLower.includes('logo')) {
      return { categoryId: 'design', subCategoryName: 'Logo Design' };
    }
    if (titleLower.includes('brochure') || titleLower.includes('flyer')) {
      return { categoryId: 'design', subCategoryName: 'Brochure Design' };
    }
    if (titleLower.includes('book') || titleLower.includes('cover') || titleLower.includes('magazine')) {
      return { categoryId: 'design', subCategoryName: 'Booklates Design' };
    }
    const subs = ['Branding Identity Design', 'Logo Design', 'Brochure Design', 'Booklates Design'];
    const idx = getDeterministicIndex(item.id, subs.length);
    return { categoryId: 'design', subCategoryName: subs[idx] };
  }
  if (root === 'Photography') {
    const subs = ['Branding Identity Design', 'Logo Design', 'Brochure Design', 'Booklates Design'];
    const idx = getDeterministicIndex(item.id, subs.length);
    return { categoryId: 'design', subCategoryName: subs[idx] };
  }

  // 5. MARKETING (Social Media Marketing, Performance Marketing, SEO, Offline Marketing)
  if (root === 'Social Media') {
    const subs = ['Social Media Marketing', 'Performance Marketing', 'SEO', 'Offline Marketing'];
    const idx = getDeterministicIndex(item.id, subs.length);
    return { categoryId: 'marketing', subCategoryName: subs[idx] };
  }

  // Fallback
  const allCategories = [
    { cat: 'films', subs: ['Short Films', 'Feature Films'] },
    { cat: 'video-production', subs: ['TV Commercial', 'Documentries', 'Brand Promotion', 'Political'] },
    { cat: 'design', subs: ['Branding Identity Design', 'Logo Design', 'Brochure Design', 'Booklates Design'] },
    { cat: 'marketing', subs: ['Social Media Marketing', 'Performance Marketing', 'SEO', 'Offline Marketing'] },
    { cat: 'events', subs: ['Stand ups', 'Plays', 'Community', 'Booklates'] },
  ];

  const catIdx = getDeterministicIndex(item.id, allCategories.length);
  const selectedCat = allCategories[catIdx];
  const subIdx = getDeterministicIndex(item.title, selectedCat.subs.length);

  return {
    categoryId: selectedCat.cat,
    subCategoryName: selectedCat.subs[subIdx],
  };
}

export function driveItemToDisplay(item: DrivePortfolioItem): PortfolioDisplayItem | null {
  const origDriveRoot = item.categoryPath?.[0];
  if (!origDriveRoot) return null;

  const mediaType = getMediaTypeFromMime(item.mimeType);
  const caseStudy = findCaseStudyForItem({
    title: item.title,
    categoryPath: item.categoryPath,
    parentFolder: item.parentFolder,
  });

  const { categoryId, subCategoryName } = mapItemToNewCategory({
    id: item.id || item.driveFileId,
    title: item.title || item.originalFilename || 'Portfolio Item',
    driveRoot: origDriveRoot,
    subCategory: item.categoryPath?.[1] || item.parentFolder,
    kind: 'drive',
  });

  return {
    id: item.id || item.driveFileId,
    title: item.title || item.originalFilename || 'Portfolio Item',
    kind: 'drive',
    driveRoot: categoryId,
    driveCategory: categoryId,
    subCategory: subCategoryName,
    categoryPath: [categoryId, subCategoryName],
    mediaType,
    thumbnailUrl: item.thumbnailUrl,
    thumbnailFallback: item.thumbnailFallback,
    previewUrl: item.previewUrl,
    driveFileId: item.driveFileId,
    mimeType: item.mimeType,
    caseStudy,
    featured: Boolean(caseStudy),
    serviceCategory: inferLegacyService(origDriveRoot),
  };
}

export function websiteToDisplay(site: (typeof websitePortfolio)[number]): PortfolioDisplayItem {
  return {
    id: site.id,
    title: site.title,
    kind: 'website',
    driveRoot: 'websites',
    subCategory: 'All',
    mediaType: 'other',
    externalUrl: site.url,
    mimeType: 'text/html',
    industry: site.industry,
    featured: ['w1', 'w2', 'w4', 'w12', 'w23', 'w56'].includes(site.id),
    serviceCategory: 'Website',
  };
}

export function buildBrandingPlaceholdersFromTree(
  folderTree: DriveFolderNode[] = []
): PortfolioDisplayItem[] {
  const root = folderTree[0];
  const branding = root?.children?.find((node) => node.name === 'Branding');
  if (!branding?.children?.length) return [];

  return branding.children.map((child) => {
    const { categoryId, subCategoryName } = mapItemToNewCategory({
      id: `branding-${child.id}`,
      title: child.name,
      driveRoot: 'Branding',
      subCategory: child.name,
      kind: 'design-brand',
    });

    return {
      id: `branding-${child.id}`,
      title: child.name,
      kind: 'design-brand' as const,
      driveRoot: categoryId,
      driveCategory: categoryId,
      subCategory: subCategoryName,
      categoryPath: [categoryId, subCategoryName],
      mediaType: 'image' as const,
      featured: false,
      serviceCategory: 'Design',
    };
  });
}

export function buildPortfolioCatalog(
  driveItems: DrivePortfolioItem[],
  folderTree: DriveFolderNode[] = []
): PortfolioDisplayItem[] {
  const fromDrive = driveItems
    .map(driveItemToDisplay)
    .filter((item): item is PortfolioDisplayItem => item !== null);

  const brandingTitles = new Set(
    fromDrive.filter((i) => i.driveRoot === 'Branding').map((i) => i.title.toLowerCase())
  );

  const brandingPlaceholders = buildBrandingPlaceholdersFromTree(folderTree).filter(
    (p) => !brandingTitles.has(p.title.toLowerCase())
  );

  const websites = websitePortfolio.map(websiteToDisplay);
  return [...fromDrive, ...brandingPlaceholders, ...websites];
}

/** Brand/client subfolders for one Drive root only (avoids cross-folder name collisions). */
export function getSubcategoriesForDriveRoot(
  items: PortfolioDisplayItem[],
  driveRoot: string
): string[] {
  const subs = new Set<string>();
  items
    .filter((i) => i.driveRoot === driveRoot && i.subCategory)
    .forEach((i) => {
      if (i.subCategory) subs.add(i.subCategory);
    });
  return ['All', ...Array.from(subs).sort((a, b) => a.localeCompare(b))];
}

export function pickFeaturedItems(items: PortfolioDisplayItem[], limit = 6): PortfolioDisplayItem[] {
  const picked: PortfolioDisplayItem[] = [];
  const seen = new Set<string>();
  const rootsUsed = new Set<string>();

  const add = (item: PortfolioDisplayItem) => {
    if (picked.length >= limit || seen.has(item.id)) return;
    seen.add(item.id);
    picked.push(item);
    if (item.driveRoot) rootsUsed.add(item.driveRoot);
  };

  for (const item of items.filter((i) => i.featured || i.caseStudy)) {
    if (picked.length >= limit) break;
    add(item);
  }

  for (const item of items) {
    if (picked.length >= limit) break;
    if (item.driveRoot && !rootsUsed.has(item.driveRoot)) add(item);
  }

  for (const item of items) {
    if (picked.length >= limit) break;
    add(item);
  }

  return picked.slice(0, limit);
}
