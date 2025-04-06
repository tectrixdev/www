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
import Navbar from "@/components/navbar";
import CardWrapper from "@/components/cardwrapper";

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
      <Navbar items={[{ label: "Blog", url: "/blog" }]} />
      <Content>
        <Subtitle title="Photography" />
        <PictureGallery />
        <Subtitle title="Development" />
        <CardWrapper>
          <Card
            title="My portfolio"
            description="You are right here ;)"
            imageUrl="this.webp"
            projectUrl="https://github.com/tectrixdev/www"
            button="view source"
            color={-90}
          />
          <Card
            title="ADHDO"
            description="a todo app for people with ADHD (unfinished)"
            imageUrl="adhdo.png"
            projectUrl="https://github.com/tectrixdev/ADHDO"
            button="view source"
            color={-190}
          />
        </CardWrapper>
        {/*<Subtitle title="Design" />*/}
        <Subtitle title="Linux" />
        <CardWrapper>
          <Card
            title="TectrixMC"
            description="I manage this server which runs on ubuntu server 24.04, website by ilxplay"
            imageUrl="tectrixmc.png"
            projectUrl="https://minecraft.tectrix.dev/"
            button="Join us!"
            color={130}
          />
          <Card
            title="Arcade uploader"
            description="A fairly new project which aims to make coding for arcade machines very easy for kids, more info will release soon as I'm working on it!"
            imageUrl="arcade.png"
            projectUrl="https://github.com/tectrixdev/arcade_upload"
            button="view source"
            color={-130}
          />
        </CardWrapper>
      </Content>
    </main>
  );
}

// bg-gradient-to-r from-red-700 to-blue-800 bg-clip-text
