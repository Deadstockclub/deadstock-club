import PageTransition from "@/components/PageTransition";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import BackgroundGlow from "@/components/layout/BackgroundGlow";
import CornerFrame from "@/components/layout/CornerFrame";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DEADSTOCK",
  description: "Curated hats for those who know.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="bg-black text-white overflow-x-hidden">
        <BackgroundGlow>
          <CornerFrame />

          <PageTransition>{children}</PageTransition>
        </BackgroundGlow>
      </body>
    </html>
  );
}
