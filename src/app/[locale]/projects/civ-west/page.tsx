import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { GsapProvider } from "@/components/motion/GsapProvider";
import { CivWestStatsSection } from "@/components/projects/CivWestStatsSection";
import { ProjectOverviewSection } from "@/components/projects/ProjectOverviewSection";
import { FeaturesAmenitiesSection } from "@/components/projects/FeaturesAmenitiesSection";
import { LatestProjectSection } from "@/components/home/LatestProjectSection";
import { JourneyCta } from "@/components/home/JourneyCta";
import { PrimeLocationSection } from "@/components/projects/PrimeLocationSection";
import { MasterPlanSection } from "@/components/projects/MasterPlanSection";
import { PaymentPlanSection } from "@/components/projects/PaymentPlanSection";
import { WhyChooseCivWestSection } from "@/components/projects/WhyChooseCivWestSection";
import { AboutDeveloperSection } from "@/components/projects/AboutDeveloperSection";
import { QuestionsSection } from "@/components/home/QuestionsSection";
import { ReusableHeroSection } from "@/components/home/ReusableHeroSection";
import { LegacyProjectsSection } from "@/components/projects/LegacyProjectsSection";
import { PartnersSection } from "@/components/projects/PartnersSection";

const siteUrl = "https://civilia-developments.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "CIV.WEST | Civilia Developments | Premium Compound in Sheikh Zayed",
  description:
    "CIV.WEST by Civilia Developments — a boutique residential compound in Thawra El Khadra, Sheikh Zayed. 38,000 m² of modern living, 77% landscaped, master-planned by ADC.",
  keywords: [
    "CIV.WEST",
    "Civilia Developments",
    "Sheikh Zayed compound",
    "Thawra El Khadra",
    "real estate Egypt",
    "luxury residential compound",
    "ADC master plan",
  ],
  authors: [{ name: "Civilia Developments" }],
  creator: "Civilia Developments",
  publisher: "Civilia Developments",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: `${siteUrl}/projects/civ-west`,
  },
  openGraph: {
    title: "CIV.WEST | Civilia Developments | Premium Compound in Sheikh Zayed",
    description:
      "Discover CIV.WEST — a master-planned boutique compound in Sheikh Zayed with 77% green space, clubhouse, padel courts, and flexible payment plans.",
    url: `${siteUrl}/projects/civ-west`,
    siteName: "Civilia Developments",
    images: [
      {
        url: `${siteUrl}/assets/projects-og.webp`,
        width: 1200,
        height: 630,
        alt: "CIV.WEST - Civilia Developments",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CIV.WEST | Civilia Developments | Premium Compound in Sheikh Zayed",
    description:
      "Discover CIV.WEST — a master-planned boutique compound in Sheikh Zayed with 77% green space and world-class amenities.",
    images: [`${siteUrl}/assets/projects-og.webp`],
    creator: "@CiviliaDev",
    site: "@CiviliaDev",
  },
  icons: {
    icon: "/icon.svg",
    apple: "/apple-touch-icon.webp",
  },
  manifest: "/site.webmanifest",
  category: "real estate",
};

export default function CivWestPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "RealEstateAgent",
        "@id": `${siteUrl}/#business`,
        name: "Civilia Developments",
        url: siteUrl,
        description:
          "Civilia Developments is a leading real estate developer with over 20 years of expertise in construction and real estate development across Egypt.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Sheikh Zayed",
          addressRegion: "Giza",
          addressCountry: "EG",
        },
        knowsAbout: [
          "Real Estate Development",
          "Residential Compounds",
          "Luxury Homes",
        ],
      },
      {
        "@type": "Product",
        "@id": `${siteUrl}/projects/civ-west#product`,
        name: "CIV.WEST",
        url: `${siteUrl}/projects/civ-west`,
        description:
          "CIV.WEST is a premium boutique residential compound in Thawra El Khadra, Sheikh Zayed. 38,000 m² master-planned by ADC with 77% landscape area.",
        brand: {
          "@type": "Brand",
          name: "Civilia Developments",
        },
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "EGP",
          },
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Civilia Developments",
        description:
          "Civilia Developments delivers real estate communities built on construction expertise, reliability, and long-term value.",
        inLanguage: "en",
        publisher: {
          "@id": `${siteUrl}/#business`,
        },
      },
    ],
  };

  return (
    <GsapProvider>
      <main className="overflow-hidden bg-civilia-paper text-civilia-ink">
        <ReusableHeroSection variant="projects" />
        <ProjectOverviewSection />
        <CivWestStatsSection />
        <LatestProjectSection variant="project" />
        <FeaturesAmenitiesSection />
        <PrimeLocationSection />
        <JourneyCta variant="project" />
        <MasterPlanSection />
        <PartnersSection/>
        <PaymentPlanSection />
        <WhyChooseCivWestSection />
        <AboutDeveloperSection />
        <QuestionsSection variant="project" />
        <JourneyCta variant="projectJourney" />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </GsapProvider>
  );
}
