import React from "react";

const Banner: React.FC = () => {
  return (
    <div className="bg-black/50 p-4 text-center font-bold text-white backdrop-blur-lg">
      <p>My website is under construction and this is the progress.</p>
      <p>For info and old page go to:</p>
      <a
        href="https://tectrixdev.github.io/tectrixdev/"
        className="text-blue-700 underline"
      >
        My old website
      </a>
    </div>
  );
};

export default Banner;
