import Image from "next/image";

const visionMissionItems = [
  {
    title: "Our Vision",
    description:
      "To be the leading real estate company, transforming communities through innovative and sustainable living solutions, while fostering trust and excellence in every interaction.",
    icon: "/assets/vision-icon.svg",
  },
  {
    title: "Our Mission",
    description:
      "Our mission is to provide exceptional real estate services by prioritizing client satisfaction, leveraging cutting-edge technology, and promoting responsible development.",
    icon: "/assets/mission-icon.svg",
  },
];

export function VisionMissionSection() {
  return (
    <section className="bg-civilia-paper pb-20 md:pb-32">
      <div className="container-civilia flex flex-col gap-8">
        {visionMissionItems.map((item) => (
          <article
            key={item.title}
            data-animate="fade-up"
            className="relative flex min-h-[291px] flex-col gap-6 overflow-hidden rounded-bl-[200px] rounded-br-[16px] rounded-tl-[16px] rounded-tr-[16px] border-2 px-8 py-10 md:px-16 md:py-16"
            style={{
              background:
                "linear-gradient(90deg, #FFFDFA 0%, #FFF3E1 50%, #FFFDFA 100%)",
              border: "2px solid rgba(255, 255, 255, 0.25)",
            }}
          >
            <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
              <div className="max-w-[760px]">
                <h2 className="text-[34px] font-semibold leading-none tracking-[-1px] text-civilia-red md:text-[48px]">
                  {item.title}
                </h2>

                <p className="mt-6 text-[20px] leading-[1.35] tracking-[-0.5px] text-[#2a2a2a] md:text-[22px]">
                  “{item.description}”
                </p>
              </div>

              <div className="shrink-0 md:pt-1">
                <Image
                  src={item.icon}
                  alt=""
                  width={42}
                  height={42}
                  className="object-contain"
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
