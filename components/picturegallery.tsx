"use client";
import { motion } from "motion/react";
import Image from "next/image";

const PictureGallery = () => {
  const images = Array.from(
    { length: 18 },
    (_, i) => `/Pictures/${i + 1}.webp`,
  );

  return (
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
      {images.map((src, index) => (
        <div key={index} className="overflow-hidden rounded-lg shadow-lg">
          <Image
            src={src}
            alt={`Picture ${index + 1}`}
            width={400}
            height={400}
            className="size-20 object-cover transition-transform duration-500 ease-in-out hover:scale-150 md:size-36"
            tabIndex={0}
          />
        </div>
      ))}
    </motion.div>
  );
};

export default PictureGallery;
