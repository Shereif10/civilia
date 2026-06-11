"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

export function MasterPlanSection() {
  const t = useTranslations("masterPlan");
  const locale = useLocale();
  const isArabic = locale === "ar";

  return (
    <section className="bg-civilia-paper py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-4 md:px-0">
        <div className="text-center">
          <h2
            data-animate="fade-up"
            className="text-[48px] font-light leading-none text-[#031286] md:text-[72px]"
            style={{ fontFamily: "Badgline" }}
          >
            {t("title")}
          </h2>

          <p
            data-animate="fade-up"
            className={`
              mx-auto
              mt-8
              
              text-[18px]
              leading-[1.7]
              text-[#555555]

              md:text-[22px]

              ${isArabic ? "text-right" : "text-center"}
            `}
          >
            {t("description")}
          </p>
        </div>

        <div data-animate="fade-up" className="mt-12">
          {/* Progress Card */}
          <div
            className="
    mb-6
    flex
    flex-col
    gap-6
    bg-[#E7DD4B]

    rounded-tl-[16px]
    rounded-tr-[16px]
    rounded-br-[16px]
    rounded-bl-[96px]

    px-6
    py-6

    md:h-[160px]
    md:flex-row
    md:items-center
    md:justify-between
    md:px-16
    md:py-8
  "
          >
            <div className="flex items-end gap-4">
              <span
                className="leading-none text-[#031286]"
                style={{
                  fontFamily: "Badgline",
                  fontSize: "clamp(56px, 6vw, 96px)",
                }}
              >
                60%
              </span>

              <span className="mb-2 text-[22px] font-medium text-[#1D1D1D] md:text-[22px]">
                The first stage has ended
              </span>
            </div>

            <div className="flex justify-end gap-2">
              {Array.from({ length: 10 }).map((_, index) => (
                <div
                  key={index}
                  className={`h-6 w-4 border rounded-sm border-[#031286] ${
                    index < 4 ? "bg-transparent" : "bg-[#031286]"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Master Plan Image */}
          <div className="overflow-hidden rounded-[24px]">
            <Image
              src="/assets/loading-plan.webp"
              alt="CIV West Master Plan"
              width={1280}
              height={720}
              priority
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
