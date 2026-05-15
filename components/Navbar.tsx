"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import {
  Menu,
  X,
  ShoppingCart,
  Heart,
  Search,
  Sparkles,
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
            ? "bg-white/70 backdrop-blur-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border-b border-white/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex items-center justify-between h-[82px]">

            {/* ================= LOGO ================= */}
            <Link href="/" className="relative group">
              <div className="flex items-center gap-2">

                <motion.div
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.6 }}
                  className="w-10 h-10 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shadow-lg"
                >
                  <Sparkles className="text-white" size={18} />
                </motion.div>

                <div>
                  <h1 className="text-2xl font-black bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                    LittleStyle
                  </h1>

                  <p className="text-[10px] tracking-[4px] uppercase text-gray-400">
                    Fashion Store
                  </p>
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
                    className="relative"
                  >
                    <span
                      className={`text-sm font-semibold transition-all duration-300 ${
                        active
                          ? "text-pink-500"
                          : "text-gray-700 hover:text-pink-500"
                      }`}
                    >
                      {item.name}
                    </span>

                    {active && (
                      <motion.div
                        layoutId="navbar-active"
                        className="absolute -bottom-2 left-0 right-0 h-[3px] rounded-full bg-gradient-to-r from-pink-500 to-purple-500"
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* ================= ACTION BUTTONS ================= */}
            <div className="hidden lg:flex items-center gap-4">

              {/* SEARCH */}
              <button className="w-11 h-11 rounded-2xl bg-gray-100 hover:bg-pink-50 flex items-center justify-center transition-all duration-300 hover:scale-105">
                <Search size={19} />
              </button>

              {/* WISHLIST */}
              <button className="relative w-11 h-11 rounded-2xl bg-gray-100 hover:bg-pink-50 flex items-center justify-center transition-all duration-300 hover:scale-105">
                <Heart size={19} />

                <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-pink-500" />
              </button>

              {/* CART */}
              <Link
                href="/cart"
                className="relative flex items-center justify-center w-11 h-11 rounded-2xl bg-black text-white hover:scale-105 transition-all duration-300"
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
                      className="absolute -top-2 -right-2 min-w-[22px] h-[22px] rounded-full bg-pink-500 text-white text-[11px] flex items-center justify-center font-bold shadow-lg"
                    >
                      {cart.length}
                    </motion.span>
                  )}
                </AnimatePresence>
              </Link>

              {/* CTA BUTTON */}
              <button className="px-6 py-3 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold shadow-lg hover:shadow-pink-200 transition-all duration-300 hover:scale-105">
                Explore
              </button>
            </div>

            {/* ================= MOBILE BUTTON ================= */}
            <button
              aria-label="Toggle Menu"
              className="lg:hidden relative z-[60]"
              onClick={() => setOpen((prev) => !prev)}
            >
              <div className="w-11 h-11 rounded-2xl bg-white shadow-md flex items-center justify-center">
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
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
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

                <div>
                  <h2 className="text-2xl font-black bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                    LittleStyle
                  </h2>

                  <p className="text-xs text-gray-400">
                    Premium Fashion
                  </p>
                </div>

                <button
                  onClick={() => setOpen(false)}
                  className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center"
                >
                  <X />
                </button>
              </div>

              {/* MENU ITEMS */}
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
                            ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg"
                            : "bg-gray-50 hover:bg-pink-50"
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

                  <span className="bg-pink-500 px-3 py-1 rounded-full text-sm">
                    {cart.length}
                  </span>
                </Link>

                {/* CTA */}
                <button className="w-full mt-5 py-4 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-bold shadow-xl">
                  Start Shopping
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* SPACING */}
      <div className="h-[82px]" />
    </>
  );
}