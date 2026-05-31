import { AccordionList } from "@/components/ui/AccordionList";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { questions } from "@/lib/data";

export function ContactQuestions() {
  return (
    <section className="bg-civilia-paper pb-24">
      <SectionTitle className="mx-auto w-full max-w-[1280px]">Questions & Answers</SectionTitle>
      <div className="container-civilia mt-8 md:mt-16">
        <AccordionList items={questions} />
      </div>
    </section>
  );
}
