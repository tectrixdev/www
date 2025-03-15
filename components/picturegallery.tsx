"use client";
import { motion } from "motion/react";
import Image from "next/image";
import Popup from "reactjs-popup";
import { useState, useEffect } from "react";

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
                  width={400}
                  height={400}
                  className="size-20 cursor-pointer object-cover transition-transform duration-500 ease-in-out hover:scale-150 md:size-36"
                  tabIndex={0}
                />
              </div>
            }
            modal
          >
            <div className="flex items-center justify-items-center">
              <button
                className="mx-5 size-10 justify-center rounded-full border-2 border-white p-2 text-center font-bold text-white backdrop-blur-lg disabled:opacity-50"
                onClick={decrement}
                disabled={i === 1}
              >
                <Image
                  src="/left.png"
                  alt="Previous"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </button>
              <div
                className="overflow-hidden rounded-lg border-2 border-white p-4 backdrop-blur-lg"
                id="popup"
              >
                <Image
                  src={`/Pictures/${i}.webp`}
                  alt={`Picture ${i}`}
                  width={3000}
                  height={3000}
                  className="h-[170px] w-fit object-contain md:h-[500px] lg:h-[700px]"
                  tabIndex={0}
                  quality={75}
                />
              </div>
              <button
                className="mx-5 size-10 justify-center rounded-full border-2 border-white p-2 text-center font-bold text-white backdrop-blur-lg disabled:opacity-50"
                onClick={increment}
                disabled={i === images.length}
              >
                <Image
                  src="/right.png"
                  alt="Next"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </button>
            </div>
          </Popup>
        );
      })}
    </motion.div>
  );
};

export default PictureGallery;
