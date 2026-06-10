"use client";

import { useTranslations } from "next-intl";

type Metric = {
  value: string;
  label: string;
};

export function ContactIntro() {
  const t = useTranslations("contactIntro");

  const metrics = t.raw("metrics") as Metric[];

  return (
    <section
      className="my-8 bg-civilia-paper py-12 md:my-12 md:py-24"
      style={{
        background:
          "linear-gradient(90deg, #FFFDFA 0%, #FFF3E1 50%, #FFFDFA 100%)",
      }}
    >
      <div className="container-civilia text-center">
        <div data-animate="fade-up" className="mx-auto max-w-[1100px]">
          <h2
            className="
              text-[34px]
              font-semibold
              leading-[1.2]
              text-civilia-red

              sm:text-[38px]

              md:text-[48px]

              lg:text-[58px]
            "
          >
            {t("title")}
          </h2>

          <p
            className="
              mt-4
              text-[18px]
              leading-[1.5]
              text-[#3d3d3d]

              sm:text-[20px]

              md:text-[26px]

              lg:text-[33px]
              lg:leading-[1.25]
            "
          >
            {t("description")}
          </p>
        </div>

        <div
          className="
            mt-12
            grid
            gap-10

            sm:grid-cols-2

            md:mt-16
            md:grid-cols-3
            md:gap-8
          "
          data-animate="stagger"
        >
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <p
                className="
                  text-[42px]
                  font-semibold
                  leading-none
                  text-civilia-red

                  sm:text-[46px]

                  md:text-5xl
                "
                dir="ltr"
              >
                {metric.value}
              </p>

              <p
                className="
                  mt-4
                  text-[18px]
                  font-medium
                  uppercase
                  leading-[1.3]
                  text-[#3d3d3d]

                  sm:text-[20px]

                  md:mt-6
                  md:text-[22px]

                  lg:text-[24px]
                "
              >
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
