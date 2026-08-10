import type { Metadata } from "next";
import { DM_Sans, Cormorant_Garamond, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { BackToTop } from "@/components/layout/back-to-top";
import { cn } from "@/lib/utils";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "BGS Public School & PU College — Sidlaghatta",
    template: "%s | BGS Public School & PU College",
  },
  description:
    "BGS Public School & PU College, Sidlaghatta — a premier institution offering education from LKG to 2nd PU (PCMB, PCMCs, Commerce) with integrated CET, NEET & JEE coaching.",
  keywords: [
    "BGS Public School",
    "PU College Sidlaghatta",
    "PCMB",
    "PCMCs",
    "Commerce",
    "CET coaching",
    "NEET coaching",
    "best school Sidlaghatta",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={cn("h-full", "antialiased", "scroll-smooth", dmSans.variable, cormorant.variable, spaceGrotesk.variable, "font-sans")}
    >
      <body className="min-h-full flex flex-col">
        <ScrollProgress />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}

