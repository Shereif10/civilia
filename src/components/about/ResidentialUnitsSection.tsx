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
            className="text-[44px] font-semibold leading-[0.95] tracking-[-2px] text-civilia-ink md:text-[72px]"
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

        <div className="relative mt-14  md:mt-20 md:h-[380px]">
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
                className={`absolute left-0 w-full overflow-hidden rounded-[24px] border-[3px] border-black/[0.05] bg-[#fffdfa] text-left shadow-[0_8px_20px_rgba(0,0,0,0.10)] transition-all duration-500 ease-out ${
                  isActive
                    ? "z-30 h-[228px]"
                    : visualIndex === 1
                      ? "z-20 h-[228px]"
                      : "z-10 h-[228px]"
                }`}
                style={{
                  top:
                    visualIndex === 0
                      ? 0
                      : visualIndex === 1
                        ? 85
                        : 170,
                  transform: `scale(${1 - visualIndex * 0.07})`,
                  background:
                    "linear-gradient(90deg, #FFFDFA 0%, #FFF3E1 50%, #FFFDFA 100%)",
                }}
                aria-label={`Show ${item.location} residential units`}
              >
                <div className="flex h-[228px] items-start justify-between px-8 py-8">
                  <div className="flex items-center gap-8">
                    <div className="relative h-[128px] w-[128px] shrink-0">
                      <Image
                        src={item.icon}
                        alt={item.location}
                        fill
                        sizes="128px"
                        className="object-contain"
                      />
                    </div>

                    <div className="flex flex-col justify-center">
                      <div className="flex items-end gap-2">
                        <span className="text-[86px] font-semibold leading-[0.82] tracking-[-5px] text-civilia-ink">
                          {item.value}
                        </span>

                        <span className="mb-[18px] text-[18px] font-medium leading-none text-civilia-red">
                          {item.label}
                        </span>
                      </div>

                      <p className="mt-4 text-[34px] font-medium leading-none tracking-[-1px] text-civilia-red">
                        {item.location}
                      </p>
                    </div>
                  </div>

                  <div className="flex h-full items-end">
                    <p className="text-[38px] font-medium leading-none tracking-[-1px] text-[#202020]">
                      {item.type}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div
          data-animate="fade-up"
          className="mt-10 text-center md:mt-16"
        >
          <p className="text-[26px] font-medium leading-[1.2] text-civilia-red md:text-[40px]">
            Built by engineers. Delivered with precision.
          </p>
        </div>
      </div>
    </section>
  );
}
