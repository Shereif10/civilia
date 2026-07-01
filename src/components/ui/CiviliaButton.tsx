import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnchorHTMLAttributes } from "react";

type CiviliaButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: "red" | "light" | "yellow" | "outline-yellow";
  withArrow?: boolean;
};

export function CiviliaButton({
  children,
  href,
  variant = "red",
  withArrow = true,
  className = "",
  ...props
}: CiviliaButtonProps) {
  const buttonClasses = `
    group
    inline-flex
    h-12
    items-center
    justify-center
    gap-3
    rounded-civilia
    px-7
    text-base
    font-medium
    leading-none
    transition
    duration-300
    hover:-translate-y-0.5

    md:h-16
    md:px-8
    md:text-[22px]

    ${
      variant === "red"
        ? "bg-civilia-red text-[#f3f3f3] shadow-[0_18px_40px_rgba(205,20,23,0.22)]"
        : variant === "yellow"
          ? "bg-[#F0E459] text-[#031286]"
          : variant === "outline-yellow"
            ? "border-2 border-[#F0E459] bg-transparent text-[#F0E459]"
            : "bg-[#f3f3f3] text-civilia-red"
    }

    ${className}
  `;

  const arrow = (
    <span
      className={`
        inline-flex
        h-7
        w-7
        items-center
        justify-center
        rounded-full
        transition
        duration-300
        group-hover:translate-x-1

        md:h-8
        md:w-8

        ${
          variant === "yellow"
            ? "bg-[#031286]/10 text-[#031286]"
            : variant === "outline-yellow"
              ? "bg-[#F0E459]/10 text-[#F0E459]"
              : "bg-white/90 text-civilia-red"
        }
      `}
    >
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </span>
  );

  // Handle downloadable/static files
  const isFile =
    href.endsWith(".pdf") ||
    href.endsWith(".zip") ||
    href.endsWith(".doc") ||
    href.endsWith(".docx");

  if (isFile) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClasses}
        {...props}
      >
        <span>{children}</span>
        {withArrow && arrow}
      </a>
    );
  }

  return (
    <Link href={href} className={buttonClasses} {...props}>
      <span>{children}</span>
      {withArrow && arrow}
    </Link>
  );
}
