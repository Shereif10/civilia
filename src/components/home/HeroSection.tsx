import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { CiviliaButton } from "@/components/ui/CiviliaButton";

export function HeroSection() {
  return (
    <section className="relative min-h-[760px] bg-civilia-paper md:h-[834px]">
      <Header active="home" />

      <div className="absolute left-1/2 top-[223px] hidden h-auto w-[80vw] max-w-[1024px] -translate-x-1/2 md:block">
        <Image
          src="/assets/civilia-wordmark.svg"
          alt="CIVILIA Developments"
          width={1024}
          height={192}
          priority
          className="h-auto w-full"
        />
      </div>

      <div className="absolute inset-x-0 bottom-0 top-[128px] overflow-hidden md:top-[355px]">
        <Image
          src="/assets/hero.png"
          alt="CIVILIA landmark residential development"
          fill
          priority
          // sizes="100vw"
          className="object-fill object-center"
        />
      </div>

      <div className="absolute inset-x-0 bottom-0 z-20 flex min-h-[390px] items-end bg-[linear-gradient(180deg,rgba(231,226,220,0)_0%,rgba(24,24,24,0.92)_34%,#181818_100%)] pb-10 md:min-h-[302px] md:pb-2">
        <div className="container-civilia grid gap-8 md:grid-cols-[376px_1fr] md:items-end md:gap-16">
          <h1
            data-animate="fade-up"
            className="text-civilia-warm text-[34px] font-semibold leading-none tracking-[3px] md:whitespace-nowrap md:text-[56px] md:tracking-[5.6px]"
          >
            <span className="block text-[30px] font-light md:text-[40px]">FROM</span>
            <span className="block">
              LAND <span className="text-[30px] font-light md:text-[40px]">TO</span>
            </span>
            <span className="block">LANDMARK</span>
          </h1>

          <div data-animate="fade-up" className="flex flex-col items-start gap-4 md:items-end">
            <p className="max-w-[calc(100vw-32px)] text-lg leading-[1.25] text-[#ded7d1] md:max-w-[584px] md:text-xl">
              A new standard of living, developed by real construction expertise, built for those
              who value certainty, quality, and calm living.
            </p>
            <CiviliaButton href="/contact">Book a Visit</CiviliaButton>
          </div>
        </div>
      </div>
    </section>
  );
}
