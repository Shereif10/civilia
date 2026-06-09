import { AccordionList } from "@/components/ui/AccordionList";
import { homeQuestions, projectQuestions } from "@/lib/data";

type QuestionsSectionProps = {
  variant?: "default" | "project";
};

const variants = {
  default: {
    items: homeQuestions,
    titleClass:
      "text-center text-[36px] font-semibold leading-none text-civilia-red sm:text-[42px] md:text-[72px]",
    wrapperClass:
      "mx-auto rounded-[16px] px-4 py-8 backdrop-blur-[100px] sm:px-6 sm:py-10 md:px-0 md:py-10",
    background:
      "linear-gradient(90deg, rgba(255,255,255,0.95) 0%, rgba(255,243,225,0.9) 50%, rgba(255,255,255,0.95) 100%)",
    marginTop: "mt-8 md:mt-16",
  },

  project: {
    items: projectQuestions,
    titleClass:
      "text-center text-[42px] font-light leading-none text-[#031286] md:text-[72px]",
    wrapperClass:
      "overflow-hidden rounded-bl-[160px] md:rounded-bl-[285px] px-8 py-10 md:px-16 md:py-12",
    background: "#F0E459",
    marginTop: "mt-10 md:mt-16",
  },
};

export function QuestionsSection({
  variant = "default",
}: QuestionsSectionProps) {
  const config = variants[variant];

  return (
    <section className="bg-civilia-paper py-16 md:py-24">
      <div
        className={config.wrapperClass}
        style={{
          background: config.background,
        }}
      >
        <h2
          className={config.titleClass}
          style={variant === "project" ? { fontFamily: "Badgline" } : undefined}
        >
          Questions & Answers
        </h2>
      </div>

      <div className={`container-civilia ${config.marginTop}`}>
        <AccordionList items={config.items} variant={variant} />
      </div>
    </section>
  );
}
