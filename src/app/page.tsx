import { Hero } from "@/components/home/Hero";
import { HomeOverview } from "@/components/home/HomeOverview";
import { Testimonials } from "@/components/home/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HomeOverview />
      <Testimonials />
    </>
  );
}
