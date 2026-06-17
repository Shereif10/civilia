import { ReusableHeroSection } from "@/components/home/ReusableHeroSection";
import { Footer } from "@/components/layout/Footer";
import { GsapProvider } from "@/components/motion/GsapProvider";
import { NewsSection } from "@/components/news/NewsSection";
import { fetchNewsItems } from "@/lib/api";

export default async function News() {
  const articles = await fetchNewsItems();

  return (
    <GsapProvider>
      <main className="overflow-hidden bg-civilia-paper text-civilia-ink">
        <ReusableHeroSection variant="news" />
        <NewsSection articles={articles} />
      </main>
      <Footer />
    </GsapProvider>
  );
}
