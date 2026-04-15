import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "XessOne Status — System Status",
  description:
    "Real-time status of XessOne infrastructure across 32 global nodes. Monitor uptime, latency, and service health.",
  icons: {
    icon: "/icon",
    apple: "/apple-icon",
  },
  metadataBase: new URL("https://status.xessone.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://status.xessone.com",
    siteName: "XessOne Status",
    title: "XessOne Status — System Status",
    description:
      "Real-time status of XessOne infrastructure across 32 global nodes.",
  },
  robots: {
    index: true,
    follow: true,
  },
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
