"use client";
import { motion } from "motion/react";
import { Rubik_Glitch } from "next/font/google";

const main = Rubik_Glitch({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});

interface Props {
  sub: string;
}

const Tagsub: React.FC<Props> = ({ sub }) => {
  return (
    <motion.div
      id="subtitle"
      className={`${main.className} mx-auto mb-5 mt-0 w-fit cursor-grab select-none self-center text-center text-4xl text-white drop-shadow-xl active:cursor-grabbing md:text-5xl lg:text-6xl`}
      drag
      dragSnapToOrigin
      dragConstraints={{ top: 10, left: 10, right: 10, bottom: 10 }}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      initial={{ opacity: 0, y: 100, scale: 0.5 }}
      whileInView={{ opacity: 100, y: 0, scale: 1 }}
      transition={{ duration: 1, type: "spring" }}
    >
      {sub}
    </motion.div>
  );
};

export default Tagsub;
