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
  ChevronRight,
  Sparkles,
  Clock3,
  BadgeCheck,
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
  FaLinkedinIn,
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
    {
      icon: FaLinkedinIn,
      href: "#",
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-black text-gray-300 mt-40">

      {/* BACKGROUND EFFECTS */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-[150px]" />

        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px]" />

        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />

      </div>

      {/* TOP STRIP */}

      <div className="relative z-10 border-b border-white/10 bg-white/[0.03]">

        <div className="max-w-7xl mx-auto px-6 py-5">

          <div className="flex flex-wrap items-center justify-center lg:justify-between gap-6">

            {[
              {
                icon: Truck,
                title: "Free Shipping",
              },
              {
                icon: ShieldCheck,
                title: "100% Secure",
              },
              {
                icon: RotateCcw,
                title: "Easy Returns",
              },
              {
                icon: Clock3,
                title: "24/7 Support",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="flex items-center gap-3"
                >

                  <div className="w-11 h-11 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center shadow-lg">

                    <Icon size={18} className="text-white" />

                  </div>

                  <span className="font-medium text-white">
                    {item.title}
                  </span>

                </div>
              );
            })}

          </div>

        </div>

      </div>

      {/* NEWSLETTER */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 p-[1px]"
        >

          <div className="rounded-[40px] bg-black/90 backdrop-blur-2xl px-8 py-14 lg:px-16 lg:py-20">

            <div className="grid lg:grid-cols-2 gap-14 items-center">

              {/* LEFT */}

              <div>

                <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/10 border border-white/10 text-sm mb-8">

                  <div className="relative">

                    <div className="absolute inset-0 rounded-full bg-pink-500 blur-xl opacity-40" />

                    <div className="relative w-10 h-10 rounded-full bg-white flex items-center justify-center overflow-hidden">

                      <div className="relative w-7 h-7 rounded-full overflow-hidden">

                        <Image
                          src="/logo.png"
                          alt="Logo"
                          fill
                          className="object-cover"
                        />

                      </div>

                    </div>

                  </div>

                  <span className="font-medium">
                    Join Our Fashion Community
                  </span>

                </div>

                <h2 className="text-5xl lg:text-6xl font-black text-white leading-tight">

                  Discover
                  <span className="block bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                    Premium Fashion
                  </span>

                </h2>

                <p className="mt-6 text-gray-400 text-lg leading-relaxed max-w-xl">
                  Subscribe for premium fashion updates,
                  exclusive discounts, luxury collections,
                  and members-only launches.
                </p>

              </div>

              {/* RIGHT */}

              <div>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >

                  <div className="relative">

                    <input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setStatus("idle");
                      }}
                      className="w-full h-16 rounded-full bg-white/10 border border-white/10 px-7 text-white placeholder:text-gray-400 outline-none focus:border-pink-400"
                    />

                    <Mail
                      size={18}
                      className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                  </div>

                  <button
                    type="submit"
                    className="w-full h-16 rounded-full bg-white text-black font-bold hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl"
                  >

                    Subscribe Now

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

      {/* MAIN FOOTER */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-16">

          {/* BRAND */}

          <div className="lg:col-span-2">

            <div className="flex items-center gap-5">

              {/* PREMIUM CIRCLE LOGO */}

              <motion.div
                whileHover={{
                  rotate: 6,
                  scale: 1.08,
                }}
                transition={{ duration: 0.35 }}
                className="relative"
              >

                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-orange-400 blur-2xl opacity-40" />

                <div className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-br from-pink-500 via-purple-500 to-orange-400 animate-[spin_8s_linear_infinite]">

                  <div className="w-full h-full rounded-full bg-black" />

                </div>

                <div className="relative w-[82px] h-[82px] rounded-full bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.4)]">

                  <div className="relative w-[58px] h-[58px] rounded-full overflow-hidden border border-white/10">

                    <Image
                      src="/logo.png"
                      alt="LittleStyle Logo"
                      fill
                      className="object-cover"
                      priority
                    />

                  </div>

                </div>

              </motion.div>

              {/* TEXT */}

              <div>

                <h2 className="text-4xl font-black bg-gradient-to-r from-white via-pink-200 to-purple-300 bg-clip-text text-transparent leading-none">
                  LittleStyle
                </h2>

                <div className="flex items-center gap-2 mt-2">

                  <div className="w-10 h-[1px] bg-gradient-to-r from-pink-500 to-transparent" />

                  <p className="text-[11px] tracking-[6px] uppercase text-gray-500 font-semibold">
                    Luxury Fashion
                  </p>

                </div>

              </div>

            </div>

            <p className="mt-8 text-gray-400 leading-relaxed max-w-md text-[15px]">
              We create modern premium fashion for kids
              and families with comfort, softness, and
              timeless style in every design.
            </p>

            {/* FEATURE BADGES */}

            <div className="grid grid-cols-2 gap-4 mt-10">

              {[
                "Premium Quality",
                "Soft Fabrics",
                "Luxury Collection",
                "Fast Delivery",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-2xl bg-white/5 border border-white/10 px-4 py-4"
                >

                  <BadgeCheck
                    size={18}
                    className="text-pink-400"
                  />

                  <span className="text-sm text-white">
                    {item}
                  </span>

                </div>
              ))}

            </div>

            {/* SOCIAL */}

            <div className="flex flex-wrap gap-4 mt-10">

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
                      className="w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 transition-all duration-300 flex items-center justify-center"
                    >

                      <Icon size={18} />

                    </Link>

                  </motion.div>
                );
              })}

            </div>

          </div>

          {/* QUICK LINKS */}

          <div>

            <h3 className="text-xl font-bold text-white mb-8">
              Quick Links
            </h3>

            <ul className="space-y-5">

              {quickLinks.map((item) => (
                <li key={item.name}>

                  <Link
                    href={item.href}
                    className="group flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-300"
                  >

                    <ChevronRight
                      size={16}
                      className="group-hover:translate-x-1 transition"
                    />

                    {item.name}

                  </Link>

                </li>
              ))}

            </ul>

          </div>

          {/* CATEGORIES */}

          <div>

            <h3 className="text-xl font-bold text-white mb-8">
              Categories
            </h3>

            <ul className="space-y-5">

              {categories.map((item) => (
                <li key={item}>

                  <Link
                    href="/products"
                    className="group flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-300"
                  >

                    <Sparkles size={14} />

                    {item}

                  </Link>

                </li>
              ))}

            </ul>

          </div>

          {/* SUPPORT */}

          <div>

            <h3 className="text-xl font-bold text-white mb-8">
              Support
            </h3>

            <ul className="space-y-5">

              {supportLinks.map((item) => (
                <li key={item}>

                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    {item}
                  </Link>

                </li>
              ))}

            </ul>

            {/* APPS */}

            <div className="mt-10 space-y-4">

              <button className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition">

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

              <button className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition">

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

      {/* CONTACT STRIP */}

      <div className="relative z-10 border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-10">

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                icon: Mail,
                title: "Email Support",
                desc: "support@littlestyle.com",
              },
              {
                icon: Phone,
                title: "Call Us",
                desc: "+91 90000 00000",
              },
              {
                icon: MapPin,
                title: "Location",
                desc: "Bangalore, India",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="rounded-3xl bg-white/5 border border-white/10 p-6 flex items-center gap-5"
                >

                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center">

                    <Icon className="text-white" />

                  </div>

                  <div>

                    <h4 className="text-white font-bold">
                      {item.title}
                    </h4>

                    <p className="text-gray-400 mt-1 text-sm">
                      {item.desc}
                    </p>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </div>

      {/* BOTTOM */}

      <div className="relative z-10 border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col lg:flex-row items-center justify-between gap-6">

          <p className="text-gray-400 text-center lg:text-left">
            © {new Date().getFullYear()} LittleStyle.
            All rights reserved.
          </p>

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