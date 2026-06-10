"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function AboutSection() {
  const t = useTranslations("about");
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(imageRef.current, {
        x: -120,
        opacity: 0,
        duration: 1.4,
        ease: "power4.out",
      })
        .from(
          cardRef.current,
          {
            x: 120,
            scale: 0.92,
            opacity: 0,
            duration: 1.2,
            ease: "power4.out",
          },
          "-=1",
        )
        .from(
          textRef.current?.children || [],
          {
            y: 40,
            opacity: 0,
            stagger: 0.2,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5",
        );

      gsap.to(imageRef.current, {
        y: 80,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden bg-civilia-ink pt-20 md:h-[830px] md:pb-0 md:pt-[109px]"
    >
      {/* MOBILE + TABLET */}
      <div className="flex flex-col md:hidden">
        <div
          ref={cardRef}
          className="relative z-10 bg-[#CD0001] px-6 pb-40 pt-10 text-white"
          style={{
            borderBottomLeftRadius: "180px",
          }}
        >
          <div ref={textRef} className="relative z-30 mx-auto max-w-[320px]">
            <h2 className="text-[40px] font-semibold leading-[1.2]">
              {t("title")}
            </h2>

            <p className="mt-4 text-base leading-[1.5]">{t("p1")}</p>

            <p className="mt-4 text-base leading-[1.5]">{t("p2")}</p>
          </div>
        </div>

        <div
          ref={imageRef}
          className="relative z-20 -mt-32 h-[420px] w-full overflow-hidden"
        >
          <Image
            src="/assets/about-building.png"
            alt="CIVILIA residential building exterior"
            fill
            sizes="100vw"
            className="object-fill object-center"
          />
        </div>
      </div>

      {/* DESKTOP - UNCHANGED */}
      <div className="relative hidden h-full w-full overflow-hidden md:block">
        <div
          ref={imageRef}
          className="absolute left-0 top-6 h-[712px] w-[min(852px,74vw)]"
        >
          <Image
            src="/assets/about-building.png"
            alt="CIVILIA residential building exterior"
            fill
            sizes="(max-width: 768px) 100vw, 852px"
            className="object-fill object-left"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-civilia-ink" />
        </div>

        <div className="absolute bottom-0 left-0 h-[261px] w-[669px] opacity-80">
          <Image src="/assets/about-glow.svg" alt="" fill sizes="669px" />
        </div>

        <div
          ref={cardRef}
          className="absolute right-0 top-0 bg-[#CD0001] text-white shadow-soft"
          style={{
            width: "700px",
            height: "474px",
            borderTopLeftRadius: "8px",
            borderTopRightRadius: "8px",
            borderBottomRightRadius: "8px",
            borderBottomLeftRadius: "10000px",
            paddingTop: "48px",
            paddingRight: "48px",
            paddingBottom: "170px",
            paddingLeft: "170px",
          }}
        >
          <div ref={textRef} className="flex flex-col gap-4">
            <h2 className="text-[40px] font-semibold leading-[1.2]">
              {t("title")}
            </h2>

            <p className="text-base leading-[1.5]">{t("p1")}</p>

            <p className="text-base leading-[1.5]">{t("p2")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
