import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/language-provider";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const siteUrl = "https://heritiana-jeremia.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Heritiana Jeremia — Web Designer & Intégrateur Front-end",
    template: "%s — Heritiana Jeremia",
  },
  description:
    "Portfolio de Heritiana Jeremia, Web Designer et intégrateur front-end (UI/UX, React, WordPress, Figma) basé à Antananarivo, Madagascar. Interfaces modernes, rapides et accessibles.",
  keywords: [
    "Heritiana Jeremia",
    "Web Designer",
    "Intégrateur Front-end",
    "UI/UX Designer",
    "React",
    "Next.js",
    "WordPress",
    "Figma",
    "Madagascar",
    "Antananarivo",
    "Portfolio",
  ],
  authors: [{ name: "Heritiana Jeremia" }],
  creator: "Heritiana Jeremia",
  icons: {
    icon: "/img/icon/logo.png",
    apple: "/img/icon/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    alternateLocale: "en_US",
    url: siteUrl,
    siteName: "Heritiana Jeremia",
    title: "Heritiana Jeremia — Web Designer & Intégrateur Front-end",
    description:
      "Web Designer et intégrateur front-end. Interfaces modernes, rapides et accessibles — du design Figma au code.",
    images: [{ url: "/img/profile-hero.png", width: 800, height: 800 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Heritiana Jeremia — Web Designer & Intégrateur Front-end",
    description:
      "Web Designer et intégrateur front-end basé à Madagascar. UI/UX, React, WordPress, Figma.",
    images: ["/img/profile-hero.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a192f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={spaceGrotesk.variable} suppressHydrationWarning>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
