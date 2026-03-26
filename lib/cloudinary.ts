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
    console.error('⚠️ Missing Cloudinary environment variables!');
    console.error(`NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME exists? ${!!cloudName}`);
    console.error(`CLOUDINARY_API_KEY exists? ${!!apiKey}`);
    console.error(`CLOUDINARY_API_SECRET exists? ${!!apiSecret}`);
    throw new Error('Missing Cloudinary environment variables!');
  }

  const authHeader = `Basic ${Buffer.from(`${apiKey}:${apiSecret}`).toString('base64')}`;

  try {
    // 1. Fetch images from "portfolio" folder
    const imagesRes = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/resources/image/upload?prefix=portfolio&max_results=500&tags=true`,
      {
        headers: { Authorization: authHeader },
        cache: 'no-store' // ensure fresh fetches to debug connectivity easily
      }
    );
    const imagesData = await imagesRes.json();
    const images: CloudinaryAsset[] = (imagesData.resources || []).map((res: any) => ({
      public_id: res.public_id,
      secure_url: res.secure_url,
      resource_type: 'image',
      tags: res.tags || []
    }));

    // 2. Fetch videos from "portfolio" folder
    const videosRes = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/resources/video/upload?prefix=portfolio&max_results=500&tags=true`,
      {
        headers: { Authorization: authHeader },
        cache: 'no-store'
      }
    );
    const videosData = await videosRes.json();
    const videos: CloudinaryAsset[] = (videosData.resources || []).map((res: any) => ({
      public_id: res.public_id,
      secure_url: res.secure_url,
      resource_type: 'video',
      tags: res.tags || []
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
