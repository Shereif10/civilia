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
        w-full
        xl:w-auto
        items-center
        overflow-hidden
        rounded-xl
        xl:rounded-full
        border
        border-black/10
        bg-white/80
        backdrop-blur-sm
        shadow-sm
      "
    >
      <button
        type="button"
        onClick={() => switchLocale("en")}
        disabled={isPending}
        className={`
          flex-1
          xl:flex-none
          min-w-[52px]
          px-4
          py-3
          xl:px-3
          xl:py-2
          text-sm
          xl:text-xs
          font-medium
          transition-all
          duration-300

          ${
            locale === "en"
              ? "bg-civilia-red text-white"
              : "text-civilia-ink hover:bg-black/5"
          }

          ${isPending ? "opacity-70" : ""}
        `}
      >
        EN
      </button>

      <button
        type="button"
        onClick={() => switchLocale("ar")}
        disabled={isPending}
        className={`
          flex-1
          xl:flex-none
          min-w-[52px]
          px-4
          py-3
          xl:px-3
          xl:py-2
          text-sm
          xl:text-xs
          font-bold
          transition-all
          duration-300

          ${
            locale === "ar"
              ? "bg-civilia-red text-white"
              : "text-civilia-ink hover:bg-black/5"
          }

          ${isPending ? "opacity-70" : ""}
        `}
      >
        ع
      </button>
    </div>
  );
}
