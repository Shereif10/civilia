import Image from "next/image";

export function OurStorySection() {
  return (
    <section className="bg-civilia-paper pb-20 pt-6 md:pb-32 md:pt-10">
      <div className="mx-auto max-w-[1440px] overflow-hidden">
        <div
          data-animate="fade-up"
          className="flex min-h-[118px] items-center justify-center rounded-bl-[120px] bg-civilia-red px-8 py-8 md:min-h-[174px] md:rounded-bl-[220px]"
        >
          <h2 className="text-center text-[40px] font-semibold leading-none text-civilia-paper md:text-[72px]">
            Our Story
          </h2>
        </div>
      </div>

      <div className="container-civilia relative mt-14 md:mt-20">
        <div
          data-animate="fade-up"
          className="relative overflow-hidden rounded-[32px] px-6 py-12 md:px-16 md:py-20"
          style={{
            background:
              "linear-gradient(90deg, #FFFDFA 0%, #FFF3E1 50%, #FFFDFA 100%)",
          }}
        >
          <div className="max-w-[1120px] text-[15px] leading-[1.9] tracking-[-0.01em] text-[#2f2f2f] md:text-[19px]">
            <p>
              <span className="font-semibold text-civilia-red">CIV West</span>{" "}
              Compound is a fully integrated residential development by{" "}
              <span className="font-semibold text-civilia-red">
                CIVILIA Developments
              </span>
              , located in Thawra El Khadra, Sheikh Zayed City, spanning total
              area of <span className="font-semibold">38,000</span> square
              meter.
            </p>

            <p className="mt-8">
              The project offers modern apartments with contemporary designs,
              expansive green spaces, artificial lakes, and a complete suite of
              leisure and sports facilities — all with flexible payment plans
              tailored for families seeking premium living in West Cairo.
            </p>

            <p className="mt-8">
              <span className="font-semibold text-civilia-red">CIV West</span>{" "}
              is designed to deliver a balanced lifestyle that harmonizes
              tranquility, luxury, and proximity to the essential services
              modern Egyptian families need — through thoughtful urban planning
              that dedicates the majority of the compound’s area to green
              spaces, water features, and open walkways.
            </p>

            <p className="mt-8">
              The project is a direct embodiment of CIVILIA&apos;s motto —
              <span className="font-medium"> “From Land to Landmark”</span> —
              combining contemporary architecture, smart design details, and an
              integrated ecosystem of recreational, sports, and retail amenities
              within the compound.
            </p>
          </div>
          <div className="absolute bottom-8 right-8 hidden md:block">
            <Image
              src="/assets/story-accent.svg"
              alt=""
              width={33}
              height={17}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
