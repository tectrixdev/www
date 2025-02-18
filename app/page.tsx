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
        className={`${Rubik.className} bg-gradient-to-r from-red-700 to-blue-800 bg-clip-text text-6xl self-center text-center mt-10 lg:text-9xl md:text-8xl transition-all duration-1000 text-transparent `}
      >
        TecTrix
      </div>
    </main>
  );
}
