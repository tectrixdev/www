"use client";
import { motion } from "motion/react";
import { Rubik_Glitch } from "next/font/google";
import { Rubik_Mono_One } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  color: number;
  //logic ;)
  button: string;
}

const main = Rubik_Glitch({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});

const second = Rubik_Mono_One({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});

const Card: React.FC<Props> = ({
  title,
  description,
  imageUrl,
  projectUrl,
  color,
  button,
}) => {
  return (
    <motion.div
      id={`Card.${title}`}
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
      className="h-auto w-full max-w-xs overflow-hidden rounded-xl border-2 bg-black/25 p-5 shadow-2xl"
      style={{ backdropFilter: `hue-rotate(${color}deg) blur(12px)` }}
    >
      <Image
        src={`/${imageUrl}`}
        alt={title}
        className="h-36 w-full rounded-lg border border-white object-cover transition-transform hover:-rotate-3"
        width={400}
        height={400}
      />
      <div className="p-4">
        <div
          className={`text-center text-white ${main.className} mb-7 text-2xl`}
          id={`title.${title}`}
        >
          {title}
        </div>
        <div
          className={`my-2 text-center text-sm font-bold text-white ${second.className}`}
          id={`description.${title}`}
        >
          {description}
        </div>
        <div className="mt-4 text-center">
          <Link
            href={projectUrl}
            passHref
            rel="noopener noreferrer"
            className={`bg-blur-lg border-2hite inline-block w-full rounded-lg border-2 p-2 text-center text-white transition-transform hover:rotate-3 ${second.className}`}
          >
            {button}
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
