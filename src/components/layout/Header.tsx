"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "@/i18n/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "../shared/LanguageSwitcher";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations("nav");

  const navItems = [
    { key: "home", href: "/" },
    { key: "about", href: "/about" },
    { key: "projects", href: "/projects" },
    { key: "careers", href: "/careers" },
  ];

  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div
        className="
          container-civilia
          flex
          h-[80px]
          items-center
          justify-between

          sm:h-[92px]

          md:h-[121px]

          2xl:h-[140px]
        "
      >
        <Link
          href="/"
          className="
            relative
            h-[18px]
            w-[130px]

            sm:h-[21px]
            sm:w-[150px]

            2xl:h-[26px]
            2xl:w-[190px]
          "
          aria-label="CIVILIA home"
        >
          <Image
            src="/assets/civilia-logo-small.svg"
            alt="CIVILIA"
            fill
            priority
            sizes="150px"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="
            hidden
            items-center
            gap-2

            xl:flex
            xl:gap-4

            2xl:gap-6
          "
          aria-label="Main navigation"
        >
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.key}
                href={item.href}
                className={`px-3 py-2 text-base leading-[1.5] transition hover:text-civilia-red xl:px-4 xl:text-lg ${
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
            className={`rounded px-6 py-2 text-sm font-medium leading-[1.2] transition xl:px-8 xl:text-base ${
              pathname === "/contact"
                ? "bg-civilia-ink text-white"
                : "bg-civilia-red text-[#f3f3f3] hover:bg-[#b91114]"
            }`}
          >
            {t("contact")}
          </Link>

          <LanguageSwitcher />
        </nav>

        {/* Mobile & Tablet Menu Button */}
        <button
          type="button"
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
          onClick={() => setIsOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile & Tablet Menu */}
      <div
        className={`container-civilia overflow-hidden rounded-b-2xl bg-civilia-paper shadow-soft transition-all duration-300 xl:hidden ${
          isOpen ? "max-h-[500px] border border-black/5" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col p-4" aria-label="Mobile navigation">
          {[...navItems, { key: "contact", href: "/contact" }].map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`border-b border-black/5 px-2 py-3 text-base last:border-b-0 sm:text-lg ${
                  isActive ? "font-medium text-civilia-red" : "text-civilia-ink"
                }`}
              >
                {t(item.key)}
              </Link>
            );
          })}

          <div className="pt-2">
            <LanguageSwitcher />
          </div>
        </nav>
      </div>
    </header>
  );
}
