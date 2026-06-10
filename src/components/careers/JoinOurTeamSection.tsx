"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

type SubmitStatus =
  | "idle"
  | "loading"
  | "success"
  | "error";

export function JoinOurTeamSection() {
  const t = useTranslations("joinOurTeam");
  const locale = useLocale();
  const isArabic = locale === "ar";

  const applicationSchema = z.object({
    name: z.string().min(2, t("validation.name")),

    email: z.string().email(t("validation.email")),

    phone: z
      .string()
      .min(7, t("validation.phoneMin"))
      .regex(/^\+?[0-9\s\-().]{7,20}$/, t("validation.phoneRegex")),

    jobTitle: z.string().min(2, t("validation.jobTitle")),

    department: z.string().min(2, t("validation.department")),
  });

  type ApplicationFormData = z.infer<typeof applicationSchema>;

  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");

  const [showPopup, setShowPopup] = useState(false);

  const popupTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
  });

  const isLoading = submitStatus === "loading";

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

  const inputClass = `
    w-full
    border-b
    bg-transparent
    pb-4
    text-[18px]
    text-civilia-ink
    outline-none
    placeholder:text-[#9A9A9A]
  `;

  const borderClass = (hasError: boolean) =>
    hasError ? "border-red-500" : "border-civilia-red";

  const onSubmit = async (data: ApplicationFormData) => {
    setSubmitStatus("loading");

    try {
      const formData = new FormData();

      formData.append(
        "access_key",
        process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "",
      );

      formData.append("subject", `New Job Application - ${data.name}`);
      formData.append("name", data.name);
      formData.append("email", data.email);

      formData.append("replyto", data.email);
      formData.append("from_name", data.name);

      formData.append("phone", data.phone);
      formData.append("jobTitle", data.jobTitle);
      formData.append("department", data.department);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.message || "Submission failed");
      }

      reset();
      triggerPopup("success");
    } catch (error) {
      console.error("Submit Error:", error);
      triggerPopup("error");
    }
  };

  return (
    <section className="bg-civilia-paper py-16 md:py-24">
      <div className="container-civilia">
        <div data-animate="fade-up">
          <h2
            className="
              text-[40px]
              font-semibold
              leading-none
              text-civilia-red
              sm:text-[46px]
              md:text-[52px]
              lg:text-[72px]
            "
          >
            {t("title")}
          </h2>

          <p
            className="
              mt-5
              max-w-[1280px]
              text-base
              leading-[1.6]
              text-[#6A6A6A]
              sm:text-[17px]
              md:mt-6
              md:text-[18px]
              lg:text-[22px]
            "
          >
            {t("description")}
          </p>
        </div>

        <div
          className="
            mt-12
            grid
            gap-10
            md:mt-16
            md:gap-12
            lg:grid-cols-[560px_1fr]
            lg:gap-16
          "
        >
          <div
            data-animate="fade-right"
            className="
              relative
              h-[320px]
              overflow-hidden
              rounded-[24px]
              sm:h-[420px]
              md:h-[560px]
              lg:h-[760px]
              lg:rounded-[32px]
            "
          >
            <Image
              src="/assets/careers-form-image.png"
              alt="Join Civilia Team"
              fill
              sizes="(max-width:1024px) 100vw, 560px"
              className="object-cover"
            />
          </div>

          <div
            data-animate="fade-left"
            className={`flex flex-col justify-center ${
              isArabic ? "text-right" : ""
            }`}
          >
            <h3
              className="
                text-[34px]
                font-semibold
                leading-none
                text-civilia-ink
                sm:text-[40px]
                md:text-[52px]
                lg:text-[64px]
              "
            >
              {t("applicationTitle")}
            </h3>

            <p
              className="
                mt-4
                max-w-[620px]
                text-base
                leading-[1.6]
                text-[#6A6A6A]
                sm:text-[17px]
                md:mt-5
                md:text-[18px]
                lg:text-[22px]
              "
            >
              {t("applicationDescription")}
            </p>

            <form
              onSubmit={(e) => {
                void handleSubmit(onSubmit)(e);
              }}
              noValidate
              className="mt-10 md:mt-14"
            >
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  placeholder={t("fields.name")}
                  disabled={isLoading}
                  {...register("name")}
                  className={`${inputClass} ${borderClass(
                    !!errors.name,
                  )} ${isArabic ? "text-right" : ""}`}
                />

                {errors.name && (
                  <span className="text-sm text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </div>

              <div className="mt-8 grid gap-8 md:mt-10 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <input
                    type="email"
                    placeholder={t("fields.email")}
                    disabled={isLoading}
                    {...register("email")}
                    className={`${inputClass} ${borderClass(
                      !!errors.email,
                    )} ${isArabic ? "text-right" : ""}`}
                  />

                  {errors.email && (
                    <span className="text-sm text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <input
                    type="tel"
                    placeholder={t("fields.phone")}
                    disabled={isLoading}
                    {...register("phone")}
                    className={`${inputClass} ${borderClass(
                      !!errors.phone,
                    )} ${isArabic ? "text-right" : ""}`}
                  />

                  {errors.phone && (
                    <span className="text-sm text-red-500">
                      {errors.phone.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-8 grid gap-8 md:mt-10 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <input
                    type="text"
                    placeholder={t("fields.jobTitle")}
                    disabled={isLoading}
                    {...register("jobTitle")}
                    className={`${inputClass} ${borderClass(
                      !!errors.jobTitle,
                    )} ${isArabic ? "text-right" : ""}`}
                  />

                  {errors.jobTitle && (
                    <span className="text-sm text-red-500">
                      {errors.jobTitle.message}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <input
                    type="text"
                    placeholder={t("fields.department")}
                    disabled={isLoading}
                    {...register("department")}
                    className={`${inputClass} ${borderClass(
                      !!errors.department,
                    )} ${isArabic ? "text-right" : ""}`}
                  />

                  {errors.department && (
                    <span className="text-sm text-red-500">
                      {errors.department.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-10 flex justify-stretch md:mt-14 md:justify-end">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="
                    inline-flex
                    h-16
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-civilia
                    bg-civilia-red
                    px-8
                    text-[22px]
                    font-medium
                    text-white
                    transition
                    hover:bg-[#b71114]
                    disabled:cursor-not-allowed
                    disabled:opacity-70
                    md:w-[320px]
                  "
                >
                  {isLoading ? (
                    <>
                      {t("buttons.sending")}
                      <Loader2 className="h-5 w-5 animate-spin" />
                    </>
                  ) : (
                    t("buttons.submit")
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {showPopup && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className={`fixed bottom-6 left-1/2 z-[9999] -translate-x-1/2 rounded-2xl border px-6 py-4 text-sm font-medium shadow-2xl backdrop-blur-xl ${
            submitStatus === "success"
              ? "border-green-400/20 bg-green-500/10 text-green-300"
              : "border-red-400/20 bg-red-500/10 text-red-300"
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