"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

const icons = ["/assets/vision-icon.svg", "/assets/mission-icon.svg"];

type VisionMissionItem = {
  title: string;
  description: string;
};

export function VisionMissionSection() {
  const t = useTranslations("visionMission");
  const locale = useLocale();
  const isArabic = locale === "ar";

  const items = t.raw("items") as VisionMissionItem[];

  return (
    <section className="bg-civilia-paper pb-20 md:pb-32">
      <div className="container-civilia flex flex-col gap-6 md:gap-8">
        {items.map((item, index) => (
          <article
            key={item.title}
            data-animate="fade-up"
            className="
              relative
              overflow-hidden
              rounded-bl-[80px]
              rounded-br-[16px]
              rounded-tl-[16px]
              rounded-tr-[16px]
              border-2

              px-5
              py-6

              sm:px-8
              sm:py-8

              md:min-h-[291px]
              md:rounded-bl-[140px]
              md:px-12
              md:py-12

              lg:px-16
              lg:py-16

              2xl:min-h-[340px]
            "
            style={{
              background:
                "linear-gradient(90deg, #FFFDFA 0%, #FFF3E1 50%, #FFFDFA 100%)",
              border: "2px solid rgba(255, 255, 255, 0.25)",
            }}
          >
            <div className="flex flex-col gap-6 md:gap-8">
              <div
                className={`flex items-center justify-between gap-4 ${
                  isArabic ? "flex-row-reverse" : ""
                }`}
              >
                <h2
                  className="
                    text-[28px]
                    font-semibold
                    leading-none
                    tracking-[-1px]
                    text-civilia-red

                    sm:text-[34px]

                    md:text-[42px]

                    lg:text-[48px]

                    2xl:text-[56px]
                  "
                >
                  {item.title}
                </h2>

                <div className="shrink-0">
                  <Image
                    src={icons[index]}
                    alt=""
                    width={42}
                    height={42}
                    className="
                      h-[32px]
                      w-[32px]
                      object-contain

                      sm:h-[38px]
                      sm:w-[38px]

                      md:h-[42px]
                      md:w-[42px]
                    "
                  />
                </div>
              </div>

              <p
                className={`
                  text-[16px]
                  leading-[1.5]
                  text-[#2a2a2a]

                  sm:text-[18px]

                  md:text-[20px]

                  lg:text-[22px]

                  2xl:text-[24px]

                  ${isArabic ? "text-right" : "text-left"}
                `}
              >
                “{item.description}”
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
