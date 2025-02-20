import { motion, MotionValue } from "motion/react";
import { Monoton } from "next/font/google";
import { ReactNode } from "react";
const monoton = Monoton({
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
      className={`${monoton.className} mb-5 mt-10 cursor-grab select-none self-center text-center text-6xl text-white drop-shadow-xl active:cursor-grabbing md:text-7xl lg:text-8xl`}
      initial={{ y: "-200%", scale: 0.9 }}
      animate={{ y: 0, scale: 1 }}
      drag
      dragSnapToOrigin
      dragConstraints={{ top: 10, left: 10, right: 10, bottom: 10 }}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
    >
      {line}
    </motion.div>
  );
};

export default Tagline;
