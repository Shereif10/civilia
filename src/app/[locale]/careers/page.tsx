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

const siteUrl = "https://civilia-developments.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Careers | Civilia Developments - Join Our Team",
  description:
    "Join Civilia Developments and build the future with a team driven by excellence, innovation, and engineering expertise. Explore career opportunities in real estate development.",
  keywords: [
    "careers at Civilia",
    "real estate jobs Egypt",
    "Civilia Developments hiring",
    "construction careers",
    "join our team Sheikh Zayed",
    "real estate development jobs",
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
    canonical: `${siteUrl}/careers`,
  },
  openGraph: {
    title: "Careers | Civilia Developments - Join Our Team",
    description:
      "Join Civilia Developments and build the future with a team driven by excellence, innovation, and engineering expertise. Explore career opportunities today.",
    url: `${siteUrl}/careers`,
    siteName: "Civilia Developments",
    images: [
      {
        url: `${siteUrl}/assets/careers-og.jpg`,
        width: 1200,
        height: 630,
        alt: "Careers at Civilia Developments",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers | Civilia Developments - Join Our Team",
    description:
      "Join Civilia Developments and build the future with a team driven by excellence, innovation, and engineering expertise.",
    images: [`${siteUrl}/assets/careers-og.jpg`],
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

export default function CareersPage() {
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
        telephone: "+2016727",
        email: "careers@civilia-developments.com",
      },
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/careers#webpage`,
        url: `${siteUrl}/careers`,
        name: "Careers at Civilia Developments",
        isPartOf: {
          "@id": `${siteUrl}/#website`,
        },
        description:
          "Join Civilia Developments and build the future with a team driven by excellence, innovation, and engineering expertise.",
        mainEntity: {
          "@type": "Organization",
          name: "Civilia Developments",
          slogan: "From Land To Landmark",
          jobOffers: {
            "@type": "AggregateOffer",
            availability: "https://schema.org/InStock",
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
        <ReusableHeroSection variant="careers" />
        <JoinOurTeamSection />
        <WhyWorkWithUsSection />
        <BenefitsSection />
        <QuestionsSection />
        <TestimonialSection />
        <JourneyCta variant="careers" />
      </main>

      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </GsapProvider>
  );
}
