import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import {
  SITE_AUTHOR,
  SITE_DESCRIPTION,
  SITE_ICON_PATH,
  SITE_NAME,
  SITE_URL,
} from "@/lib/seo";
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
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: {
    default: "Pingo - API scratchpad for your macOS menu bar",
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Pingo",
    "macOS API client",
    "API scratchpad",
    "HTTP client for Mac",
    "menu bar app",
    "REST API client",
    "open source macOS app",
  ],
  authors: [SITE_AUTHOR],
  creator: SITE_AUTHOR.name,
  publisher: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      {
        url: SITE_ICON_PATH,
        sizes: "256x256",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    title: "Pingo - API scratchpad for your macOS menu bar",
    description: SITE_DESCRIPTION,
    url: "/",
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/SocialPreview.png",
        width: 1200,
        height: 630,
        alt: "Pingo - Small API requests. Kept simple.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pingo - API scratchpad for your macOS menu bar",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/SocialPreview.png",
        width: 1200,
        height: 630,
        alt: "Pingo - Small API requests. Kept simple.",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
