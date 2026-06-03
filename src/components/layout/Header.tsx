"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/lib/data";

type HeaderProps = {
  active?: "home" | "contact" | "projects" | "news" | "careers";
};

export function Header({ active }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="container-civilia flex h-[92px] items-center justify-between md:h-[121px]">
        <Link
          href="/"
          className="relative h-[21px] w-[150px]"
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

        <nav
          className="hidden items-center gap-4 lg:flex"
          aria-label="Main navigation"
        >
          {navItems.map((item) => {
            // جعل الرابط نشطاً إذا كان المسار الحالي يطابق href
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`px-4 py-2 text-lg leading-[1.5] transition hover:text-civilia-red ${
                  isActive
                    ? "border-b-2 border-civilia-red text-civilia-red"
                    : "text-[#191919]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className={`rounded px-8 py-2 text-base font-medium leading-[1.2] transition ${
              pathname === "/contact"
                ? "bg-civilia-ink text-white"
                : "bg-civilia-red text-[#f3f3f3] hover:bg-[#b91114]"
            }`}
          >
            Contact
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded bg-civilia-red text-white lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={`container-civilia overflow-hidden rounded-b-2xl bg-civilia-paper shadow-soft transition-all duration-300 lg:hidden ${
          isOpen ? "max-h-96 border border-black/5" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col p-4" aria-label="Mobile navigation">
          {[...navItems, { label: "Contact", href: "/contact" }].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="border-b border-black/5 px-2 py-3 text-lg text-civilia-ink last:border-b-0"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
