import type { Metadata } from "next";
import { Inter, Calistoga } from 'next/font/google';
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ['latin'], variable: "--font-sans"});
const calistoga = Calistoga({ subsets: ['latin'], variable: "--font-serif", weight:["400"]});


export const metadata: Metadata = {
  title: "Vishank's Portfolio",
  description: "Developer Portfolio Website of Vishank Goel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(
        inter.variable, 
        calistoga.variable, 
        "bg-gray-900 text-white antialiased font-sans"
        )}
        >
          {children}
          <SpeedInsights />
        </body>
        <GoogleAnalytics gaId="G-F9T4LPYWLJ" />
    </html>
  );
}
