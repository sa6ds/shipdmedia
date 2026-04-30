import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://shipdmedia.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Shipd Media — Influencer marketing that scales reach",
    template: "%s · Shipd Media",
  },
  description:
    "Strategic influencer partnerships and creator campaigns that connect brands with engaged audiences—measurable reach, creative storytelling, and growth-focused execution.",
  keywords: [
    "influencer marketing",
    "creator partnerships",
    "brand campaigns",
    "social campaigns",
    "Shipd Media",
  ],
  authors: [{ name: "Shipd Media" }],
  creator: "Shipd Media",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Shipd Media",
    title: "Shipd Media — Influencer marketing that scales reach",
    description:
      "Strategic influencer partnerships that connect your brand with engaged audiences—campaign strategy, creator sourcing, and performance-focused execution.",
  },
  twitter: {
    card: "summary",
    title: "Shipd Media — Influencer marketing that scales reach",
    description:
      "Strategic influencer partnerships and creator campaigns built for measurable reach and engagement.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/shipd-mark.svg", type: "image/svg+xml" }],
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
        className={`${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
