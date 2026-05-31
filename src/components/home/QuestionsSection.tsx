import { AccordionList } from "@/components/ui/AccordionList";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { homeQuestions, projectQuestions } from "@/lib/data";

type QuestionsSectionProps = {
  variant?: "default" | "project";
};

export function QuestionsSection({
  variant = "default",
}: QuestionsSectionProps) {
  const isProject = variant === "project";

  const items = isProject ? projectQuestions : homeQuestions;

  return (
    <section className="bg-civilia-paper py-16 md:py-24">
      {isProject ? (
        <div className="overflow-hidden rounded-[32px]">
          <div className="rounded-bl-[285px] bg-[#F0E459] px-8 py-10 md:px-16 md:py-12">
            <h2 className="text-center text-[48px] font-light leading-none text-[#031286] md:text-[72px]">
              Questions & Answers
            </h2>
          </div>
        </div>
      ) : (
        <SectionTitle className="mx-auto w-full max-w-[1280px]">
          Questions & Answers
        </SectionTitle>
      )}

      <div
        className={`container-civilia ${isProject ? "mt-8" : "mt-8 md:mt-16"}`}
      >
        <AccordionList items={items} variant={variant} />
      </div>
    </section>
  );
}
