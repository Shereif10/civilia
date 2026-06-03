"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function AboutSection() {
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

      // Parallax Effect
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
      className="relative bg-civilia-ink pb-16 pt-20 md:h-[830px] md:pb-0 md:pt-[109px]"
    >
      <div className="relative h-full w-full overflow-hidden">
        {/* Building Image */}
        <div
          ref={imageRef}
          className="absolute left-0 top-6 h-[712px] w-[min(852px,74vw)]"
        >
          <Image
            src="/assets/about-building.png"
            alt="CIVILIA residential building exterior"
            fill
            sizes="(max-width: 768px) 100vw, 852px"
            className="object-cover object-left"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-civilia-ink" />
        </div>

        {/* Glow */}
        <div className="absolute bottom-0 left-0 h-[261px] w-[669px] opacity-80">
          <Image src="/assets/about-glow.svg" alt="" fill sizes="669px" />
        </div>

        {/* Content Card */}
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
              About Us
            </h2>

            <p className="text-base leading-[1.5]">
              CIVILIA Developments Our portfolio spans diverse projects, from
              integrated developments to infrastructure, industrial, and
              commercial facilities, delivered in key areas like Sheikh Zayed,
              New Cairo, and the New Administrative Capital.
            </p>

            <p className="text-base leading-[1.5]">
              Partnering with leading consultancy firms, we ensure every project
              meets the highest standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
