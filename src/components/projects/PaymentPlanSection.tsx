const paymentPlans = [
  {
    value: "5",
    suffix: "%",
    title: "Down payment",
    variant: "light",
  },
  {
    value: "8",
    title: "Over Years Installments",
    variant: "yellow",
  },
  {
    value: "10",
    suffix: "%",
    title: "Down payment",
    variant: "light",
  },
  {
    value: "10",
    title: "Over Years Installments",
    variant: "yellow",
  },
];

export function PaymentPlanSection() {
  return (
    <section className="bg-civilia-paper py-16 md:py-24">
      <div className="mx-auto overflow-hidden rounded-[32px]">
        {/* Header */}
        <div className="rounded-bl-[285px] bg-[#F0E459] px-8 py-10 md:px-16 md:py-12">
          <h2
            data-animate="fade-up"
            className="text-center text-[48px] font-light leading-none text-[#031286] md:text-[72px]"
          >
            Payment Plan
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
                <div className="flex items-start">
                  <span className="text-[72px] font-light leading-none text-[#031286]">
                    {item.value}
                  </span>

                  {item.suffix && (
                    <span
                      className={`ml-2 mt-2 text-[22px] font-medium ${
                        item.variant === "yellow"
                          ? "text-[#031286]"
                          : "text-[#D8C93E]"
                      }`}
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
                  }`}
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
