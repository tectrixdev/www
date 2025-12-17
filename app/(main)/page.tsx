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
			<Navbar
				items={[
					{ label: "Blog", url: "/blog" },
					{ label: "About", url: "/about" },
				]}
			/>
			<Content>
				<Subtitle title="Photography" />
				<PictureGallery />
				<Subtitle title="Development" />
				<CardWrapper>
					<Card
						title="My portfolio"
						description="You are right here ;)."
						imageUrl="this.webp"
						projectUrl="https://github.com/tectrixdev/www"
						button="view source"
						color={-90}
					/>
					<Card
						title="pictures.tectrix.dev"
						description="A dedicated photo gallery website. (currently closed-source, will be opening soon!)"
						imageUrl="pictures.png"
						projectUrl="https://pictures.tectrix.dev/"
						button="view website"
						color={-290}
					/>
					<Card
						title="ADHDO"
						description="A todo app for people with ADHD. (abandoned project)"
						imageUrl="adhdo.png"
						projectUrl="https://github.com/tectrixdev/ADHDO"
						button="view source"
						color={-190}
					/>
					<Card
						title="Unplayit"
						description="A project aiming to fix annoying third party ip's from minecraft servers hosted on aternos, with playit, and others. Currently only supports playit hosted servers."
						imageUrl="unplayit.png"
						projectUrl="https://github.com/tectrixdev/unplayit"
						button="view source"
						color={190}
					/>
				</CardWrapper>
				{/*<Subtitle title="Design" />*/}
				<Subtitle title="Linux" />
				<CardWrapper>
					<Card
						title="TectrixMC"
						description="I manage this server which runs on ubuntu server 24.04, website by ilxplay."
						imageUrl="tectrixmc.png"
						projectUrl="https://minecraft.tectrix.dev/"
						button="Join us!"
						color={130}
					/>
					<Card
						title="Arcade machine"
						description="An arcade machine I made that allows kids to program their own retro games for it using microsoft's arcade makecode."
						imageUrl="blog/arcade.png"
						projectUrl="https://arcade.tectrix.dev/"
						button="view documentation and guide"
						color={-130}
					/>
					<Card
						title="Tectrix status"
						description="An automatic status checker of my services using uptimekuma hosted on embotic.xyz(I work for them, not sponsored)."
						imageUrl="status.png"
						projectUrl="https://status.tectrix.dev/"
						button="view status page"
						color={-150}
					/>
				</CardWrapper>
			</Content>
		</main>
	);
}

// bg-gradient-to-r from-red-700 to-blue-800 bg-clip-text
