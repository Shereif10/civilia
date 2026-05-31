import Image from "next/image";
import { proofPoints } from "@/lib/data";

export function ProofListSection() {
  return (
    <section className="bg-civilia-paper py-10 md:py-16">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-[10px]">
        {proofPoints.map((point) => (
          <div
            key={point}
            data-animate="fade-up"
            className="flex min-h-[112px] items-center gap-4 rounded-bl-[96px] rounded-br-[16px] rounded-tl-[16px] rounded-tr-[16px] px-6 py-6 backdrop-blur-[100px] md:px-16 md:py-8"
            style={{
              background:
                "linear-gradient(90deg, rgba(255,255,255,0.95) 0%, rgba(255,243,225,0.9) 50%, rgba(255,255,255,0.95) 100%)",
            }}
          >
            <Image
              src="/assets/list-icon.svg"
              alt=""
              width={48}
              height={48}
              className="shrink-0"
            />

            <p className="text-lg font-medium leading-[1.2] text-[#3d3d3d] md:text-[22px]">
              {point}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
