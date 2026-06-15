"use client";

import { newsItems } from "@/lib/data";
import { FeaturedArticle } from "./FeaturedArticle";
import { NewsGrid } from "./NewsGrid";

export function NewsSection() {
  const featuredArticle = newsItems[0];
  const gridArticles = newsItems.slice(1);

  return (
    <>
      <FeaturedArticle article={featuredArticle} />

      <section className="container-civilia pb-24">
        <NewsGrid articles={gridArticles} />
      </section>
    </>
  );
}
