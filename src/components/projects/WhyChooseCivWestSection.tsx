import Image from "next/image";

const reasons = [
  {
    title: "Strategic Location",
    description:
      "Heart of Thawra El Khadra-close to malls, clubs, and major road axRs",
  },
  {
    title: "Contemporary Master Plan",
    description: "Designed by ADC with panoramic views and modern architecture",
  },
  {
    title: "Expansive Green Spaces",
    description:
      "Majority of the compound dedicated to greens, lakes & walkways",
  },
  {
    title: "Integrated Amenities",
    description:
      "Club house, gym, yoga, padel, retail mall, kids areas & running tracks",
  },
  {
    title: "Smart Security",
    description: "Smart gates, CCTV, 24/7 guards, and underground parking",
  },
  {
    title: "Trusted Developer",
    description:
      "CIVILIA Developments-20+ years in construction & large-scale projects",
  },
];

export function WhyChooseCivWestSection() {
  return (
    <section className="bg-civilia-paper py-16 md:py-24">
      <div className="mx-auto max-w-[1280px]">
        <h2
          data-animate="fade-up"
          className="text-center text-[48px] font-light leading-none text-[#031286] md:text-[72px]"
        >
          Why Choose CIV West
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-2" data-animate="stagger">
          {reasons.map((item) => (
            <article
              key={item.title}
              className="rounded-[16px] text-center border border-[#031286]/40 bg-white px-8 py-7 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <Image
                  src="/assets/why-icon.svg"
                  alt=""
                  width={33}
                  height={33}
                  className="mt-1 shrink-0 "
                />

                <div>
                  <h3 className="text-[28px] font-medium leading-none text-[#031286]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[18px] leading-[1.6] text-[#5A5A5A]">
                    {item.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
