import HomeClient from './HomeClient';
import { getPortfolioAssets } from '@/lib/cloudinary';

export const revalidate = 3600; // Revalidate at most every hour

export default async function Page() {
  const assets = await getPortfolioAssets();

  return <HomeClient portfolioAssets={assets} />;
}
