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
    showContent: true,
    roundedBottom: false,
    overlay:
      "bg-[linear-gradient(90deg,rgba(24,24,24,0.48)_0%,rgba(24,24,24,0.18)_38%,rgba(24,24,24,0)_72%)]",
  },

  projects: {
    image: "/assets/projects-hero.png",
    title: [],
    subtitle: "",
    description: "",
    showContent: false,
    roundedBottom: true,
    overlay: "bg-black/10",
  },

  careers: {
    image: "/assets/careers-hero.jpg",
    title: ["WE ARE", "HIRING"],
    subtitle: "Build the Future of Living",
    description:
      "Join the visionaries redefining Egypt's architectural landscape through precision, integrity, and sustainable luxury.",
    showContent: true,
    roundedBottom: true,
    overlay:
      "bg-[linear-gradient(90deg,rgba(24,24,24,0.28)_0%,rgba(24,24,24,0.10)_40%,rgba(24,24,24,0)_75%)]",
  },
} as const;

export function ReusableHeroSection({ variant = "about" }: HeroSectionProps) {
  const content = heroContent[variant];

  return (
    <section
      className={`relative overflow-hidden ${
        content.roundedBottom
          ? "h-screen rounded-b-[32px]"
          : "min-h-screen bg-civilia-paper md:h-screen"
      }`}
    >
      <Header />

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

      <div className={`absolute inset-0 ${content.overlay}`} />

      {variant === "about" && (
        <>
          <div className="absolute inset-x-0 bottom-0 h-[220px] bg-[linear-gradient(180deg,rgba(255,253,250,0)_0%,rgba(255,253,250,0.92)_76%,#fffdfa_100%)]" />

          <div className="container-civilia relative z-20 flex min-h-[720px] items-center md:min-h-[860px]">
            <div className="max-w-[420px] pt-24 md:pt-32">
              <div data-animate="fade-up">
                <h1 className="text-[58px] font-light leading-[0.95] tracking-[-2px] text-[#f3f3f3] md:text-[92px] md:tracking-[-4px]">
                  <span className="block">{content.title[0]}</span>
                  <span className="block">{content.title[1]}</span>
                </h1>
              </div>
            </div>
          </div>
        </>
      )}

      {variant === "careers" && (
        <div className="container-civilia relative z-20 flex min-h-[720px] items-center md:min-h-[860px]">
          <div className="max-w-[760px] pt-24 md:pt-32">
            <div data-animate="fade-up">
              <h1 className="text-[64px] font-semibold uppercase leading-[0.9] tracking-[-2px] text-white md:text-[120px] md:tracking-[-4px]">
                <span className="block">{content.title[0]}</span>
                <span className="block">{content.title[1]}</span>
              </h1>

              <p className="mt-6 text-[24px] font-semibold text-civilia-red md:text-[40px]">
                {content.subtitle}
              </p>

              <p className="mt-3 text-[20px] leading-[1.4] text-white md:text-[32px]">
                {content.description}
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="absolute bottom-8 right-8 hidden md:block">
        <Image src="/assets/story-accent.svg" alt="" width={33} height={17} />
      </div>
    </section>
  );
}
