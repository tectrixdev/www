import React from "react";
import Link from "next/link";

const Banner: React.FC = () => {
	return (
		<div className="w-full bg-black/50 p-4 text-center font-bold text-white backdrop-blur-lg motion-safe:hidden">
			{/*<p>My website is under construction and this is the progress.</p>
      <p>For info and old page go to:</p>
      <Link
        href="https://tectrixdev.github.io/tectrixdev/"
        className="text-blue-700 underline"
      >
        My old website
      </Link>*/}
			<p className="mx-5 font-bold text-yellow-300">
				using reduced motion due to user preference
			</p>
		</div>
	);
};

export default Banner;
