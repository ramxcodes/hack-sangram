import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const Wotfard = localFont({
  src: [
    {
      path: "../../public/fonts/wotfard-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/wotfard-medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-Wotfard",
});

export const metadata: Metadata = {
  title: "Hack Sangraam | MU-ACM",
  description:
    "Hack Sangraam is an ONLINE coding competition where you'll get to compete with students all over India!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${Wotfard.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
