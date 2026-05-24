/** Client-safe helpers for Google Drive portfolio thumbnails (no API calls). */

export type PortfolioMediaFields = {
  thumbnailUrl?: string;
  thumbnailFallback?: string;
  driveFileId?: string;
  previewUrl?: string;
  mimeType?: string;
  title?: string;
  categoryPath?: string[];
  externalUrl?: string;
  kind?: 'drive' | 'website';
};

export const PORTFOLIO_PLACEHOLDER =
  'data:image/svg+xml,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="675" viewBox="0 0 1200 675">
      <defs>
        <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0a0a0a"/>
          <stop offset="100%" stop-color="#141414"/>
        </linearGradient>
      </defs>
      <rect width="1200" height="675" fill="url(#g)"/>
      <rect x="80" y="80" width="1040" height="515" rx="8" fill="none" stroke="#E6FF00" stroke-opacity="0.15" stroke-width="1"/>
      <text x="600" y="320" text-anchor="middle" fill="#ffffff" fill-opacity="0.35" font-family="system-ui,sans-serif" font-size="13" letter-spacing="0.35em">PREVIEW UNAVAILABLE</text>
      <text x="600" y="360" text-anchor="middle" fill="#E6FF00" fill-opacity="0.5" font-family="system-ui,sans-serif" font-size="11" letter-spacing="0.2em">THE AURGE</text>
    </svg>`
  );

export function isValidHttpUrl(value: unknown): value is string {
  return typeof value === 'string' && /^https?:\/\//.test(value);
}

export function isVideoMime(mimeType?: string): boolean {
  return typeof mimeType === 'string' && mimeType.startsWith('video/');
}

export function isImageMime(mimeType?: string): boolean {
  return typeof mimeType === 'string' && mimeType.startsWith('image/');
}

export function isPdfMime(mimeType?: string): boolean {
  return mimeType === 'application/pdf';
}

export function isDrivePreviewable(mimeType?: string): boolean {
  return isVideoMime(mimeType) || isImageMime(mimeType) || isPdfMime(mimeType);
}

/** Ordered thumbnail URLs to try when Drive CDN fails. */
export function getThumbnailCandidates(item: PortfolioMediaFields): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  const push = (url?: string) => {
    if (!isValidHttpUrl(url) || seen.has(url)) return;
    seen.add(url);
    out.push(url);
  };

  push(item.thumbnailUrl);
  push(item.thumbnailFallback);

  const id = item.driveFileId;
  if (id) {
    push(`https://drive.google.com/thumbnail?id=${id}&sz=w640`);
    push(`https://drive.google.com/thumbnail?id=${id}&sz=w400`);
    push(`https://drive.google.com/uc?export=view&id=${id}`);
    push(`https://lh3.googleusercontent.com/d/${id}=w640`);
  }

  return out;
}

export function getPrimaryThumbnail(item: PortfolioMediaFields): string {
  const [first] = getThumbnailCandidates(item);
  return first ?? PORTFOLIO_PLACEHOLDER;
}
