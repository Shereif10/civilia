export function AboutDeveloperSection() {
  return (
    <section className="bg-civilia-paper py-16 md:py-24">
      <div className="overflow-hidden rounded-[32px]">
        {/* Header */}
        <div className="rounded-bl-[285px] bg-[#F0E459] px-8 py-10 md:px-16 md:py-12">
          <h2
            data-animate="fade-up"
            className="text-center text-[48px] font-light leading-none text-[#031286] md:text-[72px]"
          >
            About The Developer
          </h2>
        </div>

        {/* Content */}
        <div
          data-animate="fade-up"
          className="mx-auto flex max-w-[1280px] flex-col items-center px-8 py-16 text-center md:px-16 md:py-24"
        >
          <h3 className="text-[42px] font-light leading-none text-[#031286] md:text-[72px]">
            CIVILIA Developments
          </h3>

          <p className="mt-3 text-[20px] font-semibold text-[#4A4A4A] md:text-[32px]">
            Building Communities, Shaping Landmarks
          </p>

          <p className="mt-12 text-[20px] leading-[1.8] text-[#5A5A5A] md:text-[24px]">
            <span className="text-[#031286]">CIVILIA Developments</span> was
            founded as a natural extension of long-standing expertise in the
            construction and contracting sector in Egypt.
          </p>

          <p className="mt-10 text-[20px] leading-[1.8] text-[#031286] md:text-[24px]">
            Built on a simple yet profound philosophy, the company transforms
            raw land into distinctive architectural landmarks.
          </p>

          <p className="mt-10 text-[20px] leading-[1.8] text-[#5A5A5A] md:text-[24px]">
            <span className="text-[#031286]">CIV West </span> stands as one of
            CIVILIA&apos;s flagship real estate projects, a reflection of the
            company&apos;s commitment to quality execution, design excellence,
            and the finest details that elevate residents’ quality of life.
          </p>
        </div>
      </div>
    </section>
  );
}
