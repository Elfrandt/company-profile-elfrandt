import { Suspense } from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Container from "../components/ui/Container";
import Logo from "../components/ui/Logo";
import navStyles from "../components/layout/Navbar.module.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: { default: "Luxion", template: "%s | Luxion" },
  description: "Luxion: Start the Venture for a Brighter Future",
};

function NavbarFallback() {
  return (
    <header className={navStyles.header}>
      <Container>
        <nav className={navStyles.nav} aria-label="Main navigation">
          <Logo />
        </nav>
      </Container>
    </header>
  );
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <Suspense fallback={<NavbarFallback />}>
          <Navbar />
        </Suspense>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}