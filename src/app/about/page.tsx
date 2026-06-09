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
import { LegacyProjectsSection } from "@/components/projects/LegacyProjectsSection";

const siteUrl = "https://civilia-developments.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "About Civilia Developments | Vision, Expertise & Legacy",
  description:
    "Discover the vision, construction expertise, and legacy behind Civilia Developments. A leading real estate developer in Egypt with over 20 years of experience.",
  keywords: [
    "about Civilia Developments",
    "real estate developer Egypt",
    "construction legacy",
    "vision mission values",
    "Sheikh Zayed developer",
    "Civilia story",
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
    canonical: `${siteUrl}/about`,
  },
  openGraph: {
    title: "About Civilia Developments | Vision, Expertise & Legacy",
    description:
      "Discover the vision, construction expertise, and legacy behind Civilia Developments. A leading real estate developer in Egypt.",
    url: `${siteUrl}/about`,
    siteName: "Civilia Developments",
    images: [
      {
        url: `${siteUrl}/assets/about-og.jpg`,
        width: 1200,
        height: 630,
        alt: "About Civilia Developments",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Civilia Developments | Vision, Expertise & Legacy",
    description:
      "Discover the vision, construction expertise, and legacy behind Civilia Developments.",
    images: [`${siteUrl}/assets/about-og.jpg`],
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

export default function AboutPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "RealEstateAgent",
        "@id": `${siteUrl}/#business`,
        name: "Civilia Developments",
        url: siteUrl,
        logo: `${siteUrl}/logo.png`,
        description:
          "Civilia Developments is a leading real estate developer with over 20 years of expertise in construction and real estate development across Egypt.",
        foundingDate: "2004",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Sheikh Zayed",
          addressRegion: "Giza",
          addressCountry: "EG",
        },
        telephone: "+2016727",
        email: "info@civilia-developments.com",
        priceRange: "$$$",
        sameAs: [
          "https://www.linkedin.com/company/civiliadevelopments",
          "https://www.facebook.com/civiliadevelopments",
          "https://www.instagram.com/civiliadevelopments",
        ],
        knowsAbout: [
          "Real Estate Development",
          "Residential Compounds",
          "Luxury Homes",
          "Infrastructure Projects",
        ],
      },
      {
        "@type": "AboutPage",
        "@id": `${siteUrl}/about#webpage`,
        url: `${siteUrl}/about`,
        name: "About Civilia Developments",
        isPartOf: {
          "@id": `${siteUrl}/#website`,
        },
        description:
          "Learn about Civilia Developments – our vision, mission, construction legacy, and commitment to excellence in real estate.",
        mainEntity: {
          "@type": "Organization",
          name: "Civilia Developments",
          slogan: "From Land To Landmark",
          foundingDate: "2004",
          founders: [
            {
              "@type": "Person",
              name: "Civilia Founder",
            },
          ],
          numberOfEmployees: {
            "@type": "QuantitativeValue",
            value: 50,
            unitText: "employees",
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
        <ReusableHeroSection variant="about" />
        <OurStorySection />
        <ResidentialUnitsSection />
        <VisionMissionSection />
        <WhyChooseSection />
        <LegacyProjectsSection />
        <ApproachSection />
        <TestimonialSection />
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
