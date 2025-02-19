"use client";
import Image from "next/image";
import { Monoton } from "next/font/google";
import { motion } from "motion/react";
import { NodeNextResponse } from "next/dist/server/base-http/node";
import Divider from "@/components/divider";
import Tagline from "@/components/tagline";
import Tagsub from "@/components/tagsub";

const monoton = Monoton({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});

export default function Home() {
  return (
    <main>
      <Tagline line="TecTrix" />
      <Tagsub sub="Joran Hennion" />
      <Divider />
    </main>
  );
}

// bg-gradient-to-r from-red-700 to-blue-800 bg-clip-text
