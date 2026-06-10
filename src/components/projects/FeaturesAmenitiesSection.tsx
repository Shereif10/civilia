"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

const amenityIcons = [
  "/assets/kids-area.svg",
  "/assets/clubhouse.svg",
  "/assets/yoga.svg",
  "/assets/protection.svg",
  "/assets/padel.svg",
  "/assets/jogging.svg",
  "/assets/mall.svg",
  "/assets/charger.svg",
  "/assets/lake.svg",
  "/assets/gym.svg",
  "/assets/gates.svg",
  "/assets/landscape.svg",
];

export function FeaturesAmenitiesSection() {
  const t = useTranslations("featuresAmenities");
  const locale = useLocale();
  const isArabic = locale === "ar";

  const amenities = t.raw("items") as string[];

  return (
    <section className="bg-civilia-paper py-16 md:py-24">
      <div className="overflow-hidden rounded-[32px] border border-[#1D2D8C]/20">
        {/* Header */}
        <div className="rounded-bl-[180px] bg-[#F0E459] px-6 py-8 md:rounded-bl-[285px] md:px-16 md:py-12">
          <h2
            data-animate="fade-up"
            className="text-center text-[42px] font-light leading-none text-[#1D2D8C] md:text-[72px]"
            style={{ fontFamily: "Badgline" }}
          >
            {t("title")}
          </h2>
        </div>

        {/* Amenities */}
        <div
          data-animate="stagger"
          className="
            grid
            gap-x-8
            gap-y-12
            px-8
            py-12

            sm:grid-cols-2

            lg:grid-cols-3
            lg:px-16
            lg:py-16
          "
        >
          {amenities.map((title, index) => (
            <div
              key={title}
              className={`flex items-start gap-5 ${
                isArabic ? "text-right" : ""
              }`}
            >
              <Image
                src={amenityIcons[index]}
                alt=""
                width={44}
                height={44}
                className="shrink-0"
              />

              <p
                className="
                  text-[22px]
                  leading-[1.25]
                  text-[#3D3D3D]

                  md:text-[28px]
                "
              >
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
