"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { proofPoints } from "@/lib/data";

export function ProofListSection() {
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
    <section ref={sectionRef} className="bg-civilia-paper py-10 md:py-16">
      <div className="mx-auto flex flex-col gap-[10px]">
        {proofPoints.map((point, index) => (
          <div
            key={point}
            className="flex min-h-[112px] items-center gap-4 rounded-bl-[96px] rounded-br-[16px] rounded-tl-[16px] rounded-tr-[16px] px-6 py-6 backdrop-blur-[100px] md:px-16 md:py-8"
            style={{
              background:
                "linear-gradient(90deg, rgba(255,243,225,0.2) 0%, rgba(255,243,225,0.9) 50%, rgba(255,243,225,0.2) 100%)",
            }}
          >
            <div
              ref={(el) => {
                rowsRef.current[index] = el;
              }}
              className="flex w-full items-center gap-4"
            >
              <Image
                src="/assets/list-icon.svg"
                alt=""
                width={48}
                height={48}
                className="shrink-0"
              />

              <p className="text-lg font-medium leading-[1.2] text-[#3d3d3d] md:text-[22px]">
                {point}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
