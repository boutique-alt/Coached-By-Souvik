import type { Metadata } from "next";
import Script from "next/script";
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
  metadataBase: new URL("https://www.coachbysouvik.com"),
  title: "SOUVIK | Fitness Coach in Kolkata & Online",
  description: "Individualised coaching for people who want more than a generic workout plan. Strength, performance, movement, nutrition and real-world guidance.",
  keywords: [
    "Souvik Fitness Coach",
    "Personal Trainer Kolkata",
    "Strength Training Kolkata",
    "Online Fitness Coach India",
    "Biomechanics and Kinesiology",
    "Fat Loss & Muscle Building Coach",
  ],
  authors: [{ name: "Souvik" }],
  creator: "Souvik",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.coachbysouvik.com",
    title: "COACHED BY SOUVIK | Elite Strength & Physique Coach",
    description: "Individualised coaching for people who want more than a generic workout plan. Strength, movement, nutrition and real-world transformation.",
    siteName: "Coached By Souvik",
    images: [
      {
        url: "https://www.coachbysouvik.com/og-image-v4.jpg",
        secureUrl: "https://www.coachbysouvik.com/og-image-v4.jpg",
        type: "image/jpeg",
        width: 1200,
        height: 630,
        alt: "Coached By Souvik - Elite Strength & Physique Coach",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "COACHED BY SOUVIK | Elite Strength & Physique Coach",
    description: "Individualised coaching for people who want more than a generic workout plan. Strength, movement, nutrition and real-world transformation.",
    images: ["https://www.coachbysouvik.com/og-image-v4.jpg"],
  },
  icons: {
    icon: "/logo.jpg",
    shortcut: "/logo.jpg",
    apple: "/logo.jpg",
  },
};

import { BookingProvider } from "@/context/BookingContext";
import ConsultationCartModal from "@/components/ConsultationCartModal";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Script
          src="https://checkout.razorpay.com/v1/checkout.js"
          strategy="lazyOnload"
        />
        <BookingProvider>
          {children}
          <ConsultationCartModal />
        </BookingProvider>
      </body>
    </html>
  );
}
