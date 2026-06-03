"use client";

import Image from "next/image";
import { useRef } from "react";
import { Header } from "@/components/layout/Header";
import { CiviliaButton } from "@/components/ui/CiviliaButton";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function HeroSection() {
  const wordmarkRef = useRef<HTMLDivElement>(null);
  const shineRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!wordmarkRef.current || !shineRef.current) return;

    // Reveal Animation
    gsap.from(wordmarkRef.current, {
      y: 80,
      opacity: 0,
      duration: 1.4,
      ease: "power4.out",
    });

    // Breathing Effect
    gsap.to(wordmarkRef.current, {
      scale: 1.02,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Shine Effect
    gsap.set(shineRef.current, {
      xPercent: -300,
    });

    gsap.to(shineRef.current, {
      xPercent: 900,
      duration: 2.5,
      repeat: -1,
      repeatDelay: 4,
      ease: "power2.inOut",
    });

    // Mouse Parallax
    const move = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;

      gsap.to(wordmarkRef.current, {
        x,
        y,
        duration: 1.2,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <section className="relative min-h-[760px] bg-civilia-paper md:h-[834px]">
      <Header active="home" />

      {/* Animated Wordmark */}
      <div
        ref={wordmarkRef}
        className="absolute left-1/2 top-[223px] hidden w-[80vw] max-w-[1024px] -translate-x-1/2 overflow-hidden md:block"
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
          src="/assets/hero.png"
          alt="CIVILIA landmark residential development"
          fill
          priority
          className="object-fill object-center"
        />
      </div>

      {/* Bottom Content */}
      <div className="absolute inset-x-0 bottom-0 z-20 flex min-h-[390px] items-end bg-[linear-gradient(180deg,rgba(231,226,220,0)_0%,rgba(24,24,24,0.92)_34%,#181818_100%)] pb-10 md:min-h-[302px] md:pb-2">
        <div className="container-civilia grid gap-8 md:grid-cols-[376px_1fr] md:items-end md:gap-16">
          <h1
            data-animate="fade-up"
            className="text-civilia-warm text-[34px] font-semibold leading-none tracking-[3px] md:whitespace-nowrap md:text-[56px] md:tracking-[5.6px]"
          >
            <span className="block text-[30px] font-light md:text-[40px]">
              FROM
            </span>

            <span className="block">
              LAND{" "}
              <span className="text-[30px] font-light md:text-[40px]">TO</span>
            </span>

            <span className="block">LANDMARK</span>
          </h1>

          <div
            data-animate="fade-up"
            className="flex flex-col items-start gap-4 md:items-end"
          >
            <p className="max-w-[calc(100vw-32px)] text-lg leading-[1.25] text-[#ded7d1] md:max-w-[584px] md:text-xl">
              A new standard of living, developed by real construction
              expertise, built for those who value certainty, quality, and calm
              living.
            </p>

            <CiviliaButton href="/contact">Book a Visit</CiviliaButton>
          </div>
        </div>
      </div>
    </section>
  );
}
