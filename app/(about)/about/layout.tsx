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
  applicationName: "Tectrix.dev",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Joran Hennion",
    " jojommeke",
    " tectrix",
    " TecTrix",
    " tectrix.dev",
    " Joran",
    " Hennion",
  ],
  authors: [{ name: "Joran Hennion" }],
  creator: "Joran Hennion",
  publisher: "Joran Hennion",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://tectrix.dev"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="darkreader-lock" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
      </head>
      <Scrollbody>
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
