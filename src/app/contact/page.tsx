import type { Metadata } from "next";
import { ContactDetailsSection } from "@/components/contact/ContactDetailsSection";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactIntro } from "@/components/contact/ContactIntro";
import { Footer } from "@/components/layout/Footer";
import { GsapProvider } from "@/components/motion/GsapProvider";
import { QuestionsSection } from "@/components/home/QuestionsSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact CIVILIA Developments for bookings, inquiries, consultations, and project information.",
};

export default function ContactPage() {
  return (
    <GsapProvider>
      <main className="overflow-hidden bg-civilia-paper text-civilia-ink">
        <ContactHero />
        <ContactIntro />
        <ContactDetailsSection />
        <QuestionsSection/>
      </main>
      <Footer />
    </GsapProvider>
  );
}
