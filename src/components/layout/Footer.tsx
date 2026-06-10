"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "@/i18n/navigation";
import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const quickLinks = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "projects", href: "/projects" },
  { key: "careers", href: "/careers" },
  { key: "contact", href: "/contact" },
];

export function Footer() {
  const t = useTranslations("footer");
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
      className="bg-[#191919] py-12 text-[#f3f3f3] md:py-16"
    >
      <div className="container-civilia">
        <div
          className="
            grid
            gap-10

            md:gap-12

            xl:grid-cols-[380px_1fr_349px]
            xl:gap-16

            2xl:grid-cols-[420px_1fr_380px]
          "
        >
          {/* Column 1 */}
          <div
            ref={(el) => {
              columnsRef.current[0] = el;
            }}
            className="flex flex-col gap-10 md:gap-12"
          >
            <div className="flex flex-col gap-4">
              <div
                className="
                  footer-logo
                  relative
                  h-[40px]
                  w-[200px]

                  sm:h-[49px]
                  sm:w-[244px]
                "
              >
                <Image
                  src="/assets/footer-logo.svg"
                  alt="CIVILIA Developments"
                  fill
                  sizes="244px"
                />
              </div>

              <div>
                <h2 className="text-[22px] font-medium leading-[1.5] md:text-2xl">
                  {t("tagline")}
                </h2>

                <p className="mt-1 max-w-[380px] text-base leading-[1.5] text-civilia-red md:text-lg">
                  {t("description")}
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold leading-none md:text-2xl">
                {t("talkToTeam")}
              </h3>

              <p className="text-[28px] font-semibold leading-[1.5] text-civilia-red md:text-[32px]">
                16727
              </p>

              <p className="max-w-[216px] text-xs leading-[1.5] text-[#d9d9d9]">
                {t("phoneAvailability")}
              </p>
            </div>
          </div>

          {/* Column 2 */}
          <div
            ref={(el) => {
              columnsRef.current[1] = el;
            }}
            className="xl:px-8"
          >
            <h3 className="text-[28px] font-semibold leading-none md:text-[32px]">
              {t("quickLinks")}
            </h3>

            <ul
              className="
                mt-5
                flex
                flex-col
                gap-2
                text-[18px]
                leading-[1.5]

                md:mt-6
                md:text-[22px]
              "
            >
              {quickLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <li key={link.key}>
                    <Link
                      href={link.href}
                      className={
                        isActive
                          ? "text-civilia-red"
                          : "text-[#8e8e8e] transition hover:text-white"
                      }
                    >
                      {t(`links.${link.key}`)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 3 */}
          <div
            ref={(el) => {
              columnsRef.current[2] = el;
            }}
            className="flex flex-col gap-10"
          >
            <div className="xl:px-8">
              <h3 className="text-lg font-semibold leading-none">
                {t("contactInfo")}
              </h3>

              <div
                className="
                  mt-6
                  flex
                  flex-col
                  gap-3
                  text-sm
                  font-medium
                  text-[#8e8e8e]

                  md:text-base
                "
              >
                <p className="flex items-start gap-2.5 break-all sm:items-center sm:break-normal">
                  <Image
                    src="/assets/mail.svg"
                    alt=""
                    width={16}
                    height={16}
                    className="mt-1 shrink-0 sm:mt-0"
                  />
                  Info@civiliadevelopments.com
                </p>

                <p className="flex items-start gap-2.5">
                  <Image
                    src="/assets/pin.svg"
                    alt=""
                    width={16}
                    height={19}
                    className="mt-1 shrink-0"
                  />
                  <span>Agora Mall, Sheikh Zayed City.</span>
                </p>
              </div>
            </div>

            <div className="xl:px-8">
              <h3 className="text-lg font-semibold leading-none">
                {t("stayUpdated")}
              </h3>

              <p
                className="
                  mt-3
                  max-w-[285px]
                  text-xs
                  leading-[1.5]
                  text-[#8e8e8e]

                  md:text-[10px]
                  md:leading-[1.25]
                "
              >
                {t("stayUpdatedDesc")}
              </p>
            </div>

            <div className="xl:px-8">
              <label
                htmlFor="footer-email"
                className="text-lg font-semibold leading-none text-[#8e8e8e]"
              >
                {t("emailLabel")}
              </label>

              <div className="mt-1 flex w-full max-w-[285px] border-b border-[#f3f3f3] py-2">
                <input
                  id="footer-email"
                  type="email"
                  className="w-full bg-transparent text-sm text-white outline-none placeholder:text-civilia-red"
                  placeholder={t("emailPlaceholder")}
                  aria-label={t("emailLabel")}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-white/35 pt-8 md:mt-14 md:pt-10">
          <div
            className="
              flex
              flex-col
              items-center
              gap-6
              text-center

              xl:flex-row
              xl:items-center
              xl:justify-between
              xl:text-left
            "
          >
            <p className="text-xs font-semibold leading-[1.5]">
              {t("copyright")}
            </p>

            <div className="flex items-center gap-4">
              <Link
                href="https://web.facebook.com/Civiliadevelopments/?mibextid=wwXIfr&rdid=TmGMZuKbsg3L1PN0&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15UPe8wLxH%2F%3Fmibextid%3DwwXIfr"
                target="_blank"
                aria-label="Facebook"
                className="text-white transition-all duration-300 hover:-translate-y-1 hover:text-civilia-red"
              >
                <FontAwesomeIcon icon={faFacebookF} className="h-6 w-6" />
              </Link>

              <Link
                href="https://www.instagram.com/civiliadevelopments/"
                target="_blank"
                aria-label="Instagram"
                className="text-white transition-all duration-300 hover:-translate-y-1 hover:text-civilia-red"
              >
                <FontAwesomeIcon icon={faInstagram} className="h-6 w-6" />
              </Link>

              <Link
                href="https://www.linkedin.com/company/civiliadevelopments/"
                target="_blank"
                aria-label="LinkedIn"
                className="text-white transition-all duration-300 hover:-translate-y-1 hover:text-civilia-red"
              >
                <FontAwesomeIcon icon={faLinkedinIn} className="h-6 w-6" />
              </Link>

              <Link
                href="https://www.youtube.com/@civiliadevelopments"
                target="_blank"
                aria-label="YouTube"
                className="text-white transition-all duration-300 hover:-translate-y-1 hover:text-civilia-red"
              >
                <FontAwesomeIcon icon={faYoutube} className="h-6 w-6" />
              </Link>

              <Link
                href="https://www.tiktok.com/@civilia.developments?_t=8sgdnG77lp7&_r=1"
                target="_blank"
                aria-label="TikTok"
                className="text-white transition-all duration-300 hover:-translate-y-1 hover:text-civilia-red"
              >
                <FontAwesomeIcon icon={faTiktok} className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
