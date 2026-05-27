"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import {
  Menu,
  X,
  ShoppingCart,
  Heart,
  Search,
} from "lucide-react";

import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  const { cart } = useCart();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  if (!mounted) return null;

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Shop", link: "/products" },
    { name: "Collections", link: "/collections" },
    { name: "New Arrivals", link: "/new" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/80 backdrop-blur-2xl border-b border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.06)]"
            : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex items-center justify-between h-[88px]">

            {/* ================= LOGO ================= */}
            <Link href="/" className="relative group">
              <div className="flex items-center gap-4">

                {/* LOGO */}
                <motion.div
                  whileHover={{
                    scale: 1.08,
                    rotate: 6,
                  }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >

                  {/* GLOW */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-400 via-rose-300 to-orange-300 blur-2xl opacity-40 group-hover:opacity-70 transition-all duration-500" />

                  {/* ANIMATED BORDER */}
                  <div className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-br from-pink-500 via-rose-400 to-orange-300 animate-[spin_8s_linear_infinite]">
                    <div className="w-full h-full rounded-full bg-white" />
                  </div>

                  {/* CIRCLE LOGO BOX */}
                  <div className="relative w-[62px] h-[62px] rounded-full bg-white border border-white/40 shadow-[0_10px_35px_rgba(0,0,0,0.12)] backdrop-blur-xl flex items-center justify-center overflow-hidden">

                    {/* INNER LIGHT */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white via-pink-50 to-orange-50 opacity-90 rounded-full" />

                    {/* IMAGE */}
                    <div className="relative w-[42px] h-[42px] rounded-full overflow-hidden flex items-center justify-center">
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

                {/* BRAND TEXT */}
                <div className="leading-none">

                  <motion.h1
                    whileHover={{
                      letterSpacing: "0.5px",
                    }}
                    className="text-[30px] font-black tracking-tight bg-gradient-to-r from-black via-gray-800 to-gray-500 bg-clip-text text-transparent"
                  >
                    LittleStyle
                  </motion.h1>

                  <div className="flex items-center gap-2 mt-2">

                    <div className="w-8 h-[1px] bg-gradient-to-r from-pink-500 to-transparent" />

                    <p className="text-[10px] uppercase tracking-[5px] text-gray-400 font-semibold">
                      Luxury Fashion
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            {/* ================= DESKTOP MENU ================= */}
            <div className="hidden lg:flex items-center gap-10">

              {navItems.map((item) => {
                const active = pathname === item.link;

                return (
                  <Link
                    key={item.name}
                    href={item.link}
                    className="relative group"
                  >
                    <span
                      className={`text-sm font-semibold transition-all duration-300 ${
                        active
                          ? "text-black"
                          : "text-gray-700 hover:text-black"
                      }`}
                    >
                      {item.name}
                    </span>

                    <span
                      className={`absolute left-0 -bottom-2 h-[2px] rounded-full bg-gradient-to-r from-pink-500 to-orange-400 transition-all duration-300 ${
                        active
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                );
              })}
            </div>

            {/* ================= ACTIONS ================= */}
            <div className="hidden lg:flex items-center gap-4">

              {/* SEARCH */}
              <button className="w-11 h-11 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all duration-300 hover:scale-105">
                <Search size={19} />
              </button>

              {/* WISHLIST */}
              <button className="relative w-11 h-11 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all duration-300 hover:scale-105">
                <Heart size={19} />

                <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-pink-500" />
              </button>

              {/* CART */}
              <Link
                href="/cart"
                className="relative flex items-center justify-center w-11 h-11 rounded-full bg-black text-white hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <ShoppingCart size={20} />

                <AnimatePresence>
                  {cart.length > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 15,
                      }}
                      className="absolute -top-2 -right-2 min-w-[22px] h-[22px] rounded-full bg-gradient-to-r from-pink-500 to-red-500 text-white text-[11px] flex items-center justify-center font-bold shadow-lg"
                    >
                      {cart.length}
                    </motion.span>
                  )}
                </AnimatePresence>
              </Link>

              {/* BUTTON */}
              <button className="px-6 py-3 rounded-full bg-gradient-to-r from-black to-gray-800 text-white font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                Explore
              </button>
            </div>

            {/* ================= MOBILE BUTTON ================= */}
            <button
              aria-label="Toggle Menu"
              className="lg:hidden relative z-[60]"
              onClick={() => setOpen((prev) => !prev)}
            >
              <div className="w-11 h-11 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center">
                {open ? <X size={24} /> : <Menu size={24} />}
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {open && (
          <>
            {/* OVERLAY */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              onClick={() => setOpen(false)}
            />

            {/* DRAWER */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                damping: 30,
                stiffness: 300,
              }}
              className="fixed top-0 right-0 w-[85%] max-w-sm h-screen bg-white z-50 shadow-2xl overflow-y-auto"
            >

              {/* TOP */}
              <div className="p-6 border-b border-gray-100 flex items-center justify-between">

                {/* MOBILE LOGO */}
                <div className="flex items-center gap-4">

                  <div className="relative">

                    <div className="absolute inset-0 rounded-full bg-pink-200 blur-xl opacity-50" />

                    <div className="relative w-14 h-14 rounded-full bg-white border border-gray-100 shadow-lg flex items-center justify-center overflow-hidden">

                      <div className="relative w-10 h-10 rounded-full overflow-hidden">
                        <Image
                          src="/logo.png"
                          alt="LittleStyle Logo"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-[26px] font-black tracking-tight bg-gradient-to-r from-black to-gray-500 bg-clip-text text-transparent">
                      LittleStyle
                    </h2>

                    <p className="text-[10px] uppercase tracking-[4px] text-gray-400 mt-1">
                      Luxury Fashion
                    </p>
                  </div>
                </div>

                {/* CLOSE */}
                <button
                  onClick={() => setOpen(false)}
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center"
                >
                  <X />
                </button>
              </div>

              {/* MENU */}
              <div className="p-6 space-y-3">

                {navItems.map((item, index) => {
                  const active = pathname === item.link;

                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.08 }}
                    >
                      <Link
                        href={item.link}
                        onClick={() => setOpen(false)}
                        className={`flex items-center justify-between px-5 py-4 rounded-2xl transition-all duration-300 ${
                          active
                            ? "bg-black text-white shadow-lg"
                            : "bg-gray-50 hover:bg-gray-100"
                        }`}
                      >
                        <span className="font-semibold">
                          {item.name}
                        </span>

                        <span>→</span>
                      </Link>
                    </motion.div>
                  );
                })}

                {/* MOBILE CART */}
                <Link
                  href="/cart"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between px-5 py-4 rounded-2xl bg-black text-white mt-6"
                >
                  <div className="flex items-center gap-3">
                    <ShoppingCart size={20} />

                    <span className="font-semibold">
                      Shopping Cart
                    </span>
                  </div>

                  <span className="bg-gradient-to-r from-pink-500 to-red-500 px-3 py-1 rounded-full text-sm">
                    {cart.length}
                  </span>
                </Link>

                {/* CTA */}
                <button className="w-full mt-5 py-4 rounded-full bg-gradient-to-r from-black to-gray-800 text-white font-bold shadow-xl hover:scale-[1.02] transition-all duration-300">
                  Start Shopping
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* SPACING */}
      <div className="h-[88px]" />
    </>
  );
}