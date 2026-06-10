"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

type Reason = {
  title: string;
  description: string;
};

export function WhyChooseCivWestSection() {
  const t = useTranslations("whyChooseCivWest");
  const locale = useLocale();
  const isArabic = locale === "ar";

  const reasons = t.raw("reasons") as Reason[];

  return (
    <section className="bg-civilia-paper py-16 md:py-24">
      <div className="container-civilia">
        <h2
          data-animate="fade-up"
          className="
            text-center
            text-[38px]
            font-light
            leading-none
            text-[#031286]

            sm:text-[48px]

            md:text-[72px]
          "
        >
          {t("title")}
        </h2>

        <div
          className="
            mt-10
            grid
            gap-5

            md:mt-14
            md:grid-cols-2
            md:gap-6
          "
          data-animate="stagger"
        >
          {reasons.map((item) => (
            <article
              key={item.title}
              className="
                flex
                min-h-[180px]
                flex-col
                rounded-[16px]
                border
                border-[#031286]
                bg-transparent

                px-5
                py-6

                sm:px-6
                sm:py-7

                md:px-8
                md:py-8

                transition-all
                duration-300
                hover:-translate-y-1
              "
            >
              <div
                className={`flex items-center gap-4 ${
                  isArabic ? "text-right" : ""
                }`}
              >
                <Image
                  src="/assets/why-icon.svg"
                  alt=""
                  width={28}
                  height={28}
                  className="shrink-0"
                />

                <h3
                  className="
                    text-[18px]
                    font-semibold
                    text-[#031286]

                    sm:text-[20px]

                    md:text-[24px]
                  "
                >
                  {item.title}
                </h3>
              </div>

              <div className="mt-5 flex flex-1 items-center">
                <p
                  className={`
                    text-[15px]
                    leading-[1.7]
                    text-[#5A5A5A]

                    sm:text-[16px]

                    md:text-[18px]

                    ${isArabic ? "text-right" : ""}
                  `}
                >
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
