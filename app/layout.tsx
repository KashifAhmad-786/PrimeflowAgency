import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PrimeFlow Agency — AI-Powered Digital Agency",
  description:
    "PrimeFlow Agency delivers premium web development, AI chatbots, automation, landing pages, and UI/UX design solutions for businesses in Pakistan and worldwide. No risk. Pay when satisfied.",
  keywords: [
    "digital agency",
    "web development",
    "AI chatbots",
    "automation",
    "landing pages",
    "UI/UX design",
    "Pakistan",
    "PrimeFlow",
  ],
  authors: [{ name: "PrimeFlow Agency" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://primeflowagency.com",
    title: "PrimeFlow Agency — AI-Powered Digital Agency",
    description:
      "From AI chatbots to stunning web apps — PrimeFlow delivers premium solutions for businesses worldwide. No risk. Pay when satisfied.",
    siteName: "PrimeFlow Agency",
  },
  twitter: {
    card: "summary_large_image",
    title: "PrimeFlow Agency — AI-Powered Digital Agency",
    description:
      "From AI chatbots to stunning web apps — PrimeFlow delivers premium solutions for businesses worldwide.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
