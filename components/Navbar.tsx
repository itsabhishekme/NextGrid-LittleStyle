"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { Menu, X, ShoppingCart } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  const { cart } = useCart();
  const pathname = usePathname();

  // ✅ Fix hydration issue
  useEffect(() => {
    setMounted(true);
  }, []);

  // ✅ Smooth scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Lock scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // ✅ ESC close
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Shop", link: "/products" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  // ⛔ Prevent hydration mismatch
  if (!mounted) return null;

  return (
    <>
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-white/90 shadow-md backdrop-blur-xl"
          : "bg-white/70 backdrop-blur"
          }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">

          {/* LOGO */}
          <Link href="/" className="text-2xl font-extrabold text-pink-500">
            NextGrid LittleStyle
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">

            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className={`relative group ${pathname === item.link ? "text-pink-500" : ""
                  }`}
              >
                {item.name}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-pink-500 transition-all duration-300 ${pathname === item.link
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                    }`}
                />
              </Link>
            ))}

            {/* CART */}
            <Link href="/cart" className="relative group">
              <ShoppingCart size={22} />

              <AnimatePresence>
                {cart.length > 0 && (
                  <motion.span
                    key={cart.length}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs px-1.5 rounded-full"
                  >
                    {cart.length}
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>

          </div>

          {/* MOBILE BUTTON */}
          <button
            aria-label="Toggle menu"
            className="md:hidden"
            onClick={() => setOpen((prev) => !prev)} // ✅ FIXED
          >
            {open ? <X /> : <Menu />}
          </button>

        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setOpen(false)}
            />

            {/* SIDE PANEL */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 w-72 h-full bg-white z-50 shadow-xl p-6 space-y-6"
            >
              <button
                type="button"
                aria-label="Toggle menu"
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
                onClick={() => setOpen((prev) => !prev)}
              >
                {open ? <X /> : <Menu />}
              </button>

              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.link}
                  onClick={() => setOpen(false)}
                  className={`block text-lg ${pathname === item.link
                    ? "text-pink-500 font-semibold"
                    : ""
                    }`}
                >
                  {item.name}
                </Link>
              ))}

              <Link
                href="/cart"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 text-lg"
              >
                <ShoppingCart size={18} />
                Cart ({cart.length})
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}