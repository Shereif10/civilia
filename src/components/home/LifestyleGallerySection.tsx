"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-civilia-paper py-16 md:py-24">
      <div data-animate="fade-up">
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
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/30" />

              <div className="absolute bottom-8 left-8 right-8 z-10 md:bottom-12 md:left-12">
                <p className="max-w-[1200px] text-lg leading-[1.4] text-white md:text-[32px] md:leading-[1.3]">
                  {slide.quote}
                </p>
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
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
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
