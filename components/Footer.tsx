"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import {
  Mail,
  Phone,
  MapPin,
  CreditCard,
  ShieldCheck,
  Truck,
  RotateCcw,
  Send,
  HeartHandshake,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPinterestP,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";

import { motion } from "framer-motion";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const isValidEmail = (value: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setStatus("error");
      return;
    }

    setStatus("success");
    setEmail("");

    setTimeout(() => {
      setStatus("idle");
    }, 3000);
  };

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/products" },
    { name: "Collections", href: "/collections" },
    { name: "Best Sellers", href: "/best-sellers" },
    { name: "New Arrivals", href: "/new-arrivals" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const categories = [
    "Baby Onesies",
    "Kids Fashion",
    "Winter Collection",
    "Organic Cotton",
    "Premium Wear",
    "Party Collection",
    "Accessories",
  ];

  const supportLinks = [
    "Shipping Policy",
    "Refund Policy",
    "Track Order",
    "Help Center",
    "Privacy Policy",
    "Terms & Conditions",
  ];

  const socialLinks = [
    {
      icon: FaFacebookF,
      href: "#",
    },
    {
      icon: FaInstagram,
      href: "#",
    },
    {
      icon: FaTwitter,
      href: "#",
    },
    {
      icon: FaYoutube,
      href: "#",
    },
    {
      icon: FaPinterestP,
      href: "#",
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-black text-gray-300 mt-32">

      {/* ================= BACKGROUND EFFECTS ================= */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[120px]" />

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px]" />

      </div>

      {/* ================= NEWSLETTER SECTION ================= */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 p-[1px]"
        >

          <div className="rounded-[40px] bg-black/90 backdrop-blur-2xl px-8 py-12 lg:px-16 lg:py-16">

            <div className="grid lg:grid-cols-2 gap-10 items-center">

              {/* LEFT */}

              <div>

                <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/10 border border-white/10 text-sm mb-6">

                  {/* FAVICON LOGO */}

                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center overflow-hidden">

                    <Image
                      src="/favicon.ico"
                      alt="Logo"
                      width={20}
                      height={20}
                      className="object-contain"
                    />

                  </div>

                  <span className="font-medium">
                    Join Our Fashion Community
                  </span>

                </div>

                <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight">
                  Get Exclusive
                  <span className="block bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                    Fashion Updates
                  </span>
                </h2>

                <p className="mt-5 text-gray-400 text-lg leading-relaxed max-w-xl">
                  Subscribe for premium fashion updates,
                  exclusive discounts, and early access to
                  new collections.
                </p>

              </div>

              {/* RIGHT */}

              <div>

                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-4"
                >

                  <div className="relative flex-1">

                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setStatus("idle");
                      }}
                      className="w-full h-16 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-xl px-6 text-white placeholder:text-gray-400 outline-none focus:border-pink-400"
                    />

                    <Mail
                      size={18}
                      className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                  </div>

                  <button
                    type="submit"
                    className="h-16 px-8 rounded-2xl bg-white text-black font-bold hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                  >

                    Subscribe

                    <Send size={18} />

                  </button>

                </form>

                {status === "success" && (
                  <p className="text-green-400 mt-4">
                    Successfully subscribed ✅
                  </p>
                )}

                {status === "error" && (
                  <p className="text-red-400 mt-4">
                    Please enter a valid email ❌
                  </p>
                )}

              </div>

            </div>

          </div>

        </motion.div>

      </div>

      {/* ================= MAIN FOOTER ================= */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-14">

          {/* ================= BRAND ================= */}

          <div className="lg:col-span-2">

            <div className="flex items-center gap-4">

              {/* LOGO */}

              <motion.div
                whileHover={{
                  rotate: 5,
                  scale: 1.05,
                }}
                className="relative"
              >

                <div className="absolute inset-0 bg-pink-500/30 blur-2xl rounded-full" />

                <div className="relative w-16 h-16 rounded-3xl bg-white flex items-center justify-center shadow-2xl overflow-hidden border border-white/10">

                  <Image
                    src="/favicon.ico"
                    alt="LittleStyle Logo"
                    width={42}
                    height={42}
                    className="object-contain"
                    priority
                  />

                </div>

              </motion.div>

              {/* TEXT */}

              <div>

                <h2 className="text-3xl font-black text-white">
                  LittleStyle
                </h2>

                <p className="text-sm tracking-[5px] uppercase text-gray-500">
                  Premium Fashion
                </p>

              </div>

            </div>

            <p className="mt-8 text-gray-400 leading-relaxed max-w-md">
              We create modern premium fashion for kids
              and families with comfort, softness, and
              timeless style in every design.
            </p>

            {/* SOCIAL */}

            <div className="flex flex-wrap gap-4 mt-8">

              {socialLinks.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    whileHover={{
                      y: -5,
                    }}
                  >

                    <Link
                      href={item.href}
                      className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 transition-all duration-300 flex items-center justify-center"
                    >

                      <Icon size={18} />

                    </Link>

                  </motion.div>
                );
              })}

            </div>

            {/* CONTACT */}

            <div className="mt-10 space-y-4">

              <div className="flex items-center gap-4">

                <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center">
                  <Mail size={18} />
                </div>

                <span>support@littlestyle.com</span>

              </div>

              <div className="flex items-center gap-4">

                <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center">
                  <Phone size={18} />
                </div>

                <span>+91 90000 00000</span>

              </div>

              <div className="flex items-center gap-4">

                <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center">
                  <MapPin size={18} />
                </div>

                <span>Bangalore, India</span>

              </div>

            </div>

          </div>

          {/* ================= QUICK LINKS ================= */}

          <div>

            <h3 className="text-xl font-bold text-white mb-8">
              Quick Links
            </h3>

            <ul className="space-y-4">

              {quickLinks.map((item) => (
                <li key={item.name}>

                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                  >
                    {item.name}
                  </Link>

                </li>
              ))}

            </ul>

          </div>

          {/* ================= CATEGORIES ================= */}

          <div>

            <h3 className="text-xl font-bold text-white mb-8">
              Categories
            </h3>

            <ul className="space-y-4">

              {categories.map((item) => (
                <li key={item}>

                  <Link
                    href="/products"
                    className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                  >
                    {item}
                  </Link>

                </li>
              ))}

            </ul>

          </div>

          {/* ================= SUPPORT ================= */}

          <div>

            <h3 className="text-xl font-bold text-white mb-8">
              Support
            </h3>

            <ul className="space-y-4">

              {supportLinks.map((item) => (
                <li key={item}>

                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                  >
                    {item}
                  </Link>

                </li>
              ))}

            </ul>

            {/* APP DOWNLOAD */}

            <div className="mt-10">

              <h4 className="text-white font-semibold mb-4">
                Download App
              </h4>

              <div className="space-y-3">

                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition">

                  <FaApple size={22} />

                  <div className="text-left">
                    <p className="text-xs text-gray-400">
                      Download on
                    </p>
                    <p className="text-sm font-semibold text-white">
                      App Store
                    </p>
                  </div>

                </button>

                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition">

                  <FaGooglePlay size={20} />

                  <div className="text-left">
                    <p className="text-xs text-gray-400">
                      Get it on
                    </p>
                    <p className="text-sm font-semibold text-white">
                      Google Play
                    </p>
                  </div>

                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* ================= TRUST BADGES ================= */}

      <div className="relative z-10 border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-10">

          <div className="grid md:grid-cols-4 gap-6">

            {[
              {
                icon: Truck,
                title: "Free Shipping",
                desc: "On all orders over ₹999",
              },
              {
                icon: ShieldCheck,
                title: "Secure Payments",
                desc: "100% protected payments",
              },
              {
                icon: RotateCcw,
                title: "Easy Returns",
                desc: "7 day return policy",
              },
              {
                icon: HeartHandshake,
                title: "24/7 Support",
                desc: "Dedicated support team",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="rounded-3xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-all duration-300"
                >

                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center mb-5">

                    <Icon className="text-white" />

                  </div>

                  <h4 className="text-white font-bold text-lg">
                    {item.title}
                  </h4>

                  <p className="text-gray-400 mt-2 text-sm">
                    {item.desc}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </div>

      {/* ================= BOTTOM ================= */}

      <div className="relative z-10 border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col lg:flex-row items-center justify-between gap-6">

          {/* LEFT */}

          <div className="flex items-center gap-3">

            <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center overflow-hidden">

              <Image
                src="/favicon.ico"
                alt="Footer Logo"
                width={24}
                height={24}
                className="object-contain"
              />

            </div>

            <p className="text-gray-400">
              © {new Date().getFullYear()} LittleStyle.
              All rights reserved.
            </p>

          </div>

          {/* PAYMENT */}

          <div className="flex items-center gap-5 text-3xl text-gray-400">

            <FaCcVisa />

            <FaCcMastercard />

            <FaCcPaypal />

            <CreditCard size={28} />

          </div>

          {/* LINKS */}

          <div className="flex flex-wrap justify-center gap-6 text-sm">

            <Link
              href="#"
              className="hover:text-white transition"
            >
              Privacy Policy
            </Link>

            <Link
              href="#"
              className="hover:text-white transition"
            >
              Terms
            </Link>

            <Link
              href="#"
              className="hover:text-white transition"
            >
              Cookies
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}