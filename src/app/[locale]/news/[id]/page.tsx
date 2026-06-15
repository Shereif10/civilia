import { notFound } from "next/navigation";

import { newsItems } from "@/lib/data";
import { ArticleDetails } from "@/components/news/ArticleDetails";
import { Footer } from "@/components/layout/Footer";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ArticlePage({ params }: Props) {
  const { id } = await params;

  const article = newsItems.find((item) => item.id === Number(id));

  if (!article) notFound();

  return (
    <main className="min-h-screen bg-civilia-paper">
      <ArticleDetails article={article} />
      <Footer/>
    </main>
  );
}
