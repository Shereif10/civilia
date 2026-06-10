"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { stats } from "@/lib/data";

const statKeys = ["years", "projects", "sqm"] as const;

export function ExperienceSection() {
  const t = useTranslations("experience");
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLElement | null)[]>([]);
  const valuesRef = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".experience-title", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(cardsRef.current, {
        y: 80,
        opacity: 0,
        stagger: 0.18,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      cardsRef.current.forEach((card) => {
        const icon = card?.querySelector(".metric-icon");
        if (!icon) return;

        gsap.from(icon, {
          scale: 0,
          rotation: 180,
          duration: 1.2,
          ease: "elastic.out(1, 0.5)",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        });
      });

      valuesRef.current.forEach((el) => {
        if (!el) return;

        const finalValue = el.dataset.value || "";
        const numericValue = parseFloat(finalValue.replace(/[^\d.]/g, ""));
        const counter = { value: 0 };

        gsap.to(counter, {
          value: numericValue,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
          onUpdate: () => {
            if (!el) return;

            if (finalValue.includes("M")) {
              el.textContent =
                Math.floor(counter.value) + finalValue.replace(/[0-9]/g, "");
            } else {
              el.textContent =
                Math.floor(counter.value).toLocaleString() +
                finalValue.replace(/[0-9,]/g, "");
            }
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-civilia-paper py-16 md:py-24">
      <div className="overflow-hidden rounded-bl-[180px] bg-civilia-red py-10 md:py-12">
        <h2 className="experience-title text-center text-[42px] font-semibold text-white md:text-[72px]">
          {t("title")}
        </h2>
      </div>

      <div className="container-civilia mt-16 grid gap-8 md:grid-cols-3">
        {stats.map((item, index) => (
          <article
            key={item.label}
            ref={(el) => {
              cardsRef.current[index] = el;
            }}
            className="
              flex
              min-h-[320px]
              flex-col
              items-center
              justify-between
              rounded-[24px]
              border
              border-[#E2DED7]
              p-8
            "
            style={{
              background:
                "linear-gradient(90deg, #FFFDFA 0%, #FFF3E1 50%, #FFFDFA 100%)",
            }}
          >
            <div dir="ltr" className="text-center">
              {item.suffix ? (
                <div className="flex items-start justify-center">
                  <p
                    ref={(el) => {
                      valuesRef.current[index] = el;
                    }}
                    data-value={item.value}
                    className="text-[56px] font-semibold leading-none text-[#252525] md:text-[64px]"
                  >
                    0
                  </p>

                  <span className="ml-2 mt-3 text-[18px] font-medium text-[#252525] md:text-[22px]">
                    {item.suffix}
                  </span>
                </div>
              ) : (
                <p
                  ref={(el) => {
                    valuesRef.current[index] = el;
                  }}
                  data-value={item.value}
                  className="text-[56px] font-semibold leading-none text-[#252525] md:text-[64px]"
                >
                  0
                </p>
              )}

              <h3 className="mt-4 text-[18px] font-medium text-[#3D3D3D]">
                {t(`stats.${statKeys[index]}`)}
              </h3>
            </div>

            <Image
              src={item.icon}
              alt={t(`stats.${statKeys[index]}`)}
              width={110}
              height={110}
              className="metric-icon"
            />
          </article>
        ))}
      </div>
    </section>
  );
}
