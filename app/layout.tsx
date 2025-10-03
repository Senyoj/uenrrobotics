import type { Metadata } from "next";
import { Boldonse, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const boldonse = Boldonse({
  variable: "--font-boldonse",
  weight: "400", // Boldonse has a single weight
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UENR ROBOTICS CLUB",
  description: "A smarter world",
  icons: {
    icon: "/logo.png", 
    shortcut: "/logo.png",
    apple: "/logo.png", 
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${boldonse.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
