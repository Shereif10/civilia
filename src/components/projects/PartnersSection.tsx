"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export function PartnersSection() {
  const t = useTranslations("partners");

  const partners = [
    {
      name: "DJ",
      logo: "/assets/dj.png",
      width: 90,
      height: 90,
    },
    {
      name: "ADC",
      logo: "/assets/adc.png",
      width: 90,
      height: 90,
    },
  ];

  return (
    <section className="bg-civilia-paper">
      <div className="mx-auto overflow-hidden rounded-[32px]">
        {/* Header */}
        <div className="rounded-bl-[285px] bg-[#F0E459] px-8 py-10 md:px-16 md:py-12">
          <h2
            data-animate="fade-up"
            className="text-center text-[48px] font-light leading-none text-[#031286] md:text-[72px]"
            style={{ fontFamily: "Badgline" }}
          >
            {t("title")}
          </h2>
        </div>

        {/* Logos */}
        <div className="flex min-h-[220px] items-center justify-center gap-10 bg-civilia-paper py-10 md:gap-20">
          {" "}
          {partners.map((partner) => (
            <div key={partner.name} className="relative h-24 w-32">
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                className="object-contain transition duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
