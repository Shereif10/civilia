import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="relative bg-civilia-ink pb-16 pt-20 md:h-[830px] md:pb-0 md:pt-[109px]">
      <div className="relative mx-auto min-h-[620px] w-full max-w-[1279px] overflow-hidden">
        <div data-animate="reveal" className="absolute left-0 top-6 h-[712px] w-[min(852px,74vw)]">
          <Image
            src="/assets/about-building.png"
            alt="CIVILIA residential building exterior"
            fill
            sizes="(max-width: 768px) 100vw, 852px"
            className="object-cover object-left"
          />
        </div>
        <div className="absolute bottom-0 left-0 h-[261px] w-[669px] opacity-80">
          <Image src="/assets/about-glow.svg" alt="" fill sizes="669px" />
        </div>

        <div
          data-animate="fade-up"
          className="relative ml-auto mt-0 w-full max-w-[700px] rounded-br-lg rounded-tl-lg rounded-tr-lg bg-[#cd0001] px-8 pb-20 pt-10 text-white shadow-soft md:rounded-bl-[10000px] md:pb-[170px] md:pl-[170px] md:pr-12 md:pt-12"
        >
          <div className="ml-auto max-w-[482px]">
            <h2 className="text-[40px] font-semibold leading-[1.2]">About Us</h2>
            <p className="mt-4 text-base leading-[1.5]">
              CIVILIA Developments Our portfolio spans diverse projects, from integrated
              developments to infrastructure, industrial, and commercial facilities, delivered in
              key areas like Sheikh Zayed, New Cairo, and the New Administrative Capital.
            </p>
            <p className="mt-4 text-base leading-[1.5]">
              Partnering with leading consultancy firms, we ensure every project meets the highest
              standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
