import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/app/navbar";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { JetBrains_Mono } from "next/font/google";

const jetBrains = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "natively",
  description: "Beautiful React Native Components",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark" lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${jetBrains.variable}`}>
        <Navbar />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
