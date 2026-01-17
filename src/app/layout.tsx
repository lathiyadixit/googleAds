import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  title: "Google Ads POC",
  description: "Next.js Google Ads Integration POC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense Script (TEST ID for now) */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3940256099942544"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Page Content */}
        {children}

        {/* Footer – REQUIRED FOR ADSENSE */}
        <footer className="mt-12 border-t py-6 text-center text-sm text-gray-500">
          <a href="/privacy" className="mx-2 hover:underline">
            Privacy Policy
          </a>
          <a href="/terms" className="mx-2 hover:underline">
            Terms
          </a>
          <a href="/about" className="mx-2 hover:underline">
            About
          </a>
          <a href="/contact" className="mx-2 hover:underline">
            Contact
          </a>
        </footer>
      </body>
    </html>
  );
}
