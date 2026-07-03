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
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"),

  title: {
    default: "NextGrid LittleStyle",
    template: "%s | NextGrid LittleStyle",
  },

  description:
    "Premium baby clothing designed with comfort, softness, luxury, and modern style.",

  keywords: [
    "baby clothing",
    "kids fashion",
    "premium kids wear",
    "LittleStyle",
    "NextGrid",
    "baby fashion",
    "luxury kids clothing",

    // Baby Clothing
    "Baby Clothes",
    "Newborn Clothing",
    "Infant Clothing",
    "Toddler Clothes",
    "Baby Outfits",
    "Baby Wear",
    "Baby Apparel",
    "Organic Baby Clothes",
    "Cotton Baby Clothes",
    "Soft Baby Clothing",
    "Comfortable Baby Wear",
    "Designer Baby Clothes",
    "Stylish Baby Clothes",
    "Baby Essentials",
    "Baby Wardrobe",
    "Baby Rompers",
    "Baby Onesies",
    "Baby Bodysuits",
    "Baby Pajamas",
    "Baby Sleepwear",
    "Baby Dresses",
    "Baby Tops",
    "Baby Bottoms",
    "Baby Jackets",
    "Baby Sweaters",
    "Baby Socks",
    "Baby Shoes",
    "Baby Accessories",
    "Baby Caps",
    "Baby Bibs",

    // Kids Fashion
    "Kids Clothing",
    "Kids Wear",
    "Children's Clothing",
    "Children's Fashion",
    "Boys Clothing",
    "Girls Clothing",
    "Kids Apparel",
    "Fashion for Kids",
    "Trendy Kids Wear",
    "Modern Kids Fashion",
    "Stylish Kids Clothes",
    "Kids Outfit Ideas",
    "Casual Kids Wear",
    "Party Wear for Kids",
    "Festive Kids Wear",
    "Everyday Kids Clothing",
    "Premium Kids Fashion",
    "Luxury Kids Wear",
    "Designer Kids Clothing",
    "Kids Boutique",

    // Premium & Luxury
    "Luxury Baby Clothing",
    "Luxury Children's Clothing",
    "Premium Baby Wear",
    "Premium Children's Fashion",
    "Exclusive Kids Wear",
    "High Quality Kids Clothes",
    "Elegant Kids Fashion",
    "Luxury Toddler Clothing",
    "Premium Cotton Clothing",
    "Handcrafted Baby Clothes",
    "Sustainable Kids Wear",
    "Eco Friendly Baby Clothing",
    "Organic Kids Clothing",
    "Ethical Kids Fashion",
    "Minimalist Kids Fashion",

    // Seasonal Collections
    "Summer Baby Clothes",
    "Winter Baby Clothes",
    "Spring Kids Fashion",
    "Autumn Kids Collection",
    "Rainy Season Kids Wear",
    "Holiday Kids Collection",
    "Christmas Kids Clothing",
    "Birthday Outfits for Kids",
    "Vacation Kids Wear",
    "Beachwear for Kids",
    "Warm Baby Clothing",
    "Lightweight Baby Clothes",
    "Festive Collection",
    "New Arrivals Kids Fashion",
    "Limited Edition Kids Wear",

    // Clothing Categories
    "Kids T-Shirts",
    "Kids Shirts",
    "Kids Jeans",
    "Kids Shorts",
    "Kids Skirts",
    "Kids Dresses",
    "Kids Hoodies",
    "Kids Sweatshirts",
    "Kids Jackets",
    "Kids Sweaters",
    "Kids Tracksuits",
    "Kids Activewear",
    "Kids Nightwear",
    "Kids Pajamas",
    "Kids School Wear",
    "Kids Ethnic Wear",
    "Kids Formal Wear",
    "Kids Swimwear",
    "Kids Accessories",
    "Matching Family Outfits",

    // Shopping Keywords
    "Buy Baby Clothes Online",
    "Shop Kids Clothing",
    "Online Kids Fashion",
    "Best Baby Clothing Store",
    "Affordable Kids Clothes",
    "Premium Kids Clothing Online",
    "Luxury Baby Boutique",
    "Kids Fashion Store",
    "Baby Clothing Brand",
    "Children's Clothing Store",
    "Online Baby Boutique",
    "Baby Clothing Sale",
    "Kids Clothing Deals",
    "Kids Fashion Collection",
    "New Baby Collection",

    // Parents & Lifestyle
    "New Parent Essentials",
    "Baby Gift Ideas",
    "Baby Shower Gifts",
    "Newborn Essentials",
    "Toddler Essentials",
    "Parenting Lifestyle",
    "Kids Lifestyle",
    "Baby Care Essentials",
    "Comfort First Fashion",
    "Safe Baby Clothing",
    "Hypoallergenic Baby Clothes",
    "Breathable Baby Clothing",
    "Gentle on Baby Skin",
    "Premium Parenting",
    "Family Fashion",

    // Sustainability
    "Organic Cotton Baby Clothes",
    "Eco Friendly Baby Wear",
    "Sustainable Baby Fashion",
    "Ethically Made Kids Clothes",
    "Natural Fabric Baby Clothing",
    "Recycled Fabric Kids Wear",
    "Responsible Fashion",
    "Slow Fashion for Kids",
    "Eco Conscious Parenting",
    "Green Kids Fashion",

    // Brand Keywords
    "LittleStyle Kids",
    "LittleStyle Baby",
    "LittleStyle Collection",
    "LittleStyle Fashion",
    "LittleStyle Boutique",
    "LittleStyle Clothing",
    "LittleStyle Luxury",
    "LittleStyle Premium",
    "LittleStyle Online Store",
    "LittleStyle Kids Wear",

    "NextGrid",
    "NextGrid Commerce",
    "NextGrid Fashion",
    "NextGrid Kids Store",
    "NextGrid Shopping",
    "NextGrid Marketplace",
    "NextGrid Online Store",
    "NextGrid Ecommerce",
    "NextGrid Collections",
    "NextGrid Retail",

    // SEO & Discoverability
    "Best Kids Fashion Brand",
    "Best Baby Clothing Brand",
    "Premium Children's Boutique",
    "Luxury Kids Boutique",
    "Cute Baby Outfits",
    "Adorable Baby Fashion",
    "Modern Baby Style",
    "Timeless Kids Fashion",
    "Fashion for Newborns",
    "Kids Clothing Trends",
    "Baby Fashion Trends",
    "Designer Children's Wear",
    "Premium Fashion for Kids",
    "Luxury Baby Boutique Online",
    "High End Kids Clothing"
  ],

  authors: [
    {
      name: "NextGrid Team",
    },
  ],

  creator: "NextGrid",

  publisher: "NextGrid",

  applicationName: "NextGrid LittleStyle",

  category: "ecommerce",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  alternates: {
    canonical: "/",
  },

  manifest: "/site.webmanifest",

  openGraph: {
    type: "website",

    locale: "en_US",

    url: "https://yourdomain.com",

    siteName: "NextGrid LittleStyle",

    title: "NextGrid LittleStyle",

    description:
      "Luxury baby fashion crafted with softness and love.",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NextGrid LittleStyle",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "NextGrid LittleStyle",

    description:
      "Premium baby clothing designed with comfort and elegance.",

    creator: "@nextgrid",

    images: ["/og-image.jpg"],
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
      {
        url: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],

    apple: [
      {
        url: "/apple-touch-icon.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body
        className={`
          ${inter.className}
          bg-black
          text-gray-900
          antialiased
          overflow-x-hidden
          selection:bg-pink-500
          selection:text-white
        `}
      >

        {/* ================= GLOBAL PROVIDER ================= */}

        <CartProvider>

          {/* ================= SKIP LINK ================= */}

          <a
            href="#main"
            className="
              sr-only
              focus:not-sr-only
              focus:fixed
              focus:top-5
              focus:left-5
              focus:z-[999]
              focus:bg-white
              focus:text-black
              focus:px-5
              focus:py-3
              focus:rounded-xl
              focus:shadow-2xl
            "
          >
            Skip to content
          </a>

          {/* ================= BACKGROUND EFFECTS ================= */}

          <div className="fixed inset-0 -z-50 overflow-hidden">

            {/* MAIN BACKGROUND */}

            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-pink-50" />

            {/* PINK GLOW */}

            <div
              className="
                absolute
                top-[-200px]
                left-[-100px]
                w-[500px]
                h-[500px]
                rounded-full
                bg-pink-400/20
                blur-[120px]
              "
            />

            {/* PURPLE GLOW */}

            <div
              className="
                absolute
                bottom-[-200px]
                right-[-100px]
                w-[500px]
                h-[500px]
                rounded-full
                bg-purple-400/20
                blur-[120px]
              "
            />

            {/* BLUE GLOW */}

            <div
              className="
                absolute
                top-[30%]
                left-[40%]
                w-[400px]
                h-[400px]
                rounded-full
                bg-blue-300/10
                blur-[100px]
              "
            />

            {/* GRID EFFECT */}

            <div
              className="
                absolute
                inset-0
                opacity-[0.03]
                [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]
                [background-size:60px_60px]
              "
            />

          </div>

          {/* ================= APP WRAPPER ================= */}

          <div className="relative flex flex-col min-h-screen">

            {/* ================= HEADER ================= */}

            <header
              className="
                sticky
                top-0
                z-50
                border-b
                border-white/20
                bg-white/70
                backdrop-blur-2xl
                shadow-[0_8px_30px_rgb(0,0,0,0.04)]
              "
            >

              {/* TOP BAR */}

              <div
                className="
                  hidden
                  lg:flex
                  items-center
                  justify-center
                  gap-3
                  py-2
                  text-xs
                  tracking-wide
                  text-gray-600
                  border-b
                  border-black/5
                  bg-gradient-to-r
                  from-pink-50
                  via-white
                  to-purple-50
                "
              >

                <span>
                  ✨ Free Shipping Over ₹999
                </span>

                <span className="w-1 h-1 rounded-full bg-gray-400" />

                <span>
                  Premium Kids Fashion
                </span>

                <span className="w-1 h-1 rounded-full bg-gray-400" />

                <span>
                  Easy 7-Day Returns
                </span>

              </div>

              {/* NAVBAR */}

              <Navbar />

            </header>

            {/* ================= MAIN CONTENT ================= */}

            <main
              id="main"
              role="main"
              className="
                relative
                flex-1
                w-full
              "
            >

              {/* DECORATIVE ORBS */}

              <div className="pointer-events-none absolute inset-0 overflow-hidden">

                <div
                  className="
                    absolute
                    top-20
                    right-0
                    w-72
                    h-72
                    rounded-full
                    bg-pink-300/10
                    blur-3xl
                  "
                />

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    w-72
                    h-72
                    rounded-full
                    bg-purple-300/10
                    blur-3xl
                  "
                />

              </div>

              {/* PAGE CONTENT */}

              <section
                className="
                  relative
                  z-10
                  px-4
                  sm:px-6
                  lg:px-8
                  py-10
                  lg:py-14
                "
              >

                <div
                  className="
                    max-w-7xl
                    mx-auto
                    w-full
                  "
                >
                  {children}
                </div>

              </section>

            </main>

            {/* ================= FOOTER ================= */}

            <footer
              role="contentinfo"
              className="
                relative
                border-t
                border-white/20
                bg-black
                overflow-hidden
              "
            >

              {/* FOOTER GLOW */}

              <div
                className="
                  absolute
                  top-0
                  left-1/2
                  -translate-x-1/2
                  w-[500px]
                  h-[200px]
                  bg-pink-500/10
                  blur-[120px]
                "
              />

              {/* FOOTER CONTENT */}

              <div
                className="
                  relative
                  z-10
                "
              >
                <Footer />
              </div>

            </footer>

          </div>

          {/* ================= FLOATING BUTTON ================= */}

          <button
            className="
              fixed
              bottom-6
              right-6
              z-50
              w-14
              h-14
              rounded-full
              bg-gradient-to-r
              from-pink-500
              to-purple-600
              text-white
              shadow-2xl
              hover:scale-110
              transition-all
              duration-300
              flex
              items-center
              justify-center
            "
            aria-label="Chat support"
          >

            💬

          </button>

          {/* ================= ANALYTICS ================= */}

          <Analytics />

        </CartProvider>

      </body>
    </html>
  );
}