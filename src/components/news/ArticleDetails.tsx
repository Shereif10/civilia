"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { NewsItem } from "@/lib/api";

type Props = {
  article: NewsItem;
  relatedArticles: NewsItem[];
};

export function ArticleDetails({ article, relatedArticles }: Props) {
  const t = useTranslations("newsPage");

  if (!article) return null;

  return (
    <section className="bg-[#F8F6F2]">
      {/* Top */}
      <div className="container-civilia pt-10">
        <Link
          href="/news"
          className="inline-flex items-center gap-2 text-civilia-red font-medium hover:opacity-70 transition"
        >
          <ArrowLeft size={18} />
          {t("backToNews")}
        </Link>
      </div>

      {/* Hero */}
      <div className="container-civilia py-14">
        <div className="mx-auto max-w-[1050px]">
          <p className="uppercase tracking-[4px] text-sm text-civilia-red">
            {article.date}
          </p>

          <h1
            className="
              mt-5
              text-[42px]
              leading-[1.05]
              font-semibold
              text-civilia-ink

              md:text-[74px]
            "
          >
            {article.title}
          </h1>

          <p
            className="
              mt-8
              max-w-[760px]
              text-[21px]
              leading-9
              text-[#666]
            "
          >
            {article.excerpt}
          </p>

          {article.image && (
            <div className="relative mt-14 h-[620px] overflow-hidden rounded-[40px]">
              <Image
                src={article.image}
                alt={article.title}
                fill
                priority
                className="object-cover"
              />
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="bg-white rounded-t-[50px]">
        <div className="container-civilia">
          <article className="mx-auto py-24">
            <div
              className="
                prose
                max-w-none
                text-[20px]
                leading-[2.15]
                text-[#333]
                [&_p]:mb-6
                [&_h2]:text-[28px]
                [&_h2]:font-semibold
                [&_h2]:mt-10
                [&_h2]:mb-4
              "
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            <div className="mt-24 border-t border-[#E6DED5]" />

            {/* Navigation */}
            <div className="mt-10 flex items-center justify-between">
              <Link
                href="/news"
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-civilia-red
                  px-7
                  py-3
                  text-civilia-red
                  transition

                  hover:bg-civilia-red
                  hover:text-white
                "
              >
                <ArrowLeft size={18} />
                {t("backToNews")}
              </Link>

              <div className="flex items-center gap-3 text-[#888]">
                CIVILIA Developments
              </div>
            </div>
          </article>
        </div>
      </div>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <div className="bg-[#F8F6F2] py-24">
          <div className="container-civilia">
            <div className="mb-14 flex items-center justify-between">
              <h2 className="text-[42px] font-semibold text-civilia-ink">
                {t("moreArticles")}
              </h2>

              <Link
                href="/news"
                className="flex items-center gap-2 font-medium text-civilia-red"
              >
                {t("viewAll")}
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {relatedArticles.map((item) => (
                <Link
                  key={item.id}
                  href={{ pathname: "/news/[slug]", params: { slug: item.slug } }}
                  className="
                    group
                    overflow-hidden
                    rounded-[28px]
                    bg-white
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:shadow-xl
                  "
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#F0EBE3]">
                    {item.image && (
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="
                          object-cover
                          transition-transform
                          duration-500
                          group-hover:scale-105
                        "
                      />
                    )}
                  </div>

                  <div className="p-8">
                    <p className="text-xs uppercase tracking-[2px] text-civilia-red">
                      {item.date}
                    </p>

                    <h3
                      className="
                        mt-4
                        text-[30px]
                        font-semibold
                        leading-tight
                        text-civilia-ink
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-5
                        line-clamp-3
                        text-[17px]
                        leading-8
                        text-[#666]
                      "
                    >
                      {item.excerpt}
                    </p>

                    <div className="mt-8 flex items-center justify-between">
                      <span className="font-medium text-civilia-red">
                        {t("readArticle")}
                      </span>

                      <ArrowRight
                        size={20}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
