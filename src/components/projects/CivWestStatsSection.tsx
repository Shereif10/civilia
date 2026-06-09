import { projectStats } from "@/lib/data";

export function CivWestStatsSection() {
  return (
    <section className="bg-civilia-paper py-16 md:py-24">
      <div className="container-civilia">
        <h2
          data-animate="fade-up"
          className="text-center text-[56px] font-light leading-none text-[#1D2D8C] md:text-[88px]"
          style={{ fontFamily: "Badgline" }}
        >
          CIV WEST
        </h2>

        <div className="mt-10 grid gap-8 md:grid-cols-3" data-animate="stagger">
          {projectStats.map((item) => (
            <article
              key={item.label}
              className="flex h-[138px] flex-col justify-center rounded-[16px] border-[3px] border-black/10 bg-[#F0E459] p-8"
              // style={{ fontFamily: "Badgline" }}
            >
              <div className="flex items-start gap-1">
                <span
                  className="text-[48px] font-light leading-none text-[#1D2D8C]"
                  style={{ fontFamily: "Badgline" }}
                >
                  {item.value}
                </span>

                {/* <span className="mt-1 text-[24px] leading-none text-[#1D2D8C]">
                  +
                </span> */}
              </div>

              <p className="mt-2 text-[18px] leading-none text-[#2F2F2F]" >
                {item.label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
