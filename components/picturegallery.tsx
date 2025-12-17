"use client";
import { motion } from "motion/react";
import Image from "next/image";
import Popup from "reactjs-popup";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Rubik_Mono_One } from "next/font/google";

const main = Rubik_Mono_One({
	subsets: ["latin"],
	weight: ["400"],
	style: ["normal"],
});

const PictureGallery = () => {
	const images = Array.from({ length: 18 }, (_, i) => `/Pictures/${i + 1}.jpg`);

	return (
		<div className="flex flex-col items-center">
			<motion.div
				viewport={{ margin: "100px 100px 100px 100px" }}
				className="grid grid-cols-3 gap-3 rounded-lg p-3 backdrop-blur-lg md:grid-cols-6"
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
				{images.map((src, index) => {
					return (
						<Link
							href={`https://pictures.tectrix.dev/?image=${index + 1}`}
							target="_blank"
							rel="noopener noreferrer"
						>
							<div className="overflow-hidden rounded-lg shadow-lg">
								<Image
									src={src}
									alt={`Picture ${index + 1}`}
									width={288} /* size on my display * 2 */
									height={288} /* size on my display * 2 */
									className="size-20 cursor-pointer object-cover transition-transform duration-500 ease-in-out hover:scale-150 md:size-36"
									tabIndex={0}
								/>
							</div>
						</Link>
					);
				})}
			</motion.div>
			<motion.div
				viewport={{ margin: "100px 100px 100px 100px" }}
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
				className="mx-auto mt-5 flex flex-col items-center justify-center self-center"
			>
				<Link
					href="https://pictures.tectrix.dev/"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center justify-center"
				>
					<div
						className={`mx-5 text-white ${main.className} flex flex-col gap-2 rounded-lg border border-white p-5 text-center text-sm backdrop-blur-lg md:flex-row md:gap-5 md:text-lg`}
					>
						<p className="hidden md:block">More on</p>
						<p className="underline underline-offset-8">pictures.tectrix.dev</p>
					</div>
				</Link>
			</motion.div>
		</div>
	);
};

export default PictureGallery;
