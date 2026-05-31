import Image from "next/image";
import { Header } from "@/components/layout/Header";

export function ProjectsHeroSection() {
  return (
    <section className="relative h-[100vh] overflow-hidden rounded-b-[32px]">
      <Image
        src="/assets/projects-hero.png"
        alt="CIV West Development"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/10" />

      <Header />
    </section>
  );
}
