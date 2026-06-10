"use client";

import { useLocale, useTranslations } from "next-intl";

type PaymentPlan = {
  value: string;
  suffix?: string;
  title: string;
  variant: "light" | "yellow";
};

export function PaymentPlanSection() {
  const t = useTranslations("paymentPlan");
  const locale = useLocale();
  const isArabic = locale === "ar";

  const paymentPlans = t.raw("plans") as PaymentPlan[];

  return (
    <section className="bg-civilia-paper py-16 md:py-24">
      <div className="mx-auto overflow-hidden rounded-[32px]">
        {/* Header */}
        <div className="rounded-bl-[285px] bg-[#F0E459] px-8 py-10 md:px-16 md:py-12">
          <h2
            data-animate="fade-up"
            className="text-center text-[48px] font-light leading-none text-[#031286] md:text-[72px]"
            style={{ fontFamily: "Badgline" }}
          >
            {t("title")}
          </h2>
        </div>

        {/* Cards */}
        <div className="px-8 py-10 md:px-16 md:py-16" data-animate="stagger">
          <div className="grid gap-6 md:grid-cols-2">
            {paymentPlans.map((item, index) => (
              <article
                key={index}
                className={`rounded-bl-[64px] rounded-br-[16px] rounded-tl-[16px] rounded-tr-[16px] border-[3px] p-8 transition-all duration-300 ${
                  item.variant === "yellow"
                    ? "border-[#D8C93E] bg-[#F0E459]"
                    : "border-[#031286] bg-white"
                }`}
              >
                <div className="flex items-start" dir="ltr">
                  <span
                    className="text-[72px] font-light leading-none text-[#031286]"
                    style={{ fontFamily: "Badgline" }}
                  >
                    {item.value}
                  </span>

                  {item.suffix && (
                    <span
                      className={`ml-2 mt-2 text-[22px] font-medium ${
                        item.variant === "yellow"
                          ? "text-[#031286]"
                          : "text-[#D8C93E]"
                      }`}
                      style={{ fontFamily: "Badgline" }}
                    >
                      {item.suffix}
                    </span>
                  )}
                </div>

                <p
                  className={`mt-4 text-[28px] font-medium leading-[1.2] ${
                    item.variant === "yellow"
                      ? "text-[#031286]"
                      : "text-[#3D3D3D]"
                  } ${isArabic ? "text-right" : ""}`}
                >
                  {item.title}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
