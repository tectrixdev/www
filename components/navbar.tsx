"use client";
import React from "react";
import Link from "next/link";
import { Rubik_Mono_One } from "next/font/google";
import { motion } from "motion/react";

const rubikMonoOne = Rubik_Mono_One({ subsets: ["latin"], weight: "400" });

interface NavbarProps {
  items: { label: string; url: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ items }) => {
  return (
    <motion.nav
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
      className="mx-auto w-fit"
    >
      <ul className="flex w-fit list-none content-center">
        {items.map((item, index) => (
          <li
            key={index}
            className={`mt-5 list-none ${rubikMonoOne.className}`}
          >
            <Link
              href={item.url}
              className="mx-2 rounded-lg border-white bg-white px-5 py-3 text-black backdrop-blur-lg transition-all hover:border-2 hover:bg-black/25 hover:px-10 hover:text-white"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Navbar;

//honestly this is fine, it doesn't have to be revolutionairy
//simplicity beats all
