import Image from "next/image";

const amenities = [
  {
    title: "Kids Area",
    icon: "/assets/kids-area.svg",
  },
  {
    title: "ClubHouse",
    icon: "/assets/clubhouse.svg",
  },
  {
    title: "Meditation & Yoga Center",
    icon: "/assets/yoga.svg",
  },
  {
    title: "Protection System",
    icon: "/assets/protection.svg",
  },
  {
    title: "Padel Courts",
    icon: "/assets/padel.svg",
  },
  {
    title: "Jogging Track",
    icon: "/assets/jogging.svg",
  },
  {
    title: "Commercial Mall",
    icon: "/assets/mall.svg",
  },
  {
    title: "Electric Car Charger",
    icon: "/assets/charger.svg",
  },
  {
    title: "Lakes",
    icon: "/assets/lake.svg",
  },
  {
    title: "Gym Halls",
    icon: "/assets/gym.svg",
  },
  {
    title: "Smart Gates For Buildings",
    icon: "/assets/gates.svg",
  },
  {
    title: "Landscapes",
    icon: "/assets/landscape.svg",
  },
];

export function FeaturesAmenitiesSection() {
  return (
    <section className="bg-civilia-paper py-16 md:py-24">
      <div className="overflow-hidden rounded-[32px] border border-[#1D2D8C]/20">
        {/* Header */}
        <div className="rounded-bl-[180px] bg-[#F0E459] px-6 py-8 md:rounded-bl-[285px] md:px-16 md:py-12">
          <h2
            data-animate="fade-up"
            className="text-center text-[42px] font-light leading-none text-[#1D2D8C] md:text-[72px]"
            style={{ fontFamily: "Badgline" }}
          >
            Features And Amenities
          </h2>
        </div>

        {/* Amenities */}
        <div
          data-animate="stagger"
          className="
            grid
            gap-y-12
            gap-x-8
            px-8
            py-12

            sm:grid-cols-2

            lg:grid-cols-3
            lg:px-16
            lg:py-16
          "
        >
          {amenities.map((item) => (
            <div key={item.title} className="flex items-start gap-5">
              <Image
                src={item.icon}
                alt=""
                width={44}
                height={44}
                className="shrink-0"
              />

              <p
                className="
                  text-[22px]
                  leading-[1.25]
                  text-[#3D3D3D]

                  md:text-[28px]
                "
              >
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
