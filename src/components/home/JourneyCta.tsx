import { CiviliaButton } from "@/components/ui/CiviliaButton";

type JourneyCtaVariant = "home" | "project" | "projectJourney" | "careers";

type JourneyCtaProps = {
  variant?: JourneyCtaVariant;
};

const ctaContent = {
  home: {
    title: "Start Your Journey to CIV West",
    description:
      "Our team is ready to guide you through every detail, from booking to ownership.",
    containerClass: "bg-[#191919] text-[#f3f3f3]",
    titleClass: "text-[30px] font-semibold md:text-5xl",
    descriptionClass:
      "text-base font-medium leading-[1.4] md:text-2xl md:leading-[1.2]",
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
    containerClass: "border-[3px] border-black/10 bg-[#031286] text-white",
    titleClass:
      "text-[34px] font-light text-[#F0E459] sm:text-[38px] md:text-[64px]",
    descriptionClass: "text-base text-white md:text-[18px]",
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
    containerClass: "border-[3px] border-black/10 bg-[#031286] text-white",
    titleClass:
      "text-[34px] font-light text-[#F0E459] sm:text-[38px] md:text-[64px]",
    descriptionClass: "text-base text-white md:text-[18px]",
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

  careers: {
    title: "Ready to join us?",
    description:
      "Your next great architectural achievement starts with a single step. Join the team that is redefining Egypt's built environment.",
    containerClass: "bg-[#191919] text-white",
    titleClass:
      "text-[36px] font-semibold text-white sm:text-[48px] md:text-[88px]",
    descriptionClass:
      "mx-auto max-w-[700px] text-[16px] font-medium leading-[1.5] text-civilia-red sm:text-[18px] md:text-[24px]",
    primaryButton: {
      label: "View Our Rules",
      variant: "red" as const,
      href: "/careers-rules",
    },
  },
};

export function JourneyCta({ variant = "home" }: JourneyCtaProps) {
  const content = ctaContent[variant];

  return (
    <section className="bg-civilia-paper px-4 pb-16 md:pb-24">
      <div
        data-animate="fade-up"
        className={`
          container-civilia
          rounded-[24px]
          px-5
          py-8
          text-center

          sm:px-6
          sm:py-10
          sm:rounded-[28px]

          md:rounded-[32px]
          md:px-8
          md:py-16

          ${content.containerClass}
        `}
      >
        <div className="mx-auto max-w-[930px]">
          <h2 className={`${content.titleClass} leading-[1.1]`}>
            {content.title}
          </h2>

          <p className={`mt-4 ${content.descriptionClass}`}>
            {content.description}
          </p>

          <div
            className="
              mt-8
              flex
              flex-col
              justify-center
              gap-4

              sm:mt-10
              sm:flex-row

              md:gap-8
            "
          >
            <CiviliaButton
              href={content.primaryButton.href}
              className={
                variant === "careers"
                  ? "w-full sm:min-w-[280px] sm:w-auto"
                  : "w-full sm:w-[319px]"
              }
              variant={content.primaryButton.variant}
              withArrow={false}
            >
              {content.primaryButton.label}
            </CiviliaButton>

            {"secondaryButton" in content && content.secondaryButton && (
              <CiviliaButton
                href={content.secondaryButton.href}
                className="w-full sm:w-[319px]"
                variant={content.secondaryButton.variant}
                withArrow={false}
              >
                {content.secondaryButton.label}
              </CiviliaButton>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
