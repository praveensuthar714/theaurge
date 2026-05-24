import HomeClient from './HomeClient';
import { getPortfolioCatalog } from '@/lib/drivePortfolio';
import { Suspense } from 'react';
import Footer from '@/components/Footer';
import { PortfolioShowcase } from '@/components/portfolio/PortfolioShowcase';

export const revalidate = 300;

async function HomePortfolioSection() {
  const portfolio = await getPortfolioCatalog();

  return (
    <PortfolioShowcase
      driveItems={portfolio.items}
      folderTree={portfolio.folderTree}
      mode="featured"
      featuredLimit={6}
      showViewAllLink
      sectionId="work"
      layout="home"
    />
  );
}

export default function Page() {
  return (
    <>
      <HomeClient />

      <div className="bg-black">
        <Suspense
          fallback={
            <div className="flex min-h-[480px] items-center justify-center px-6 py-24">
              <p className="text-center text-[10px] font-semibold uppercase tracking-[0.35em] text-white/25 animate-pulse">
                Loading portfolio…
              </p>
            </div>
          }
        >
          <HomePortfolioSection />
        </Suspense>
      </div>

      <Footer />
    </>
  );
}
