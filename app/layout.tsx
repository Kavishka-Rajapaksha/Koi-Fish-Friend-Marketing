import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://koifishfriend.local"),
  title: "KoiFishFriend | IoT Aquaculture Management System",
  description:
    "Smart IoT aquaculture system with automated feeding, floating monitoring, water quality monitoring, fish mortality detection, budgeting, and alerts.",
  keywords: [
    "KoiFishFriend",
    "IoT aquaculture",
    "smart fish farming",
    "automated feeding",
    "water quality monitoring",
    "fish mortality detection",
  ],
  openGraph: {
    title: "KoiFishFriend | IoT Aquaculture Management System",
    description:
      "Solar-powered IoT aquaculture platform for automated feeding, floating monitoring, alerts, budgeting, and dashboard control.",
    images: ["/images/floating-device-close.jpg"],
  },
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
      <body className="min-h-full bg-white text-slate-900">{children}</body>
    </html>
  );
}
