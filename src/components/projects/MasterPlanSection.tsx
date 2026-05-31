import Image from "next/image";

export function MasterPlanSection() {
  return (
    <section className="bg-civilia-paper py-16 md:py-24">
      <div className="mx-auto max-w-[1280px]">
        <div className="text-center">
          <h2
            data-animate="fade-up"
            className="text-[48px] font-light leading-none text-[#031286] md:text-[72px]"
          >
            Master Plan
          </h2>

          <p
            data-animate="fade-up"
            className="mx-auto mt-8 max-w-[1120px] text-[18px] leading-[1.7] text-[#555555] md:text-[22px]"
          >
            In collaboration with ADC – Architecture and Design consultant We
            have carefully considered every aspect of modern living, From the
            layout of streets and parks to the design of homes and amenities to
            create a community where every detail enhances your life style.
          </p>
        </div>

        <div
          data-animate="fade-up"
          className="relative mt-12 overflow-hidden rounded-[24px]"
        >
          <Image
            src="/assets/master-plan.png"
            alt="CIV West Master Plan"
            width={1280}
            height={720}
            className="h-auto w-full object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
