"use client";
import Image from "next/image";
import { Monoton } from "next/font/google";
import { motion } from "motion/react";
import { NodeNextResponse } from "next/dist/server/base-http/node";
import Divider from "@/components/divider";
import Tagline from "@/components/tagline";
import Tagsub from "@/components/tagsub";
import FadeContent from "@/components/fade";
import Yap from "@/components/placeholderyap";
import AnimatedContent from "@/components/animatedcontent";

const monoton = Monoton({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});

export default function Home() {
  return (
    <main>
      <AnimatedContent reverse={true}>
        <Tagline line="TecTrix" />
        <Tagsub sub="Joran Hennion" />
      </AnimatedContent>
      <AnimatedContent>
        <Divider />
        <Yap />
        <Yap />
        <Yap />
        <Yap />
        <Yap />
        <Yap />
        <Yap />
        <Yap />
      </AnimatedContent>
      <div
        id="fade"
        className="fixed bottom-0 h-1/6 w-full bg-gradient-to-b from-transparent to-black"
      />
    </main>
  );
}

// bg-gradient-to-r from-red-700 to-blue-800 bg-clip-text
