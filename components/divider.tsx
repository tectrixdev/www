"use client";
import { motion } from "motion/react";

interface DividerProps {
  className?: string;
}

export default function Divider({ className = "" }: DividerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, type: "spring" }}
      id="divider"
      className={`mx-auto my-5 h-0.5 w-[60vw] self-center bg-white opacity-65 shadow-lg backdrop-blur-lg lg:h-1 ${className}`}
    />
  );
}
