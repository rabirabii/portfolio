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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://wahyubudiman.com",
  ),
  title: {
    default: "Wahyu Budiman — System Analyst / Product Engineer",
    template: "%s — Wahyu Budiman",
  },
  description:
    "Portfolio of Wahyu Budiman, a Jakarta-based System Analyst and Product Engineer building operational systems, governance platforms, and technical product workflows.",
  applicationName: "Wahyu Budiman Portfolio",
  authors: [{ name: "Wahyu Budiman" }],
  creator: "Wahyu Budiman",
  publisher: "Wahyu Budiman",
  keywords: [
    "Wahyu Budiman",
    "System Analyst",
    "Product Engineer",
    "Jakarta Product Engineer",
    "Portfolio",
    "Software Engineering",
    "Business Systems",
    "KPI Governance",
    "Calibration Management System",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Wahyu Budiman",
    title: "Wahyu Budiman — System Analyst / Product Engineer",
    description:
      "Apollo-era mission archive portfolio for systems, product engineering, and operational governance work.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wahyu Budiman — System Analyst / Product Engineer",
    description:
      "Portfolio of Wahyu Budiman, System Analyst / Product Engineer based in Jakarta.",
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
