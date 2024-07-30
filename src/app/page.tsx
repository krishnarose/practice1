"use client";

import FeaturdCourses from "@/components/FeaturdCourses";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCardsDemo";
import Instructors from "@/components/Instructors";
import UpComingWebinar from "@/components/UpComingWebinar";
import WhyChooseUs from "@/components/WhyChooseUs";
import HeroSection from "@/components/ui/HeroSection";


export default function Home() {
  return <>
  <main className="min-h-screen bg-black/[0.96]">
  <HeroSection/>
  <FeaturdCourses/>
  <WhyChooseUs/>
  <InfiniteMovingCardsDemo/>
  <UpComingWebinar/>
  <Instructors/>
  </main>
  </>;
}
