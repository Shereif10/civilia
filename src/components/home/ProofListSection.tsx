"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function ProofListSection() {
  const t = useTranslations("proofList");
  const points = t.raw("points") as string[];

  const sectionRef = useRef<HTMLElement>(null);
  const rowsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(rowsRef.current, {
        y: 40,
        opacity: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-civilia-paper pb-10 md:pb-16">
      <div className="mx-auto flex flex-col gap-[10px]">
        {points.map((point, index) => (
          <div
            key={index}
            className="
              flex
              min-h-[112px]
              items-center
              rounded-bl-[72px]
              rounded-br-[16px]
              rounded-tl-[16px]
              rounded-tr-[16px]
              px-5
              py-5
              backdrop-blur-[100px]

              sm:rounded-bl-[96px]
              sm:px-6
              sm:py-6

              md:px-16
              md:py-8
            "
            style={{
              background:
                "linear-gradient(90deg, rgba(255,243,225,0.2) 0%, rgba(255,243,225,0.9) 50%, rgba(255,243,225,0.2) 100%)",
            }}
          >
            <div
              ref={(el) => {
                rowsRef.current[index] = el;
              }}
              className="
                flex
                w-full
                items-center
                gap-3

                sm:gap-4
              "
            >
              <Image
                src="/assets/list-icon.svg"
                alt=""
                width={48}
                height={48}
                className="shrink-0"
              />

              <p
                className="
                  text-base
                  font-medium
                  leading-[1.35]
                  text-[#3d3d3d]

                  sm:text-lg
                  sm:leading-[1.3]

                  md:text-[22px]
                  md:leading-[1.2]
                "
              >
                {point}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
