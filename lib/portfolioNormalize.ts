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

export function driveItemToDisplay(item: DrivePortfolioItem): PortfolioDisplayItem | null {
  const driveRoot = item.categoryPath?.[0];
  if (!driveRoot) return null;

  const mediaType = getMediaTypeFromMime(item.mimeType);
  const caseStudy = findCaseStudyForItem({
    title: item.title,
    categoryPath: item.categoryPath,
    parentFolder: item.parentFolder,
  });

  return {
    id: item.id || item.driveFileId,
    title: item.title || item.originalFilename || 'Portfolio Item',
    kind: 'drive',
    driveRoot,
    driveCategory: driveRoot,
    subCategory: item.categoryPath?.[1] || item.parentFolder,
    categoryPath: item.categoryPath,
    mediaType,
    thumbnailUrl: item.thumbnailUrl,
    thumbnailFallback: item.thumbnailFallback,
    previewUrl: item.previewUrl,
    driveFileId: item.driveFileId,
    mimeType: item.mimeType,
    caseStudy,
    featured: Boolean(caseStudy),
    serviceCategory: inferLegacyService(driveRoot),
  };
}

export function websiteToDisplay(site: (typeof websitePortfolio)[number]): PortfolioDisplayItem {
  return {
    id: site.id,
    title: site.title,
    kind: 'website',
    driveRoot: null,
    subCategory: site.industry,
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

  return branding.children.map((child) => ({
    id: `branding-${child.id}`,
    title: child.name,
    kind: 'design-brand' as const,
    driveRoot: 'Branding',
    driveCategory: 'Branding',
    subCategory: child.name,
    categoryPath: child.path ?? ['Branding', child.name],
    mediaType: 'image' as const,
    featured: false,
    serviceCategory: 'Design',
  }));
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
