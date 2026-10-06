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
  title: "Galvion Group | Building What's Next",
  description:
    "Galvion Group powers enterprise software solutions, ad agency strategy, telecom communications, stock research & financial growth, and global money exchange. Building what's next in digital innovation.",
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Galvion Group | Building What's Next",
    description:
      "Empowering global enterprises with software development, ad agency strategies, telecom infrastructure, stock research, and money exchange solutions.",
    url: "https://www.galviongroup.com",
    siteName: "Galvion Group",
    images: [
      {
        url: "/icon.png",
        width: 800,
        height: 800,
        alt: "Galvion Group Emblem",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Galvion Group | Building What's Next",
    description: "Building what's next in software, finance, advertising, telecom, and global money exchange.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-neutral-950 text-white font-sans">{children}</body>
    </html>
  );
}
