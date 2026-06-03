import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { GsapProvider } from "@/components/motion/GsapProvider";
import { ReusableHeroSection } from "@/components/home/ReusableHeroSection";
import { JoinOurTeamSection } from "@/components/careers/JoinOurTeamSection";
import { WhyWorkWithUsSection } from "@/components/careers/WhyWorkWithUsSection";
import { BenefitsSection } from "@/components/careers/BenefitsSection";
import { QuestionsSection } from "@/components/home/QuestionsSection";
import { TestimonialSection } from "@/components/home/TestimonialSection";
import { JourneyCta } from "@/components/home/JourneyCta";


export const metadata: Metadata = {
  title: "Careers | CIVILIA",
  description:
    "Join CIVILIA and build the future with a team driven by excellence, innovation, and engineering expertise.",
};

export default function CareersPage() {
  return (
    <GsapProvider>
      <main className="overflow-hidden bg-civilia-paper text-civilia-ink">
        <ReusableHeroSection variant="careers" />
        <JoinOurTeamSection />
        <WhyWorkWithUsSection />
        <BenefitsSection />
        <QuestionsSection />
        <TestimonialSection />
        <JourneyCta variant="careers" />
      </main>

      <Footer />
    </GsapProvider>
  );
}
