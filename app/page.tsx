import Image from "next/image";
import { Rubik_Scribble } from "next/font/google";

const Rubik = Rubik_Scribble({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});

export default function Home() {
  return (
    <main>
      <div
        id="tagline"
        className={`${Rubik.className} mt-10 self-center bg-gradient-to-r from-red-700 to-blue-800 bg-clip-text text-center text-6xl text-transparent transition-all duration-1000 md:text-8xl lg:text-9xl`}
      >
        TecTrix
      </div>
    </main>
  );
}
