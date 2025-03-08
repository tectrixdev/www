"use client";
import { motion } from "motion/react";
import { Rubik_Glitch } from "next/font/google";

interface Props {
  title: string;
  content: React.ReactNode;
  transparency: number;
  color: string;
}

const main = Rubik_Glitch({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});

const Card: React.FC<Props> = ({ title, content, transparency, color }) => {
  return (
    <motion.div
      id={`Card.${title}`}
      initial={{
        backgroundColor: `rgba(0, 0, 0, 0)`,
        opacity: 0,
        y: 100,
        scale: 0.9,
        borderColor: "white",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        backgroundColor: `rgba(0, 0, 0, ${transparency / 100})`,
        borderColor: color,
      }}
      transition={{ duration: 1.5, type: "spring" }}
      className="h-auto w-full rounded-lg border-2 backdrop-blur-md lg:min-h-64 lg:min-w-64"
    >
      <div
        className={`text-center text-white ${main.className} m-5 text-2xl`}
        id={`title.${title}`}
      >
        {title}
      </div>
      <div
        className={`text-md m-5 text-center font-bold text-white`}
        id={`content.${title}`}
      >
        {content}
      </div>
    </motion.div>
  );
};

export default Card;
