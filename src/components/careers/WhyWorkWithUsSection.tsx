import Image from "next/image";

const reasons = [
  {
    title: "Growth",
    description:
      "Unparalleled pathways for rapid career advancement within Egypt's premier architectural firm.",
    icon: "/assets/growth-icon.svg",
  },
  {
    title: "Culture",
    description:
      "A radical collaborative environment built on the foundation of shared excellence and integrity.",
    icon: "/assets/culture-icon.svg",
  },
  {
    title: "Benefits",
    description:
      "Premium compensation packages, elite health coverage, and flexible working arrangements.",
    icon: "/assets/benefits-icon.svg",
  },
  {
    title: "Projects",
    description:
      "Shape the skyline of tomorrow by working on the most prestigious landmark developments.",
    icon: "/assets/projects-icon.svg",
  },
];

export function WhyWorkWithUsSection() {
  return (
    <section className="bg-civilia-paper py-16 md:py-24">
      <div className="container-civilia">
        {/* Header */}
        <div
          data-animate="fade-up"
          className="rounded-[16px] py-8 backdrop-blur-[100px] md:py-10"
          style={{
            background:
              "linear-gradient(90deg, #FFFDFA 0%, #FFF3E1 50%, #FFFDFA 100%)",
          }}
        >
          <h2 className="text-center text-[48px] font-semibold leading-none text-civilia-red md:text-[80px]">
            Why Work With Us
          </h2>
        </div>

        {/* Cards */}
        <div
          className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4"
          data-animate="stagger"
        >
          {reasons.map((item) => (
            <article
              key={item.title}
              className="h-[179px] rounded-[24px] border border-[#1919191A] px-6 py-10"
              style={{
                background:
                  "linear-gradient(90deg, #FFFDFA 0%, #FFF3E1 50%, #FFFDFA 100%)",
              }}
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-[20px] font-semibold leading-none text-civilia-ink">
                  {item.title}
                </h3>

                <Image
                  src={item.icon}
                  alt=""
                  width={24}
                  height={24}
                  className="shrink-0"
                />
              </div>

              <p className="mt-3 text-[14px] leading-[1.4] text-[#6A6A6A]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
