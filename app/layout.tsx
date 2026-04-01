import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-ui" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "UConn A Minor | Premier Gender Inclusive A-Cappella",
  description: "Official website for UConn A Minor, UConn's premier gender inclusive a-cappella group from the Asian American Cultural Center.",
  openGraph: {
    title: "UConn A Minor",
    description: "Peace, Love, A Minor. Explore performances, members, repertoire, alumni, and booking details.",
    url: "https://uconnaminor.example.com",
    siteName: "UConn A Minor",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="texture bg-sky-100 text-cocoa-900 antialiased">
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
