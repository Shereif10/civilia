"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

export function ProjectOverviewSection() {
  const t = useTranslations("projectOverview");
  const locale = useLocale();
  const isArabic = locale === "ar";

  return (
    <section className="bg-civilia-paper py-16 md:py-24">
      <div className="container-civilia">
        <div
          data-animate="fade-up"
          className="grid items-start gap-12 lg:grid-cols-[1fr_420px]"
        >
          {/* Content */}
          <div className={isArabic ? "text-right" : ""}>
            <h2
              className="
                text-[#031286]
                font-light
                leading-none

                text-[52px]

                md:text-[72px]

                lg:text-[88px]
              "
              style={{ fontFamily: "Badgline" }}
            >
              {t("title")}
            </h2>

            <div className="mt-8 max-w-[650px]">
              <p
                className="
                  text-[#3A3A3A]
                  leading-[1.5]

                  text-[22px]

                  md:text-[26px]
                "
              >
                <span className="font-semibold text-[#031286]">
                  {t("highlight")}
                </span>{" "}
                {t("paragraph1")}
              </p>

              <p
                className="
                  mt-4
                  text-[#3A3A3A]
                  leading-[1.5]

                  text-[22px]

                  md:text-[26px]
                "
              >
                {t("paragraph2")}
              </p>
            </div>
          </div>

          {/* Image */}
          <div
            data-animate="reveal"
            className="
              relative
              h-[260px]
              overflow-hidden
              rounded-[24px]

              md:h-[350px]

              lg:h-[420px]
            "
          >
            <Image
              src="/assets/project-overview.webp"
              alt="CIV WEST"
              fill
              sizes="(max-width:1024px) 100vw, 420px"
              className="object-fill"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
