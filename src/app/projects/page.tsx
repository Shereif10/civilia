import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { GsapProvider } from "@/components/motion/GsapProvider";
import { CivWestStatsSection } from "@/components/projects/CivWestStatsSection";
import { ProjectOverviewSection } from "@/components/projects/ProjectOverviewSection";
import { FeaturesAmenitiesSection } from "@/components/projects/FeaturesAmenitiesSection";
import { LatestProjectSection } from "@/components/home/LatestProjectSection";
import { ProjectIntroBanner } from "@/components/projects/ProjectIntroBanner";
import { JourneyCta } from "@/components/home/JourneyCta";
import { PrimeLocationSection } from "@/components/projects/PrimeLocationSection";
import { MasterPlanSection } from "@/components/projects/MasterPlanSection";
import { PaymentPlanSection } from "@/components/projects/PaymentPlanSection";
import { WhyChooseCivWestSection } from "@/components/projects/WhyChooseCivWestSection";
import { AboutDeveloperSection } from "@/components/projects/AboutDeveloperSection";
import { QuestionsSection } from "@/components/home/QuestionsSection";
import { ReusableHeroSection } from "@/components/home/ReusableHeroSection";
import { LegacyProjectsSection } from "@/components/projects/LegacyProjectsSection";



export const metadata: Metadata = {
  title: "Projects | CIVILIA",
  description:
    "Explore CIVILIA developments, residential communities, and landmark projects built with engineering expertise.",
};

export default function ProjectsPage() {
  return (
    <GsapProvider>
      <main className="overflow-hidden bg-civilia-paper text-civilia-ink">
        <ReusableHeroSection variant="projects" />
        <ProjectOverviewSection />
        <CivWestStatsSection />
        <FeaturesAmenitiesSection />
        <LatestProjectSection />
        <ProjectIntroBanner />
        <JourneyCta variant="project" />
        <PrimeLocationSection />
        <MasterPlanSection />
        <PaymentPlanSection />
        <WhyChooseCivWestSection />
        <LegacyProjectsSection/>
        <AboutDeveloperSection />
        <QuestionsSection variant="project" />
        <JourneyCta variant="projectJourney" />
      </main>

      <Footer />
    </GsapProvider>
  );
}
