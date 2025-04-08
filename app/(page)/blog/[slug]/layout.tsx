import { Geist, Geist_Mono } from "next/font/google";
import "./blog.css";
import Scrollbody from "@/components/scrollbg";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import FooterShadow from "@/components/footershadow";
import Footer from "@/components/footer";
import { MotionConfig } from "motion/react";
import Content from "@/components/blog_content";
import Tagline from "@/components/tagline";
import Tagsub from "@/components/tagsub";
import Divider from "@/components/divider";
import PostInfo from "@/components/postinfo";
import Navbar from "@/components/navbar";
import type { Metadata } from "next";
import type { Viewport } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// static metadata
export const metadata: Metadata = {
  generator: "Next.js",
  applicationName: "Blog - tectrix.dev",
  robots: "index, follow",
  publisher: "Joran Hennion",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.tectrix.dev"),
};

export const viewport: Viewport = {
  colorScheme: "dark",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const mod = await import(`@/content/${slug}.mdx`);
  const metadata = mod.matter;
  console.log("page details:");
  console.log(metadata);
  const title = metadata.title + " - tectrix.dev";
  const keywords =
    metadata.keywords +
    `, tectrix.dev, blog, tectrix blog, tectrix blog page, tectrix ${metadata.title}, ${metadata.title}, tectrix blog post ${metadata.title}, ${metadata.sub}`;
  return (
    <>
      <head>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={metadata.sub} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={metadata.author} />
        <link rel="canonical" href={`https://www.tectrix.dev/blog/${slug}`} />
      </head>
      <Scrollbody className="pt-10 backdrop-blur-lg">
        <MotionConfig reducedMotion="user">
          <Tagline line={metadata.title} />
          <Tagsub sub={metadata.sub} />
          <Navbar
            items={[
              { label: "Home", url: "/" },
              { label: "Blog", url: "/blog" },
              { label: "About", url: "/about" },
            ]}
          />
          <Divider />
          <PostInfo author={metadata.author} date={metadata.date} />
          <Content>{children}</Content>
        </MotionConfig>
        <Analytics />
        <SpeedInsights />
        <FooterShadow />
        <Footer />
      </Scrollbody>
    </>
  );
}
