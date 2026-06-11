"use client";

import Image from "next/image";
import { useRef } from "react";
import { Header } from "@/components/layout/Header";
import { CiviliaButton } from "@/components/ui/CiviliaButton";
import { useGSAP } from "@gsap/react";
import { useTranslations, useLocale } from "next-intl";
import gsap from "gsap";

export function HeroSection() {
  const t = useTranslations("hero");
  const locale = useLocale();
  const isArabic = locale === "ar";
  const wordmarkRef = useRef<HTMLDivElement>(null);
  const shineRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!wordmarkRef.current || !shineRef.current) return;

    gsap.from(wordmarkRef.current, {
      y: 80,
      opacity: 0,
      duration: 1.4,
      ease: "power4.out",
    });

    gsap.to(wordmarkRef.current, {
      scale: 1.02,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.set(shineRef.current, { xPercent: -300 });

    gsap.to(shineRef.current, {
      xPercent: 900,
      duration: 2.5,
      repeat: -1,
      repeatDelay: 4,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <section className="relative min-h-[760px] bg-civilia-paper md:h-[834px] 2xl:h-[920px]">
      <Header />

      {/* Animated Wordmark */}
      <div
        ref={wordmarkRef}
        className="
          absolute
          left-1/2
          top-[223px]
          hidden
          w-[80vw]
          max-w-[1024px]
          -translate-x-1/2
          overflow-hidden
          md:block
          2xl:max-w-[1280px]
        "
      >
        <Image
          src="/assets/civilia-wordmark.svg"
          alt="CIVILIA Developments"
          width={1024}
          height={192}
          priority
          className="h-auto w-full"
        />

        <div
          ref={shineRef}
          className="absolute inset-y-0 w-[140px]"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,.45), transparent)",
            transform: "skewX(-25deg)",
          }}
        />
      </div>

      {/* Hero Image */}
      <div className="absolute inset-x-0 bottom-0 top-[128px] overflow-hidden md:top-[355px]">
        <Image
          src="/assets/hero.webp"
          alt="CIVILIA landmark residential development"
          fill
          priority
          sizes="100vw"
          className="object-fill object-center"
        />
      </div>

      {/* Bottom Content */}
      <div className="absolute inset-x-0 bottom-0 z-20 flex min-h-[390px] items-end bg-[linear-gradient(180deg,rgba(231,226,220,0)_0%,rgba(24,24,24,0.92)_34%,#181818_100%)] pb-10 md:min-h-[302px] md:pb-2">
        <div
          className="
            container-civilia
            grid
            gap-6
            px-4

            sm:gap-8
            sm:px-6

            md:grid-cols-[376px_1fr]
            md:items-end
            md:gap-16
            md:px-0
          "
        >
          <h1
            data-animate="fade-up"
            className={`
              text-civilia-warm
              text-[28px]
              font-semibold
              leading-none

              sm:text-[34px]

              md:whitespace-nowrap
              md:text-[56px]

              ${isArabic ? "tracking-normal" : "tracking-[2px] sm:tracking-[3px] md:tracking-[5.6px]"}
            `}
          >
            <span className="block text-[24px] font-light sm:text-[30px] md:text-[40px]">
              {t("from")}
            </span>

            <span className="block">
              {t("land")}{" "}
              <span className="text-[24px] font-light sm:text-[30px] md:text-[40px]">
                {t("to")}
              </span>
            </span>

            <span className="block">{t("landmark")}</span>
          </h1>

          <div
            data-animate="fade-up"
            className="
              flex
              flex-col
              items-start
              gap-4

              md:items-end
            "
          >
            <p
              className="
                max-w-full
                text-base
                leading-[1.5]
                text-[#ded7d1]

                sm:text-lg

                md:max-w-[584px]
                md:text-xl
                md:leading-[1.25]
              "
            >
              {t("description")}
            </p>

            <CiviliaButton href="/contact">{t("bookVisit")}</CiviliaButton>
          </div>
        </div>
      </div>
    </section>
  );
}
