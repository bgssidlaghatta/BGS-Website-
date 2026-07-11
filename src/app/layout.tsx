import type { Metadata } from "next";
import { Inter, Fraunces, Space_Grotesk, Geist } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
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
      className={cn("h-full", "antialiased", "scroll-smooth", inter.variable, fraunces.variable, spaceGrotesk.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

