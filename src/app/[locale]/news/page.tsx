
import { ReusableHeroSection } from "@/components/home/ReusableHeroSection";
import { Footer } from "@/components/layout/Footer";
import { GsapProvider } from "@/components/motion/GsapProvider";

import { NewsSection } from "@/components/news/NewsSection";

export default function News() {
  return (
    <GsapProvider>
      <main className="overflow-hidden bg-civilia-paper text-civilia-ink">
        <ReusableHeroSection variant="news" />
       <NewsSection/>
      </main>
      <Footer />
    </GsapProvider>
  );
}
