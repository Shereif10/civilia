const API_URL = (
  process.env.NEXT_PUBLIC_WAGTAIL_API_URL || "http://127.0.0.1:8000/api/v2"
).replace(/\/?$/, "");

// Section slugs in Wagtail admin — one GenericSectionPage per locale
const SECTION_SLUG: Record<string, string> = {
  en: process.env.NEXT_PUBLIC_NEWS_SECTION_SLUG_EN || "en",
  ar: process.env.NEXT_PUBLIC_NEWS_SECTION_SLUG_AR || "ar",
};

export type NewsItem = {
  id: number;
  slug: string;
  image: string;
  title: string;
  date: string;
  excerpt: string;
  content: string; // HTML built from body blocks
};

async function fetchNewsSectionId(locale: string): Promise<number | null> {
  const slug = SECTION_SLUG[locale] ?? SECTION_SLUG.en;
  try {
    const res = await fetch(
      `${API_URL}/pages/?type=home.GenericSectionPage&slug=${slug}&fields=id`,
      { next: { revalidate: 86400 } }
    );
    if (!res.ok) return null;
    const data = await res.json();
    return (data.items?.[0]?.id as number) ?? null;
  } catch {
    return null;
  }
}

export async function fetchNewsItems(locale: string): Promise<NewsItem[]> {
  try {
    const sectionId = await fetchNewsSectionId(locale);
    if (!sectionId) return [];
    const res = await fetch(
      `${API_URL}/pages/?type=home.GenericDetailPage&descendant_of=${sectionId}&fields=title,slug,date,excerpt,cover_image&order=-date`,
      { next: { revalidate: 60 } }
    );
    if (!res.ok) return [];
    const data = await res.json();
    return (data.items ?? []).map(toNewsItem);
  } catch {
    return [];
  }
}

export async function fetchNewsItemBySlug(
  slug: string,
  locale: string
): Promise<NewsItem | null> {
  try {
    const sectionId = await fetchNewsSectionId(locale);
    const childFilter = sectionId ? `&descendant_of=${sectionId}` : "";
    const res = await fetch(
      `${API_URL}/pages/?type=home.GenericDetailPage&slug=${encodeURIComponent(slug)}${childFilter}&fields=title,meta_description,date,excerpt,cover_image,body`,
      { cache: "no-store" }
    );
    if (!res.ok) return null;
    const data = await res.json();
    const item = data.items?.[0];
    if (!item) return null;
    return toNewsItem(item);
  } catch {
    return null;
  }
}

function toMediaUrl(
  image: { url?: string; full_url?: string } | undefined
): string {
  const raw = image?.full_url ?? image?.url ?? "";
  if (!raw) return "";
  try {
    return new URL(raw).pathname;
  } catch {
    return raw;
  }
}

function blocksToHtml(body: unknown): string {
  if (!Array.isArray(body)) return "";
  return body
    .map((block: Record<string, unknown>) => {
      switch (block.type) {
        case "rich_text":
          return block.value as string;
        case "embed_html":
          return block.value as string;
        case "image": {
          const img = block.value as {
            url?: string;
            full_url?: string;
            alt?: string;
          };
          return `<img src="${toMediaUrl(img)}" alt="${img.alt ?? ""}" style="max-width:100%;height:auto;border-radius:8px;margin:1.5rem 0;" />`;
        }
        default:
          return "";
      }
    })
    .join("\n");
}

function toNewsItem(item: Record<string, unknown>): NewsItem {
  const meta = item.meta as
    | { slug?: string; title?: string; seo_title?: string }
    | undefined;
  const coverImage = item.cover_image as
    | { url?: string; full_url?: string; alt?: string }
    | undefined;
  return {
    id: item.id as number,
    slug: meta?.slug ?? "",
    image: toMediaUrl(coverImage),
    title: meta?.seo_title ?? meta?.title ?? (item.title as string) ?? "",
    date: (item.date as string) ?? "",
    excerpt: (item.excerpt as string) ?? "",
    content: blocksToHtml(item.body),
  };
}
