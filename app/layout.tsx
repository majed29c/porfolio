import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SelectedProvider } from "@/context/SelectedContext";

import Navbar from "@/components/Navbar/Navbar";
import { BackgroundBeams } from "@/components/ui/background-beams";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Majed Shmait Portfolio",
  description: "Portfolio of Majed Shmait",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Mlogo.png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} bg-black`}>
        <SelectedProvider>
          <Navbar />
          <BackgroundBeams className="fixed z-0 hidden md:flex" />
          {children}
        </SelectedProvider>
      </body>
    </html>
  );
}
