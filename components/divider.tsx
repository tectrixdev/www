"use client";
import { motion } from "motion/react";

export default function Divider() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100, scale: 0.5 }}
      whileInView={{ opacity: 100, y: 0, scale: 1 }}
      transition={{ duration: 1, type: "spring" }}
      id="divider"
      className="mx-auto my-10 h-1 w-[80%] self-center bg-white opacity-65 shadow-lg backdrop-blur-lg lg:h-2"
    />
  );
}
