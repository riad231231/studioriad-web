import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Navbar } from "@/components/Navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SocialProof } from "@/components/SocialProof";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://studioriad.com"),
  title: "Studioriad | Photographe & Cinéaste de Mariage | Prestige & Cinéma",
  description: "Duo créatif de prestige spécialisé dans le film de mariage cinématographique et la photographie d'art à Paris. L'excellence du mariage oriental et international.",
  verification: {
    google: [
      "Pi6ympVQdiabD-ORgcertQN4VQacV7NPmKnNtHXNU7c",
      "D6rGlF_Wweuy7UD06ZhiyLr8X_ADGJwKdgzUz3QuVEo"
    ],
  },
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "Studioriad | Photographe & Cinéaste de Mariage de Prestige",
    description: "L'art de raconter votre histoire au format cinéma. Excellence en photo et vidéo de mariage à Paris.",
    url: "https://studioriad.com",
    siteName: "Studioriad",
    images: [
      {
        url: "/stills/photographe-videaste-mariage-paris.jpg",
        width: 1200,
        height: 630,
        alt: "Studioriad - Photographe & Cinéaste de Mariage Paris",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Studioriad | Photographe & Cinéaste de Mariage Paris",
    description: "Reportage photo et film de mariage cinématographique de prestige.",
    images: ["/stills/photographe-videaste-mariage-paris.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${cormorant.variable} ${inter.variable} antialiased bg-[#F9F9F7] text-[#1A1A1A]`}
        suppressHydrationWarning
      >
        <Navbar />
        <SmoothScroll>{children}</SmoothScroll>
        <WhatsAppButton />
        <SocialProof />
      </body>
    </html>
  );
}
