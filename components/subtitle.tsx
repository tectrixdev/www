"use client";
import React from "react";
import { Rubik_Mono_One } from "next/font/google";
import { motion } from "motion/react";

const monoton = Rubik_Mono_One({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});

interface Props {
  title: string;
}

const Divider = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100, scale: 0.5 }}
      whileInView={{ opacity: 100, y: 0, scale: 1 }}
      transition={{ duration: 1, type: "spring" }}
      id="divider"
      className="mx-auto my-5 h-0.5 w-[60vw] self-center bg-white opacity-65 shadow-lg backdrop-blur-lg lg:h-1"
    />
  );
};

const Subtitle: React.FC<Props> = ({ title }) => {
  return (
    <div>
      <motion.p
        className={`${monoton.className} mt-14 snap-y text-center text-4xl text-white`}
        id={`Sub.${title}`}
        initial={{
          opacity: 0,
          y: 100,
          scale: 0.9,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{ duration: 1.5, type: "spring" }}
      >
        {title}
      </motion.p>
      <Divider />
    </div>
  );
};

export default Subtitle;
