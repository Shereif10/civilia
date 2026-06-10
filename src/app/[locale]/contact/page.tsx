import type { Metadata } from "next";
import { ContactDetailsSection } from "@/components/contact/ContactDetailsSection";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactIntro } from "@/components/contact/ContactIntro";
import { Footer } from "@/components/layout/Footer";
import { GsapProvider } from "@/components/motion/GsapProvider";
import { QuestionsSection } from "@/components/home/QuestionsSection";

const siteUrl = "https://civilia-developments.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Contact Us | Civilia Developments - Bookings & Inquiries",
  description:
    "Get in touch with Civilia Developments for bookings, project consultations, and inquiries about CIV.WEST and our real estate developments in Sheikh Zayed, Egypt.",
  keywords: [
    "contact Civilia Developments",
    "real estate inquiries Egypt",
    "CIV.WEST bookings",
    "consultation Sheikh Zayed",
    "Civilia contact number",
    "real estate developer contact",
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
    canonical: `${siteUrl}/contact`,
  },
  openGraph: {
    title: "Contact Us | Civilia Developments - Bookings & Inquiries",
    description:
      "Get in touch with Civilia Developments for bookings, project consultations, and inquiries about CIV.WEST and our real estate developments.",
    url: `${siteUrl}/contact`,
    siteName: "Civilia Developments",
    images: [
      {
        url: `${siteUrl}/assets/contact-og.jpg`,
        width: 1200,
        height: 630,
        alt: "Contact Civilia Developments",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Civilia Developments - Bookings & Inquiries",
    description:
      "Get in touch with Civilia Developments for bookings, project consultations, and inquiries about CIV.WEST.",
    images: [`${siteUrl}/assets/contact-og.jpg`],
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

export default function ContactPage() {
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
        email: "info@civilia-developments.com",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+2016727",
          contactType: "customer service",
          email: "info@civilia-developments.com",
          availableLanguage: ["English", "Arabic"],
        },
      },
      {
        "@type": "ContactPage",
        "@id": `${siteUrl}/contact#webpage`,
        url: `${siteUrl}/contact`,
        name: "Contact Civilia Developments",
        isPartOf: {
          "@id": `${siteUrl}/#website`,
        },
        description:
          "Contact page for Civilia Developments – inquiries, bookings, and project consultations.",
        mainEntity: {
          "@type": "WebPageElement",
          cssSelector: ".contact-form",
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
        <ContactHero />
        <ContactIntro />
        <ContactDetailsSection />
        <QuestionsSection />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </GsapProvider>
  );
}
