import { Geist, Geist_Mono } from "next/font/google";
import "./blog.css";
import "@/app/globals.css";
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

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
    <html lang="en">
      <head>
        <meta name="darkreader-lock" />
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={metadata.sub} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
      </head>
      <Scrollbody className="pt-10 backdrop-blur-lg">
        <MotionConfig reducedMotion="user">
          <Tagline line={metadata.title} />
          <Tagsub sub={metadata.sub} />
          <Navbar
            items={[
              { label: "Home", url: "/" },
              { label: "Blog", url: "/blog" },
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
    </html>
  );
}
