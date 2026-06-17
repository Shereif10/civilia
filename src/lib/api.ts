const API_URL = (
  process.env.NEXT_PUBLIC_WAGTAIL_API_URL || "http://127.0.0.1:8000/api/v2"
).replace(/\/?$/, "");

export type NewsItem = {
  id: number;
  slug: string;
  image: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
};

export async function fetchNewsItems(): Promise<NewsItem[]> {
  try {
    const res = await fetch(
      `${API_URL}/pages/?type=home.CiviliaNewsPage&fields=date,excerpt,cover_image&order=-date`,
      { next: { revalidate: 60 } }
    );
    if (!res.ok) return [];
    const data = await res.json();
    return (data.items ?? []).map(toNewsItem);
  } catch {
    return [];
  }
}

export async function fetchNewsItemBySlug(slug: string): Promise<NewsItem | null> {
  try {
    const res = await fetch(
      `${API_URL}/pages/?type=home.CiviliaNewsPage&slug=${encodeURIComponent(slug)}&fields=date,excerpt,cover_image,content`,
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function toNewsItem(item: any): NewsItem {
  return {
    id: item.id as number,
    slug: (item.meta?.slug ?? "") as string,
    image: (item.cover_image?.url as string | undefined) ?? "",
    title: (item.meta?.title ?? item.title ?? "") as string,
    date: (item.date ?? "") as string,
    excerpt: (item.excerpt ?? "") as string,
    content: (item.content ?? "") as string,
  };
}
