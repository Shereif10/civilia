"use client";

import Image from "next/image";
import { CiviliaButton } from "@/components/ui/CiviliaButton";

export function JoinOurTeamSection() {
  return (
    <section className="bg-civilia-paper py-16 md:py-24">
      <div className="container-civilia">
        {/* Header */}
        <div data-animate="fade-up">
          <h2 className="text-[52px] font-semibold leading-none text-civilia-red md:text-[72px]">
            Join Our Team
          </h2>

          <p className="mt-6 max-w-[1280px] text-[18px] leading-[1.6] text-[#6A6A6A] md:text-[22px]">
            At Civilia Developments, we are dedicated to transforming visions
            into reality, creating communities that inspire and elevate daily
            living. Our mission, &quot;From Land to Landmark,&quot; reflects our
            commitment to excellence and innovation in the real estate sector.
            As we continue to grow, we are seeking passionate and talented
            individuals to join our dynamic team.
          </p>
        </div>

        {/* Content */}
        <div className="mt-16 grid gap-12 lg:grid-cols-[560px_1fr] lg:gap-16">
          {/* Image */}
          <div
            data-animate="fade-right"
            className="relative h-[500px] overflow-hidden rounded-[32px] md:h-[760px]"
          >
            <Image
              src="/assets/careers-form-image.png"
              alt="Join Civilia Team"
              fill
              sizes="(max-width:1024px) 100vw, 560px"
              className="object-cover"
            />
          </div>

          {/* Form */}
          <div
            data-animate="fade-left"
            className="flex flex-col justify-center"
          >
            <h3 className="text-[44px] font-semibold leading-none text-civilia-ink md:text-[64px]">
              Job Application
            </h3>

            <p className="mt-5 max-w-[620px] text-[18px] leading-[1.6] text-[#6A6A6A] md:text-[22px]">
              Submit your details and a specialized real estate consultant will
              reach out to curate your experience.
            </p>

            <form className="mt-14">
              {/* Name */}
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border-b border-civilia-red bg-transparent pb-4 text-[18px] text-civilia-ink outline-none placeholder:text-[#9A9A9A]"
                />
              </div>

              {/* Email + Phone */}
              <div className="mt-10 grid gap-8 md:grid-cols-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border-b border-civilia-red bg-transparent pb-4 text-[18px] text-civilia-ink outline-none placeholder:text-[#9A9A9A]"
                />

                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full border-b border-civilia-red bg-transparent pb-4 text-[18px] text-civilia-ink outline-none placeholder:text-[#9A9A9A]"
                />
              </div>

              {/* Job Title + Department */}
              <div className="mt-10 grid gap-8 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Job Title"
                  className="w-full border-b border-civilia-red bg-transparent pb-4 text-[18px] text-civilia-ink outline-none placeholder:text-[#9A9A9A]"
                />

                <input
                  type="text"
                  placeholder="Department"
                  className="w-full border-b border-civilia-red bg-transparent pb-4 text-[18px] text-civilia-ink outline-none placeholder:text-[#9A9A9A]"
                />
              </div>

              {/* Select Department */}
              <div className="mt-10">
                <select className="w-full border-b border-civilia-red bg-transparent pb-4 text-[18px] text-[#9A9A9A] outline-none">
                  <option>Select Department</option>
                  <option>Engineering</option>
                  <option>Architecture</option>
                  <option>Sales</option>
                  <option>Marketing</option>
                  <option>Finance</option>
                  <option>HR</option>
                </select>
              </div>

              {/* Resume */}
              <div className="mt-10">
                <label className="block text-[18px] text-[#7A7A7A]">
                  Resume
                </label>

                <input
                  type="file"
                  className="mt-2 w-full border-b border-civilia-red pb-4 text-sm text-civilia-ink file:mr-4 file:border-0 file:bg-transparent file:text-sm file:font-medium"
                />
              </div>

              {/* Button */}
              <div className="mt-14 flex justify-end">
                <CiviliaButton
                  href="#"
                  variant="red"
                  className="w-full md:w-[320px]"
                >
                  Submit Application
                </CiviliaButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
