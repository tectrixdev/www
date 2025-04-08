import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import Scrollbody from "@/components/scrollbg";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import FooterShadow from "@/components/footershadow";
import Footer from "@/components/footer";
import { MotionConfig } from "motion/react";
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
  title: "Blog Posts - tectrix.dev",
  description: "blog posts on tectrix.dev | Joran Hennion's blog",
  generator: "Next.js",
  applicationName: "Blog - tectrix.dev",
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
    canonical: "https://www.tectrix.dev/blog",
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
      <head>
        <meta name="darkreader-lock" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
      </head>
      <Scrollbody>
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
        <Analytics />
        <SpeedInsights />
        <FooterShadow />
        <Footer />
      </Scrollbody>
    </html>
  );
}
