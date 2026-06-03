"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function TestimonialSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLParagraphElement>(null);
  const footerRef = useRef<HTMLElement>(null);
  const iconRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      tl.from(cardRef.current, {
        scale: 0.96,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
      })
        .from(
          iconRef.current,
          {
            opacity: 0,
            scale: 1.4,
            duration: 1.5,
            ease: "power3.out",
          },
          "-=0.8",
        )
        .from(
          quoteRef.current,
          {
            y: 40,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=1",
        )
        .from(
          footerRef.current,
          {
            y: 24,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5",
        );

      // Floating Quote Icon
      gsap.to(iconRef.current, {
        y: -12,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16">
      <div
        ref={cardRef}
        className="container-civilia relative overflow-hidden rounded-[48px] border-2 border-black/[0.05] px-10 py-16"
        style={{
          background:
            "linear-gradient(90deg, #FFFDFA 0%, #FFF3E1 50%, #FFFDFA 100%)",
        }}
      >
        <Image
          ref={iconRef}
          src="/assets/message-icon.svg"
          alt=""
          width={180}
          height={180}
          className="absolute right-16 top-1/2 hidden -translate-y-1/2 opacity-[0.08] md:block"
        />

        <blockquote className="relative z-10">
          <p
            ref={quoteRef}
            className="max-w-[920px] text-[32px] leading-[1.2] text-[#4A4A4A] md:text-[38px]"
          >
            Civilia stands out because of their construction background. You can
            clearly see the difference in how things are planned and executed.
          </p>

          <footer ref={footerRef} className="mt-10 flex flex-col items-end">
            <cite className="text-[26px] font-semibold not-italic text-civilia-red">
              Engineer Saad Al-Otaibi
            </cite>

            <span className="mt-1 text-[19px] text-[#2F2F2F]">
              Role / Investor
            </span>
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
