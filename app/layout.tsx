import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"),
  title: {
    default: "NextGrid LittleStyle",
    template: "%s | NextGrid LittleStyle",
  },
  description:
    "Premium baby clothing designed with comfort, softness, and style.",
  applicationName: "NextGrid LittleStyle",
  keywords: ["baby clothes", "kids fashion", "NextGrid", "LittleStyle"],
  authors: [{ name: "NextGrid Team" }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "NextGrid LittleStyle",
    description: "Premium baby clothing store",
    url: "/",
    siteName: "NextGrid LittleStyle",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NextGrid LittleStyle",
    description: "Premium baby clothing store",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-br from-gray-50 via-white to-blue-50 text-gray-900 antialiased`}
      >
        {/* ✅ PROVIDER wraps EVERYTHING */}
        <CartProvider>

          {/* 🔑 SKIP LINK */}
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 bg-white px-4 py-2 rounded shadow"
          >
            Skip to content
          </a>

          {/* 🌟 HEADER */}
          <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b shadow-sm">
            <Navbar />
          </header>

          {/* 🌐 APP */}
          <div className="flex flex-col min-h-screen">

            {/* MAIN */}
            <main
              id="main"
              role="main"
              className="flex-1 px-4 md:px-6 py-8"
            >
              <div className="max-w-7xl mx-auto w-full">
                {children}
              </div>
            </main>

            {/* 📦 FOOTER */}
            <footer className="bg-white border-t" role="contentinfo">
              <div className="max-w-7xl mx-auto px-6 py-10">
                <Footer />
              </div>
            </footer>

          </div>

          {/* 📈 Vercel Analytics */}
          <Analytics />

        </CartProvider>
      </body>
    </html>
  );
}