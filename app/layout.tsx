import Providers from "@/containers/providers";
import Navbar from "@/components/navbar";
import ThemeSwitch from "@/components/theme-controller";
import { Sora } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${sora.variable} font-Sora flex flex-col bg-gray-50 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 antialiased`}
      >
        {/* Gradient Background */}
        <div
          className="bg-[#fff7cc] absolute top-[-6rem] flex-1 -z-[10] right-[11rem] 
     h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] 
     dark:bg-[#e6c200]"
        ></div>

        {/* Left blob */}
        <div
          className="bg-[#fff4b3] absolute top-[-1rem] -z-[10] flex-1 left-[-35rem] 
     h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] 
     md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] 
     dark:bg-[#d4af37]"
        ></div>
        {/* Right blob: all yellow background */}
        <div
          className="bg-yellow-300 absolute top-0 right-0 flex-1 -z-[10] 
     h-full w-full"
        ></div>

        <Providers>
          <Navbar />
          {children}
          <ThemeSwitch />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
