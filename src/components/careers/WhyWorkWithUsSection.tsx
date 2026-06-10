"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

const icons = [
  "/assets/growth-icon.svg",
  "/assets/culture-icon.svg",
  "/assets/benefits-icon.svg",
  "/assets/projects-icon.svg",
];

type Reason = {
  title: string;
  description: string;
};

export function WhyWorkWithUsSection() {
  const t = useTranslations("whyWorkWithUs");
  const locale = useLocale();
  const isArabic = locale === "ar";

  const reasons = t.raw("reasons") as Reason[];

  return (
    <section className="bg-civilia-paper py-16 md:py-24">
      <div className="container-civilia">
        {/* Header */}
        <div
          data-animate="fade-up"
          className="rounded-[16px] py-8 backdrop-blur-[100px] md:py-10"
          style={{
            background:
              "linear-gradient(90deg, #FFFDFA 0%, #FFF3E1 50%, #FFFDFA 100%)",
          }}
        >
          <h2 className="text-center text-[48px] font-semibold leading-none text-civilia-red md:text-[80px]">
            {t("title")}
          </h2>
        </div>

        {/* Cards */}
        <div
          className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4"
          data-animate="stagger"
        >
          {reasons.map((item, index) => (
            <article
              key={item.title}
              className="h-[179px] rounded-[24px] border border-[#1919191A] px-6 py-10"
              style={{
                background:
                  "linear-gradient(90deg, #FFFDFA 0%, #FFF3E1 50%, #FFFDFA 100%)",
              }}
            >
              <div
                className={`flex items-start justify-between gap-3 ${
                  isArabic ? "text-right" : ""
                }`}
              >
                <h3 className="text-[20px] font-semibold leading-none text-civilia-ink">
                  {item.title}
                </h3>

                <Image
                  src={icons[index]}
                  alt=""
                  width={24}
                  height={24}
                  className="shrink-0"
                />
              </div>

              <p
                className={`mt-3 text-[14px] leading-[1.4] text-[#6A6A6A] ${
                  isArabic ? "text-right" : ""
                }`}
              >
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
