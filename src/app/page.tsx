import { AboutSection } from "@/components/home/AboutSection";
import { ExperienceSection } from "@/components/home/ExperienceSection";
import { HeroSection } from "@/components/home/HeroSection";
import { JourneyCta } from "@/components/home/JourneyCta";
import { LatestNewsSection } from "@/components/home/LatestNewsSection";
import { LatestProjectSection } from "@/components/home/LatestProjectSection";
import { LifestyleGallerySection } from "@/components/home/LifestyleGallerySection";
import { ProofListSection } from "@/components/home/ProofListSection";
import { QuestionsSection } from "@/components/home/QuestionsSection";
import { TestimonialSection } from "@/components/home/TestimonialSection";
import { WhyChooseSection } from "@/components/home/WhyChooseSection";
import { Footer } from "@/components/layout/Footer";
import { GsapProvider } from "@/components/motion/GsapProvider";

export default function Home() {
  return (
    <GsapProvider>
      <main className="overflow-hidden bg-civilia-paper text-civilia-ink">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <LatestProjectSection />
        <WhyChooseSection />
        <TestimonialSection />
        <LifestyleGallerySection/>
        <ProofListSection />
        {/* <LatestNewsSection /> */}
        <QuestionsSection />
        <JourneyCta />
      </main>
      <Footer />
    </GsapProvider>
  );
}
