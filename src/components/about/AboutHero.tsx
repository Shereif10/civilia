import Image from "next/image";
import { Header } from "@/components/layout/Header";

export function AboutHero() {
  return (
    <section className="relative min-h-[100vh] overflow-hidden bg-civilia-paper md:h-[100vh]">
      <Header />

      <div className="absolute inset-0">
        <Image
          src="/assets/about-hero.png"
          alt="Modern CIVILIA architectural tower"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(24,24,24,0.48)_0%,rgba(24,24,24,0.18)_38%,rgba(24,24,24,0)_72%)]" />

      <div className="absolute inset-x-0 bottom-0 h-[220px] bg-[linear-gradient(180deg,rgba(255,253,250,0)_0%,rgba(255,253,250,0.92)_76%,#fffdfa_100%)]" />

      <div className="container-civilia relative z-20 flex min-h-[720px] items-center md:min-h-[860px]">
        <div className="max-w-[420px] pt-24 md:pt-32">
          <div data-animate="fade-up">
            <h1 className="text-[58px] font-light leading-[0.95] tracking-[-2px] text-[#f3f3f3] md:text-[92px] md:tracking-[-4px]">
              <span className="block">About</span>
              <span className="block">Civilia</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 hidden md:block">
                  <Image
                    src="/assets/story-accent.svg"
                    alt=""
                    width={33}
                    height={17}
                  />
                </div>
    </section>
  );
}
