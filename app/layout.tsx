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
  title: "SOUVIK | Fitness Coach in Kolkata",
  description: "Individualised coaching for people who want more than a generic workout plan. Strength, performance, movement, nutrition and real-world guidance.",
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
        <BookingProvider>
          {children}
          <ConsultationCartModal />
        </BookingProvider>
      </body>
    </html>
  );
}
