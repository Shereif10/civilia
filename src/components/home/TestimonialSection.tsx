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
    <section ref={sectionRef} className="py-12 sm:py-14 md:py-16 2xl:py-20">
      <div
        ref={cardRef}
        className="
          container-civilia
          relative
          overflow-hidden
          rounded-[24px]
          border-2
          border-black/[0.05]
          px-5
          py-8

          sm:px-8
          sm:py-10
          sm:rounded-[32px]

          md:px-10
          md:py-16
          md:rounded-[48px]
        "
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
          className="
            absolute
            right-10
            top-1/2
            hidden
            -translate-y-1/2
            opacity-[0.08]

            lg:block
          "
        />

        <blockquote className="relative z-10">
          <p
            ref={quoteRef}
            className="
              max-w-[920px]
              text-[22px]
              leading-[1.3]
              text-[#4A4A4A]

              sm:text-[26px]

              md:text-[32px]
              md:leading-[1.2]

              lg:text-[38px]
            "
          >
            Civilia stands out because of their construction background. You can
            clearly see the difference in how things are planned and executed.
          </p>

          <footer
            ref={footerRef}
            className="
              mt-8
              flex
              flex-col
              items-end

              md:mt-10
            "
          >
            <cite
              className="
                text-[20px]
                font-semibold
                not-italic
                text-civilia-red

                sm:text-[22px]

                md:text-[26px]
              "
            >
              Engineer Saad Al-Otaibi
            </cite>

            <span
              className="
                mt-1
                text-[15px]
                text-[#2F2F2F]

                sm:text-[16px]

                md:text-[19px]
              "
            >
              Role / Investor
            </span>
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
