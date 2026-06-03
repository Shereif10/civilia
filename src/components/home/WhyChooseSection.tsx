"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { reasons } from "@/lib/data";

export function WhyChooseSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".why-title", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        gsap.from(card, {
          y: 100,
          opacity: 0,
          duration: 1,
          delay: index * 0.12,
          ease: "power4.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-civilia-paper pb-16 md:pb-32">
      <SectionTitle className="why-title mx-auto w-full">
        Why Choose CIVILIA
      </SectionTitle>

      <div className="container-civilia mt-16">
        <div className="grid gap-8 md:grid-cols-2">
          {reasons.map((reason, index) => (
            <article
              key={reason.title}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="
                group
                flex
                min-h-[196px]
                flex-col
                items-center
                justify-center
                rounded-2xl
                p-8
                text-center
                backdrop-blur-[100px]
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-[0_24px_60px_rgba(0,0,0,0.08)]
                md:min-h-[220px]
              "
              style={{
                background:
                  "linear-gradient(90deg, #FFFDFA 0%, #FFF3E1 50%, #FFFDFA 100%)",
              }}
            >
              <Image
                src={reason.icon}
                alt=""
                width={60}
                height={60}
                className="transition-transform duration-500 group-hover:scale-105"
              />

              <h3 className="mt-8 max-w-[360px] text-[34px] font-medium leading-[1.1] text-[#3d3d3d] md:text-[40px]">
                {reason.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
