import { contactMetrics } from "@/lib/data";

export function ContactIntro() {
  return (
    <section
      className="bg-civilia-paper py-12 md:py-24 my-12"
      style={{
        background:
          "linear-gradient(90deg, #FFFDFA 0%, #FFF3E1 50%, #FFFDFA 100%)",
      }}
    >
      <div className="container-civilia text-center">
        <div data-animate="fade-up" className="mx-auto max-w-[1100px]">
          <h2 className="text-[42px] font-semibold leading-[1.2] text-civilia-red md:text-[58px]">
            We&apos;re here for you
          </h2>
          <p className="mt-4 text-[24px] leading-[1.25] text-[#3d3d3d] md:text-[33px]">
            Our commitment to excellence extends beyond our builds. Experience a
            standard of service that mirrors our architectural integrity.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3" data-animate="stagger">
          {contactMetrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <p className="text-5xl font-semibold leading-none text-civilia-red">
                {metric.value}
              </p>
              <p className="mt-6 text-[24px] font-medium uppercase leading-[1.2] text-[#3d3d3d]">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
