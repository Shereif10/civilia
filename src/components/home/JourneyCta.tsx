import { CiviliaButton } from "@/components/ui/CiviliaButton";

type JourneyCtaVariant = "home" | "project" | "projectJourney";

type JourneyCtaProps = {
  variant?: JourneyCtaVariant;
};

const ctaContent = {
  home: {
    title: "Start Your Journey to CIV West",
    description:
      "Our team is ready to guide you through every detail, from booking to ownership.",
    containerClass: "bg-[#191919] text-[#f3f3f3]",
    titleClass: "text-[34px] font-semibold md:text-5xl",
    primaryButton: {
      label: "Book a Visit",
      variant: "red" as const,
      href: "/contact",
    },
    secondaryButton: {
      label: "Request a Call",
      variant: "light" as const,
      href: "/contact",
    },
  },

  project: {
    title: "Your Ideal Community Awaits...",
    description:
      "Experience the Modern Living in Thawra El Khadra, Sheikh Zayed City.",
    containerClass: "bg-[#031286] text-white border-[3px] border-black/10",
    titleClass: "text-[42px] font-light text-[#F0E459] md:text-[64px]",
    primaryButton: {
      label: "Contact us",
      variant: "light" as const,
      href: "/contact",
    },
    secondaryButton: {
      label: "Brochure",
      variant: "yellow" as const,
      href: "/brochure.pdf",
    },
  },

  projectJourney: {
    title: "Start Your Journey to CIV West",
    description:
      "Our team is ready to guide you through every detail, from booking to ownership.",
    containerClass: "bg-[#031286] text-white border-[3px] border-black/10",
    titleClass: "text-[42px] font-light text-[#F0E459] md:text-[64px]",
    primaryButton: {
      label: "Book a Visit",
      variant: "yellow" as const,
      href: "/contact",
    },
    secondaryButton: {
      label: "Request a Call",
      variant: "light" as const,
      href: "/contact",
    },
  },
};

export function JourneyCta({ variant = "home" }: JourneyCtaProps) {
  const content = ctaContent[variant];

  return (
    <section className="bg-civilia-paper px-4 pb-16 md:pb-24">
      <div
        data-animate="fade-up"
        className={`container-civilia rounded-[20px] px-6 py-12 text-center md:px-8 md:py-16 ${content.containerClass}`}
      >
        <div className="mx-auto max-w-[930px]">
          <h2
            className={`${content.titleClass} leading-[1.2] md:leading-[1.3]`}
          >
            {content.title}
          </h2>

          <p
            className={`mt-4 ${
              variant === "home"
                ? "text-lg font-medium leading-[1.2] md:text-2xl"
                : "text-lg text-white md:text-[18px]"
            }`}
          >
            {content.description}
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row md:gap-8">
            <CiviliaButton
              href={content.primaryButton.href}
              className="w-full sm:w-[319px]"
              variant={content.primaryButton.variant}
              withArrow={false}
            >
              {content.primaryButton.label}
            </CiviliaButton>

            <CiviliaButton
              href={content.secondaryButton.href}
              className="w-full sm:w-[319px]"
              variant={content.secondaryButton.variant}
              withArrow={false}
            >
              {content.secondaryButton.label}
            </CiviliaButton>
          </div>
        </div>
      </div>
    </section>
  );
}
