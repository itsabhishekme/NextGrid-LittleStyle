"use client";

import Link from "next/link";
import { useState } from "react";

// ✅ Lucide (only valid icons)
import { Mail, Phone, CreditCard } from "lucide-react";

// ✅ Social icons (correct library)
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setStatus("error");
      return;
    }

    setStatus("success");
    setEmail("");

    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-black to-gray-950 text-gray-300 mt-24">
      
      {/* 🌟 MAIN */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-12">

        {/* 🧸 BRAND */}
        <div>
          <h2 className="text-2xl font-extrabold text-white">
            NextGrid LittleStyle 👶
          </h2>

          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            Premium baby clothing crafted with love, softness, and modern style.
          </p>

          {/* 🌐 SOCIAL */}
          <div className="flex gap-4 mt-6">
            {[
              { Icon: FaFacebookF, link: "#" },
              { Icon: FaInstagram, link: "#" },
              { Icon: FaTwitter, link: "#" },
            ].map(({ Icon, link }, i) => (
              <Link
                key={i}
                href={link}
                aria-label="Social link"
                className="p-2 bg-gray-800 rounded-full hover:bg-pink-500 hover:scale-110 transition"
              >
                <Icon size={18} />
              </Link>
            ))}
          </div>
        </div>

        {/* 🔗 LINKS */}
        <div>
          <h3 className="text-white font-semibold mb-5">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            {[
              { name: "Home", link: "/" },
              { name: "Shop", link: "/products" },
              { name: "Cart", link: "/cart" },
              { name: "About", link: "/about" },
              { name: "Contact", link: "/contact" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  href={item.link}
                  className="hover:text-white transition hover:translate-x-1 inline-block"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 🛍️ CATEGORIES */}
        <div>
          <h3 className="text-white font-semibold mb-5">Categories</h3>
          <ul className="space-y-3 text-sm">
            {["Onesies", "T-Shirts", "Dresses", "Winter Wear"].map((cat) => (
              <li key={cat}>
                <Link
                  href="/products"
                  className="hover:text-white transition hover:translate-x-1 inline-block"
                >
                  {cat}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 📩 NEWSLETTER */}
        <div>
          <h3 className="text-white font-semibold mb-5">
            Stay Updated 💌
          </h3>

          <p className="text-sm text-gray-400 mb-4">
            Get exclusive offers & updates
          </p>

          <form onSubmit={handleSubmit} className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setStatus("idle");
              }}
              className="w-full p-2 rounded-l-lg text-black outline-none"
            />

            <button
              type="submit"
              className="bg-pink-500 px-4 rounded-r-lg text-white hover:bg-pink-600 transition"
            >
              Join
            </button>
          </form>

          {status === "success" && (
            <p className="text-green-400 text-sm mt-2">
              Subscribed successfully ✅
            </p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-sm mt-2">
              Enter a valid email ❌
            </p>
          )}

          {/* CONTACT */}
          <div className="mt-6 space-y-2 text-sm">
            <p className="flex items-center gap-2">
              <Mail size={14} /> support@littlestyle.com
            </p>
            <p className="flex items-center gap-2">
              <Phone size={14} /> +91 90000 00000
            </p>
          </div>
        </div>

      </div>

      {/* 💳 TRUST */}
      <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-400">
        <div className="flex justify-center items-center gap-2 mb-3">
          <CreditCard size={18} />
          Secure Payments • Fast Delivery • Easy Returns
        </div>

        <p>
          © {new Date().getFullYear()} LittleStyle. All rights reserved.
        </p>

        <div className="flex justify-center gap-6 mt-3">
          <Link href="#" className="hover:text-white">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-white">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}