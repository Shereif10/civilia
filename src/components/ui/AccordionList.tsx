"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type AccordionItem = {
  question: string;
  answer: string;
};

type AccordionListProps = {
  items: AccordionItem[];
  variant?: "default" | "project";
};

export function AccordionList({ items, variant }: AccordionListProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const isProject = variant === "project";

  return (
    <div className="flex w-full flex-col gap-4" data-animate="stagger">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <button
            key={item.question}
            type="button"
            onClick={() => setOpenIndex(isOpen ? null : index)}
            className={`group rounded-[8px] p-5 text-left transition duration-300 md:p-8 ${
              isProject
                ? "bg-[#031286] text-white hover:bg-[#02106f]"
                : "bg-civilia-red text-white hover:bg-[#b91114]"
            }`}
            aria-expanded={isOpen}
          >
            <span className="flex items-center gap-5">
              <span className="flex-1 text-base leading-normal md:text-[22px] md:leading-[1.5]">
                {item.question}
              </span>

              <ChevronDown
                className={`h-6 w-6 shrink-0 transition duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </span>

            <span
              className={`grid transition-[grid-template-rows,opacity,margin] duration-300 ${
                isOpen
                  ? "mt-4 grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <span
                className={`overflow-hidden text-sm leading-6 md:text-base ${
                  isProject ? "text-white/80" : "text-white/78"
                }`}
              >
                {item.answer}
              </span>
            </span>
          </button>
        );
      })}
    </div>
  );
}
