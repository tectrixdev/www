import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import Scrollbody from "@/components/scrollbg";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import FooterShadow from "@/components/footershadow";
import Footer from "@/components/footer";
import { MotionConfig } from "motion/react";
import Tagline from "@/components/tagline";
import Divider from "@/components/divider";
import Navbar from "@/components/navbar";
import Content from "@/components/blog_content";
import type { Viewport } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "About - tectrix.dev",
  description: "Joran Hennion",
  generator: "Next.js",
  applicationName: "tectrix.dev",
  keywords: [
    "Joran Hennion",
    "jojommeke",
    "tectrix",
    "TecTrix",
    "tectrix.dev",
    "Joran",
    "Hennion",
    "web development",
    "frontend developer",
    "portfolio",
    "creative projects",
    "Next.js projects",
    "React developer",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.tectrix.dev/about",
  },
  authors: [{ name: "Joran Hennion" }],
  creator: "Joran Hennion",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <Scrollbody className="backdrop-blur-lg">
        <MotionConfig reducedMotion="user">
          <main>
            <Tagline line="About me" />
            <Navbar
              items={[
                { url: "/", label: "home" },
                { url: "/blog", label: "blog" },
              ]}
            />
            <Content>{children}</Content>
          </main>
        </MotionConfig>
        <Analytics />
        <SpeedInsights />
        <FooterShadow />
        <Footer />
      </Scrollbody>
    </html>
  );
}
