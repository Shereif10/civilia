"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useTransition } from "react";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const [isPending, startTransition] = useTransition();

  const switchLocale = (newLocale: "en" | "ar") => {
    if (newLocale === locale) return;

    startTransition(() => {
      router.replace(pathname, {
        locale: newLocale,
      });
    });
  };

  return (
    <div
      className="
        flex
        items-center
        overflow-hidden
        rounded-full
        border
        border-black/10
        bg-white/80
        backdrop-blur-sm
      "
    >
      <button
        onClick={() => switchLocale("en")}
        disabled={isPending}
        className={`
          px-4
          py-2
          text-sm
          font-medium
          transition-all
          duration-300

          ${
            locale === "en"
              ? "bg-civilia-red text-white"
              : "text-civilia-ink hover:bg-black/5"
          }
        `}
      >
        EN
      </button>

      <button
        onClick={() => switchLocale("ar")}
        disabled={isPending}
        className={`
          px-4
          py-2
          text-sm
          font-medium
          transition-all
          duration-300

          ${
            locale === "ar"
              ? "bg-civilia-red text-white"
              : "text-civilia-ink hover:bg-black/5"
          }
        `}
      >
        العربية
      </button>
    </div>
  );
}
