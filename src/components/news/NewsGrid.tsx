"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { NewsItem } from "@/lib/api";

type NewsGridProps = {
  articles: NewsItem[];
};

const ARTICLES_PER_PAGE = 4;

export function NewsGrid({ articles }: NewsGridProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const gridRef = useRef<HTMLDivElement>(null);

  if (!articles.length) return null;

  const totalPages = Math.ceil(articles.length / ARTICLES_PER_PAGE);

  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
  const endIndex = startIndex + ARTICLES_PER_PAGE;

  const currentArticles = articles.slice(startIndex, endIndex);

  const changePage = (page: number) => {
    setCurrentPage(page);

    gridRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <div
        ref={gridRef}
        className="
          grid
          grid-cols-1
          gap-8
          md:grid-cols-2
        "
      >
        {currentArticles.map((article) => (
          <Link
            key={article.id}
            href={`/news/${article.slug}`}
            className="
              group
              overflow-hidden
              rounded-[28px]
              border
              border-[#E5DDD5]
              transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-lg
            "
          >
            {/* Image */}
            <div className="relative aspect-[4/3] bg-[#F0EBE3]">
              {article.image && (
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width:768px)100vw,50vw"
                  className="object-cover"
                />
              )}
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-xs uppercase tracking-[2px] text-civilia-red">
                {article.date}
              </p>

              <h3 className="mt-3 line-clamp-2 text-[22px] font-semibold leading-snug text-civilia-ink">
                {article.title}
              </h3>

              <p className="mt-4 line-clamp-3 text-[16px] leading-7 text-[#666]">
                {article.excerpt}
              </p>

              <div className="mt-6 flex items-center justify-between">
                <span className="text-sm font-semibold text-civilia-ink">
                  Read Article
                </span>

                <span className="text-2xl transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-14 flex items-center justify-center gap-3">
          <button
            onClick={() => changePage(currentPage - 1)}
            disabled={currentPage === 1}
            className="rounded-lg border border-[#DDD] px-4 py-2 transition disabled:cursor-not-allowed disabled:opacity-40"
          >
            Previous
          </button>

          {Array.from({ length: totalPages }).map((_, index) => {
            const page = index + 1;

            return (
              <button
                key={page}
                onClick={() => changePage(page)}
                className={`h-11 w-11 rounded-full transition ${
                  currentPage === page
                    ? "bg-civilia-red text-white"
                    : "border border-[#DDD] hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            );
          })}

          <button
            onClick={() => changePage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="rounded-lg border border-[#DDD] px-4 py-2 transition disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next
          </button>
        </div>
      )}
    </>
  );
}
