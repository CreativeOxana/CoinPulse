import CoinOverview from "@/components/home/CoinOverview";
import TrendingCoins from "@/components/home/TrendingCoins";
import { Suspense } from "react";

const Page = async () => {
  return (
    <main className="main container">
      <section className="home-grid">
        <Suspense fallback={<>Loading Overview...</>}>
          <CoinOverview />
        </Suspense>

        <Suspense fallback={<>Loading Trending...</>}>
          <TrendingCoins />
        </Suspense>
      </section>
      <section className="w-full mt-7 space-y-4">
        <p>Categories</p>
      </section>
    </main>
  );
};

export default Page;
