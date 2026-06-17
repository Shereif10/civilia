"use client";

import Image from "next/image";
import Link from "next/link";
import { NewsItem } from "@/lib/api";

type FeaturedArticleProps = {
  article: NewsItem;
};

export function FeaturedArticle({ article }: FeaturedArticleProps) {
  if (!article) return null;

  return (
    <section className="container-civilia py-20">
      <article
        className="
          overflow-hidden
          rounded-[32px]
          bg-[linear-gradient(90deg,#FFFDFA_0%,#FFF4E5_50%,#FFFDFA_100%)]
        "
      >
        {/* Image */}
        {article.image && (
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={article.image}
              alt={article.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        )}

        {/* Content */}
        <div className="px-8 py-8 md:px-12 md:py-10">
          <p
            className="
              text-xs
              uppercase
              tracking-[2px]
              text-civilia-red
            "
          >
            {article.date}
          </p>

          <h2
            className="
              mt-4
              text-[34px]
              font-semibold
              leading-tight
              text-civilia-ink

              md:text-[52px]
            "
          >
            {article.title}
          </h2>

          <p
            className="
              mt-5
              text-[18px]
              leading-8
              text-[#555]
              line-clamp-2
            "
          >
            {article.excerpt}
          </p>

          <div className="mt-8 flex justify-end">
            <Link
              href={`/news/${article.slug}`}
              className="
    mt-10
    inline-flex
    items-center
    rounded-full
    bg-civilia-red
    px-8
    py-3
    text-white
    transition-opacity
    hover:opacity-90
  "
            >
              Read More
            </Link>
          </div>
        </div>
      </article>
    </section>
  );
}
