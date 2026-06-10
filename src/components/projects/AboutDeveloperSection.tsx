"use client";

import { useTranslations } from "next-intl";

export function AboutDeveloperSection() {
  const t = useTranslations("aboutDeveloper");

  return (
    <section className="bg-civilia-paper py-16 md:py-24">
      <div className="container-civilia">
        <div data-animate="fade-up" className="mx-auto text-center">
          <h2
            className="text-[48px] font-light leading-none text-[#031286] md:text-[72px]"
            style={{ fontFamily: "Badgline" }}
          >
            {t("title")}
          </h2>

          <h3 className="mt-8 text-[20px] text-[#3D3D3D] md:text-[40px]">
            {t("subtitle")}
          </h3>

          <p className="mx-auto mt-10 text-[22px] leading-[1.6] text-[#4A4A4A]">
            <span
              className="text-[32px] font-light text-[#031286]"
              style={{ fontFamily: "Badgline" }}
            >
              {t("highlight")}
            </span>{" "}
            {t("paragraph1")}
          </p>

          <p className="mx-auto mt-10 text-[20px] leading-[1.6] text-[#031286]">
            {t("paragraph2")}
          </p>

          <p className="mx-auto mt-14 text-[20px] leading-[1.6] text-[#4A4A4A]">
            <span
              className="font-light text-[#031286]"
              style={{ fontFamily: "Badgline" }}
            >
              {t("projectHighlight")}
            </span>{" "}
            {t("paragraph3")}
          </p>
        </div>
      </div>
    </section>
  );
}
