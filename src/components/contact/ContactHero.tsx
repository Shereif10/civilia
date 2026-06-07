import Image from "next/image";
import { Header } from "@/components/layout/Header";

export function ContactHero() {
  return (
    <section className="bg-civilia-paper pb-16 md:pb-24">
      <Header active="contact" />

      <div className="container-civilia pt-[120px] md:pt-[170px] lg:pt-[190px]">
        {/* Banner */}
        <div
          data-animate="fade-up"
          className="
            flex
            min-h-[120px]
            items-center
            justify-center
            rounded-tl-[16px]
            rounded-tr-[16px]
            rounded-br-[16px]
            rounded-bl-[100px]
            bg-civilia-red
            px-6
            py-6

            sm:min-h-[140px]
            sm:rounded-bl-[120px]

            md:min-h-[188px]
            md:px-8
            md:py-8
            md:rounded-bl-[160px]
          "
        >
          <h1
            className="
              text-center
              text-[42px]
              font-semibold
              leading-none
              text-white

              sm:text-[56px]

              md:text-[80px]

              lg:text-[96px]
            "
          >
            Contact Us
          </h1>
        </div>

        {/* Description */}
        <div className="relative mt-8 md:mt-12 lg:mt-14">
          <p
            className="
              max-w-[1040px]
              text-[18px]
              leading-[1.5]
              text-[#8A8A8A]

              sm:text-[20px]

              md:text-[22px]

              lg:text-[24px]
              lg:leading-[1.3]
            "
          >
            We&apos;re here to help you find your perfect property. Let our
            experts guide your next investment with the architectural precision
            Civilia is known for.
          </p>

          <Image
            src="/assets/story-accent.svg"
            alt=""
            width={32}
            height={16}
            className="
              absolute
              -bottom-6
              right-0
              hidden

              md:block
            "
          />
        </div>
      </div>
    </section>
  );
}
