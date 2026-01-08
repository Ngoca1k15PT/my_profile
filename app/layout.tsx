import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DevMobile | React Native Developer | Mobile App Specialist",
  description: "Mobile Developer with 4 years of React Native expertise. Building high-quality iOS and Android apps with performance, scalability, and great UX in mind.",
  keywords: ["React Native Developer", "Mobile App Developer", "iOS Developer", "Android Developer", "TypeScript", "Redux"],
  authors: [{ name: "DevMobile" }],
  openGraph: {
    title: "DevMobile | React Native Developer",
    description: "Building high-quality mobile apps with performance, scalability, and great UX in mind.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@DevMobile",
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
        className={`${dmSans.variable} ${spaceGrotesk.variable} font-body antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
