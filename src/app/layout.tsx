import type { Metadata } from "next";
import { Pinyon_Script, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

const pinyonScript = Pinyon_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pinyon-script",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cinnia & Henry",
  description: "Join us for our wedding celebration in Jeju, South Korea — May 14, 2026.",
  openGraph: {
    title: "Cinnia & Henry",
    description: "Join us for our wedding celebration in Jeju, South Korea — May 14, 2026.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${pinyonScript.variable} ${cormorant.variable}`}>
      <body className="min-h-screen flex flex-col bg-cream">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
