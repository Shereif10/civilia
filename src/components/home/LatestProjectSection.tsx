import Image from "next/image";
import { CiviliaButton } from "@/components/ui/CiviliaButton";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { projectStats } from "@/lib/data";

export function LatestProjectSection() {
  return (
    <section id="projects" className="bg-civilia-paper pb-16 md:pb-32">
      <SectionTitle align="left" className="mx-auto w-full max-w-[1280px] justify-start">
        Latest Project
      </SectionTitle>

      <div className="mt-16 bg-[#f5e94b] py-8 text-center md:mt-16">
        <h2 data-animate="fade-up" className="text-[42px] font-light leading-[1.2] text-[#4b4320] md:text-[50px]">
          CIV West
        </h2>
      </div>

      <div className="container-civilia mt-16">
        <div data-animate="reveal" className="relative h-[360px] md:h-[570px]">
          <div className="absolute left-0 top-[49px] hidden h-[473px] w-[386px] overflow-hidden rounded-2xl md:block">
            <Image src="/assets/project-left.png" alt="" fill sizes="386px" className="object-cover" />
          </div>
          <div className="absolute right-0 top-[49px] hidden h-[473px] w-[386px] overflow-hidden rounded-2xl md:block">
            <Image src="/assets/project-right.png" alt="" fill sizes="386px" className="object-cover" />
          </div>
          <div className="absolute left-1/2 top-0 h-full w-full max-w-[560px] -translate-x-1/2 overflow-hidden rounded-[10px] shadow-soft">
            <Image
              src="/assets/project-main.png"
              alt="CIV West residential community"
              fill
              sizes="(max-width: 768px) 100vw, 560px"
              className="object-cover"
            />
          </div>
        </div>

        <div data-animate="fade-up" className="mt-16 rounded-2xl px-0 py-0 md:px-8">
          <p className="mx-auto max-w-[1088px] text-center text-xl leading-[1.25] text-[#404030] md:text-2xl">
            Experience Modern Living in Thawra El Khadra, Sheikh Zayed City, spanning 38.000
            Square meters, we bring our ambitious vision to life.
          </p>
          <div className="mx-auto mt-6 flex max-w-[715px] flex-col items-center justify-between gap-3 text-center text-xl leading-[1.25] text-civilia-red md:flex-row md:text-2xl">
            <span>CIV West — A Community Built to Last</span>
            <span>Sheikh Zayed</span>
          </div>

          <div className="mt-12 grid gap-8 text-center md:grid-cols-3">
            {projectStats.map((item) => (
              <div key={item.label}>
                <p className="text-[32px] font-semibold leading-none text-civilia-red">{item.value}</p>
                <p className="mx-auto mt-1 max-w-[130px] text-base leading-none text-civilia-red">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-end">
            <CiviliaButton href="/contact">View Project Details</CiviliaButton>
          </div>
        </div>
      </div>
    </section>
  );
}
