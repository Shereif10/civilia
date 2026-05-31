"use client";

import { FormEvent } from "react";
import { Send } from "lucide-react";
import { contactCards } from "@/lib/data";

export function ContactDetailsSection() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <section className="bg-civilia-paper pb-20 md:pb-32">
      <div className="container-civilia grid gap-16 lg:grid-cols-[700px_388px] lg:justify-between">
        <div data-animate="fade-up">
          <div>
            <h2 className="text-[42px] font-semibold leading-[1.2] text-civilia-red md:text-[58px]">
              Contact Now
            </h2>
            <p className="mt-4 max-w-[700px] text-xl leading-[1.5] text-[#3d3d3d] md:text-2xl">
              Submit your details and a specialized real estate consultant will reach out to curate
              your experience.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
            <input
              aria-label="Name"
              placeholder="Name"
              className="h-[58px] border-b border-civilia-ink/25 bg-transparent text-[21px] leading-none outline-none transition placeholder:text-[#3d3d3d] focus:border-civilia-red"
            />
            <div className="grid gap-8 md:grid-cols-2 md:gap-10">
              <input
                aria-label="Email"
                type="email"
                placeholder="Email"
                className="h-[58px] border-b border-civilia-ink/25 bg-transparent text-[21px] leading-none outline-none transition placeholder:text-[#3d3d3d] focus:border-civilia-red"
              />
              <input
                aria-label="Phone"
                type="tel"
                placeholder="Phone"
                className="h-[58px] border-b border-civilia-ink/25 bg-transparent text-[21px] leading-none outline-none transition placeholder:text-[#3d3d3d] focus:border-civilia-red"
              />
            </div>
            <textarea
              aria-label="Message"
              placeholder="Message"
              className="min-h-[130px] resize-none border-b border-civilia-ink/25 bg-transparent pt-4 text-2xl leading-none outline-none transition placeholder:text-[#3d3d3d] focus:border-civilia-red"
            />
            <div className="flex justify-end">
              <button
                type="submit"
                className="group inline-flex h-16 w-full items-center justify-center gap-6 rounded-civilia bg-civilia-red px-8 text-[22px] font-medium leading-none text-[#f3f3f3] transition duration-300 hover:-translate-y-0.5 hover:bg-[#b91114] sm:w-[319px]"
              >
                Send Message
                <Send className="h-5 w-5 transition group-hover:translate-x-1" aria-hidden="true" />
              </button>
            </div>
          </form>
        </div>

        <div className="flex flex-col gap-8 self-center" data-animate="stagger">
          {contactCards.map((card) => {
            const Icon = card.icon;
            return (
              <article
                key={card.title}
                className="civilia-gradient-card flex min-h-[128px] items-center justify-center rounded-2xl p-6"
              >
                <div className="w-[233px]">
                  <div className="flex items-center gap-4">
                    <Icon className="h-6 w-6 text-civilia-red" aria-hidden="true" />
                    <h3 className="text-[29px] font-medium leading-none text-[#3d3d3d]">{card.title}</h3>
                  </div>
                  <p className="mt-1 text-sm leading-none text-[#8e8e8e]">{card.note}</p>
                  <p className="mt-3 text-[22px] leading-[1.2] text-civilia-red">{card.value}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
