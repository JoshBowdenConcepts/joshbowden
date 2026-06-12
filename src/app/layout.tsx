import type { Metadata, Viewport } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://joshbowdenconcepts.com";

export const viewport: Viewport = {
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Josh Bowden — Design Systems & Accessibility",
    template: "%s | Josh Bowden",
  },
  description:
    "Technical Lead and Engineering Mentor specializing in design systems, accessibility, and frontend architecture. Based in Greater Boston.",
  openGraph: {
    title: "Josh Bowden — Design Systems & Accessibility",
    description:
      "Technical Lead and Engineering Mentor specializing in design systems, accessibility, and frontend architecture.",
    type: "website",
    url: siteUrl,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Josh Bowden — Design Systems & Accessibility",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Josh Bowden — Design Systems & Accessibility",
    description:
      "Technical Lead and Engineering Mentor specializing in design systems, accessibility, and frontend architecture.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
