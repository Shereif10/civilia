import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const backendBase = (
  process.env.NEXT_PUBLIC_WAGTAIL_API_URL || "http://localhost:8000/api/v2/"
).replace(/\/api\/v2\/?$/, "");

const backendUrl = new URL(backendBase);

const remotePatterns: NonNullable<NextConfig["images"]>["remotePatterns"] = [
  {
    protocol: backendUrl.protocol.replace(":", "") as "http" | "https",
    hostname: backendUrl.hostname,
    ...(backendUrl.port ? { port: backendUrl.port } : {}),
    pathname: "/media/**",
  },
];

// Keep localhost available for local development when backend is remote
if (backendUrl.hostname !== "localhost" && backendUrl.hostname !== "127.0.0.1") {
  remotePatterns.push({ protocol: "http", hostname: "localhost", pathname: "/media/**" });
  remotePatterns.push({ protocol: "http", hostname: "127.0.0.1", pathname: "/media/**" });
}

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns,
  },
};

export default withNextIntl(nextConfig);
