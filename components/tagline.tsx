"use client";
import { easeInOut, motion, MotionValue } from "motion/react";
import { Rubik_Glitch } from "next/font/google";
import { ReactNode } from "react";

const main = Rubik_Glitch({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});

interface Props {
  line: string;
}

const Tagline: React.FC<Props> = ({ line }) => {
  return (
    <motion.div
      id="tagline"
      className={`${main.className} mb-5 mt-10 cursor-grab select-none self-center text-center text-6xl text-white drop-shadow-xl active:cursor-grabbing md:text-7xl lg:text-8xl`}
      drag
      dragSnapToOrigin
      dragConstraints={{ top: 10, left: 10, right: 10, bottom: 10 }}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      initial={{ y: -100 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 1, type: "spring" }}
    >
      {line}
    </motion.div>
  );
};

export default Tagline;
//TODO: change font
