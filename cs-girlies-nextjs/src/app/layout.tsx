import "./globals.css";
import { type Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Computer Science Girlies",
  description: "Empowering Gen Z women in tech around the world to chase their dreams.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <main className="min-h-screen bg-black text-white">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
