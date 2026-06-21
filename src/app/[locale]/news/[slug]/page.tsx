import { notFound } from "next/navigation";

import { fetchNewsItemBySlug, fetchNewsItems } from "@/lib/api";
import { ArticleDetails } from "@/components/news/ArticleDetails";
import { Footer } from "@/components/layout/Footer";

type Props = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

export default async function ArticlePage({ params }: Props) {
  const { locale, slug } = await params;

  const [article, allNews] = await Promise.all([
    fetchNewsItemBySlug(slug, locale),
    fetchNewsItems(locale),
  ]);

  if (!article) notFound();

  const relatedArticles = allNews
    .filter((item) => item.slug !== slug)
    .slice(0, 2);

  return (
    <main className="min-h-screen bg-civilia-paper">
      <ArticleDetails article={article} relatedArticles={relatedArticles} />
      <Footer />
    </main>
  );
}
