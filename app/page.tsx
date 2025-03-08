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
      <Divider />
      <Content>
        <Card
          title="Design"
          content="I'm a hobbyist designer, I wouldn't call myself a proffesional but I can do some basics."
          transparency={50}
          color="red"
        />
        <Card
          title="Photography"
          content={
            <div>
              <a>
                Photography one of my intrests, I like to experiment with
                different styles and enviroments to photograph in. You can find
                my pictures &nbsp;
              </a>
              <a
                className="font-bold text-blue-600 underline"
                href="https://www.instagram.com/joran.hennion/"
              >
                here
              </a>
            </div>
          }
          transparency={50}
          color="green"
        />
        <Card
          color="orange"
          transparency={50}
          title="development"
          content={
            <a>
              Mainly web development, I'm for example working on a todo app for
              people with ADHD and I manage and develop for a minecraft server.
            </a>
          }
        />
        <Card
          color="blue"
          transparency={50}
          title="Linux"
          content="I'm a linux user if you haven't noticed yet, I main fedora at the moment. I also manage a linux server which runs my minecraft server. I would confidentaly call me a linux expert/intermediate user."
        />
      </Content>
    </main>
  );
}

// bg-gradient-to-r from-red-700 to-blue-800 bg-clip-text
