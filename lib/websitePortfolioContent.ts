import type { WebsiteProject } from '@/lib/websiteData';

const INDUSTRY_DESCRIPTIONS: Record<string, string> = {
  Corporate:
    'Corporate website focused on credibility, clear service positioning, and lead capture — built for scale and polish.',
  Finance:
    'Financial services site with compliant structure, product clarity, and conversion paths for high-intent visitors.',
  'E-commerce':
    'E-commerce experience with product discovery, brand storytelling, and checkout-ready layouts.',
  Education:
    'Education platform design balancing course discovery, trust signals, and enrollment flows.',
  Agency:
    'Agency portfolio site showcasing services, case work, and contact funnels with a premium digital feel.',
  Healthcare:
    'Healthcare website emphasising patient trust, service clarity, and accessible information architecture.',
  Hospitality:
    'Hospitality site with immersive visuals, booking cues, and brand atmosphere.',
  Technology:
    'Technology brand site with product narrative, feature highlights, and modern UI patterns.',
};

export function getWebsitePortfolioDescription(site: Pick<WebsiteProject, 'title' | 'industry'>): string {
  return (
    INDUSTRY_DESCRIPTIONS[site.industry] ??
    `Custom website design and development for ${site.title} — crafted by The Aurge.`
  );
}

export const WEBSITE_LIGHTBOX_RETURN_MESSAGE =
  'Please come back here after seeing the website — we\'re waiting for you.';
