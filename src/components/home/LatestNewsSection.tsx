import Image from "next/image";
import { useTranslations } from "next-intl";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CiviliaButton } from "@/components/ui/CiviliaButton";
import { Link } from "@/i18n/navigation";
import { NewsItem } from "@/lib/api";

type Props = {
  articles: NewsItem[];
};

export function LatestNewsSection({ articles }: Props) {
  const t = useTranslations("newsPage");

  if (!articles.length) return null;

  return (
    <section id="news" className="bg-civilia-paper py-16 md:py-24">
      <SectionTitle className="mx-auto w-full">
        {t("latestTitle")}
      </SectionTitle>

      <div
        className="container-civilia mt-16 grid gap-8 md:grid-cols-[1fr_410px_1fr]"
        data-animate="stagger"
      >
        {articles.slice(0, 3).map((item, index) => (
          <article
            key={`${item.id}-${index}`}
            className="civilia-gradient-card overflow-hidden rounded-3xl pb-6"
          >
            <div className="relative h-[330px] md:h-[397px] bg-[#F0EBE3]">
              {item.image && (
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 410px"
                  className="object-cover"
                />
              )}
            </div>
            <div className="flex min-h-[124px] flex-col gap-4 px-4 pt-6">
              <h3 className="text-center text-sm leading-[1.25] text-[#404030]">
                {item.title}
              </h3>
              <div className="flex justify-end">
                <CiviliaButton href={`/news/${item.slug}`}>
                  {t("readMore")}
                </CiviliaButton>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
