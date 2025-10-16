"use client";
import React from "react";
import { Rubik_Mono_One } from "next/font/google";
import { motion } from "motion/react";
import Divider from "./divider";

const main = Rubik_Mono_One({
	subsets: ["latin"],
	weight: ["400"],
	style: ["normal"],
});

interface Props {
	title: string;
}

const Subtitle: React.FC<Props> = ({ title }) => {
	return (
		<div>
			<motion.h3
				viewport={{ margin: "100px 100px 100px 100px" }}
				className={`${main.className} mt-14 snap-y text-center text-4xl text-white`}
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
			</motion.h3>
			<Divider />
		</div>
	);
};

export default Subtitle;
