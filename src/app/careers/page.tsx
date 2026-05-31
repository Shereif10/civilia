import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { GsapProvider } from "@/components/motion/GsapProvider";
import { ReusableHeroSection } from "@/components/home/ReusableHeroSection";


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
      </main>

      <Footer />
    </GsapProvider>
  );
}
