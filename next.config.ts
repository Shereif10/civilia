import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const backendBase = (
  process.env.NEXT_PUBLIC_WAGTAIL_API_URL || "https://seodashboard.respect-solutions.cloud/api/v2"
).replace(/\/api\/v2\/?$/, "");

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async rewrites() {
    return [
      {
        source: "/media/:path*",
        destination: `${backendBase}/media/:path*`,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
