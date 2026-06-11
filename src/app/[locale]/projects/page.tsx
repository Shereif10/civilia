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

const siteUrl = "https://civilia-developments.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Projects | Civilia Developments | CIV.WEST & Premium Real Estate",
  description:
    "Explore Civilia Developments' flagship projects including CIV.WEST in Sheikh Zayed. Modern residential communities, master-planned compounds, and investment opportunities in Egypt.",
  keywords: [
    "Civilia projects",
    "CIV.WEST",
    "real estate projects Egypt",
    "Sheikh Zayed compounds",
    "luxury residential projects",
    "real estate investment Egypt",
    "Civilia Developments portfolio",
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
    canonical: `${siteUrl}/projects`,
  },
  openGraph: {
    title: "Projects | Civilia Developments | CIV.WEST & Premium Real Estate",
    description:
      "Discover Civilia Developments' landmark projects. From master-planned communities to luxury residences. Explore CIV.WEST in Sheikh Zayed and more.",
    url: `${siteUrl}/projects`,
    siteName: "Civilia Developments",
    images: [
      {
        url: `${siteUrl}/assets/projects-og.webp`,
        width: 1200,
        height: 630,
        alt: "Civilia Developments - Real Estate Projects",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Civilia Developments | CIV.WEST & Premium Real Estate",
    description:
      "Discover Civilia Developments' landmark projects. From master-planned communities to luxury residences.",
    images: [`${siteUrl}/assets/projects-og.webp`],
    creator: "@CiviliaDev",
    site: "@CiviliaDev",
  },
  icons: {
    icon: "/icon.svg",
    apple: "/apple-touch-icon.webp",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "your-google-verification-code",
  },
  category: "real estate",
};

export default function ProjectsPage() {
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
        "@type": "CollectionPage",
        "@id": `${siteUrl}/projects#webpage`,
        url: `${siteUrl}/projects`,
        name: "Projects | Civilia Developments",
        isPartOf: {
          "@id": `${siteUrl}/#website`,
        },
        about: {
          "@type": "Product",
          name: "CIV.WEST",
          description:
            "CIV.WEST is a premium residential compound in Sheikh Zayed, offering modern living spaces, lush landscapes, and world-class amenities.",
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
        mainEntity: {
          "@type": "ItemList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "CIV.WEST Compound",
              url: `${siteUrl}/projects/civ-west`,
            },
          ],
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
        <FeaturesAmenitiesSection />
        <LatestProjectSection variant="project" />
        <JourneyCta variant="project" />
        <PrimeLocationSection />
        <MasterPlanSection />
        <PaymentPlanSection />
        <WhyChooseCivWestSection />
        <LegacyProjectsSection />
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
