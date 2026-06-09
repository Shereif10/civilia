"use client";

import Image from "next/image";

const achievements = [
  {
    icon: "/assets/achievement-1.svg",
  },
  {
    icon: "/assets/achievement-2.svg",
  },
  {
    icon: "/assets/achievement-3.svg",
  },
  {
    icon: "/assets/achievement-4.svg",
  },
  {
    icon: "/assets/achievement-5.svg",
  },
  {
    icon: "/assets/achievement-6.svg",
  },
  {
    icon: "/assets/achievement-7.svg",
  },
];

export function LegacyProjectsSection() {
  return (
    <section className="overflow-hidden py-16 md:py-24">
      <div className="container-civilia">
        <h2
          className="
            max-w-[1100px]
            text-[34px]
            font-semibold
            leading-[1.15]
            text-[#3D3D3D]
            md:text-[52px]
          "
        >
          <span className="text-civilia-red">CIVILIA</span> also participated in
          the construction of many Banks, Hospitals Separate buildings.
        </h2>
      </div>

      {/* Infinite Carousel */}
      <div className="mt-16 overflow-hidden">
        <div className="animate-marquee flex w-max items-center">
          {[...achievements, ...achievements, ...achievements].map(
            (item, index) => (
              <div
                key={`${item.icon}-${index}`}
                className="
                  mx-8
                  flex
                  min-w-[220px]
                  items-center
                  justify-center

                  md:mx-12
                  md:min-w-[320px]
                "
              >
                <Image
                  src={item.icon}
                  alt=""
                  width={225}
                  height={40}
                  className="h-auto shrink-0 object-contain"
                />
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
