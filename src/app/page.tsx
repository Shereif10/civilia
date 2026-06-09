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
import type { Metadata } from "next";

const siteUrl = "https://civiliadevelopments.com";

export const metadata: Metadata = {
  title: "Civilia Developments | From Land To Landmark",
  description:
    "Civilia Developments is a leading real estate developer with over 20 years of expertise in construction and real estate development across Egypt. Discover our premium residential projects including CIV.WEST in Sheikh Zayed.",
  keywords: [
    "Civilia Developments",
    "real estate developer Egypt",
    "CIV.WEST",
    "property developer Sheikh Zayed",
    "luxury residential compounds",
    "real estate investment Egypt",
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
    canonical: siteUrl,
  },
  openGraph: {
    title: "Civilia Developments | From Land To Landmark",
    description:
      "Civilia Developments is a leading real estate developer with over 20 years of expertise. Discover CIV.WEST in Sheikh Zayed and our upcoming projects.",
    url: siteUrl,
    siteName: "Civilia Developments",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Civilia Developments - Real Estate Developer Egypt",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Civilia Developments | From Land To Landmark",
    description:
      "Civilia Developments is a leading real estate developer with over 20 years of expertise. Discover CIV.WEST in Sheikh Zayed.",
    images: [`${siteUrl}/og-image.jpg`],
    creator: "@CiviliaDev",
    site: "@CiviliaDev",
  },
  icons: {
    icon: "/icon.svg",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "your-google-verification-code",
  },
  category: "real estate",
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "RealEstateAgent",
        "@id": `${siteUrl}/#business`,
        name: "Civilia Developments",
        url: siteUrl,
        logo: `${siteUrl}/logo.png`,
        image: `${siteUrl}/og-image.jpg`,
        description:
          "Civilia Developments is a leading real estate developer with over 20 years of expertise in construction and real estate development across Egypt.",
        foundingDate: "1995",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Sheikh Zayed",
          addressRegion: "Giza",
          addressCountry: "EG",
        },
        telephone: "+2016727",
        priceRange: "$$$",
        openingHours: "Sa-Th 09:00-18:00",
        sameAs: [
          "https://www.linkedin.com/company/civiliadevelopments",
          "https://www.linktree.com/civiliadevelopments",
        ],
        knowsAbout: [
          "Real Estate Development",
          "Residential Compounds",
          "Property Management",
          "Luxury Homes",
          "Infrastructure Projects",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Civilia Developments",
        description:
          "Civilia Developments is a leading real estate developer with over 20 years of expertise in construction and real estate development across Egypt.",
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
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <LatestProjectSection variant="default" />
        <WhyChooseSection />
        <TestimonialSection />
        <LifestyleGallerySection />
        <ProofListSection />
        {/* <LatestNewsSection /> */}
        <QuestionsSection />
        <JourneyCta />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </GsapProvider>
  );
}
