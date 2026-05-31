import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { GsapProvider } from "@/components/motion/GsapProvider";
import { OurStorySection } from "@/components/about/OurStorySection";
import { ResidentialUnitsSection } from "@/components/about/ResidentialUnitsSection";
import { VisionMissionSection } from "@/components/about/VisionMissionSection";
import { WhyChooseSection } from "@/components/home/WhyChooseSection";
import { ApproachSection } from "@/components/about/ApproachSection";
import { TestimonialSection } from "@/components/home/TestimonialSection";
import { JourneyCta } from "@/components/home/JourneyCta";
import { ReusableHeroSection } from "@/components/home/ReusableHeroSection";

export const metadata: Metadata = {
  title: "About CIVILIA",
  description:
    "Discover the vision, expertise, and construction legacy behind CIVILIA Developments.",
};

export default function AboutPage() {
  return (
    <GsapProvider>
      <main className="overflow-hidden bg-civilia-paper text-civilia-ink">
        <ReusableHeroSection variant="about" />
        <OurStorySection />
        <ResidentialUnitsSection />
        <VisionMissionSection />
        <WhyChooseSection />
        <ApproachSection />
        <TestimonialSection />
        <JourneyCta />
      </main>

      <Footer />
    </GsapProvider>
  );
}
