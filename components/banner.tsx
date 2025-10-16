import React from "react";
import Link from "next/link";

const Banner: React.FC = () => {
	return (
		<div className="w-full bg-black/50 p-4 text-center font-bold text-white backdrop-blur-lg motion-safe:hidden">
			<p className="mx-5 font-bold text-yellow-300">
				using reduced motion due to user preference
			</p>
		</div>
	);
};

export default Banner;
