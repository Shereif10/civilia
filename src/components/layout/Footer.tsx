"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Civilia", href: "/about" },
  { label: "Our Projects", href: "/projects" },
  // { label: "Latest News", href: "/news" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
];

export function Footer() {
  const pathname = usePathname();

  const footerRef = useRef<HTMLElement>(null);
  const columnsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".footer-logo", {
        scale: 0.9,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
        },
      });

      gsap.from(columnsRef.current, {
        y: 60,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-[#191919] px-0 py-12 text-[#f3f3f3] md:py-16"
    >
      <div className="container-civilia">
        <div className="grid gap-12 lg:grid-cols-[380px_1fr_349px] lg:gap-16">
          <div
            ref={(el) => {
              columnsRef.current[0] = el;
            }}
            className="flex flex-col gap-12"
          >
            <div className="flex flex-col gap-4">
              <div className="footer-logo relative h-[49px] w-[244px]">
                <Image
                  src="/assets/footer-logo.svg"
                  alt="CIVILIA Developments"
                  fill
                  sizes="244px"
                />
              </div>

              <div>
                <h2 className="text-2xl font-medium leading-[1.5]">
                  Built on Experience. Designed for Living.
                </h2>

                <p className="mt-1 max-w-[380px] text-lg leading-[1.5] text-civilia-red">
                  With over 20 years of real construction expertise, Civilia
                  delivers developments built on precision, reliability, and
                  long-term value.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold leading-none">
                Talk to Our Team
              </h3>

              <p className="text-[32px] font-semibold leading-[1.5] text-civilia-red">
                16727
              </p>

              <p className="max-w-[216px] text-xs leading-[1.5] text-[#d9d9d9]">
                Available daily to support you with all inquiries and bookings.
              </p>
            </div>
          </div>

          <div
            ref={(el) => {
              columnsRef.current[1] = el;
            }}
            className="px-0 lg:px-8"
          >
            <h3 className="text-[32px] font-semibold leading-none">
              Quick Links
            </h3>

            <ul className="mt-6 flex flex-col gap-2 text-[22px] leading-[1.5]">
              {quickLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className={
                        isActive
                          ? "text-civilia-red"
                          : "text-[#8e8e8e] transition hover:text-white"
                      }
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div
            ref={(el) => {
              columnsRef.current[2] = el;
            }}
            className="flex flex-col gap-12 md:gap-16"
          >
            <div className="px-0 lg:px-8">
              <h3 className="text-lg font-semibold leading-none">
                Contact Info
              </h3>

              <div className="mt-6 flex flex-col gap-3 text-base font-medium text-[#8e8e8e]">
                <p className="flex items-center gap-2.5 whitespace-nowrap">
                  <Image src="/assets/mail.svg" alt="" width={16} height={16} />
                  Info@civiliadevelopments.com
                </p>

                <p className="flex items-center gap-2.5 whitespace-nowrap">
                  <Image src="/assets/pin.svg" alt="" width={16} height={19} />
                  Agora Mall, Sheikh Zayed City.
                </p>
              </div>
            </div>

            <div className="px-0 lg:px-8">
              <h3 className="text-lg font-semibold leading-none">
                Stay Updated with CIVILIA
              </h3>

              <p className="mt-3 max-w-[285px] text-left text-[10px] leading-[1.25] text-[#8e8e8e]">
                Get the latest project updates, construction progress, and real
                estate insights directly from our team.
              </p>
            </div>

            <form className="px-0 lg:px-8">
              <label
                htmlFor="footer-email"
                className="text-lg font-semibold leading-none text-[#8e8e8e]"
              >
                Enter your email
              </label>

              <div className="mt-1 flex max-w-[285px] border-b border-[#f3f3f3] py-2">
                <input
                  id="footer-email"
                  type="email"
                  className="w-full bg-transparent text-sm text-white outline-none placeholder:text-civilia-red"
                  placeholder="Subscribe"
                  aria-label="Enter your email"
                />
              </div>
            </form>
          </div>
        </div>

        <div className="mt-14 border-t border-white/35 pt-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <p className="text-xs font-semibold leading-[1.5]">
              All Copyrights Reserved © 2026 CIVILIA Developments
            </p>

            <div className="relative h-[22px] w-[212px]">
              <Image
                src="/assets/socials.svg"
                alt="Social media links"
                fill
                sizes="212px"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
