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
					const [i, setI] = useState(0);

					const increment = () =>
						setI((prev) => Math.min(prev + 1, images.length));
					const decrement = () => setI((prev) => Math.max(prev - 1, 1));

					useEffect(() => {
						const handleKeyDown = (event: KeyboardEvent) => {
							if (event.key === "ArrowRight") {
								increment();
							} else if (event.key === "ArrowLeft") {
								decrement();
							}
						};

						if (i > 0) {
							window.addEventListener("keydown", handleKeyDown);
						}

						return () => {
							window.removeEventListener("keydown", handleKeyDown);
						};
					}, [i]);

					return (
						<Popup
							key={index}
							onOpen={() => {
								setI(index + 1);
							}}
							trigger={
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
							}
							modal
						>
							<div className="grid content-center items-center justify-items-center gap-5">
								<button
									className="h-fit w-full rounded-full border-2 border-white backdrop-blur-lg disabled:opacity-50"
									onClick={decrement}
									disabled={i === 1}
								>
									<Image
										src="/left.svg"
										alt="Previous"
										width={24}
										height={24}
										className="mx-auto object-contain"
									/>
								</button>
								<div
									className="overflow-hidden rounded-lg border-2 border-white backdrop-blur-lg"
									id="popup"
								>
									<Image
										src={`/Pictures/${i}.jpg`}
										alt={`Picture ${i}`}
										width={1000} /* size on my display */
										height={1000} /* size on my display */
										className="h-fit w-[300px] object-contain md:h-[500px] md:w-fit lg:h-[700px]"
										tabIndex={0}
										quality={85}
									/>
								</div>
								<button
									className="h-fit w-full rounded-full border-2 border-white backdrop-blur-lg disabled:opacity-50"
									onClick={increment}
									disabled={i === images.length}
								>
									<Image
										src="/right.svg"
										alt="Next"
										width={24}
										height={24}
										className="mx-auto object-contain"
									/>
								</button>
							</div>
						</Popup>
					);
				})}
			</motion.div>
			<motion.div
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
					href="https://www.instagram.com/joran.hennion/"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center justify-center"
				>
					<p className={`mx-5 text-white ${main.className}`}>More on my</p>
					<Image
						src="/instagram.svg"
						alt="Instagram"
						width={40}
						height={40}
						className="cursor-pointer transition-transform duration-300 ease-in-out hover:scale-125"
						style={{ filter: "invert(1)" }}
					/>
					<p className={`mx-5 text-white ${main.className}`}>page</p>
				</Link>
			</motion.div>
		</div>
	);
};

export default PictureGallery;
