import Providers from "@/containers/providers";
import Navbar from "@/components/navbar";
// import ThemeSwitch from "@/components/theme-controller";
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
        <div
          className="bg-gradient-to-tr from-[#f5f7fa] via-[#e6f3ff] to-[#ffffff] 
    absolute top-0 right-0 flex-1 -z-[10] h-full w-full"
        ></div>

        <Providers>
          <Navbar />
          {children}
          {/* <ThemeSwitch /> */}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
