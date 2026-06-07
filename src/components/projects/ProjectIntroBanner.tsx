export function ProjectIntroBanner() {
  return (
    <section className="bg-civilia-paper py-10 md:py-16">
      <div
        data-animate="fade-up"
        className="mx-auto flex h-[188px] max-w-[1280px] flex-col items-center justify-center gap-8 rounded-[16px] bg-[#F0E459] p-8"
      >
        <p className=" text-center text-[24px] leading-[1.4] text-[#3D3D3D]">
          Experience Modern Living in Thawra El Khadra, Sheikh Zayed City,
          spanning 38.000 Square meters, we bring our ambitious vision to life.
        </p>

        <div className="flex items-center justify-center gap-16">
          <span className="text-[32px] font-light leading-none text-[#1D2D8C]">
            CIV West - A Community Built to Last
          </span>

          <span className="text-[32px] font-light leading-none text-[#1D2D8C]">
            Sheikh Zayed
          </span>
        </div>
      </div>
    </section>
  );
}
