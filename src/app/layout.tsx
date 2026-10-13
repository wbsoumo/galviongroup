import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
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
  metadataBase: new URL("https://www.galviongroup.com"),
  title: {
    template: "%s | Galvion Group",
    default: "Galvion Group | Building What Moves Business Forward",
  },
  description:
    "Galvion Group is a diversified enterprise corporate group bringing together scalable software engineering, strategic marketing, telecommunications infrastructure, financial research, and fintech solutions.",
  icons: {
    icon: "/images/galvion-emblem.png",
    shortcut: "/images/galvion-emblem.png",
    apple: "/images/galvion-emblem.png",
  },
  openGraph: {
    title: "Galvion Group | Building What Moves Business Forward",
    description:
      "One Group. Multiple Capabilities. A Shared Vision for Growth. Enterprise software, marketing intelligence, telecom networks, quantitative research, and fintech infrastructure.",
    url: "https://www.galviongroup.com",
    siteName: "Galvion Group",
    images: [
      {
        url: "/images/galvion-emblem.png",
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
    title: "Galvion Group | Building What Moves Business Forward",
    description:
      "One Group. Multiple Capabilities. A Shared Vision for Growth.",
    images: ["/images/galvion-emblem.png"],
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#03010E] text-[#DAD4DE] font-sans selection:bg-[#937AFF] selection:text-white relative overflow-x-hidden">
        <Navbar />
        <main className="flex-1 pt-[88px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
