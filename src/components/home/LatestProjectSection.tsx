"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { CiviliaButton } from "@/components/ui/CiviliaButton";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { projectStats } from "@/lib/data";

const projects = [
  { src: "/assets/project-1.png", alt: "Project 1" },
  { src: "/assets/project-2.png", alt: "Project 2" },
  { src: "/assets/project-3.png", alt: "Project 3" },
  { src: "/assets/project-4.png", alt: "Project 4" },
  { src: "/assets/project-5.png", alt: "Project 5" },
  { src: "/assets/project-6.png", alt: "Project 6" },
];

type LatestProjectSectionProps = {
  variant?: "default" | "project";
};

export function LatestProjectSection({
  variant = "default",
}: LatestProjectSectionProps) {
  const [centerIndex, setCenterIndex] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const getRoles = useCallback(() => {
    const left = (centerIndex - 1 + projects.length) % projects.length;
    const right = (centerIndex + 1) % projects.length;

    return {
      left,
      center: centerIndex,
      right,
    };
  }, [centerIndex]);

  const roles = getRoles();

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCenterIndex((prev) => (prev + 1) % projects.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      tl.from(".latest-project-title", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
        .from(
          ".project-banner",
          {
            scaleX: 0,
            transformOrigin: "center center",
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4",
        )
        .from(
          carouselRef.current,
          {
            y: 100,
            opacity: 0,
            duration: 1.2,
            ease: "power4.out",
          },
          "-=0.2",
        )
        .from(
          contentRef.current?.children || [],
          {
            y: 40,
            opacity: 0,
            stagger: 0.15,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.6",
        );

      gsap.to(".center-card", {
        y: -30,
        ease: "none",
        scrollTrigger: {
          trigger: carouselRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const positionClasses = (role: "left" | "center" | "right") => {
    switch (role) {
      case "left":
        return "left-0 top-[49px] h-[473px] w-[386px] z-0";
      case "center":
        return "left-[264px] top-0 h-[570px] w-[560px] z-10 shadow-soft";
      case "right":
        return "left-[702px] top-[49px] h-[473px] w-[386px] z-0";
      default:
        return "";
    }
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="bg-civilia-paper pb-16 md:pb-32"
    >
      {variant === "default" && (
        <>
          <SectionTitle
            align="left"
            className="latest-project-title mx-auto w-full justify-start"
          >
            Latest Project
          </SectionTitle>

          <div className="project-banner mt-10 bg-[#f5e94b] py-6 text-center sm:mt-12 md:mt-16 md:py-8">
            <h2
              className="text-[42px] font-light leading-[1.2] text-[#031286] md:text-[50px]"
              style={{
                fontFamily: "Badgline",
                fontSize: "clamp(48px, 8vw, 80px)",
              }}
            >
              CIV West
            </h2>
          </div>
        </>
      )}

      <div className="container-civilia mt-10 sm:mt-12 md:mt-16">
        <div
          ref={carouselRef}
          className="relative mx-auto h-[320px] w-full overflow-hidden sm:h-[420px] md:h-[570px] md:max-w-[1088px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {projects.map((project, index) => {
            let role: "left" | "center" | "right" | null = null;

            if (index === roles.left) role = "left";
            else if (index === roles.center) role = "center";
            else if (index === roles.right) role = "right";

            if (!role) return null;

            return (
              <div
                key={project.src}
                className={`absolute overflow-hidden rounded-2xl transition-all duration-500 ease-in-out ${positionClasses(
                  role,
                )} ${role === "center" ? "center-card" : ""}`}
              >
                <Image
                  src={project.src}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 386px"
                  className="project-image object-cover"
                />
              </div>
            );
          })}
        </div>

        <div
          ref={contentRef}
          className={`mt-10 ${
            variant === "project"
              ? "mx-auto max-w-[1280px]"
              : "rounded-2xl px-0 py-0 sm:mt-12 md:mt-16 md:px-8"
          }`}
        >
          {variant === "default" ? (
            <>
              <p className="mx-auto max-w-[1088px] text-center text-lg leading-[1.4] text-[#404030] sm:text-xl md:text-2xl md:leading-[1.25]">
                Experience Modern Living in Thawra El Khadra, Sheikh Zayed City,
                spanning 38.000 Square meters, we bring our ambitious vision to
                life.
              </p>
              <div className="mx-auto mt-6 flex max-w-[715px] flex-col items-center justify-between gap-3 text-center text-lg leading-[1.4] text-civilia-red sm:text-xl md:flex-row md:text-2xl md:leading-[1.25]">
                <span>CIV West - A Community Built to Last</span>
                <span>Sheikh Zayed</span>
              </div>

              <div className="mt-10 grid gap-8 text-center sm:mt-12 md:mt-12 md:grid-cols-3">
                {projectStats.map((item) => (
                  <div key={item.label}>
                    <p className="text-[28px] font-semibold leading-none text-civilia-red sm:text-[30px] md:text-[32px]">
                      {item.value}
                    </p>

                    <p className="mx-auto mt-1 max-w-[130px] text-sm leading-none text-civilia-red md:text-base">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex justify-center md:mt-12 md:justify-end">
                <CiviliaButton href="/projects">
                  View Project Details
                </CiviliaButton>
              </div>
            </>
          ) : (
            <div className="rounded-[20px] bg-[#E7DD4B] px-6 py-8 md:px-12 md:py-10">
              <p className="mx-auto max-w-[900px] text-center text-[18px] leading-[1.4] text-[#4A4A4A] md:text-[24px]">
                Experience Modern Living in Thawra El Khadra, Sheikh Zayed City,
                spanning 38.000 Square meters, we bring our ambitious vision to
                life.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 text-center md:flex-row md:gap-20">
                <span
                  className="text-[24px] text-[#031286] md:text-[42px]"
                  style={{ fontFamily: "Badgline" }}
                >
                  CIV West — A Community Built to Last
                </span>

                <span
                  className="text-[24px] text-[#031286] md:text-[42px]"
                  style={{ fontFamily: "Badgline" }}
                >
                  Sheikh Zayed
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .center-card img {
          transition: transform 0.8s ease;
        }

        .center-card:hover img {
          transform: scale(1.05);
        }

        @media (max-width: 767px) {
          .absolute {
            position: relative !important;
            left: auto !important;
            top: auto !important;
            width: 100% !important;
            height: 100% !important;
            margin-top: 0 !important;
          }

          .center-card {
            height: 320px !important;
          }
        }

        @media (min-width: 768px) and (max-width: 1023px) {
          .center-card {
            height: 420px !important;
          }
        }
      `}</style>
    </section>
  );
}