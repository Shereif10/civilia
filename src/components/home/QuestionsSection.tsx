import { AccordionList } from "@/components/ui/AccordionList";
import { homeQuestions, projectQuestions } from "@/lib/data";

type QuestionsSectionProps = {
  variant?: "default" | "project";
};

const variants = {
  default: {
    items: homeQuestions,
    titleClass:
      "text-center text-[48px] font-semibold leading-none text-civilia-red md:text-[72px]",
    wrapperClass: "mx-auto rounded-[16px] py-10 backdrop-blur-[100px]",
    background:
      "linear-gradient(90deg, rgba(255,255,255,0.95) 0%, rgba(255,243,225,0.9) 50%, rgba(255,255,255,0.95) 100%)",
    marginTop: "mt-8 md:mt-16",
  },

  project: {
    items: projectQuestions,
    titleClass:
      "text-center text-[48px] font-light leading-none text-[#031286] md:text-[72px]",
    wrapperClass:
      "overflow-hidden rounded-[32px] rounded-bl-[285px] px-8 py-10 backdrop-blur-[100px] md:px-16 md:py-12",
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
    <section className="bg-civilia-paper py-16 md:py-24">
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
