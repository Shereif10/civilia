"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { useLocale, useTranslations } from "next-intl";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function MasterPlanSection() {
  const t = useTranslations("masterPlan");
  const locale = useLocale();
  const isArabic = locale === "ar";

  const progress = 60;
  const totalBoxes = 10;
  const filledBoxes = Math.round((progress / 100) * totalBoxes);

  const sectionRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const fillsRef = useRef<HTMLDivElement[]>([]);

useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.set(overlayRef.current, {
    xPercent: 0,
  });

  gsap.set(fillsRef.current, {
    scaleY: 0,
    transformOrigin: "bottom",
  });

  const activeBoxes = fillsRef.current
    .slice(totalBoxes - filledBoxes)
    .reverse();

  const tl = gsap.timeline({ paused: true });

  tl.to(
    activeBoxes,
    {
      scaleY: 1,
      duration: 0.5,
      ease: "power2.inOut",
      stagger: {
        each: 0.42,
      },
    },
    0,
  );

  tl.to(
    overlayRef.current,
    {
      xPercent: -49,
      duration: 3,
      ease: "none",
    },
    0,
  );

  const trigger = ScrollTrigger.create({
    trigger: sectionRef.current,
    start: "top 70%",
    end: "bottom top",

    onEnter: () => {
      tl.restart();
    },

    onEnterBack: () => {
      tl.restart();
    },

    onLeave: () => {
      tl.pause(0);
      gsap.set(overlayRef.current, { xPercent: 0 });
      gsap.set(fillsRef.current, { scaleY: 0 });
    },

    onLeaveBack: () => {
      tl.pause(0);
      gsap.set(overlayRef.current, { xPercent: 0 });
      gsap.set(fillsRef.current, { scaleY: 0 });
    },
  });

  return () => {
    trigger.kill();
    tl.kill();
  };
}, [filledBoxes]);

  return (
    <section className="bg-civilia-paper py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-4 md:px-0">
        <div className="text-center">
          <h2
            data-animate="fade-up"
            className="text-[48px] font-light leading-none text-[#031286] md:text-[72px]"
            style={{ fontFamily: "Badgline" }}
          >
            {t("title")}
          </h2>

          <p
            data-animate="fade-up"
            className="
    mx-auto
    mt-8
    
    text-center
    text-[18px]
    leading-[1.7]
    text-[#555555]
    md:text-[22px]
  "
          >
            {t("description")}
          </p>
        </div>

        <div ref={sectionRef} data-animate="fade-up" className="mt-12">
          {/* Progress Card */}
          <div
            className="
              mb-6
              flex
              flex-col
              gap-6
              rounded-tl-[16px]
              rounded-tr-[16px]
              rounded-br-[16px]
              rounded-bl-[96px]
              bg-[#E7DD4B]
              px-6
              py-6
              md:h-[160px]
              md:flex-row
              md:items-center
              md:justify-between
              md:px-16
              md:py-8
            "
          >
            <div className="flex flex-wrap items-end gap-4">
              {" "}
              <span
                className="leading-none text-[#031286]"
                style={{
                  fontFamily: "Badgline",
                  fontSize: "clamp(56px, 6vw, 96px)",
                }}
              >
                {progress}%
              </span>
              <span className="mb-2 text-[22px] font-medium text-[#1D1D1D]">
  {t("progressText")}
</span>
            </div>

            <div className="flex justify-end gap-2">
              {Array.from({ length: totalBoxes }).map((_, index) => (
                <div
                  key={index}
                  className="relative h-6 w-4 overflow-hidden rounded-sm border border-[#031286]"
                >
                  <div
                    ref={(el) => {
                      if (el) fillsRef.current[index] = el;
                    }}
                    className="absolute inset-0 origin-bottom scale-y-0 bg-[#031286]"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Master Plan Image */}
          <div className="relative overflow-hidden rounded-[24px]">
            <Image
              src="/assets/loading-plan.png"
              alt={t("imageAlt")}
              width={1280}
              height={720}
              priority
              className="w-full"
              style={{ height: "auto" }}
            />

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div
                ref={overlayRef}
                className="absolute inset-0 bg-[#222222]/75 "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
