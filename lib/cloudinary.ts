export interface CloudinaryAsset {
  public_id: string;
  secure_url: string;
  resource_type: 'image' | 'video';
}

export async function getPortfolioAssets(): Promise<CloudinaryAsset[]> {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  if (!cloudName || !apiKey || !apiSecret) {
    console.error('Missing Cloudinary Environment Variables. Check .env.local');
    return [];
  }

  const auth = 'Basic ' + Buffer.from(`${apiKey}:${apiSecret}`).toString('base64');

  try {
    // 1. Fetch Images (up to 500 max, removing folder prefix to globally capture all uploaded assets)
    const imagesRes = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/resources/image/upload?max_results=500&tags=true`,
      {
        headers: { Authorization: auth },
        cache: 'no-store'
      }
    );
    const imagesData = await imagesRes.json();
    const images: CloudinaryAsset[] = (imagesData.resources || []).map((res: any) => ({
      public_id: res.public_id,
      secure_url: res.secure_url,
      resource_type: 'image',
    }));

    // 2. Fetch Videos (up to 500 max, globally capturing all videos)
    const videosRes = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/resources/video/upload?max_results=500&tags=true`,
      {
        headers: { Authorization: auth },
        cache: 'no-store'
      }
    );
    const videosData = await videosRes.json();
    const videos: CloudinaryAsset[] = (videosData.resources || []).map((res: any) => ({
      public_id: res.public_id,
      secure_url: res.secure_url,
      resource_type: 'video',
    }));

    // Combine both and return
    const allAssets = [...images, ...videos];

    // Logging requirements:
    console.log(`✅ [Cloudinary] Fetch Complete.`);
    console.log(`📸 Images fetched: ${images.length}`);
    console.log(`🎥 Videos fetched: ${videos.length}`);
    console.log(`📦 Total Assets: ${allAssets.length}`);

    return allAssets;
  } catch (error) {
    console.error('Failed to fetch Cloudinary assets:', error);
    return [];
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

  let service = type === 'video' ? 'Videos' : 'Creative & Design';
  if (/social|reel|insta|whatsapp|tiktok|poster|creative|design|art/i.test(searchStr)) service = 'Creative & Design';
  else if (/seo|blog|article|web|site/i.test(searchStr)) service = 'Websites';
  else if (/brand|logo|identity/i.test(searchStr)) service = 'Brand Identity';
  else if (/ppc|ads|campaign|google|meta|marketing/i.test(searchStr)) service = 'PPC';

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
