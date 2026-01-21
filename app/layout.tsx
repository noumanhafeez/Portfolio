import Providers from "@/containers/providers";
import Navbar from "@/components/navbar";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        {/* Background Gradient */}
        <div
          aria-hidden
          className="fixed inset-0 -z-10 bg-gradient-to-r from-[#CDB4DB] via-[#FFC8DD] via-[#FFAFCC] via-[#BDE0FE] to-[#A2D2FF]"
        />

        <Providers>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
