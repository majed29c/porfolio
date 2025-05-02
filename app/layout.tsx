import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SelectedProvider } from "@/context/SelectedContext";

import Navbar from "@/components/Navbar/Navbar";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { useEffect, useState } from "react";

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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Set to true for screen widths <= 768px
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Mlogo.png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} bg-black`}>
        <SelectedProvider>
          <Navbar />
          {!isMobile && <BackgroundBeams className="fixed z-0" />}
          {children}
        </SelectedProvider>
      </body>
    </html>
  );
}
