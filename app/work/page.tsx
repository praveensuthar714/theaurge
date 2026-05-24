import WorkClient from './WorkClient';
import { getPortfolioCatalog } from '@/lib/drivePortfolio';

export const revalidate = 300; // Cache and revalidate every 5 minutes

export default async function Page() {
  const portfolio = await getPortfolioCatalog();

  return (
    <WorkClient portfolioAssets={portfolio.items} folderTree={portfolio.folderTree} />
  );
}
