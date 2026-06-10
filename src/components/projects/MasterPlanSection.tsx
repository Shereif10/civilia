"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

export function MasterPlanSection() {
  const t = useTranslations("masterPlan");
  const locale = useLocale();
  const isArabic = locale === "ar";

  return (
    <section className="bg-civilia-paper py-16 md:py-24">
      <div className="mx-auto max-w-[1280px]">
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
              max-w-[1120px]
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

        <div
          data-animate="fade-up"
          className="relative mt-12 overflow-hidden rounded-[24px]"
        >
          <Image
            src="/assets/master-plan.png"
            alt="CIV West Master Plan"
            width={1280}
            height={720}
            className="h-auto w-full object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
