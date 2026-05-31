import Image from "next/image";

const approachItems = [
  {
    number: "01",
    title: "Built on Engineering Expertise",
    description: "Technical precision is the core of everything we build.",
  },
  {
    number: "02",
    title: "Focused on Real Execution",
    description: "Technical precision is the core of everything we build.",
  },
  {
    number: "03",
    title: "Designed for Everyday Living",
    description: "Functional spaces that elevate the daily human experience.",
  },
  {
    number: "04",
    title: "Driven by Long-Term Value",
    description: "Developments built to appreciate and serve for generations.",
  },
];

export function ApproachSection() {
  return (
    <section className="bg-civilia-paper py-20 md:py-32">
      <div
        className="mx-auto max-w-[1280px] rounded-[32px]  py-20"
        style={{
          background:
            "linear-gradient(90deg, #FFFDFA 0%, #FFF3E1 50%, #FFFDFA 100%)",
        }}
      >
        <div className="flex flex-col items-end justify-between gap-16 lg:flex-row">
          {/* Content */}
          <div className="w-full">
            <h2
              data-animate="fade-up"
              className="text-[56px] font-semibold leading-none text-civilia-red md:text-[72px]"
            >
              Our Approach
            </h2>

            <div className="mt-16 flex flex-col gap-12">
              {approachItems.map((item) => (
                <div key={item.number} data-animate="fade-up">
                  <div className="flex items-start gap-6">
                    <span className="min-w-[52px] text-[42px] font-semibold leading-none text-civilia-red/45 md:text-[52px]">
                      {item.number}
                    </span>

                    <div>
                      <h3 className="text-[24px] font-semibold leading-none text-civilia-ink md:text-[38px]">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-base leading-[1.4] text-[#555555] md:text-[20px]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div
            data-animate="reveal"
            className="relative h-[450px] w-full max-w-[420px] overflow-hidden rounded-[16px] grayscale"
          >
            <Image
              src="/assets/approach-image.png"
              alt="Civilia construction process"
              fill
              sizes="420px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
