import Image from "next/image";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { stats } from "@/lib/data";

export function ExperienceSection() {
  return (
    <section className="bg-civilia-paper py-16 md:py-32">
      <SectionTitle className="mx-auto w-full max-w-[1280px] text-[64px]">Built on Experience</SectionTitle>
      <div className="container-civilia mt-16 grid gap-8 md:grid-cols-3" data-animate="stagger">
        {stats.map((item) => (
          <article
            key={item.label}
            className="civilia-gradient-card flex min-h-[268px] flex-col justify-between rounded-2xl p-8 md:min-h-[308px]"
          >
            <div>
              <p className="text-[52px] font-semibold leading-[1.2] text-[#252525] md:text-[56px]">
                {item.value}
              </p>
              <h3 className="mt-2 text-lg font-medium leading-[1.2] text-[#3d3d3d]">{item.label}</h3>
            </div>
            <Image
              src="/assets/metric-mark.svg"
              alt=""
              width={92}
              height={102}
              className="ml-auto"
            />
          </article>
        ))}
      </div>
    </section>
  );
}
