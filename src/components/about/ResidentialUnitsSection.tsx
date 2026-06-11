"use client";

import Image from "next/image";
import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";

type ResidentialUnit = {
  icon: string;
  value: string;
  label: string;
  location: string;
  type: string;
};

const residentialIcons = [
  "/assets/nasr-city.svg",
  "/assets/maadi.svg",
  "/assets/khamayel.svg",
];

export function ResidentialUnitsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const t = useTranslations("residentialUnits");
  const locale = useLocale();
  const isArabic = locale === "ar";

  const residentialUnits = t.raw("items") as Omit<ResidentialUnit, "icon">[];

  const units: ResidentialUnit[] = residentialUnits.map((item, index) => ({
    ...item,
    icon: residentialIcons[index],
  }));

  return (
    <section className="bg-civilia-paper pb-20 md:pb-32">
      <div className="container-civilia">
        <div className="flex items-start justify-between gap-6">
          <h2
            data-animate="fade-up"
            className="
              text-[36px]
              font-semibold
              leading-[0.95]
              tracking-[-1px]
              text-civilia-ink

              sm:text-[44px]

              md:text-[56px]

              xl:text-[72px]
            "
          >
            <span className="block">{t("title.line1")}</span>
            <span className="block">{t("title.line2")}</span>
          </h2>

          {/* <div className="hidden pt-10 md:block">
            <Image
              src="/assets/story-accent.svg"
              alt=""
              width={33}
              height={17}
            />
          </div> */}
        </div>

        <div
          className="
            relative
            mt-10

            sm:mt-14

            md:mt-16

            xl:mt-20
            xl:h-[380px]
          "
        >
          {units.map((item, index) => {
            const distance =
              index === activeIndex
                ? 0
                : index > activeIndex
                  ? index - activeIndex
                  : units.length - activeIndex + index;

            return (
              <button
                key={item.location}
                type="button"
                onClick={() => setActiveIndex(index)}
                data-animate="fade-up"
                className={`
                  ${distance > 0 ? "mt-4 xl:mt-0" : ""}

                  xl:absolute
                  left-0
                  w-full

                  overflow-hidden
                  rounded-[24px]
                  border-[3px]
                  border-black/[0.05]

                  ${isArabic ? "text-right" : "text-left"}

                  shadow-[0_8px_20px_rgba(0,0,0,0.10)]
                  transition-all
                  duration-500
                  ease-out

                  xl:h-[228px]

                  ${distance === 0 ? "z-30" : ""}
                  ${distance === 1 ? "z-20" : ""}
                  ${distance === 2 ? "z-10" : ""}
                `}
                style={{
                  top: distance === 0 ? 0 : distance === 1 ? 85 : 170,
                  transform: `scale(${
                    distance === 0 ? 1 : distance === 1 ? 0.93 : 0.86
                  })`,
                  transformOrigin: "top center",
                  background:
                    "linear-gradient(90deg, #FFFDFA 0%, #FFF3E1 50%, #FFFDFA 100%)",
                }}
                aria-label={`Show ${item.location} residential units`}
              >
                <div
                  className="
                    flex
                    flex-col
                    gap-6
                    p-6

                    sm:p-8

                    xl:h-[228px]
                    xl:flex-row
                    xl:items-start
                    xl:justify-between
                  "
                >
                  <div
                    className={`
    flex
    flex-col
    items-center
    gap-4
    text-center

    sm:flex-row
    sm:items-center
    sm:gap-6

    xl:gap-8

    ${
      isArabic
        ? "sm:flex-row xl:flex-row sm:text-right"
        : "sm:text-left"
    }
  `}
                  >
                    <div
                      className="
                        relative
                        h-[110px]
                        w-[110px]
                        shrink-0

                        sm:h-[130px]
                        sm:w-[130px]

                        xl:h-[160px]
                        xl:w-[160px]
                      "
                    >
                      <Image
                        src={item.icon}
                        alt={item.location}
                        fill
                        sizes="160px"
                        className="object-fill"
                      />
                    </div>

                    <div className="flex flex-col justify-center">
                      <div
                        className={`flex items-end gap-2 ${
                          isArabic
                            ? "justify-center sm:justify-end"
                            : "justify-center sm:justify-start"
                        }`}
                      >
                        <span
                          dir="ltr"
                          className="
                            text-[56px]
                            font-semibold
                            leading-[0.82]
                            tracking-[-3px]
                            text-civilia-ink

                            sm:text-[72px]

                            xl:text-[86px]
                            xl:tracking-[-5px]
                          "
                        >
                          {item.value}
                        </span>

                        <span
                          className="
                            mb-3
                            text-[16px]
                            font-medium
                            leading-none
                            text-civilia-red

                            xl:mb-[18px]
                            xl:text-[18px]
                          "
                        >
                          {item.label}
                        </span>
                      </div>

                      <p
                        className="
                          mt-3
                          text-[24px]
                          font-medium
                          leading-none
                          tracking-[-1px]
                          text-civilia-red

                          sm:text-[28px]

                          xl:mt-4
                          xl:text-[34px]
                        "
                      >
                        {item.location}
                      </p>
                    </div>
                  </div>

                  <div
                    className="
                      flex
                      items-center
                      justify-center

                      xl:h-full
                      xl:items-end
                    "
                  >
                    <p
                      className={`
                        text-center
                        text-[24px]
                        font-medium
                        leading-none
                        tracking-[-1px]
                        text-[#202020]

                        sm:text-[28px]

                        xl:text-[38px]

                        ${isArabic ? "sm:text-right" : "sm:text-left"}
                      `}
                    >
                      {item.type}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div data-animate="fade-up" className="mt-10 text-center md:mt-16">
          <p
            className="
              text-[22px]
              font-medium
              leading-[1.2]
              text-civilia-red

              sm:text-[26px]

              md:text-[32px]

              xl:text-[40px]
            "
          >
            {t("bottomText")}
          </p>
        </div>
      </div>
    </section>
  );
}
