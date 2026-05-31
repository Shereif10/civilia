import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://civilia-developments.com"),
  title: {
    default: "CIVILIA Developments",
    template: "%s | CIVILIA Developments",
  },
  description:
    "CIVILIA Developments delivers real estate communities built on construction expertise, reliability, and long-term value.",
  keywords: ["CIVILIA", "real estate", "Sheikh Zayed", "CIV West", "developments"],
  openGraph: {
    title: "CIVILIA Developments",
    description:
      "From land to landmark. A new standard of living built on real construction expertise.",
    images: ["/assets/hero.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
