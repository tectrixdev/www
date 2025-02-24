"use client";
// "average import length"
import Image from "next/image";
import { Rubik_Glitch } from "next/font/google";
import Divider from "@/components/divider";
import Tagline from "@/components/tagline";
import Tagsub from "@/components/tagsub";
import Yap from "@/components/placeholderyap";
import { motion } from "motion/react";
import PixelCard from "@/components/reactbits/Components/PixelCard/PixelCard";

const main = Rubik_Glitch({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});

// TODO: center these cards on desktop

export default function Home() {
  return (
    <main>
      <Tagline line="TecTrix" />
      <Tagsub sub="Joran Hennion" />
      <Divider />
      <div id="cardwrapper" className="flex flex-col gap-5 lg:flex-row">
        <PixelCard
          variant="default"
          className="h-60 w-5/6 place-self-center border-white shadow-xl backdrop-blur-lg md:h-64 lg:h-96 lg:w-72"
        >
          <p className="absolute text-white">design</p>
        </PixelCard>
        <PixelCard
          variant="default"
          className="h-60 w-5/6 place-self-center border-white shadow-xl backdrop-blur-lg md:h-64 lg:h-96 lg:w-72"
        >
          <p className="absolute text-white">Photography</p>
        </PixelCard>
        <PixelCard
          variant="default"
          className="h-60 w-5/6 place-self-center border-white shadow-xl backdrop-blur-lg md:h-64 lg:h-96 lg:w-72"
        >
          <p className="absolute text-white">Development</p>
        </PixelCard>
      </div>
      <Yap />
      <Yap />
      <Yap />
      <Yap />
      <Yap />
      <Yap />
      <Yap />
      <Yap />
      <div
        id="fade"
        className="invisible fixed bottom-0 z-50 h-44 w-full bg-gradient-to-b from-transparent to-black md:visible"
      />
    </main>
  );
}

// bg-gradient-to-r from-red-700 to-blue-800 bg-clip-text
