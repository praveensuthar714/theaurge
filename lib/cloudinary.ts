export interface CloudinaryAsset {
  public_id: string;
  secure_url: string;
  resource_type: 'image' | 'video';
  width: number;
  height: number;
}

const STATIC_FALLBACK_ASSETS: CloudinaryAsset[] = [
  // Production (Videos)
  { public_id: 'production/film-1', secure_url: 'https://res.cloudinary.com/demo/video/upload/dog.mp4', resource_type: 'video', width: 1920, height: 1080 },
  { public_id: 'production/tvc-1', secure_url: 'https://res.cloudinary.com/demo/video/upload/elephants.mp4', resource_type: 'video', width: 1920, height: 1080 },
  { public_id: 'production/brand-1', secure_url: 'https://res.cloudinary.com/demo/video/upload/sea_turtle.mp4', resource_type: 'video', width: 1920, height: 1080 },
  { public_id: 'production/doc-1', secure_url: 'https://res.cloudinary.com/demo/video/upload/finished_video.mp4', resource_type: 'video', width: 1920, height: 1080 },
  { public_id: 'production/political-1', secure_url: 'https://res.cloudinary.com/demo/video/upload/snow_deer.mp4', resource_type: 'video', width: 1920, height: 1080 },
  
  // Design (Images)
  { public_id: 'design/branding-1', secure_url: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800', resource_type: 'image', width: 800, height: 1000 },
  { public_id: 'design/flyer-1', secure_url: 'https://images.unsplash.com/photo-1541746972996-4e0b0f43e03a?q=80&w=800', resource_type: 'image', width: 800, height: 1200 },
  { public_id: 'design/brochure-1', secure_url: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=800', resource_type: 'image', width: 1200, height: 800 },
  
  // Marketing (Images/Videos)
  { public_id: 'marketing/social-1', secure_url: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=800', resource_type: 'image', width: 800, height: 800 },
  { public_id: 'marketing/performance-1', secure_url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800', resource_type: 'image', width: 1200, height: 800 },
];

export async function getPortfolioAssets(): Promise<CloudinaryAsset[]> {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  if (!cloudName || !apiKey || !apiSecret) {
    console.error('⚠️ [Cloudinary] Missing Environment Variables. Using Fallback Assets.');
    return STATIC_FALLBACK_ASSETS;
  }

  const auth = 'Basic ' + Buffer.from(`${apiKey}:${apiSecret}`).toString('base64');

  try {
    const [imagesRes, videosRes] = await Promise.all([
      fetch(`https://api.cloudinary.com/v1_1/${cloudName}/resources/image/upload?max_results=500`, { headers: { Authorization: auth }, cache: 'no-store' }),
      fetch(`https://api.cloudinary.com/v1_1/${cloudName}/resources/video/upload?max_results=500`, { headers: { Authorization: auth }, cache: 'no-store' })
    ]);

    const [imagesData, videosData] = await Promise.all([imagesRes.json(), videosRes.json()]);

    const images: CloudinaryAsset[] = (imagesData.resources || []).map((res: any) => ({
      public_id: res.public_id,
      secure_url: res.secure_url,
      resource_type: 'image',
      width: res.width,
      height: res.height,
    }));

    const videos: CloudinaryAsset[] = (videosData.resources || []).map((res: any) => ({
      public_id: res.public_id,
      secure_url: res.secure_url,
      resource_type: 'video',
      width: res.width,
      height: res.height,
    }));

    const allAssets = [...images, ...videos];

    if (allAssets.length === 0) {
      console.warn('⚠️ [Cloudinary] No assets found in account. Using Fallback.');
      return STATIC_FALLBACK_ASSETS;
    }

    console.log(`✅ [Cloudinary] Fetch Success. Assets: ${allAssets.length}`);
    return allAssets;
  } catch (error) {
    console.error('❌ [Cloudinary] Fetch Error:', error);
    return STATIC_FALLBACK_ASSETS;
  }
}

// FORMATTING UTILITIES FOR CLEANER UI
export function formatCloudinaryTitle(publicId: string, index: number): string {
  const filename = publicId.split('/').pop() || '';
  let name = filename.replace(/[-_]/g, ' ');
  
  // Intercept generic gross camera/phone file names
  if (/^img\s*\d*$/i.test(name) || /^image\s*\d*$/i.test(name)) name = `Brand Identity 0${index + 1}`;
  if (/^vid\s*\d*$/i.test(name) || /^video\s*\d*$/i.test(name)) name = `Cinematic Reel 0${index + 1}`;
  if (/whatsapp/i.test(name)) name = `Social Campaign 0${index + 1}`;
  
  name = name.replace(/[0-9]{6,}/g, ''); // Remove long UUIDs/Timestamps
  name = name.replace(/\b\w/g, c => c.toUpperCase()).trim(); // Title Case
  
  if (name.length < 3) name = `Creative Archive 0${index + 1}`;
  if (name.length > 25) name = name.substring(0, 22) + '...'; // Enforce max UI length
  
  return name;
}

export function inferCategories(publicId: string, type: 'image' | 'video', tags: string[]) {
  const lowerName = publicId.toLowerCase();
  const searchStr = lowerName + ' ' + (tags || []).join(' ');

  let service = type === 'video' ? 'Production' : 'Design';
  
  if (/film|tvc|doc|brand|political|production/i.test(searchStr)) service = 'Production';
  else if (/design|branding|flyer|brochure|logo/i.test(searchStr)) service = 'Design';
  else if (/web|site|dev/i.test(searchStr)) service = 'Website';
  else if (/marketing|seo|social|ads|performance|ppc/i.test(searchStr)) service = 'Marketing';
  else if (/event|venue|show|concert/i.test(searchStr)) service = 'Events';

  let industry = 'Corporate';
  if (/real|estate|home|property|build|arch/i.test(searchStr)) industry = 'Real Estate';
  else if (/edu|school|learn|class|course|institute|traning/i.test(searchStr)) industry = 'Education';
  else if (/shop|store|commer|cart|retail|product|brand|sell/i.test(searchStr)) industry = 'E-commerce';
  else if (/health|med|fit|doc|clinic|well|hospital/i.test(searchStr)) industry = 'Healthcare';
  else if (/auto|car|motor|drive|vehicle/i.test(searchStr)) industry = 'Automotive';
  else if (/finance|trade|invest|forex|bank|cap|stock/i.test(searchStr)) industry = 'Finance';
  else if (/ngo|charity|found|profit|trust/i.test(searchStr)) industry = 'NGO';
  else if (/spirit|yoga|personal|guru|namaste/i.test(searchStr)) industry = 'Spiritual';
  else if (/travel|safari|tour|photo|wedding|creative/i.test(searchStr)) industry = 'Travel';
  else if (/manufact|indust|export|factory/i.test(searchStr)) industry = 'Manufacturing';
  else if (/agency|dev|service|consult|brand/i.test(searchStr)) industry = 'Agency';

  return { service, industry };
}
