#!/usr/bin/env node
require('dotenv').config({ path: '.env.local' });
const fs = require('fs/promises');
const path = require('path');
const crypto = require('crypto');

// Load .env.local so Node scripts pick up Next.js environment values
try {
  const dotenv = require('dotenv');
  dotenv.config({ path: path.join(process.cwd(), '.env.local') });
} catch (e) {
  // dotenv optional; continue if not present
}

const API_KEY = process.env.GOOGLE_DRIVE_API_KEY;
const ROOT_FOLDER_ID = process.env.GOOGLE_DRIVE_ROOT_FOLDER_ID;
let ROOT_ID = ROOT_FOLDER_ID; // mutable resolved root id
const TEST_MODE = ['1', 'true', 'yes', 'on'].includes((process.env.DRIVE_PORTFOLIO_TEST || '').toLowerCase());
const OUTPUT_PATH = process.env.PORTFOLIO_OUTPUT_PATH || path.join(process.cwd(), 'public', 'portfolio.json');
const USER_AGENT = 'the-aurge-drive-portfolio-generator/1.0';
const VERBOSE = ['1', 'true', 'yes', 'on'].includes((process.env.DRIVE_PORTFOLIO_DEBUG || '').toLowerCase());
const API_BASE = 'https://www.googleapis.com/drive/v3';
const VIDEO_MIME_RE = /^video\//i;
const IMAGE_MIME_RE = /^image\//i;
const PDF_MIME = 'application/pdf';

function isPortfolioMediaMime(mimeType) {
  if (!mimeType) return false;
  return VIDEO_MIME_RE.test(mimeType) || IMAGE_MIME_RE.test(mimeType) || mimeType === PDF_MIME;
}
const FOLDER_MIME = 'application/vnd.google-apps.folder';
const SHORTCUT_MIME = 'application/vnd.google-apps.shortcut';
const ROOT_ID_RE = /^[a-zA-Z0-9_-]{10,}$/;

function logVerbose(...args) {
  if (VERBOSE) console.log('[drive-portfolio-debug]', ...args);
}

function slugify(value) {
  return value
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-_]/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function sanitizeName(value) {
  return value
    .toString()
    .trim()
    .replace(/\s{2,}/g, ' ')
    .replace(/[\u0000-\u001F\u007F]/g, '')
    .replace(/[<>:\"/\\|?*]/g, '')
    .replace(/\.$/, '')
    .trim();
}

function createUniqueSlug(base, map) {
  const root = slugify(base) || 'item';
  const current = map.get(root) || 0;
  map.set(root, current + 1);
  return current === 0 ? root : `${root}-${current + 1}`;
}

function inferTags(name, pathSegments) {
  const source = [name, ...pathSegments].join(' ').toLowerCase();
  const tokens = Array.from(new Set(
    source
      .replace(/[^a-z0-9 ]/g, ' ')
      .split(' ')
      .filter(Boolean)
  ));
  return tokens.slice(0, 12);
}

function inferMetadata(sourceText) {
  const text = sourceText.toLowerCase();
  const industry = text.match(/real estate|finance|healthcare|automotive|e-commerce|travel|education|food|fashion|technology|agency/)?.[0] || null;
  const campaign = text.match(/launch|holiday|rebrand|awareness|promo|social|event|product/)?.[0] || null;
  return { industry, campaign };
}

function validateRootFolderId(folderId) {
  return typeof folderId === 'string' && ROOT_ID_RE.test(folderId);
}

async function fetchJson(url, description) {
  logVerbose('Requesting', description, url);
  const response = await fetch(url, { headers: { 'User-Agent': USER_AGENT } });

  if (!response.ok) {
    const body = await response.text();
    const message = `Google Drive ${description} failed with ${response.status}: ${body}`;
    if (response.status === 403) {
      throw new Error(`${message} — check Drive sharing settings and API key permissions.`);
    }
    if (response.status === 404) {
      throw new Error(`${message} — the folder ID may be incorrect or inaccessible.`);
    }
    throw new Error(message);
  }

  return response.json();
}

async function fetchDrivePage(folderId, pageToken) {
  const query = `'${folderId}' in parents and trashed = false`;
  // Include shortcutDetails so we can resolve shortcuts; include owners/capabilities where possible
  const fields = 'nextPageToken,files(id,name,mimeType,createdTime,modifiedTime,description,parents,videoMediaMetadata,shortcutDetails)';
  const url = `${API_BASE}/files?q=${encodeURIComponent(query)}&fields=${encodeURIComponent(fields)}&pageSize=1000&key=${API_KEY}` + (pageToken ? `&pageToken=${pageToken}` : '');
  const page = await fetchJson(url, `Drive page for folder ${folderId}`);
  if (!page || !Array.isArray(page.files)) {
    throw new Error(`Unexpected Drive API response for folder ${folderId}: missing files array`);
  }
  if (VERBOSE) console.log(`  ↳ page token: ${page.nextPageToken || '<end>'} (${page.files.length} entries)`);
  return page;
}

async function fetchFolderMeta(folderId) {
  // Request mimeType and shortcutDetails to detect shortcuts and permissions issues
  const fields = 'id,name,mimeType,shortcutDetails';
  const url = `${API_BASE}/files/${encodeURIComponent(folderId)}?fields=${encodeURIComponent(fields)}&key=${API_KEY}`;
  return fetchJson(url, `folder metadata for ${folderId}`);
}

async function loadFolderContents(folderId) {
  let pageToken = undefined;
  const files = [];

  do {
    const page = await fetchDrivePage(folderId, pageToken);
    const pageFiles = Array.isArray(page.files) ? page.files : [];
    logVerbose(`Loaded ${pageFiles.length} entries for folder ${folderId}${pageToken ? ` (pageToken=${pageToken})` : ''}`);
    files.push(...pageFiles);
    pageToken = page.nextPageToken;
  } while (pageToken);

  return files;
}

async function buildPortfolio() {
  // Startup validation
  if (!API_KEY) {
    console.error('❌ Missing GOOGLE_DRIVE_API_KEY. Please add it to .env.local or your environment.');
    console.error('Example .env.local:');
    console.error('  GOOGLE_DRIVE_API_KEY=YOUR_API_KEY');
    console.error('  GOOGLE_DRIVE_ROOT_FOLDER_ID=YOUR_FOLDER_ID');
    process.exit(1);
  }
  console.log('🔑 GOOGLE_DRIVE_API_KEY loaded');

  if (!ROOT_FOLDER_ID) {
    console.error('❌ Missing GOOGLE_DRIVE_ROOT_FOLDER_ID. Please set it in .env.local or your environment.');
    process.exit(1);
  }
  if (!validateRootFolderId(ROOT_FOLDER_ID)) {
    console.error(`❌ GOOGLE_DRIVE_ROOT_FOLDER_ID looks invalid: ${ROOT_FOLDER_ID}`);
    process.exit(1);
  }

  console.log(`📂 Detected root folder id: ${ROOT_FOLDER_ID}`);

  const rootMeta = await fetchFolderMeta(ROOT_ID);
  // Handle root being a Drive shortcut
  if (rootMeta.mimeType === SHORTCUT_MIME) {
    const targetId = rootMeta.shortcutDetails?.targetId;
    const targetMime = rootMeta.shortcutDetails?.targetMimeType;
    console.warn(`🔗 Root folder ${ROOT_FOLDER_ID} is a shortcut -> ${targetId} (${targetMime})`);
    if (!targetId) throw new Error('Root folder is a shortcut but targetId is missing.');
    // resolve root to target
    const resolved = await fetchFolderMeta(targetId);
    console.log(`🔎 Resolved root shortcut to: ${resolved.name} (${targetId})`);
    // override values
    ROOT_ID = targetId;
    // update rootMeta to resolved
    Object.assign(rootMeta, resolved);
  }

  const rootName = sanitizeName(rootMeta.name || 'Portfolio');
  console.log(`🔎 Root folder validated: ${rootName} (${ROOT_ID})`);

  const folderMap = new Map();
  const itemSlugs = new Map();
  const items = [];
  const skippedFiles = [];
  let orderIndex = 0;
  let totalFolders = 0;
  let totalVideos = 0;
  let totalMediaFiles = 0;

  async function visitFolder(folderId, parentId, parentPath, folderName, includeInPath = true) {
    const currentFolderName = sanitizeName(folderName || 'Folder');
    // If includeInPath is false (root), do not include root name in categoryPath
    const currentPath = includeInPath ? [...parentPath, currentFolderName] : parentPath;
    const folderSlug = createUniqueSlug(currentFolderName, itemSlugs);
    const node = {
      id: folderId,
      name: currentFolderName,
      slug: folderSlug,
      path: currentPath,
      parentId,
      childFolderIds: [],
      itemIds: [],
      itemCount: 0,
      childCount: 0,
      level: parentPath.length
    };

    folderMap.set(folderId, node);
    totalFolders += 1;
    logVerbose(`Visiting folder: ${currentPath.join(' / ')} (${folderId})`);

    // Quick permission check for this folder: try fetching its metadata
    try {
      const metaCheck = await fetchFolderMeta(folderId);
      logVerbose(`Folder metadata accessible: ${metaCheck.id} ${metaCheck.name}`);
    } catch (err) {
      console.warn(`⚠ Permission or access error for folder ${currentPath.join(' / ')} (${folderId}): ${err.message || err}`);
      return; // skip traversal if we can't read metadata
    }

    let folderContents = [];
    try {
      folderContents = await loadFolderContents(folderId);
    } catch (err) {
      console.warn(`⚠ Unable to read folder ${currentPath.join(' / ')} (${folderId}): ${err.message || err}`);
      return; // Can't read this folder, skip traversal into it
    }

    // Resolve shortcut entries and normalize child folders array
    const childFoldersRaw = folderContents.filter(file => file.mimeType === FOLDER_MIME || file.mimeType === SHORTCUT_MIME);
    const childFolders = [];
    for (const f of childFoldersRaw) {
      if (f.mimeType === SHORTCUT_MIME) {
        const targetId = f.shortcutDetails?.targetId;
        const targetMime = f.shortcutDetails?.targetMimeType;
        console.warn(`🔗 Found shortcut ${f.name} (${f.id}) -> ${targetId} (${targetMime})`);
        if (!targetId) {
          console.warn(`   ↳ Shortcut has no targetId, skipping: ${f.id}`);
          continue;
        }
        // If shortcut points to folder, treat resolved target as folder
        if (targetMime === FOLDER_MIME) {
          childFolders.push({ id: targetId, name: f.name, resolvedFromShortcut: true });
        } else {
          console.warn(`   ↳ Shortcut target is not a folder (${targetMime}), skipping as folder: ${f.name}`);
        }
      } else {
        childFolders.push(f);
      }
    }

    const childMedia = folderContents.filter(file => file.mimeType && isPortfolioMediaMime(file.mimeType));

    if (childFolders.length === 0 && childMedia.length === 0) {
      logVerbose(`Empty folder: ${currentPath.join(' / ')} (${folderId})`);
    }

    for (const childFolder of childFolders) {
      node.childFolderIds.push(childFolder.id);
      node.childCount += 1;
      // For folders that were resolved from shortcuts we pass the shortcut name
      const childName = childFolder.name || (childFolder.resolvedFromShortcut ? childFolder.name : 'Folder');
      console.log(`📁 Discovered folder: ${[...currentPath, childName].join(' / ')} (${childFolder.id})${childFolder.resolvedFromShortcut ? ' [shortcut->resolved]' : ''}`);
      await visitFolder(childFolder.id, folderId, currentPath, childName, true);
    }

    for (const file of childMedia) {
      const isVideo = VIDEO_MIME_RE.test(file.mimeType);
      if (isVideo) totalVideos += 1;
      totalMediaFiles += 1;
      orderIndex += 1;
      const safeTitle = sanitizeName(file.name || `Asset ${orderIndex}`).replace(/\.[^.]+$/, '');
      const slug = createUniqueSlug(`${safeTitle}-${orderIndex}`, itemSlugs);
      const categoryPath = currentPath.slice(0);
      const tags = inferTags(safeTitle, currentPath);
      const { industry, campaign } = inferMetadata([safeTitle, ...currentPath].join(' '));
      // Preview and thumbnail generation
      const previewUrl = `https://drive.google.com/file/d/${file.id}/preview`;
      const thumbnailUrlPrimary = `https://drive.google.com/thumbnail?id=${file.id}&sz=w800`;
      const thumbnailUrlFallback = `https://drive.google.com/uc?export=view&id=${file.id}`;

      const item = {
        id: crypto.createHash('sha256').update(file.id).digest('hex').slice(0, 16),
        title: safeTitle,
        slug,
        originalFilename: file.name || '',
        categoryPath,
        parentFolder: currentFolderName,
        nestedFolderPath: categoryPath.join('/'),
        driveFileId: file.id,
        thumbnailUrl: thumbnailUrlPrimary,
        thumbnailFallback: thumbnailUrlFallback,
        previewUrl,
        mimeType: file.mimeType,
        createdTime: file.createdTime || new Date().toISOString(),
        modifiedTime: file.modifiedTime || new Date().toISOString(),
        tags,
        description: file.description || null,
        orderIndex,
        industry,
        campaign
      };

      items.push(item);
      node.itemIds.push(item.id);
      node.itemCount += 1;
      const icon = isVideo ? '🎬' : IMAGE_MIME_RE.test(file.mimeType) ? '🖼️' : '📄';
      console.log(`${icon} Discovered media: ${item.title} (${file.id}) — ${categoryPath.join(' / ')}`);
    }

    const skipped = folderContents.filter(
      file =>
        file.mimeType &&
        file.mimeType !== FOLDER_MIME &&
        file.mimeType !== SHORTCUT_MIME &&
        !isPortfolioMediaMime(file.mimeType)
    );
    skippedFiles.push(...skipped.map(file => ({ id: file.id, name: file.name, mimeType: file.mimeType, parentPath: currentPath.slice() })));
    if (skipped.length > 0) {
      for (const s of skipped) {
        console.log(`  - Skipped file: ${s.name} (${s.mimeType}) in ${currentPath.join(' / ')}`);
      }
    }
  }

  await visitFolder(ROOT_ID, null, [], rootName, false);

  const rootNode = folderMap.get(ROOT_ID);
  if (!rootNode) {
    throw new Error('Root node was not created after traversal. This indicates a traversal failure.');
  }

  function buildNodeTree(nodeId) {
    const node = folderMap.get(nodeId);
    if (!node) return null;
    return {
      id: node.id,
      name: node.name,
      slug: node.slug,
      path: node.path,
      parentId: node.parentId,
      childFolderIds: node.childFolderIds,
      itemIds: node.itemIds,
      itemCount: node.itemCount,
      childCount: node.childCount,
      level: node.level,
      children: node.childFolderIds.map(buildNodeTree).filter(Boolean)
    };
  }

  const folderTree = [buildNodeTree(ROOT_ID)].filter(Boolean);
  const categories = rootNode.childFolderIds.map(folderId => folderMap.get(folderId)?.name).filter(Boolean);

  const output = {
    version: '1.0',
    generatedAt: new Date().toISOString(),
    source: {
      type: 'google-drive',
      authentication: 'apiKey',
      rootFolderId: ROOT_ID,
      apiKeyHint: 'Use GOOGLE_DRIVE_API_KEY in environment variables',
      backup: {
        localSyncPath: './drive-backup',
        enabled: false
      }
    },
    folderTree,
    categories,
    items
  };

  const invalidThumbnails = items.filter(item => !item.thumbnailUrl || !/^https?:\/\//.test(item.thumbnailUrl));
  const invalidPreviewUrls = items.filter(item => !item.previewUrl || !/^https?:\/\//.test(item.previewUrl));
  const invalidCategoryPaths = items.filter(item => !Array.isArray(item.categoryPath) || item.categoryPath.length === 0);

  await fs.mkdir(path.dirname(OUTPUT_PATH), { recursive: true });
  await fs.writeFile(OUTPUT_PATH, JSON.stringify(output, null, 2), 'utf-8');

  console.log(`✅ Portfolio generated successfully at ${OUTPUT_PATH}`);
  console.log(`📦 Total folders scanned: ${totalFolders}`);
  console.log(`🎬 Total video files found: ${totalVideos}`);
  console.log(`📁 Total portfolio media files (video/image/pdf): ${totalMediaFiles}`);
  console.log(`🚫 Total skipped unsupported files: ${skippedFiles.length}`);
  console.log(`🧭 Total categories: ${categories.length}`);
  console.log(`⚠ Invalid thumbnails: ${invalidThumbnails.length}, invalid previews: ${invalidPreviewUrls.length}, invalid category paths: ${invalidCategoryPaths.length}`);

  if (skippedFiles.length > 0) {
    console.log('    Skipped non-video files:');
    skippedFiles.slice(0, 10).forEach(file => console.log(`      - ${file.name} (${file.mimeType}) in ${file.parentPath.join(' / ')}`));
    if (skippedFiles.length > 10) console.log(`      ...and ${skippedFiles.length - 10} more`);
  }

  if (VERBOSE) {
    console.log('    Folder traversal path and counts:');
    for (const [folderId, node] of folderMap.entries()) {
      console.log(`      - ${node.path.join(' / ')} | folders=${node.childCount} videos=${node.itemCount}`);
    }
  }

  // Schema validation against frontend expectations (WorkClient.tsx)
  function validateOutput(out) {
    const warnings = [];
    if (!Array.isArray(out.folderTree) || out.folderTree.length === 0) warnings.push('folderTree is empty or missing');
    if (!Array.isArray(out.categories)) warnings.push('categories is missing or not an array');
    if (!Array.isArray(out.items)) warnings.push('items is missing or not an array');
    const itemsWithBadPath = out.items.filter(i => !Array.isArray(i.categoryPath) || i.categoryPath.length === 0);
    if (itemsWithBadPath.length > 0) warnings.push(`${itemsWithBadPath.length} items missing categoryPath`);
    const itemsBadMime = out.items.filter(i => !i.mimeType || !isPortfolioMediaMime(i.mimeType));
    if (itemsBadMime.length > 0) warnings.push(`${itemsBadMime.length} items have unsupported mime types`);
    return warnings;
  }

  const validationWarnings = validateOutput(output);
  if (validationWarnings.length > 0) {
    console.warn('⚠ Portfolio validation warnings:');
    validationWarnings.forEach(w => console.warn('   -', w));
  } else {
    console.log('✅ Portfolio output passes basic schema checks for frontend.');
  }

  // Test mode: print first 5 items and stop
  if (TEST_MODE) {
    console.log('--- TEST MODE: first 5 items ---');
    items.slice(0, 5).forEach((it, i) => console.log(`${i + 1}. ${it.title} | ${it.driveFileId} | ${JSON.stringify(it.categoryPath)}`));
    console.log('--- end test output ---');
  }

  const sample = {
    folderTree: folderTree.map(node => ({
      id: node.id,
      name: node.name,
      path: node.path,
      children: node.children?.map(child => ({ id: child.id, name: child.name, path: child.path }))
    })),
    categories,
    items: items.slice(0, 5).map(item => ({ id: item.id, title: item.title, categoryPath: item.categoryPath, thumbnailUrl: item.thumbnailUrl, previewUrl: item.previewUrl }))
  };

  console.log('📄 Example generated JSON structure:', JSON.stringify(sample, null, 2));
}

buildPortfolio().catch(error => {
  console.error('❌ Portfolio generation failed:', error.message || error);
  process.exit(1);
});



