import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "ar"],
  defaultLocale: "en",
  pathnames: {
    "/": "/",
    "/about": {
      en: "/about",
      ar: "/من-نحن",
    },
    "/projects": {
      en: "/projects",
      ar: "/المشاريع",
    },
    "/contact": {
      en: "/contact",
      ar: "/تواصل-معنا",
    },
    "/careers": {
      en: "/careers",
      ar: "/الوظائف",
    },
  },
});
