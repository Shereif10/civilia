"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "@/i18n/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "../shared/LanguageSwitcher";

const navItems = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "projects", href: "/projects", hasDropdown: true },
  { key: "news", href: "/news" },
  { key: "careers", href: "/careers" },
] as const;

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const projectsDropdownRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();
  const t = useTranslations("nav");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }

      if (
        isProjectsOpen &&
        projectsDropdownRef.current &&
        !projectsDropdownRef.current.contains(event.target as Node)
      ) {
        setIsProjectsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, isProjectsOpen]);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isProjectsActive =
    pathname === "/projects" || pathname.startsWith("/projects/");

  return (
    <header
      ref={headerRef}
      className={`fixed inset-x-0 top-0 z-[999] transition-all duration-300 ${
        isScrolled ? "bg-white/20 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div
        className={`
          container-civilia
          flex
          items-center
          justify-between
          transition-all
          duration-300

          ${
            isScrolled
              ? "h-[70px] sm:h-[78px] md:h-[85px] 2xl:h-[95px]"
              : "h-[80px] sm:h-[92px] md:h-[121px] 2xl:h-[140px]"
          }
        `}
      >
        <Link
          href="/"
          aria-label="CIVILIA home"
          className={`
            relative
            transition-all
            duration-300

            ${
              isScrolled
                ? "h-[16px] w-[115px] sm:h-[18px] sm:w-[135px] 2xl:h-[22px] 2xl:w-[170px]"
                : "h-[18px] w-[130px] sm:h-[21px] sm:w-[150px] 2xl:h-[26px] 2xl:w-[190px]"
            }
          `}
        >
          <Image
            src="/assets/civilia-logo-small.svg"
            alt="CIVILIA"
            fill
            priority
            sizes="(max-width: 640px) 130px, 190px"
          />
        </Link>

        {/* Desktop nav */}
        <nav
          className="
            hidden
            items-center
            gap-1

            xl:flex
            xl:gap-1

            2xl:gap-2
          "
          aria-label="Main navigation"
        >
          {navItems.map((item) => {
            if (item.key === "projects") {
              return (
                <div
                  key="projects"
                  ref={projectsDropdownRef}
                  className="relative"
                  onMouseEnter={() => setIsProjectsOpen(true)}
                  onMouseLeave={() => setIsProjectsOpen(false)}
                >
                  <Link
                    href="/projects"
                    className={`inline-flex items-center gap-1 px-2 py-2 text-base leading-[1.5] transition hover:text-civilia-red xl:px-4 xl:text-lg ${
                      isProjectsActive
                        ? "border-b-2 border-civilia-red text-civilia-red"
                        : "text-[#191919]"
                    }`}
                  >
                    {t("projects")}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        isProjectsOpen ? "rotate-180" : ""
                      }`}
                    />
                  </Link>

                  {/* Dropdown */}
                  <div
                    className={`absolute left-0 top-full z-50 min-w-[160px] overflow-hidden rounded-xl border border-black/5 bg-white shadow-soft transition-all duration-200 ${
                      isProjectsOpen
                        ? "translate-y-0 opacity-100"
                        : "pointer-events-none -translate-y-2 opacity-0"
                    }`}
                  >
                    <Link
                      href="/projects/civ-west"
                      className={`block px-5 py-3 text-sm font-medium transition hover:bg-civilia-cream hover:text-civilia-red ${
                        pathname === "/projects/civ-west"
                          ? "text-civilia-red"
                          : "text-civilia-ink"
                      }`}
                      onClick={() => setIsProjectsOpen(false)}
                    >
                      {t("civWest")}
                    </Link>
                  </div>
                </div>
              );
            }

            const isActive = pathname === item.href;

            return (
              <Link
                key={item.key}
                href={item.href}
                className={`px-2 py-2 text-base leading-[1.5] transition hover:text-civilia-red xl:px-4 xl:text-lg ${
                  isActive
                    ? "border-b-2 border-civilia-red text-civilia-red"
                    : "text-[#191919]"
                }`}
              >
                {t(item.key)}
              </Link>
            );
          })}

          <Link
            href="/contact"
            className={`rounded px-4 py-2 text-sm font-medium leading-[1.2] transition xl:px-8 xl:text-base ${
              pathname === "/contact"
                ? "bg-civilia-ink text-white"
                : "bg-civilia-red text-[#f3f3f3] hover:bg-[#b91114]"
            }`}
          >
            {t("contact")}
          </Link>

          <LanguageSwitcher />
        </nav>

        <button
          type="button"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          className="
            inline-flex
            h-10
            w-10
            items-center
            justify-center
            rounded
            bg-civilia-red
            text-white

            sm:h-11
            sm:w-11

            xl:hidden
          "
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`container-civilia overflow-hidden rounded-b-2xl bg-civilia-paper shadow-soft transition-all duration-300 xl:hidden ${
          isOpen ? "max-h-[560px] border border-black/5" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col p-4" aria-label="Mobile navigation">
          {navItems.map((item) => {
            const isActive =
              item.key === "projects"
                ? isProjectsActive
                : pathname === item.href;

            return (
              <Link
                key={item.key}
                href={item.href}
                onClick={closeMenu}
                className={`border-b border-black/5 px-2 py-3 text-base sm:text-lg ${
                  isActive ? "font-medium text-civilia-red" : "text-civilia-ink"
                }`}
              >
                {t(item.key)}
              </Link>
            );
          })}

          {/* CIV.WEST sub-item */}
          <Link
            href="/projects/civ-west"
            onClick={closeMenu}
            className={`border-b border-black/5 py-3 pl-6 pr-2 text-sm sm:text-base ${
              pathname === "/projects/civ-west"
                ? "font-medium text-civilia-red"
                : "text-civilia-muted"
            }`}
          >
            ↳ {t("civWest")}
          </Link>

          <Link
            href="/contact"
            onClick={closeMenu}
            className={`border-b border-black/5 px-2 py-3 text-base last:border-b-0 sm:text-lg ${
              pathname === "/contact"
                ? "font-medium text-civilia-red"
                : "text-civilia-ink"
            }`}
          >
            {t("contact")}
          </Link>

          <div className="pt-2">
            <LanguageSwitcher />
          </div>
        </nav>
      </div>
    </header>
  );
}
