"use client";

import { Analytics } from "@vercel/analytics/react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  const featuredProducts = products.slice(0, 6);

  return (
    <>
      <div className="space-y-24">

        {/* 🌟 HERO */}
        <section className="grid md:grid-cols-2 gap-10 items-center bg-gradient-to-r from-pink-100 to-blue-100 rounded-3xl p-10">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl font-extrabold leading-tight">
              Premium Baby Fashion 👶
            </h1>

            <p className="text-gray-600 mt-4 text-lg">
              Comfort meets style for your little ones.
            </p>

            <Link
              href="/products"
              className="inline-block mt-6 bg-pink-500 text-white px-6 py-3 rounded-full shadow hover:bg-pink-600"
            >
              Shop Now →
            </Link>
          </motion.div>

          <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }}>
            <Image
              src="/baby-hero.jpg"
              alt="Baby"
              width={500}
              height={400}
              className="rounded-3xl shadow-xl"
            />
          </motion.div>

        </section>

        {/* 📊 STATS */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {["10K+", "500+", "4.9⭐", "100%"].map((v, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow">
              <h3 className="text-2xl font-bold text-pink-500">{v}</h3>
              <p className="text-gray-500 text-sm">Happy Customers</p>
            </div>
          ))}
        </section>

        {/* 🎯 CATEGORIES */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Shop by Category</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Onesies", img: "/cat1.jpg" },
              { name: "T-Shirts", img: "/cat2.jpg" },
              { name: "Dresses", img: "/cat3.jpg" },
              { name: "Winter", img: "/cat4.jpg" },
            ].map((cat) => (
              <div
                key={cat.name}
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
              >
                <Image
                  src={cat.img}
                  alt={cat.name}
                  width={300}
                  height={200}
                  className="object-cover group-hover:scale-110 transition"
                />

                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <p className="text-white font-bold text-lg">
                    {cat.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 🛍️ PRODUCTS */}
        <section>
          <div className="flex justify-between mb-6">
            <h2 className="text-3xl font-bold">Featured</h2>
            <Link href="/products" className="text-pink-500">
              View All →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map((p) => (
              <div
                key={p.id}
                className="hover:-translate-y-2 transition"
              >
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </section>

        {/* ⭐ TESTIMONIALS */}
        <section className="bg-white p-10 rounded-3xl shadow text-center">
          <h2 className="text-3xl font-bold mb-8">Loved by Parents 💕</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {["Amazing quality!", "So soft!", "Best purchase!"].map((t, i) => (
              <div key={i} className="p-5 border rounded-xl">
                <p>"{t}"</p>
                <p className="text-pink-500 mt-2">— Customer</p>
              </div>
            ))}
          </div>
        </section>

        {/* 🎁 NEWSLETTER */}
        <section className="bg-gradient-to-r from-pink-500 to-purple-500 text-white p-10 rounded-3xl text-center">

          <h2 className="text-3xl font-bold">
            Join Our Community 💌
          </h2>

          <p className="mt-2">
            Get updates, offers & new arrivals
          </p>

          <div className="flex justify-center mt-6 gap-2">
            <input
              placeholder="Enter email"
              className="p-3 rounded-xl text-black w-64"
            />
            <button className="bg-white text-pink-500 px-4 rounded-xl">
              Subscribe
            </button>
          </div>

        </section>

      </div>

      {/* 📈 Vercel Analytics */}
      <Analytics />
    </>
  );
}