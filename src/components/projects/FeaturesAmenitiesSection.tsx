import Image from "next/image";

const amenities = [
  "Kids Area",
  "ClubHouse",
  "Meditation & Yoga Center",
  "Protection System",
  "Padel Courts",
  "Jogging Track",
  "Commercial Mall",
  "Electric Car Charger",
  "Lakes",
  "Gym Halls",
  "Smart Gates For Buildings",
  "Landscapes",
];

export function FeaturesAmenitiesSection() {
  return (
    <section className="bg-civilia-paper py-16 md:py-24">
      <div className="mx-auto overflow-hidden rounded-[32px] border border-[#1D2D8C] border-t-transparent ">
        {/* Header */}
        <div className="rounded-bl-[285px] bg-[#F0E459] px-8 py-10 md:px-16 md:py-12">
          <h2
            data-animate="fade-up"
            className="text-center text-[48px] font-light leading-none text-[#1D2D8C] md:text-[72px]"
          >
            Features And Amenities
          </h2>
        </div>

        {/* Content */}
        <div
          className="grid gap-y-12 px-10 py-12 md:grid-cols-3 md:px-16 md:py-16"
          data-animate="stagger"
        >
          {amenities.map((item) => (
            <div key={item} className="flex items-start gap-4">
              <Image
                src="/assets/amenity-icon.svg"
                alt=""
                width={22}
                height={22}
                className="mt-1 shrink-0"
              />

              <p className="text-[20px] leading-[1.3] text-[#3D3D3D]">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
