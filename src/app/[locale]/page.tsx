import { AboutSection } from "@/components/home/AboutSection";
import { ExperienceSection } from "@/components/home/ExperienceSection";
import { HeroSection } from "@/components/home/HeroSection";
import { JourneyCta } from "@/components/home/JourneyCta";
import { LatestNewsSection } from "@/components/home/LatestNewsSection";
import { LatestProjectSection } from "@/components/home/LatestProjectSection";
import { LifestyleGallerySection } from "@/components/home/LifestyleGallerySection";
import { ProofListSection } from "@/components/home/ProofListSection";
import { QuestionsSection } from "@/components/home/QuestionsSection";
import { WhyChooseSection } from "@/components/home/WhyChooseSection";
import { Footer } from "@/components/layout/Footer";
import { GsapProvider } from "@/components/motion/GsapProvider";
import { fetchNewsItems } from "@/lib/api";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  const latestNews = await fetchNewsItems(locale);

  return (
    <GsapProvider>
      <main className="overflow-hidden bg-civilia-paper text-civilia-ink">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <LatestProjectSection variant="default" />
        <WhyChooseSection />
        {/* <TestimonialSection /> */}
        <LifestyleGallerySection />
        <ProofListSection />
        <LatestNewsSection articles={latestNews} />
        <QuestionsSection />
        <JourneyCta />
      </main>
      <Footer />
    </GsapProvider>
  );
}
