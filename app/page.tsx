import HomeClient from './HomeClient';
import { getPortfolioAssets } from '@/lib/cloudinary';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Footer from '@/components/Footer';

export const revalidate = 300; // Cache and revalidate every 5 minutes

// BRIDGE COMPONENT: To handle async fetching while streaming the rest of the page
async function PortfolioLoader() {
  const assets = await getPortfolioAssets();
  const PortfolioCarouselV2 = (await import('@/components/PortfolioCarouselV2')).default;
  return <PortfolioCarouselV2 assets={assets} />;
}

export default function Page() {
  return (
    <>
      <HomeClient />
      
      {/* Portfolio Section with Suspense to resolve 'Slow Fetching' concerns */}
      <div id="work" className="bg-black min-h-[600px]">
        <Suspense fallback={
          <div className="w-full py-64 text-center text-white/5 font-mono text-[9px] tracking-[0.6em] uppercase animate-pulse">
            System Synchronizing Archive_
          </div>
        }>
          <PortfolioLoader />
        </Suspense>
      </div>

      <Footer />
    </>
  );
}
