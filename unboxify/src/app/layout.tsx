import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Unboxify — Futuristic 3D Digital Art Marketplace",
  description:
    "Unboxify is a premium marketplace curating immersive 3D digital art. Discover, collect, and download visionary creations crafted with cutting-edge 3D digital design.",
  keywords: [
    "digital art",
    "3d design",
    "marketplace",
    "unboxify",
    "digital downloads",
    "futuristic art",
  ],
  authors: [{ name: "Unboxify" }],
  metadataBase: new URL("https://agentic-f3664458.vercel.app"),
  openGraph: {
    title: "Unboxify — Futuristic 3D Digital Art Marketplace",
    description:
      "Explore immersive 3D digital artworks and instantly download premium assets for your next creative project.",
    url: "https://agentic-f3664458.vercel.app",
    siteName: "Unboxify",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Unboxify — Futuristic 3D Digital Art Marketplace",
    description:
      "Explore immersive 3D digital artworks and instantly download premium assets for your next creative project.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body>
        <div className="app-background" />
        <SiteHeader />
        <main className="app-main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
