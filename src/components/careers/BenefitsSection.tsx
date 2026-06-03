import Image from "next/image";

const benefits = [
  {
    title: "Health &\nWellness",
    icon: "/assets/health-icon.svg",
  },
  {
    title: "Flexibility",
    icon: "/assets/flexibility-icon.svg",
  },
  {
    title: "Elite\nTraining",
    icon: "/assets/training-icon.svg",
  },
  {
    title: "Performance\nBonuses",
    icon: "/assets/bonus-icon.svg",
  },
];

export function BenefitsSection() {
  return (
    <section className="bg-civilia-paper py-16 md:py-24">
      <div className="container-civilia">
        <h2
          data-animate="fade-up"
          className="text-center text-[48px] font-semibold leading-none text-civilia-red md:text-[72px]"
        >
          Unrivaled Benefits
        </h2>

        <div
          className="mt-16 grid grid-cols-2 gap-y-10 md:mt-20 md:grid-cols-4"
          data-animate="stagger"
        >
          {benefits.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center"
            >
              <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#FFF8F1] md:h-[72px] md:w-[72px]">
                <Image src={item.icon} alt="" width={28} height={28} />
              </div>

              <h3 className="mt-5 whitespace-pre-line text-[20px] font-semibold leading-[1.15] text-[#3D3D3D] md:text-[24px]">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
