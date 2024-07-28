"use client";

import FeaturdCourses from "@/components/FeaturdCourses";
import WhyChooseUs from "@/components/WhyChooseUs";
import HeroSection from "@/components/ui/HeroSection";

export default function Home() {
  return <>
  <main className="min-h-screen bg-black/[0.96]">
  <HeroSection/>
  <FeaturdCourses/>
  <WhyChooseUs/>
  </main>
  </>;
}
