import Image from "next/image";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CiviliaButton } from "@/components/ui/CiviliaButton";
import { newsItems } from "@/lib/data";

export function LatestNewsSection() {
  return (
    <section id="news" className="bg-civilia-paper py-16 md:py-24">
      <SectionTitle className="mx-auto w-full max-w-[1280px]">Latest News & Articles</SectionTitle>

      <div className="container-civilia mt-16 grid gap-8 md:grid-cols-[1fr_410px_1fr]" data-animate="stagger">
        {newsItems.map((item, index) => (
          <article
            key={`${item.title}-${index}`}
            className="civilia-gradient-card overflow-hidden rounded-3xl pb-6"
          >
            <div className="relative h-[330px] md:h-[397px]">
              <Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 100vw, 410px" className="object-cover" />
            </div>
            <div className="flex min-h-[124px] flex-col gap-4 px-4 pt-6">
              <h3 className="text-center text-sm leading-[1.25] text-[#404030]">{item.title}</h3>
              <div className="flex justify-end">
                <CiviliaButton href="#" className="h-10 px-6 text-base md:h-10 md:text-base">
                  Read More
                </CiviliaButton>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
