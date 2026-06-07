"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { stats } from "@/lib/data";

export function ExperienceSection() {
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
    <section
      ref={sectionRef}
      className="bg-civilia-paper py-12 sm:py-14 md:py-32 2xl:py-36"
    >
      <SectionTitle className="experience-title mx-auto w-full text-[38px] sm:text-[48px] md:text-[64px]">
        Built on Experience
      </SectionTitle>

      <div className="container-civilia mt-10 grid gap-5 sm:mt-12 sm:gap-6 md:mt-16 md:grid-cols-3 md:gap-8 2xl:gap-10">
        {stats.map((item, index) => (
          <article
            key={item.label}
            ref={(el) => {
              cardsRef.current[index] = el;
            }}
            className="civilia-gradient-card flex min-h-[220px] flex-col justify-between rounded-2xl p-6 sm:min-h-[250px] sm:p-7 md:min-h-[308px] md:p-8"
          >
            <div>
              <p
                ref={(el) => {
                  valuesRef.current[index] = el;
                }}
                data-value={item.value}
                className="text-[40px] font-semibold leading-[1.2] text-[#252525] sm:text-[46px] md:text-[56px]"
              >
                0
              </p>

              <h3 className="mt-2 text-base font-medium leading-[1.2] text-[#3d3d3d] sm:text-lg">
                {item.label}
              </h3>
            </div>

            <Image
              src="/assets/metric-mark.svg"
              alt=""
              width={92}
              height={102}
              className="metric-icon ml-auto"
            />
          </article>
        ))}
      </div>
    </section>
  );
}
