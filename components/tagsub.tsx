import { motion } from "motion/react";
import { Monoton } from "next/font/google";
const monoton = Monoton({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});

export default function Tagsub(props) {
  return (
    <motion.div
      id="subtitle"
      className={`${monoton.className} mb-5 mt-0 cursor-grab select-none self-center text-center text-4xl text-white drop-shadow-xl active:cursor-grabbing md:text-5xl lg:text-6xl`}
      initial={{ y: "-200%", scale: 0.9 }}
      animate={{ y: 0, scale: 1 }}
      drag
      dragSnapToOrigin
      dragConstraints={{ top: 10, left: 10, right: 10, bottom: 10 }}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
    >
      {props.sub}
    </motion.div>
  );
}
