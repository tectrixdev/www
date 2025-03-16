// "average import length"
import Image from "next/image";
import { Rubik_Glitch } from "next/font/google";
import Divider from "@/components/divider";
import Tagline from "@/components/tagline";
import Tagsub from "@/components/tagsub";
import Yap from "@/components/placeholderyap";
import { motion } from "motion/react";
import Card from "@/components/card";
import Content from "@/components/content";
import Banner from "@/components/banner";
import Subtitle from "@/components/subtitle";
import PictureGallery from "@/components/picturegallery";

const main = Rubik_Glitch({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});

export default function Home() {
  return (
    <main>
      <Banner />
      <Tagline line="TecTrix" />
      <Tagsub sub="Joran Hennion" />
      <Content>
        <Subtitle title="Photography" />
        <PictureGallery />
        <Subtitle title="Development" />
        <Card
          title="My portfolio"
          description="You are right here ;)"
          imageUrl="this.webp"
          projectUrl="https://github.com/tectrixdev/portfolio"
          button="view source"
          color={-90}
        />
        <Subtitle title="Design" />
        <Subtitle title="Linux" />
      </Content>
    </main>
  );
}

// bg-gradient-to-r from-red-700 to-blue-800 bg-clip-text
