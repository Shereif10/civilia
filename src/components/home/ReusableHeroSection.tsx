import Image from "next/image";
import { Header } from "@/components/layout/Header";

type HeroVariant = "about" | "projects" | "careers";

type HeroSectionProps = {
  variant?: HeroVariant;
};

const heroContent = {
  about: {
    image: "/assets/about-hero.png",
    title: ["About", "Civilia"],
    subtitle: "",
    description: "",
    roundedBottom: false,
    overlay:
      "bg-[linear-gradient(90deg,rgba(24,24,24,0.48)_0%,rgba(24,24,24,0.18)_38%,rgba(24,24,24,0)_72%)]",
  },

  projects: {
    image: "/assets/projects-hero.png",
    title: ["CIV WEST – Modern Living,", "Engineered Around You"],
    subtitle: "",
    description: "",
    roundedBottom: true,
    overlay:
      "bg-[linear-gradient(262.09deg,rgba(255,255,255,0)_-0.07%,rgba(0,0,0,0.5)_100%)]",
  },

  careers: {
    image: "/assets/careers-hero.jpg",
    title: ["WE ARE", "HIRING"],
    subtitle: "Build the Future of Living",
    description:
      "Join the visionaries redefining Egypt's architectural landscape through precision, integrity, and sustainable luxury.",
    roundedBottom: true,
    overlay:
      "bg-[linear-gradient(262.09deg,rgba(255,255,255,0)_-0.07%,rgba(0,0,0,0.5)_100%)]",
  },
} as const;

export function ReusableHeroSection({ variant = "about" }: HeroSectionProps) {
  const content = heroContent[variant];

  return (
    <section
      className={`relative overflow-hidden ${
        content.roundedBottom
          ? "min-h-[100svh] rounded-b-[24px] md:rounded-b-[32px]"
          : "min-h-[100svh] bg-civilia-paper"
      }`}
    >
      <Header />

      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={content.image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Overlay */}
      <div className={`absolute inset-0 ${content.overlay}`} />

      {/* ABOUT */}
      {variant === "about" && (
        <>
          <div className="absolute inset-x-0 bottom-0 h-[220px] bg-[linear-gradient(180deg,rgba(255,253,250,0)_0%,rgba(255,253,250,0.92)_76%,#fffdfa_100%)]" />

          <div className="container-civilia relative z-20 flex min-h-[100svh] items-center">
            <div className="max-w-[420px] pt-20 md:pt-32">
              <div data-animate="fade-up">
                <h1
                  className="
                    text-[48px]
                    font-light
                    leading-[0.95]
                    tracking-[-2px]
                    text-[#f3f3f3]

                    sm:text-[58px]

                    md:text-[92px]
                    md:tracking-[-4px]
                  "
                >
                  <span className="block">{content.title[0]}</span>
                  <span className="block">{content.title[1]}</span>
                </h1>
              </div>
            </div>
          </div>
        </>
      )}

      {/* PROJECTS */}
      {variant === "projects" && (
        <div className="absolute inset-0 z-20 flex items-end">
          <div className="container-civilia pb-8 sm:pb-10 md:pb-14 lg:pb-20">
            <div data-animate="fade-up">
              <h1
                className="
            max-w-[1200px]
            text-white
            font-light
            leading-[1]
            tracking-[-1px]

            text-[32px]

            sm:text-[44px]

            md:text-[64px]

            lg:text-[84px]
          "
              >
                <span className="block lg:whitespace-nowrap">
                  {content.title[0]}
                </span>

                <span className="block lg:whitespace-nowrap">
                  {content.title[1]}
                </span>
              </h1>
            </div>
          </div>
        </div>
      )}

      {/* CAREERS */}
      {variant === "careers" && (
        <div className="container-civilia relative z-20 flex min-h-[100svh] items-center">
          <div className="max-w-[1280px] pt-24 md:pt-32">
            <div data-animate="fade-up">
              <h1
                className="
                  text-[52px]
                  font-semibold
                  uppercase
                  leading-[0.9]
                  tracking-[-2px]
                  text-[#f3f3f3]

                  sm:text-[72px]

                  md:text-[120px]
                  md:tracking-[-4px]
                "
              >
                <span className="block">{content.title[0]}</span>
                <span className="block">{content.title[1]}</span>
              </h1>

              <p
                className="
                  mt-6
                  text-[20px]
                  font-semibold
                  text-civilia-red

                  sm:text-[28px]

                  md:text-[40px]
                "
              >
                {content.subtitle}
              </p>

              <p
                className="
                  mt-3
                  max-w-[900px]
                  text-[16px]
                  leading-[1.4]
                  text-[#f3f3f3]

                  sm:text-[20px]

                  md:text-[28px]

                  lg:text-[32px]
                "
              >
                {content.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Accent */}
      <div className="absolute bottom-6 right-6 z-20 hidden lg:block">
        <Image src="/assets/story-accent.svg" alt="" width={33} height={17} />
      </div>
    </section>
  );
}
