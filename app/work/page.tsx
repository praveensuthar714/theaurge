import WorkClient from './WorkClient';
import { getPortfolioAssets } from '@/lib/cloudinary';

export const revalidate = 3600; // Cache and revalidate at most every hour

export default async function Page() {
  const assets = await getPortfolioAssets();

  return <WorkClient portfolioAssets={assets} />;
}
