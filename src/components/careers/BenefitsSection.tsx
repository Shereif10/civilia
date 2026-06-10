"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

const icons = [
  "/assets/health-icon.svg",
  "/assets/flexibility-icon.svg",
  "/assets/training-icon.svg",
  "/assets/bonus-icon.svg",
];

type Benefit = {
  title: string;
};

export function BenefitsSection() {
  const t = useTranslations("benefits");

  const benefits = t.raw("items") as Benefit[];

  return (
    <section className="bg-civilia-paper py-16 md:py-24">
      <div className="container-civilia">
        <h2
          data-animate="fade-up"
          className="text-center text-[48px] font-semibold leading-none text-civilia-red md:text-[72px]"
        >
          {t("title")}
        </h2>

        <div
          className="mt-16 grid grid-cols-2 gap-y-10 md:mt-20 md:grid-cols-4"
          data-animate="stagger"
        >
          {benefits.map((item, index) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center"
            >
              <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#FFF8F1] md:h-[72px] md:w-[72px]">
                <Image src={icons[index]} alt="" width={28} height={28} />
              </div>

              <h3 className="mt-5 whitespace-pre-line text-[20px] font-semibold leading-[1.15] text-[#3D3D3D] md:text-[24px]">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
