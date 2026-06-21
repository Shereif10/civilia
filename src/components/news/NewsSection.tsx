"use client";

import { useTranslations } from "next-intl";
import { NewsItem } from "@/lib/api";
import { FeaturedArticle } from "./FeaturedArticle";
import { NewsGrid } from "./NewsGrid";

type Props = {
  articles: NewsItem[];
};

export function NewsSection({ articles }: Props) {
  const t = useTranslations("newsPage");

  if (!articles.length) {
    return (
      <section className="container-civilia py-24 text-center text-[#888]">
        {t("noArticles")}
      </section>
    );
  }

  const featuredArticle = articles[0];
  const gridArticles = articles.slice(1);

  return (
    <>
      <FeaturedArticle article={featuredArticle} />

      {gridArticles.length > 0 && (
        <section className="container-civilia pb-24">
          <NewsGrid articles={gridArticles} />
        </section>
      )}
    </>
  );
}
