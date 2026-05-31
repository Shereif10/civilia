type SectionTitleProps = {
  children: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionTitle({ children, align = "center", className = "" }: SectionTitleProps) {
  return (
    <div
      data-animate="fade-up"
      className={`flex min-h-[112px] items-center justify-center bg-civilia-red px-8 py-8 text-civilia-paper md:min-h-[173px] md:py-12 ${
        align === "left" ? "justify-start rounded-bl-[180px] md:rounded-bl-[285px]" : "rounded-bl-[180px] md:rounded-bl-[285px]"
      } ${className}`}
    >
      <h2 className="text-center text-[36px] font-semibold leading-none md:text-[64px] lg:text-[80px]">
        {children}
      </h2>
    </div>
  );
}
