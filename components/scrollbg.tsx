"use client";
import { motion, useTransform, useScroll } from "motion/react";
import React from "react";

export default function Scrollbody({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { scrollYProgress } = useScroll();
  const size = useTransform(scrollYProgress, [0, 1], ["200vh", "500vh"]);
  const pos = useTransform(scrollYProgress, [0, 1], ["0%", "75%"]);

  return (
    <motion.body
      className="h-full w-full transform-gpu scroll-smooth bg-black bg-[url(/scrollbg.webp)] bg-fixed bg-center bg-no-repeat antialiased"
      style={{
        backgroundSize: size,
        backgroundPositionY: pos,
      }}
    >
      {children}
    </motion.body>
  );
}
