import { useTranslations } from "next-intl";
import { CiviliaButton } from "@/components/ui/CiviliaButton";

type JourneyCtaVariant = "home" | "project" | "projectJourney" | "careers";

type JourneyCtaProps = {
  variant?: JourneyCtaVariant;
};

const ctaStyles = {
  home: {
    containerClass: "bg-[#191919] text-[#f3f3f3]",
    titleClass: "text-[30px] font-semibold md:text-5xl",
    descriptionClass:
      "text-base font-medium leading-[1.4] md:text-2xl md:leading-[1.2]",
    primaryButton: { variant: "red" as const, href: "/contact" },
  },
  project: {
    containerClass: "border-[3px] border-black/10 bg-[#031286] text-white",
    titleClass:
      "text-[34px] font-light text-[#F0E459] sm:text-[38px] md:text-[64px]",
    descriptionClass: "text-base text-white md:text-[18px]",
    primaryButton: { variant: "light" as const, href: "/contact" },
    secondaryButton: { variant: "yellow" as const, href: "/brochure.pdf" },
  },
  projectJourney: {
    containerClass: "border-[3px] border-black/10 bg-[#031286] text-white",
    titleClass:
      "text-[34px] font-light text-[#F0E459] sm:text-[38px] md:text-[64px]",
    descriptionClass: "text-base text-white md:text-[18px]",
    primaryButton: { variant: "yellow" as const, href: "/contact" },
  },
  careers: {
    containerClass: "bg-[#191919] text-white",
    titleClass:
      "text-[36px] font-semibold text-white sm:text-[48px] md:text-[88px]",
    descriptionClass:
      "mx-auto text-[16px] font-medium leading-[1.5] text-civilia-red sm:text-[18px] md:text-[24px]",
  },
};

export function JourneyCta({ variant = "home" }: JourneyCtaProps) {
  const t = useTranslations("cta");
  const styles = ctaStyles[variant];
  const primaryButton = "primaryButton" in styles ? styles.primaryButton : null;
  const secondaryButton =
    "secondaryButton" in styles ? styles.secondaryButton : null;

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

          sm:rounded-[28px]
          sm:px-6
          sm:py-10

          md:rounded-[32px]
          md:px-8
          md:py-16

          ${styles.containerClass}
        `}
      >
        <div className="mx-auto max-w-[930px]">
          <h2 className={`${styles.titleClass} leading-[1.1]`}>
            {t(`${variant}.title`)}
          </h2>

          <p className={`mt-4 ${styles.descriptionClass}`}>
            {t(`${variant}.description`)}
          </p>

          {primaryButton && (
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
                href={primaryButton.href}
                className="w-full sm:w-[319px]"
                variant={primaryButton.variant}
                withArrow={false}
              >
                {t(`${variant}.primaryButton`)}
              </CiviliaButton>

              {secondaryButton && (
                <CiviliaButton
                  href={secondaryButton.href}
                  className="w-full sm:w-[319px]"
                  variant={secondaryButton.variant}
                  withArrow={false}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t(`${variant}.secondaryButton`)}
                </CiviliaButton>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
