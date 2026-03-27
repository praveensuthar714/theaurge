import HomeClient from './HomeClient';
import { getPortfolioAssets } from '@/lib/cloudinary';

export const revalidate = 300; // Cache and revalidate every 5 minutes

export default async function Page() {
  const assets = await getPortfolioAssets();

  return <HomeClient portfolioAssets={assets} />;
}
