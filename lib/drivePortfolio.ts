import fs from 'fs';
import path from 'path';

export interface DrivePortfolioItem {
  id: string;
  title: string;
  slug: string;
  originalFilename: string;
  categoryPath: string[];
  parentFolder: string;
  nestedFolderPath: string;
  driveFileId: string;
  thumbnailUrl: string;
  thumbnailFallback?: string;
  previewUrl: string;
  mimeType: string;
  createdTime: string;
  modifiedTime: string;
  tags: string[];
  description: string | null;
  orderIndex: number;
  industry?: string | null;
  campaign?: string | null;
}

export interface DriveFolderNode {
  id: string;
  name: string;
  slug: string;
  path: string[];
  parentId: string | null;
  childFolderIds: string[];
  itemIds: string[];
  itemCount: number;
  childCount: number;
  level: number;
}

export interface DrivePortfolioSchema {
  version: '1.0';
  generatedAt: string;
  source: {
    type: 'google-drive';
    authentication: 'apiKey';
    rootFolderId: string;
    apiKeyHint?: string;
    backup?: {
      localSyncPath?: string;
      enabled: boolean;
    };
  };
  folderTree: DriveFolderNode[];
  items: DrivePortfolioItem[];
}

const PORTFOLIO_JSON_PATH = path.join(process.cwd(), 'public', 'portfolio.json');

function isValidUrl(url: unknown): boolean {
  return typeof url === 'string' && /^(https?:)?\/\//.test(url);
}

export async function getPortfolioCatalog(): Promise<DrivePortfolioSchema> {
  try {
    const raw = await fs.promises.readFile(PORTFOLIO_JSON_PATH, 'utf-8');
    const portfolio = JSON.parse(raw) as DrivePortfolioSchema;

    const totalItems = Array.isArray(portfolio.items) ? portfolio.items.length : 0;
    const totalCategories = Array.isArray(portfolio.folderTree) && portfolio.folderTree[0]?.children ? portfolio.folderTree[0].children.length : 0;
    const invalidThumbnails = portfolio.items.filter(item => !isValidUrl(item.thumbnailUrl));
    const invalidPreviewUrls = portfolio.items.filter(item => !isValidUrl(item.previewUrl));
    const missingThumbnails = portfolio.items.filter(item => !item.thumbnailUrl || item.thumbnailUrl.trim() === '');

    console.info('[DrivePortfolio] Loaded portfolio.json', {
      totalItems,
      totalCategories,
      invalidThumbnails: invalidThumbnails.length,
      invalidPreviewUrls: invalidPreviewUrls.length,
      missingThumbnails: missingThumbnails.length,
    });

    return portfolio;
  } catch (error) {
    console.error('[DrivePortfolio] Unable to load portfolio JSON from public/portfolio.json', error);
    return {
      version: '1.0',
      generatedAt: new Date().toISOString(),
      source: {
        type: 'google-drive',
        authentication: 'apiKey',
        rootFolderId: '',
        backup: { enabled: false }
      },
      folderTree: [],
      items: []
    };
  }
}
