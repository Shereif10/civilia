"use client";

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

export function OurStorySection() {
  const t = useTranslations("ourStory");
  const locale = useLocale();
  const isArabic = locale === "ar";

  return (
    <section className="bg-civilia-paper pb-20 pt-6 md:pb-32 md:pt-10">
      <div className="mx-auto max-w-[1440px] overflow-hidden">
        <div
          data-animate="fade-up"
          className="flex min-h-[118px] items-center justify-center rounded-bl-[120px] bg-civilia-red px-8 py-8 md:min-h-[174px] md:rounded-bl-[220px]"
        >
          <h2 className="text-center text-[40px] font-semibold leading-none text-civilia-paper md:text-[72px]">
            {t("title")}
          </h2>
        </div>
      </div>

      <div className="container-civilia relative mt-14 md:mt-20">
        <div
          data-animate="fade-up"
          className="relative overflow-hidden rounded-[32px] px-6 py-12 md:px-16 md:py-20"
          style={{
            background:
              "linear-gradient(90deg, #FFFDFA 0%, #FFF3E1 50%, #FFFDFA 100%)",
          }}
        >
          <div
            className={`max-w-[1120px] text-[15px] leading-[1.9] tracking-[-0.01em] text-[#2f2f2f] md:text-[19px] ${
              isArabic ? "text-right" : "text-left"
            }`}
          >
            <p>{t("paragraph1")}</p>

            <p className="mt-8">{t("paragraph2")}</p>

            <p className="mt-8">{t("paragraph3")}</p>

            <p className="mt-8">{t("paragraph4")}</p>
          </div>

          <div
            className={`absolute bottom-8 hidden md:block ${
              isArabic ? "left-8" : "right-8"
            }`}
          >
            <Image
              src="/assets/story-accent.svg"
              alt=""
              width={33}
              height={17}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
