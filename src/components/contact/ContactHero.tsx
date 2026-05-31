import Image from "next/image";
import { Header } from "@/components/layout/Header";

export function ContactHero() {
  return (
    <section className="relative min-h-[577px] bg-civilia-paper">
      <Header active="contact" />
      <div className="container-civilia pt-[170px] md:pt-[205px]">
        <div data-animate="fade-up" className="flex min-h-[200px] items-center justify-center">
          <h1 className="text-center text-[54px] font-semibold leading-none text-civilia-red md:text-[80px]">
            Contact Us
          </h1>
        </div>
        <div className="mt-20 flex items-end justify-between border-b border-civilia-ink/10 pb-8">
          <p className="max-w-[992px] text-[22px] leading-[1.3] text-[#3d3d3d] md:text-[29px]">
            We&apos;re here to help you find your perfect property. Let our experts guide your next
            investment with the architectural precision Civilia is known for.
          </p>
          <Image
            src="/assets/arrow.svg"
            alt=""
            width={32}
            height={16}
            className="hidden shrink-0 md:block"
          />
        </div>
      </div>
    </section>
  );
}
