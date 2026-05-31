import Image from "next/image";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { reasons } from "@/lib/data";

export function WhyChooseSection() {
  return (
    <section className="bg-civilia-paper pb-16 md:pb-32">
      <SectionTitle className="mx-auto w-full max-w-[1280px]">
        Why Choose CIVILIA
      </SectionTitle>

      <div className="container-civilia mt-16">
        <div className="grid gap-8 md:grid-cols-2" data-animate="stagger">
          {reasons.map((reason) => (
            <article
              key={reason.title}
              className="flex min-h-[196px] flex-col items-center justify-center rounded-2xl p-8 text-center backdrop-blur-[100px] md:min-h-[220px]"
              style={{
                background:
                  "linear-gradient(90deg, #FFFDFA 0%, #FFF3E1 50%, #FFFDFA 100%)",
              }}
            >
              <Image src={reason.icon} alt="" width={60} height={60} />
              <h3 className="mt-8 max-w-[360px] text-[34px] font-medium leading-[1.1] text-[#3d3d3d] md:text-[40px]">
                {reason.title}
              </h3>
            </article>
          ))}
        </div>
      </div>

      
    </section>
  );
}
