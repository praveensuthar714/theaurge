import { PORTFOLIO_PLACEHOLDER } from '@/lib/portfolioMedia';

/** Screenshot preview without embedding live iframes in cards. */
export function getWebsiteScreenshotUrl(url: string, width = 800): string {
  try {
    const parsed = new URL(url.startsWith('http') ? url : `https://${url}`);
    const target = `${parsed.protocol}//${parsed.host}${parsed.pathname}`;
    return `https://s.wordpress.com/mshots/v1/${encodeURIComponent(target)}?w=${width}`;
  } catch {
    return PORTFOLIO_PLACEHOLDER;
  }
}

export function getWebsiteFaviconUrl(url: string): string {
  try {
    const host = new URL(url.startsWith('http') ? url : `https://${url}`).hostname;
    return `https://www.google.com/s2/favicons?domain=${host}&sz=128`;
  } catch {
    return PORTFOLIO_PLACEHOLDER;
  }
}
