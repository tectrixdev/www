import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Scrollbody from "@/components/scrollbg";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import FooterShadow from "@/components/footershadow";
import Footer from "@/components/footer";
import { MotionConfig } from "motion/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Joran Hennion",
  description: "TecTrix'/joran's portofolio",
  generator: "Next.js",
  applicationName: "Tectrix.dev",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Joran Hennion",
    "jojommeke",
    "tectrix",
    "TecTrix",
    "tectrix.dev",
    "Joran",
    "Hennion",
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
    <html lang="en" className="overflow-x-hidden">
      <head>
        <meta name="darkreader-lock" />
      </head>
      <MotionConfig reducedMotion="user">
        <Scrollbody>
          {children}
          <Analytics />
          <SpeedInsights />
          <FooterShadow />
          <Footer />
        </Scrollbody>
      </MotionConfig>
    </html>
  );
}
