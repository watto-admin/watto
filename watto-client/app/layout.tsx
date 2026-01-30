import type { Metadata } from "next";
import { Comfortaa, Bungee, Anta } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScrolling from "@/components/SmoothScrolling";
import "./globals.css";

const bungee = Bungee({
  variable: "--font-bungee",
  subsets: ["latin"],
  weight: "400",
});

const anta = Anta({
  variable: "--font-anta",
  subsets: ["latin"],
  weight: "400",
});

const comfortaa = Comfortaa({
  variable: "--font-comfortaa",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Watto - Your Brand, Hydrated",
  description: "The new prime real estate for advertising.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bungee.variable} ${anta.variable} ${comfortaa.variable} antialiased bg-black text-white`}
      >
        <SmoothScrolling>
          <Navbar />
          {children}
          <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}
