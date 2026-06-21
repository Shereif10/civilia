import type { MetadataRoute } from "next";
import { fetchNewsItems } from "@/lib/api";

const BASE_URL = "https://civilia-developments.com";

const staticRoutes: {
  en: string;
  ar: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}[] = [
  { en: "/",          ar: "/",            priority: 1.0, changeFrequency: "weekly"  },
  { en: "/about",     ar: "/من-نحن",      priority: 0.8, changeFrequency: "monthly" },
  { en: "/projects",  ar: "/المشاريع",    priority: 0.8, changeFrequency: "monthly" },
  { en: "/news",      ar: "/الأخبار",     priority: 0.8, changeFrequency: "weekly"  },
  { en: "/contact",   ar: "/تواصل-معنا",  priority: 0.7, changeFrequency: "monthly" },
  { en: "/projects/civ-west", ar: "/المشاريع/civ-west", priority: 0.9, changeFrequency: "monthly" },
  { en: "/careers",   ar: "/الوظائف",     priority: 0.7, changeFrequency: "monthly" },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [enNews, arNews] = await Promise.all([
    fetchNewsItems("en"),
    fetchNewsItems("ar"),
  ]);

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${BASE_URL}/en${route.en}`,
    alternates: {
      languages: {
        en: `${BASE_URL}/en${route.en}`,
        ar: `${BASE_URL}/ar${route.ar}`,
      },
    },
    priority: route.priority,
    changeFrequency: route.changeFrequency,
  }));

  const enNewsEntries: MetadataRoute.Sitemap = enNews.map((item) => ({
    url: `${BASE_URL}/en/news/${item.slug}`,
    lastModified: item.date ? new Date(item.date) : undefined,
    priority: 0.6,
    changeFrequency: "never" as const,
  }));

  const arNewsEntries: MetadataRoute.Sitemap = arNews.map((item) => ({
    url: `${BASE_URL}/ar/news/${item.slug}`,
    lastModified: item.date ? new Date(item.date) : undefined,
    priority: 0.6,
    changeFrequency: "never" as const,
  }));

  return [...staticEntries, ...enNewsEntries, ...arNewsEntries];
}
