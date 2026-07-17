import type { Metadata } from "next";
import { Unbounded, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import React from "react";

const unboundedFont = Unbounded({
  variable: "--font-unbounded",
  subsets: ['latin', 'cyrillic'],
});

const montserratFont = Montserrat({
  variable: "--font-montserrat",
  subsets: ['latin', 'cyrillic'],
});

export const metadata: Metadata = {
  title: "Périphérie",
  description: "Вільний журнал про українську альтернативну та андеграундну музичну сцену",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="uk"
      className={`${unboundedFont.variable} ${montserratFont.variable} h-full antialiased bg-page text-content-primary`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        <main className="flex flex-col px-6 md:px-0 max-w-page mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
