"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

type ApproachItem = {
  number: string;
  title: string;
  description: string;
};

export function ApproachSection() {
  const t = useTranslations("approach");
  const locale = useLocale();
  const isArabic = locale === "ar";

  const approachItems = t.raw("items") as ApproachItem[];

  return (
    <section className="overflow-x-hidden bg-civilia-paper py-12 sm:py-20 md:py-32">
      <div
        className="mx-auto max-w-[1280px] rounded-2xl px-4 py-10 md:rounded-[32px] md:px-0 md:py-20"
        style={{
          background:
            "linear-gradient(90deg, #FFFDFA 0%, #FFF3E1 50%, #FFFDFA 100%)",
        }}
      >
        {/* Section Title */}
        <h2
          data-animate="fade-up"
          className="
            text-center
            text-[40px]
            font-semibold
            leading-none
            text-civilia-red

            sm:text-[56px]

            md:text-[72px]
          "
        >
          {t("title")}
        </h2>

        <div className="mt-12 flex flex-col items-end justify-between gap-8 lg:flex-row lg:gap-16">
          {/* Content */}
          <div className="w-full">
            <div className="flex flex-col gap-8 sm:gap-12">
              {approachItems.map((item) => (
                <div key={item.number} data-animate="fade-up">
                  <div
                    className={`flex items-start gap-4 sm:gap-6 ${
                      isArabic ? "text-right" : ""
                    }`}
                  >
                    <span
                      dir="ltr"
                      className="
                        min-w-[40px]
                        whitespace-nowrap
                        text-[32px]
                        font-semibold
                        leading-none
                        text-civilia-red/45

                        sm:min-w-[52px]
                        sm:text-[42px]

                        md:text-[52px]
                      "
                    >
                      {item.number}
                    </span>

                    <div className={`flex-1 ${isArabic ? "text-right" : ""}`}>
                      <h3
                        className="
                          text-[20px]
                          font-semibold
                          leading-none
                          text-civilia-ink

                          sm:text-[24px]

                          md:text-[38px]
                        "
                      >
                        {item.title}
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-[1.4]
                          text-[#555555]

                          sm:mt-3
                          sm:text-base

                          md:text-[20px]
                        "
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div
            data-animate="reveal"
            className="
              relative
              h-[250px]
              w-full
              max-w-full
              overflow-hidden
              rounded-[16px]
              grayscale

              sm:h-[350px]

              md:h-[450px]
              md:max-w-[420px]
            "
          >
            <Image
              src="/assets/approach-image.webp"
              alt="Civilia construction process"
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
