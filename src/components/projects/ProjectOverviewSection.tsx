import Image from "next/image";

export function ProjectOverviewSection() {
  return (
    <section className="bg-civilia-paper py-16 md:py-24">
      <div className="container-civilia">
        <div
          data-animate="fade-up"
          className="grid items-start gap-12 lg:grid-cols-[1fr_420px]"
        >
          {/* Content */}
          <div>
            <h2
              className="
                text-[#031286]
                font-light
                leading-none

                text-[52px]

                md:text-[72px]

                lg:text-[88px]
              "
              style={{ fontFamily: "Badgline" }}
            >
              About CIV WEST
            </h2>

            <div className="mt-8 max-w-[650px]">
              <p
                className="
                  text-[#3A3A3A]
                  leading-[1.5]

                  text-[22px]

                  md:text-[26px]
                "
              >
                <span className="font-semibold text-[#031286]">
                  At CIV WEST
                </span>{" "}
                we didn&apos;t just build homes — we designed a way of life.
                Across 38,000 m² in the heart of Sheikh Zayed, we made room for
                greenery and calm, and cared for every detail — working with
                leading consultants and building to last.
              </p>

              <p
                className="
                  mt-4
                  text-[#3A3A3A]
                  leading-[1.5]

                  text-[22px]

                  md:text-[26px]
                "
              >
                Here, privacy isn&apos;t a luxury; it&apos;s the feeling that
                this place is truly yours, and yours alone.
              </p>
            </div>
          </div>

          {/* Image */}
          <div
            data-animate="reveal"
            className="
              relative
              h-[260px]
              overflow-hidden
              rounded-[24px]

              md:h-[350px]

              lg:h-[420px]
            "
          >
            <Image
              src="/assets/project-overview.png"
              alt="CIV WEST"
              fill
              sizes="(max-width:1024px) 100vw, 420px"
              className="object-fill"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
