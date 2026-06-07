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
      "text-center text-[36px] font-light leading-none text-[#031286] sm:text-[42px] md:text-[72px]",
    wrapperClass:
      "overflow-hidden rounded-[24px] rounded-bl-[120px] px-5 py-8 backdrop-blur-[100px] sm:rounded-[28px] sm:rounded-bl-[180px] sm:px-8 sm:py-10 md:rounded-[32px] md:rounded-bl-[285px] md:px-16 md:py-12",
    background:
      "linear-gradient(90deg, rgba(255, 255, 255, 0.25) 0%, rgba(200, 125, 7, 0) 100%)",
    marginTop: "mt-8",
  },
};

export function QuestionsSection({
  variant = "default",
}: QuestionsSectionProps) {
  const config = variants[variant];

  return (
    <section className="bg-civilia-paper py-12 sm:py-14 md:py-24">
      <div
        className={config.wrapperClass}
        style={{
          background: config.background,
        }}
      >
        <h2 className={config.titleClass}>Questions & Answers</h2>
      </div>

      <div className={`container-civilia ${config.marginTop}`}>
        <AccordionList items={config.items} variant={variant} />
      </div>
    </section>
  );
}
