import { Hero } from "@/components/home/Hero";
import { WhyKayTechHome } from "@/components/home/WhyKayTechHome";
import { HomeServicesStrip } from "@/components/home/HomeServicesStrip";
import { Testimonials } from "@/components/home/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyKayTechHome />
      <HomeServicesStrip />
      <Testimonials />
    </>
  );
}
