import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://naipunyafoods.com"),
  title: {
    default: "Naipunya Foods – Pure by Nature | First Crush Coconut Oil & Deepam Oil",
    template: "%s | Naipunya Foods",
  },
  description:
    "Naipunya Foods offers premium First Crush Coconut Oil and Deepam Oil. 100% natural, pure, and edible. Trusted by families across Kerala.",
  keywords: [
    "Naipunya Foods",
    "First Crush Coconut Oil",
    "Deepam Oil",
    "Pure Coconut Oil",
    "Kerala Coconut Oil",
    "Natural Oil",
    "Edible Oil",
    "Lamp Oil",
    "Puja Oil",
  ],
  authors: [{ name: "Naipunya Foods" }],
  creator: "Naipunya Foods",
  publisher: "Naipunya Foods",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://naipunyafoods.com",
    siteName: "Naipunya Foods",
    title: "Naipunya Foods – Pure by Nature",
    description:
      "Premium First Crush Coconut Oil & Deepam Oil. 100% natural, pure, and trusted by families.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Naipunya Foods – Pure by Nature",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Naipunya Foods – Pure by Nature",
    description: "Premium First Crush Coconut Oil & Deepam Oil.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Naipunya Foods",
  url: "https://naipunyafoods.com",
  logo: "https://naipunyafoods.com/logo.png",
  description:
    "Naipunya Foods is dedicated to producing premium quality natural food products including First Crush Coconut Oil and Deepam Oil.",
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    areaServed: "IN",
    availableLanguage: ["English", "Malayalam"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
