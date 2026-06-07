"use client";

import Image from "next/image";
import { useState } from "react";

const residentialUnits = [
  {
    icon: "/assets/Residential.png",
    value: "40",
    label: "Units",
    location: "Nasr City",
    type: "Residential tower",
  },
  {
    icon: "/assets/Residential.png",
    value: "25",
    label: "Units",
    location: "Maadi",
    type: "Residential tower",
  },
  {
    icon: "/assets/Residential.png",
    value: "18",
    label: "Units",
    location: "Al-Khamayel",
    type: "Residential Complex 6",
  },
];

export function ResidentialUnitsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const orderedCards = [
    residentialUnits[activeIndex],
    ...residentialUnits.filter((_, index) => index !== activeIndex),
  ];

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
            <span className="block">Our Residential</span>
            <span className="block">units</span>
          </h2>

          <div className="hidden pt-10 md:block">
            <Image
              src="/assets/story-accent.svg"
              alt=""
              width={33}
              height={17}
            />
          </div>
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
          {orderedCards.map((item, visualIndex) => {
            const originalIndex = residentialUnits.findIndex(
              (card) => card.location === item.location,
            );

            const isActive = visualIndex === 0;

            return (
              <button
                key={item.location}
                type="button"
                onClick={() => setActiveIndex(originalIndex)}
                data-animate="fade-up"
                className={`
                  ${visualIndex > 0 ? "mt-4 xl:mt-0" : ""}

                  xl:absolute
                  left-0
                  w-full

                  overflow-hidden
                  rounded-[24px]
                  border-[3px]
                  border-black/[0.05]
                  bg-[#fffdfa]
                  text-left

                  shadow-[0_8px_20px_rgba(0,0,0,0.10)]
                  transition-all
                  duration-500
                  ease-out

                  ${
                    isActive
                      ? "z-30 xl:h-[228px]"
                      : visualIndex === 1
                        ? "z-20 xl:h-[228px]"
                        : "z-10 xl:h-[228px]"
                  }
                `}
                style={{
                  top: visualIndex === 0 ? 0 : visualIndex === 1 ? 85 : 170,
                  transform:
                    typeof window !== "undefined" && window.innerWidth >= 1280
                      ? `scale(${1 - visualIndex * 0.07})`
                      : undefined,
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
                    className="
                      flex
                      flex-col
                      items-center
                      gap-4
                      text-center

                      sm:flex-row
                      sm:items-center
                      sm:text-left
                      sm:gap-6

                      xl:gap-8
                    "
                  >
                    <div
                      className="
                        relative
                        h-[90px]
                        w-[90px]
                        shrink-0

                        sm:h-[110px]
                        sm:w-[110px]

                        xl:h-[128px]
                        xl:w-[128px]
                      "
                    >
                      <Image
                        src={item.icon}
                        alt={item.location}
                        fill
                        sizes="128px"
                        className="object-contain"
                      />
                    </div>

                    <div className="flex flex-col justify-center">
                      <div className="flex items-end justify-center gap-2 sm:justify-start">
                        <span
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
                      className="
                        text-center
                        text-[24px]
                        font-medium
                        leading-none
                        tracking-[-1px]
                        text-[#202020]

                        sm:text-left
                        sm:text-[28px]

                        xl:text-[38px]
                      "
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
            Built by engineers. Delivered with precision.
          </p>
        </div>
      </div>
    </section>
  );
}
