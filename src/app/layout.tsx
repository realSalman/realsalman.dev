import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import LeftSidebar from "@/components/LeftSidebar";
import NavBar from "@/components/NavBar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "realSalman",
  description: "Builder. Shipper.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${jetbrainsMono.variable} min-h-screen md:h-screen md:overflow-hidden antialiased bg-background text-textBody`}
    >
      <body className="min-h-screen md:h-full flex flex-col md:flex-row">
        <LeftSidebar />
        <main className="flex-1 flex flex-col md:h-full md:overflow-hidden relative">
          <NavBar />
          <div className="flex-1 md:overflow-y-auto px-6 pt-8 md:pt-32 md:px-12 lg:px-24 pb-24 w-full">
            <div className="max-w-5xl mx-auto w-full">
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
