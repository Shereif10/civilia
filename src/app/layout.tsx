import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://civilia-developments.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Civilia Developments | From Land To Landmark",
    template: "%s | Civilia Developments",
  },
  description:
    "Civilia Developments is a leading real estate developer with over 20 years of expertise in construction and real estate development across Egypt. Discover our premium residential projects including CIV.WEST in Sheikh Zayed.",
  keywords: [
    "Civilia Developments",
    "real estate developer Egypt",
    "CIV.WEST",
    "property developer Sheikh Zayed",
    "luxury residential compounds",
    "real estate investment Egypt",
    "from land to landmark",
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
      "Civilia Developments delivers real estate communities built on construction expertise, reliability, and long-term value. Discover CIV.WEST in Sheikh Zayed.",
    url: siteUrl,
    siteName: "Civilia Developments",
    images: [
      {
        url: "/assets/hero.png",
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
      "Civilia Developments delivers real estate communities built on construction expertise, reliability, and long-term value.",
    images: ["/assets/hero.png"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "Civilia Developments",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    image: `${siteUrl}/assets/hero.png`,
    description:
      "Civilia Developments is a leading real estate developer with over 20 years of expertise in construction and real estate development across Egypt.",
    foundingDate: "2004",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sheikh Zayed",
      addressRegion: "Giza",
      addressCountry: "EG",
    },
    priceRange: "$$$",
    openingHours: "Sa-Th 09:00-17:00",
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
      "Property Management",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
