"use client";

import { ReactNode, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type GsapProviderProps = {
  children: ReactNode;
};

export function GsapProvider({ children }: GsapProviderProps) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-animate='fade-up']").forEach((element) => {
        gsap.from(
          element,
          {
            y: 42,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 82%",
              once: true,
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-animate='reveal']").forEach((element) => {
        gsap.fromTo(
          element,
          { clipPath: "inset(0 0 100% 0)" },
          {
            clipPath: "inset(0 0 0% 0)",
            duration: 1.1,
            ease: "power4.out",
            scrollTrigger: {
              trigger: element,
              start: "top 78%",
              once: true,
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-animate='stagger']").forEach((group) => {
        gsap.from(
          group.children,
          {
            y: 28,
            duration: 0.75,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: group,
              start: "top 84%",
              once: true,
            },
          },
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return children;
}
