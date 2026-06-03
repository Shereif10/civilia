"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const slides = [
  {
    image: "/assets/slide-1.png",
    quote:
      "We literally and conceptually know how to build urban communities and how to maintain it to meet the customers’ needs.",
  },
  {
    image: "/assets/slide-2.png",
    quote:
      "Every development is planned with a long-term vision focused on quality, comfort, and sustainable value.",
  },
  {
    image: "/assets/slide-3.png",
    quote:
      "From concept to delivery, our expertise ensures every detail is executed with precision and care.",
  },
];

export function LifestyleGallerySection() {
  const [activeSlide, setActiveSlide] = useState(0);

  const sectionRef = useRef<HTMLElement>(null);
  const quoteRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      tl.from(".gallery-wrapper", {
        scale: 0.96,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
      })
        .from(
          quoteRef.current,
          {
            y: 40,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.6",
        )
        .from(
          ".gallery-dot",
          {
            scale: 0,
            opacity: 0,
            stagger: 0.1,
            duration: 0.4,
            ease: "back.out(1.7)",
          },
          "-=0.5",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    gsap.fromTo(
      quoteRef.current,
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      },
    );
  }, [activeSlide]);

  return (
    <section ref={sectionRef} className="bg-civilia-paper py-16 md:py-24">
      <div className="gallery-wrapper">
        <div className="relative h-[420px] overflow-hidden rounded-bl-[80px] rounded-br-[24px] rounded-tl-[24px] rounded-tr-[24px] md:h-[560px]">
          {slides.map((slide, index) => (
            <div
              key={slide.image}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                activeSlide === index
                  ? "opacity-100"
                  : "pointer-events-none opacity-0"
              }`}
            >
              <Image
                src={slide.image}
                alt={`Civilia lifestyle ${index + 1}`}
                fill
                priority={index === 0}
                sizes="100vw"
                className={`object-cover transition-transform duration-[5000ms] ${
                  activeSlide === index ? "scale-105" : "scale-100"
                }`}
              />

              <div className="absolute inset-0 bg-black/30" />

              <div className="absolute bottom-8 left-8 right-8 z-10 md:bottom-12 md:left-12">
                {activeSlide === index && (
                  <p
                    ref={quoteRef}
                    className="max-w-[1200px] text-lg leading-[1.4] text-white md:text-[32px] md:leading-[1.3]"
                  >
                    {slide.quote}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center gap-5">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`gallery-dot h-3 w-3 rounded-full transition-all duration-300 ${
                activeSlide === index
                  ? "bg-civilia-red"
                  : "bg-black/20 hover:bg-black/35"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
