import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Scrollbody from "@/components/scrollbg";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TecTrix",
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
    <html lang="en">
      <head>
        <meta name="darkreader-lock" />
      </head>
      <Scrollbody>{children}</Scrollbody>
    </html>
  );
}
