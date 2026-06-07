"use client";

import Image from "next/image";

const achievements = [
  {
    title: "DRAINAGE LINES IN DAR SALEM",
    icon: "/assets/achievement-1.svg",
  },
  {
    title: "VILLAS IN THE WEST SOMID",
    icon: "/assets/achievement-2.svg",
  },
  {
    title: "BUILDINGS IN 6TH OF OCTOBER",
    icon: "/assets/achievement-3.svg",
  },
  {
    title: "BUILDINGS IN BENI SUEF",
    icon: "/assets/achievement-4.svg",
  },
  {
    title: "HOSPITAL PROJECTS",
    icon: "/assets/achievement-5.svg",
  },
];

export function LegacyProjectsSection() {
  return (
    <section className="bg-[#F3F1EF] py-16 md:py-24 overflow-hidden">
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

      {/* Infinite Slider */}
      <div className="mt-16 overflow-hidden">
        <div className="marquee flex w-max items-center">
          {[...achievements, ...achievements].map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              className="
                mx-8
                flex
                min-w-[220px]
                items-center
                gap-4

                md:mx-12
                md:min-w-[320px]
              "
            >
              <Image
                src={item.icon}
                alt=""
                width={42}
                height={42}
                className="shrink-0"
              />

              <p
                className="
                  text-[11px]
                  font-medium
                  uppercase
                  tracking-wide
                  text-[#666]

                  md:text-[13px]
                "
              >
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .marquee {
          animation: scroll 28s linear infinite;
        }

        .marquee:hover {
          animation-play-state: paused;
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
