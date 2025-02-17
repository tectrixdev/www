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
        className={`${Rubik.className} text-6xl self-center text-center mt-10 lg:text-9xl`}
      >
        TecTrix
      </div>
    </main>
  );
}
