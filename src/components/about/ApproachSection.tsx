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
    <section className="overflow-x-hidden bg-civilia-paper py-12 sm:py-20 md:py-32">
      <div
        className="mx-auto max-w-[1280px] rounded-2xl px-4 py-10 md:rounded-[32px] md:px-0 md:py-20"
        style={{
          background:
            "linear-gradient(90deg, #FFFDFA 0%, #FFF3E1 50%, #FFFDFA 100%)",
        }}
      >
        <div className="flex flex-col items-end justify-between gap-8 lg:flex-row lg:gap-16">
          {/* Content */}
          <div className="w-full">
            <h2
              data-animate="fade-up"
              className="text-[40px] font-semibold leading-none text-civilia-red sm:text-[56px] md:text-[72px]"
            >
              Our Approach
            </h2>

            <div className="mt-12 flex flex-col gap-8 sm:mt-16 sm:gap-12">
              {approachItems.map((item) => (
                <div key={item.number} data-animate="fade-up">
                  <div className="flex items-start gap-4 sm:gap-6">
                    <span className="min-w-[40px] text-[32px] font-semibold leading-none text-civilia-red/45 sm:min-w-[52px] sm:text-[42px] md:text-[52px] whitespace-nowrap">
                      {item.number}
                    </span>

                    <div>
                      <h3 className="text-[20px] font-semibold leading-none text-civilia-ink sm:text-[24px] md:text-[38px]">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-[1.4] text-[#555555] sm:mt-3 sm:text-base md:text-[20px]">
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
            className="relative h-[250px] w-full max-w-full overflow-hidden rounded-[16px] grayscale sm:h-[350px] md:h-[450px] md:max-w-[420px]"
          >
            <Image
              src="/assets/approach-image.png"
              alt="Civilia construction process"
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
