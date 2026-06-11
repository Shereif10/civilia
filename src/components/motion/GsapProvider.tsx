"use client";

import { ReactNode, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type GsapProviderProps = {
  children: ReactNode;
};

export function GsapProvider({ children }: GsapProviderProps) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade Up
      gsap.utils
        .toArray<HTMLElement>("[data-animate='fade-up']")
        .forEach((element) => {
          gsap.from(element, {
            y: 42,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 82%",
              once: true,
            },
          });
        });

      // Reveal
      gsap.utils
        .toArray<HTMLElement>("[data-animate='reveal']")
        .forEach((element) => {
          gsap.fromTo(
            element,
            {
              clipPath: "inset(0 0 100% 0)",
            },
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

      // Stagger
      gsap.utils
        .toArray<HTMLElement>("[data-animate='stagger']")
        .forEach((group) => {
          gsap.from(group.children, {
            y: 28,
            duration: 0.75,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: group,
              start: "top 84%",
              once: true,
            },
          });
        });
    });

    return () => ctx.revert();
  }, []);

  return <>{children}</>;
}
