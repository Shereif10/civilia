import Image from "next/image";

const locations = [
  {
    time: "3",
    place: "Dandy mega mall.",
    variant: "light",
    
  },
  {
    time: "5",
    place: "HYPER One.",
    variant: "yellow",
  },
  {
    time: "5",
    place: "ZED Towers.",
    variant: "light",
  },
  {
    time: "10",
    place: "AHLY Sporting Club.",
    variant: "yellow",
  },
];

export function PrimeLocationSection() {
  return (
    <section className="bg-civilia-paper py-16 md:py-24">
      <div className="mx-auto  overflow-hidden rounded-[32px]">
        {/* Header */}
        <div className="rounded-bl-[285px] bg-[#F0E459] px-8 py-10 md:px-16 md:py-12">
          <h2
            data-animate="fade-up"
            className="text-center text-[48px] font-light leading-none text-[#031286] md:text-[72px]"
          >
            Prime Location
          </h2>
        </div>

        {/* Content */}
        <div className="px-8 py-10 md:px-16 md:py-16">
          <div className="grid gap-10 lg:grid-cols-[480px_1fr]">
            {/* Map */}
            <div
              data-animate="fade-right"
              className="relative h-[360px] overflow-hidden rounded-[16px]"
            >
              <Image
                src="/assets/location-map.webp"
                alt="CIV West Location Map"
                fill
                sizes="480px"
                className="object-cover"
              />
            </div>

            {/* Text */}
            <div
              data-animate="fade-left"
              className="flex flex-col justify-center"
            >
              <p className="text-[22px] leading-[1.7] text-[#3D3D3D]">
                <span className="font-medium text-[#031286]">CIV West</span> is
                strategically positioned in the heart of{" "}
                <span className="font-semibold">
                  Thawra El Khadra, Sheikh Zayed City
                </span>{" "}
                one of West Cairo`&apos;`s most promising upscale residential
                districts.
              </p>

              <p className="mt-8 text-[22px] leading-[1.7] text-[#3D3D3D]">
                The area is characterized by organized urban planning, abundant
                green and water surfaces, and{" "}
                <span className="font-semibold">
                  seamless access to the major road axes connecting Sheikh Zayed
                  to Greater Cairo
                </span>
                , New Sheikh Zayed, and 6th of October City.
              </p>
            </div>
          </div>

          {/* Distance Cards */}
          <div
            className="mt-12 grid gap-6 md:grid-cols-2"
            data-animate="stagger"
          >
            {locations.map((item) => (
              <article
                key={item.place}
                className={`rounded-bl-[64px] rounded-br-[16px] rounded-tl-[16px] rounded-tr-[16px] border-[3px] p-8 transition-all duration-300 ${
                  item.variant === "yellow"
                    ? "border-[#D8C93E] bg-[#F0E459]"
                    : "border-[#031286] bg-white"
                }`}
              >
                <div className="flex items-start">
                  <span className="text-[72px] font-light leading-none text-[#031286]">
                    {item.time}
                  </span>

                  <span
                    className={`ml-2 mt-2 text-[14px] font-medium uppercase tracking-wide ${
                      item.variant === "yellow"
                        ? "text-[#031286]"
                        : "text-[#D8C93E]"
                    }`}
                  >
                    MINS
                  </span>
                </div>

                <p
                  className={`mt-4 text-[28px] font-medium leading-[1.2] ${
                    item.variant === "yellow"
                      ? "text-[#031286]"
                      : "text-[#3D3D3D]"
                  }`}
                >
                  {item.place}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
