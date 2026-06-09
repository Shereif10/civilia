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
      <div className="mx-auto overflow-hidden rounded-[32px]">
        {/* Header */}
        <div className="rounded-bl-[160px] bg-[#F0E459] px-8 py-10 md:px-16 md:py-12">
          <h2
            data-animate="fade-up"
            className="text-center text-[48px] font-light leading-none text-[#031286] md:text-[72px]"
            style={{ fontFamily: "Badgline" }}
          >
            Prime Location
          </h2>
        </div>

        {/* Content */}
        <div className="px-8 py-10 md:px-16 md:py-16">
          <div className="mx-auto max-w-[1150px] grid items-center gap-16 lg:grid-cols-[340px_520px] lg:justify-between">
            {/* Map */}
            <div
              data-animate="fade-right"
              className="relative mx-auto h-[290px] w-full max-w-[340px] overflow-hidden rounded-[12px]"
            >
              <Image
                src="/assets/location-map.webp"
                alt="CIV West Location Map"
                fill
                sizes="340px"
                className="object-cover"
              />
            </div>

            {/* Text */}
            <div data-animate="fade-left">
              <p className="max-w-[520px] text-[22px] leading-[1.3] text-[#4A4A4A] md:text-[24px]">
                <span
                  className="text-[#031286]"
                  style={{ fontFamily: "Badgline" }}
                >
                  CIV West
                </span>{" "}
                sits at the center of Thawra El Khadra in Sheikh Zayed City—one
                of West Cairo&apos;s most sought-after upscale residential
                districts.
              </p>
            </div>
          </div>

          {/* Distance Cards */}
          <div
            className="mt-16 grid gap-8 md:grid-cols-2"
            data-animate="stagger"
          >
            {locations.map((item) => (
              <article
                key={item.place}
                className={`min-h-[124px] rounded-bl-[64px] rounded-br-[16px] rounded-tl-[16px] rounded-tr-[16px] border-[3px] px-10 py-6 transition-all duration-300 ${
                  item.variant === "yellow"
                    ? "border-[#D8C93E] bg-[#F0E459]"
                    : "border-[#031286] bg-white"
                }`}
              >
                <div className="flex items-start">
                  <span
                    className="text-[64px] leading-none text-[#031286] md:text-[72px]"
                    style={{ fontFamily: "Badgline" }}
                  >
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
                  className={`mt-2 text-[20px] font-medium leading-[1.2] md:text-[22px] ${
                    item.variant === "yellow"
                      ? "text-[#031286]"
                      : "text-[#4A4A4A]"
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
