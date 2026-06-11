"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";

import { Phone, Mail, MapPin } from "lucide-react";

type SubmitStatus = "idle" | "loading" | "success" | "error";

export function ContactDetailsSection() {
  const t = useTranslations("contactDetails");
  const locale = useLocale();
  const isArabic = locale === "ar";

  const cards = [
    {
      icon: Phone,
      title: t("cards.0.title"),
      note: t("cards.0.note"),
      value: t("cards.0.value"),
    },
    {
      icon: Mail,
      title: t("cards.1.title"),
      note: t("cards.1.note"),
      value: t("cards.1.value"),
    },
    {
      icon: MapPin,
      title: t("cards.2.title"),
      note: t("cards.2.note"),
      value: t("cards.2.value"),
    },
  ];

  const contactSchema = z.object({
    name: z.string().min(2, t("validation.name")),

    email: z.string().email(t("validation.email")),

    phone: z
      .string()
      .min(7, t("validation.phoneMin"))
      .regex(/^\+?[0-9\s\-().]{7,20}$/, t("validation.phoneRegex")),

    message: z.string().min(10, t("validation.message")),
  });

  type ContactFormData = z.infer<typeof contactSchema>;

  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");

  const [showPopup, setShowPopup] = useState(false);

  const popupTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const triggerPopup = (status: "success" | "error") => {
    if (popupTimerRef.current) {
      clearTimeout(popupTimerRef.current);
    }

    setSubmitStatus(status);
    setShowPopup(true);

    popupTimerRef.current = setTimeout(() => {
      setShowPopup(false);
      setSubmitStatus("idle");
    }, 4000);
  };

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "a1190a07-0021-4148-900a-93a3224fae5b",

          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message,

          subject: `New Website Message - ${data.name}`,
        }),
      });

      const result = await response.json();

      if (!result.success) {
        throw new Error("Failed");
      }

      reset();
      triggerPopup("success");
    } catch {
      triggerPopup("error");
    }
  };

  const isLoading = submitStatus === "loading";

  const inputBase = `
    h-[58px]
    border-b
    bg-transparent
    text-[18px]
    outline-none
    transition
    placeholder:text-[#8E8E8E]
    focus:border-civilia-red
    disabled:opacity-50
    disabled:cursor-not-allowed
    md:text-[21px]
  `;

  const borderClass = (hasError: boolean) =>
    hasError ? "border-red-500" : "border-[#CD1417]";

  useEffect(() => {
    return () => {
      if (popupTimerRef.current) {
        clearTimeout(popupTimerRef.current);
      }
    };
  }, []);

  return (
    <section className="bg-civilia-paper pb-20 md:pb-32">
      <div
        className="
          container-civilia
          grid
          gap-12
          lg:grid-cols-[minmax(0,700px)_388px]
          lg:justify-between
          lg:gap-16
        "
      >
        {/* Form Section */}
        <div data-animate="fade-up">
          <div>
            <h2
              className="
                text-[34px]
                font-semibold
                leading-[1.2]
                text-civilia-red
                sm:text-[42px]
                md:text-[58px]
              "
            >
              {t("title")}
            </h2>

            <p
              className="
                mt-4
                max-w-[700px]
                text-[18px]
                leading-[1.6]
                text-[#3d3d3d]
                md:text-2xl
                md:leading-[1.5]
              "
            >
              {t("description")}
            </p>
          </div>

          <form
            onSubmit={(e) => {
              void handleSubmit(onSubmit)(e);
            }}
            noValidate
            className="mt-10 flex flex-col gap-6 md:mt-12 md:gap-8"
          >
            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <input
                aria-label={t("fields.name")}
                placeholder={t("fields.name")}
                disabled={isLoading}
                {...register("name")}
                className={`${inputBase} ${borderClass(!!errors.name)} ${
                  isArabic ? "text-right" : ""
                }`}
              />

              {errors.name && (
                <span className="text-sm text-red-500">
                  {errors.name.message}
                </span>
              )}
            </div>

            {/* Email + Phone */}
            <div className="grid gap-6 md:grid-cols-2 md:gap-10">
              <div className="flex flex-col gap-1.5">
                <input
                  aria-label={t("fields.email")}
                  type="email"
                  placeholder={t("fields.email")}
                  disabled={isLoading}
                  {...register("email")}
                  className={`${inputBase} ${borderClass(!!errors.email)} ${
                    isArabic ? "text-right" : ""
                  }`}
                />

                {errors.email && (
                  <span className="text-sm text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-1.5">
                <input
                  aria-label={t("fields.phone")}
                  type="tel"
                  placeholder={t("fields.phone")}
                  disabled={isLoading}
                  {...register("phone")}
                  className={`${inputBase} ${borderClass(!!errors.phone)} ${
                    isArabic ? "text-right" : ""
                  }`}
                />

                {errors.phone && (
                  <span className="text-sm text-red-500">
                    {errors.phone.message}
                  </span>
                )}
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5">
              <textarea
                aria-label={t("fields.message")}
                placeholder={t("fields.message")}
                disabled={isLoading}
                {...register("message")}
                className={`
                  min-h-[130px]
                  resize-none
                  border-b
                  bg-transparent
                  pt-4
                  text-[18px]
                  outline-none
                  transition
                  placeholder:text-[#8E8E8E]
                  focus:border-civilia-red
                  disabled:opacity-50
                  disabled:cursor-not-allowed
                  md:text-2xl
                  ${borderClass(!!errors.message)}
                  ${isArabic ? "text-right" : ""}
                `}
              />

              {errors.message && (
                <span className="text-sm text-red-500">
                  {errors.message.message}
                </span>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex justify-center md:justify-end">
              <button
                type="submit"
                disabled={isLoading}
                className="
                  group
                  inline-flex
                  h-14
                  w-full
                  items-center
                  justify-center
                  gap-4
                  rounded-civilia
                  bg-civilia-red
                  px-8
                  text-lg
                  font-medium
                  text-[#f3f3f3]
                  transition
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#b91114]
                  disabled:cursor-not-allowed
                  disabled:opacity-70
                  sm:w-[319px]
                  sm:gap-6
                  sm:text-[22px]
                  md:h-16
                "
              >
                {isLoading ? (
                  <>
                    {t("buttons.sending")}

                    <Loader2
                      className="h-5 w-5 animate-spin"
                      aria-hidden="true"
                    />
                  </>
                ) : (
                  <>
                    {t("buttons.send")}

                    <Send
                      className={`h-5 w-5 transition ${
                        isArabic
                          ? "group-hover:-translate-x-1"
                          : "group-hover:translate-x-1"
                      }`}
                      aria-hidden="true"
                    />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Cards Section */}
        <div
          className="
            flex
            flex-col
            gap-6
            md:gap-8
            lg:self-center
          "
          data-animate="stagger"
        >
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                className="
                  civilia-gradient-card
                  flex
                  min-h-[120px]
                  items-center
                  justify-center
                  rounded-2xl
                  p-5
                  md:min-h-[128px]
                  md:p-6
                "
                style={{
                  background:
                    "linear-gradient(90deg, #FFFDFA 0%, #FFF3E1 50%, #FFFDFA 100%)",
                }}
              >
                <div className="w-full max-w-[233px]">
                  <div
                    className={`flex items-center gap-4 ${
                      isArabic ? "flex-row-reverse text-right" : ""
                    }`}
                  >
                    <Icon
                      className="h-5 w-5 text-civilia-red md:h-6 md:w-6"
                      aria-hidden="true"
                    />

                    <h3
                      className="
                        text-[22px]
                        font-medium
                        leading-none
                        text-[#3d3d3d]
                        md:text-[29px]
                      "
                    >
                      {card.title}
                    </h3>
                  </div>

                  <p
                    className={`mt-1 text-sm leading-none text-[#8e8e8e] ${
                      isArabic ? "text-right" : ""
                    }`}
                  >
                    {card.note}
                  </p>

                  <p
                    dir="ltr"
                    className={`
                      mt-3
                      break-words
                      text-[16px]
                      leading-[1.3]
                      text-civilia-red
                      md:text-[18px]
                      md:whitespace-nowrap
                      ${isArabic ? "text-right" : ""}
                    `}
                  >
                    {card.value}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: 20,
          }}
          transition={{
            duration: 0.2,
          }}
          className={`fixed bottom-6 left-1/2 z-[9999] -translate-x-1/2 rounded-2xl border px-5 py-3 text-sm font-medium shadow-2xl backdrop-blur-xl sm:px-6 sm:py-4 ${
            submitStatus === "success"
              ? "border-green-400/20 bg-green-500/10 text-green-600"
              : "border-red-400/20 bg-red-500/10 text-red-600"
          }`}
        >
          {submitStatus === "success"
            ? t("messages.success")
            : t("messages.error")}
        </motion.div>
      )}
    </section>
  );
}
