import Image from "next/image";
import { Header } from "@/components/layout/Header";

export function ContactHero() {
  return (
    <section className="bg-civilia-paper pb-16 md:pb-24">
      <Header active="contact" />

      <div className="container-civilia pt-[150px] md:pt-[190px]">
        {/* Banner */}
        <div
          data-animate="fade-up"
          className="flex min-h-[148px] items-center justify-center rounded-tl-[16px] rounded-tr-[16px] rounded-br-[16px] rounded-bl-[160px] bg-civilia-red px-8 py-8 md:min-h-[188px]"
        >
          <h1 className="text-center text-[56px] font-semibold leading-none text-white md:text-[96px]">
            Contact Us
          </h1>
        </div>

        {/* Description */}
        <div className="relative mt-14">
          <p className="max-w-[1040px] text-[24px] leading-[1.3] text-[#8A8A8A] md:text-[24px]">
            We&apos;re here to help you find your perfect property. Let our
            experts guide <br/> your next investment with the architectural
            precision Civilia is known for.
          </p>

          <Image
            src="/assets/story-accent.svg"
            alt=""
            width={32}
            height={16}
            className="absolute bottom-0 right-0 hidden md:block"
          />
        </div>
      </div>
    </section>
  );
}
