"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { CiviliaButton } from "@/components/ui/CiviliaButton";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

// ─────────────────────────────────────────────
// Validation Schema
// ─────────────────────────────────────────────

const applicationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),

  email: z.string().email("Please enter a valid email"),

  phone: z
    .string()
    .min(7, "Please enter a valid phone number")
    .regex(/^\+?[0-9\s\-().]{7,20}$/, "Please enter a valid phone number"),

  jobTitle: z.string().min(2, "Job title is required"),

  department: z.string().min(2, "Department is required"),

  // resume: z
  //   .any()
  //   .refine((file) => file?.length === 1, "Resume is required")
  //   .refine(
  //     (file) => !file?.[0] || file[0].size <= 10 * 1024 * 1024,
  //     "Resume must be less than 2MB",
  //   ),
});

type ApplicationFormData = z.infer<typeof applicationSchema>;

type SubmitStatus =
  | "idle"
  | "loading"
  | "success"
  | "error";

export function JoinOurTeamSection() {
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

      // مهم
      formData.append("replyto", data.email);
      formData.append("from_name", data.name);

      formData.append("phone", data.phone);
      formData.append("jobTitle", data.jobTitle);
      formData.append("department", data.department);

      // if (data.resume?.[0]) {
      //   formData.append("resume", data.resume[0]);
      // }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      console.log("Web3Forms Result:", result);

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
            Join Our Team
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
            At Civilia Developments, we are dedicated to transforming visions
            into reality, creating communities that inspire and elevate daily
            living.
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
            className="flex flex-col justify-center"
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
              Job Application
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
              Submit your application and our HR team will review it shortly.
            </p>

            <form
              onSubmit={(e) => {
                void handleSubmit(onSubmit)(e);
              }}
              noValidate
              className="mt-10 md:mt-14"
            >
              {/* Name */}
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  placeholder="Name"
                  disabled={isLoading}
                  {...register("name")}
                  className={`${inputClass} ${borderClass(!!errors.name)}`}
                />

                {errors.name && (
                  <span className="text-sm text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </div>

              {/* Email + Phone */}
              <div className="mt-8 grid gap-8 md:mt-10 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <input
                    type="email"
                    placeholder="Email"
                    disabled={isLoading}
                    {...register("email")}
                    className={`${inputClass} ${borderClass(!!errors.email)}`}
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
                    placeholder="Phone"
                    disabled={isLoading}
                    {...register("phone")}
                    className={`${inputClass} ${borderClass(!!errors.phone)}`}
                  />

                  {errors.phone && (
                    <span className="text-sm text-red-500">
                      {errors.phone.message}
                    </span>
                  )}
                </div>
              </div>

              {/* Job Title + Department */}
              <div className="mt-8 grid gap-8 md:mt-10 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <input
                    type="text"
                    placeholder="Job Title"
                    disabled={isLoading}
                    {...register("jobTitle")}
                    className={`${inputClass} ${borderClass(
                      !!errors.jobTitle,
                    )}`}
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
                    placeholder="Department"
                    disabled={isLoading}
                    {...register("department")}
                    className={`${inputClass} ${borderClass(
                      !!errors.department,
                    )}`}
                  />

                  {errors.department && (
                    <span className="text-sm text-red-500">
                      {errors.department.message}
                    </span>
                  )}
                </div>
              </div>

              {/* Resume */}
              {/* <div className="mt-8 md:mt-10">
                <label className="block text-[18px] text-[#7A7A7A]">
                  Resume
                </label>

                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  disabled={isLoading}
                  {...register("resume")}
                  className={`
      mt-2
      w-full
      border-b
      pb-4
      text-sm
      text-civilia-ink
      file:mr-4
      file:border-0
      file:bg-transparent
      file:text-sm
      file:font-medium
      ${borderClass(!!errors.resume)}
    `}
                />

                <p className="mt-1 text-sm text-[#888]">
                  Accepted formats: PDF, DOC, DOCX (Max 2MB)
                </p>

                {errors.resume && (
                  <span className="mt-2 block text-sm text-red-500">
                    {String(errors.resume.message)}
                  </span>
                )}
              </div> */}

              {/* Submit */}
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
                      Sending...
                      <Loader2 className="h-5 w-5 animate-spin" />
                    </>
                  ) : (
                    "Submit Application"
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
            ? "Application submitted successfully ✨"
            : "Something went wrong. Please try again."}
        </motion.div>
      )}
    </section>
  );
}