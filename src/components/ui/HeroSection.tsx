import Link from "next/link";
import React from "react";
import { Spotlight } from "./Spotlight";
import { Button } from "../ui/moving-border";

function HeroSection() {
  return (
    <div className="h-auto w-full rounded-sm flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 md:h-[40rem]">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 text-center">
        Master the art of music
      </h1>
      <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto text-center">
        Dive into our Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Laborum harum voluptatibus expedita obcaecati doloribus
        reprehenderit neque laboriosam pariatur saepe libero labore unde quo
        atque vitae sunt, repellat tenetur placeat aspernatur.
      </p>
      <div className="mt-4">
        <Link href="/courses">
          <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            Explore courses
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
