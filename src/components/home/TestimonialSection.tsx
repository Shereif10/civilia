import Image from "next/image";

export function TestimonialSection() {
  return (
    <section className=" py-16">
      <div
        data-animate="fade-up"
        className="container-civilia relative overflow-hidden rounded-[48px] border-2 border-black/[0.05] px-10 py-16"
        style={{
          background:
            "linear-gradient(90deg, #FFFDFA 0%, #FFF3E1 50%, #FFFDFA 100%)",
        }}
      >
        <Image
          src="/assets/message-icon.svg"
          alt=""
          width={180}
          height={180}
          className="absolute right-16 top-1/2 hidden -translate-y-1/2 opacity-[0.08] md:block"
        />
        <blockquote className="relative z-10">
          <p className="max-w-[920px] text-[32px] leading-[1.2] text-[#4A4A4A] md:text-[38px]">
            Civilia stands out because of their construction background. You can
            clearly see the difference in how things are planned and executed.
          </p>

          <footer className="mt-10 flex flex-col items-end">
            <cite className="text-[26px] font-semibold not-italic text-civilia-red">
              Engineer Saad Al-Otaibi
            </cite>

            <span className="mt-1 text-[19px] text-[#2F2F2F]">
              Role / Investor
            </span>
          </footer>
        </blockquote>
      </div>

     
    </section>
  );
}
