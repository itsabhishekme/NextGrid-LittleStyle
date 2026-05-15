"use client";

import { Analytics } from "@vercel/analytics/react";

import { products } from "@/data/products";

import ProductCard from "@/components/ProductCard";

import Link from "next/link";

import Image from "next/image";

import { motion } from "framer-motion";

import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Truck,
  HeartHandshake,
  Star,
  ShoppingBag,
} from "lucide-react";

export default function Home() {
  const featuredProducts = products.slice(0, 6);

  const categories = [
    {
      name: "Onesies",
      image: "/cat1.jpg",
    },
    {
      name: "T-Shirts",
      image: "/cat2.jpg",
    },
    {
      name: "Dresses",
      image: "/cat3.jpg",
    },
    {
      name: "Winter Wear",
      image: "/cat4.jpg",
    },
  ];

  const testimonials = [
    {
      name: "Sophia",
      text: "Absolutely amazing quality and super soft fabric.",
    },
    {
      name: "Emma",
      text: "Perfect for my baby. Stylish and comfortable.",
    },
    {
      name: "Olivia",
      text: "Best kids fashion store I've ever purchased from.",
    },
  ];

  return (
    <>
      <div className="relative overflow-hidden">

        {/* ================= BACKGROUND ================= */}

        <div className="absolute inset-0 -z-10 overflow-hidden">

          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-300/20 rounded-full blur-[120px]" />

          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-300/20 rounded-full blur-[120px]" />

          <div className="absolute top-[40%] left-[40%] w-[400px] h-[400px] bg-blue-200/10 rounded-full blur-[100px]" />

        </div>

        <div className="space-y-32">

          {/* ================= HERO ================= */}

          <section className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-pink-100 via-white to-purple-100 border border-white/30 shadow-[0_20px_80px_rgba(0,0,0,0.08)]">

            {/* HERO BG */}

            <div className="absolute inset-0 overflow-hidden">

              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-pink-400/20 rounded-full blur-[120px]" />

              <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-400/20 rounded-full blur-[120px]" />

            </div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center px-8 py-16 lg:px-20 lg:py-24">

              {/* LEFT */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                }}
              >

                {/* TAG */}

                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white shadow-lg border border-pink-100 mb-8">

                  <Sparkles size={16} className="text-pink-500" />

                  <span className="text-sm font-semibold text-gray-700">
                    Premium Kids Fashion
                  </span>

                </div>

                {/* TITLE */}

                <h1 className="text-5xl lg:text-7xl font-black leading-[1.05] text-gray-900">

                  Fashion For
                  <span className="block bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                    Little Stars ✨
                  </span>

                </h1>

                {/* DESC */}

                <p className="mt-8 text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl">

                  Discover premium baby clothing crafted
                  with softness, comfort, elegance, and
                  modern fashion trends for your little ones.

                </p>

                {/* BUTTONS */}

                <div className="flex flex-wrap gap-5 mt-10">

                  <Link
                    href="/products"
                    className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-bold shadow-2xl hover:scale-105 transition-all duration-300"
                  >

                    Shop Collection

                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition"
                    />

                  </Link>

                  <Link
                    href="/about"
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white border border-gray-200 shadow-lg font-semibold hover:bg-gray-50 transition-all duration-300"
                  >

                    Learn More

                  </Link>

                </div>

                {/* STATS */}

                <div className="grid grid-cols-3 gap-6 mt-14">

                  {[
                    {
                      value: "10K+",
                      label: "Happy Parents",
                    },
                    {
                      value: "4.9★",
                      label: "Customer Rating",
                    },
                    {
                      value: "500+",
                      label: "Premium Products",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="rounded-2xl bg-white/70 backdrop-blur-xl p-5 shadow-lg border border-white/40"
                    >

                      <h3 className="text-2xl lg:text-3xl font-black text-pink-500">
                        {item.value}
                      </h3>

                      <p className="text-sm text-gray-500 mt-1">
                        {item.label}
                      </p>

                    </div>
                  ))}

                </div>

              </motion.div>

              {/* RIGHT */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.7,
                }}
                className="relative"
              >

                {/* FLOATING CARD */}

                <div className="absolute -top-6 -left-6 z-20 rounded-3xl bg-white shadow-2xl p-5 border border-white/50 backdrop-blur-xl">

                  <div className="flex items-center gap-3">

                    <div className="w-12 h-12 rounded-2xl bg-pink-100 flex items-center justify-center">

                      <Star className="text-pink-500" />

                    </div>

                    <div>

                      <h4 className="font-bold">
                        Premium Quality
                      </h4>

                      <p className="text-sm text-gray-500">
                        Organic Soft Fabric
                      </p>

                    </div>

                  </div>

                </div>

                {/* IMAGE */}

                <div className="relative overflow-hidden rounded-[40px] shadow-[0_20px_80px_rgba(0,0,0,0.12)]">

                  <Image
                    src="/baby-hero.jpg"
                    alt="Baby Fashion"
                    width={700}
                    height={700}
                    priority
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />

                </div>

                {/* FLOATING BOTTOM */}

                <div className="absolute -bottom-6 right-0 z-20 rounded-3xl bg-white shadow-2xl p-5 border border-white/50 backdrop-blur-xl">

                  <div className="flex items-center gap-4">

                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 text-white flex items-center justify-center">

                      <ShoppingBag />

                    </div>

                    <div>

                      <h4 className="font-bold text-lg">
                        New Collection
                      </h4>

                      <p className="text-gray-500 text-sm">
                        Trending Fashion 2026
                      </p>

                    </div>

                  </div>

                </div>

              </motion.div>

            </div>

          </section>

          {/* ================= TRUST SECTION ================= */}

          <section className="grid md:grid-cols-3 gap-8">

            {[
              {
                icon: Truck,
                title: "Fast Delivery",
                desc: "Quick and safe delivery across India.",
              },
              {
                icon: ShieldCheck,
                title: "Secure Payments",
                desc: "100% secure and protected checkout.",
              },
              {
                icon: HeartHandshake,
                title: "Premium Support",
                desc: "Friendly customer support team.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -8,
                  }}
                  className="rounded-[30px] bg-white/70 backdrop-blur-2xl border border-white/40 p-8 shadow-[0_10px_40px_rgba(0,0,0,0.06)]"
                >

                  <div className="w-16 h-16 rounded-3xl bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white shadow-lg mb-6">

                    <Icon size={28} />

                  </div>

                  <h3 className="text-2xl font-bold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mt-3 leading-relaxed">
                    {item.desc}
                  </p>

                </motion.div>
              );
            })}

          </section>

          {/* ================= CATEGORIES ================= */}

          <section>

            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-12">

              <div>

                <p className="text-pink-500 font-semibold uppercase tracking-[4px]">
                  Categories
                </p>

                <h2 className="text-4xl lg:text-5xl font-black mt-3">
                  Shop By Category
                </h2>

              </div>

              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-pink-500 font-semibold"
              >

                Browse All

                <ArrowRight size={18} />

              </Link>

            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

              {categories.map((cat, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -8,
                  }}
                  className="group relative overflow-hidden rounded-[32px] shadow-[0_10px_50px_rgba(0,0,0,0.08)]"
                >

                  <div className="relative h-[320px]">

                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      className="object-cover group-hover:scale-110 transition duration-700"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                    <div className="absolute bottom-6 left-6 right-6">

                      <div className="flex items-center justify-between">

                        <div>

                          <h3 className="text-2xl font-bold text-white">
                            {cat.name}
                          </h3>

                          <p className="text-white/80 mt-1">
                            Explore Collection
                          </p>

                        </div>

                        <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xl flex items-center justify-center text-white">

                          <ArrowRight size={20} />

                        </div>

                      </div>

                    </div>

                  </div>

                </motion.div>
              ))}

            </div>

          </section>

          {/* ================= PRODUCTS ================= */}

          <section>

            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-12">

              <div>

                <p className="text-pink-500 font-semibold uppercase tracking-[4px]">
                  Featured
                </p>

                <h2 className="text-4xl lg:text-5xl font-black mt-3">
                  Trending Products
                </h2>

              </div>

              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-pink-500 font-semibold"
              >

                View All Products

                <ArrowRight size={18} />

              </Link>

            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

              {featuredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  whileHover={{
                    y: -10,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                >

                  <ProductCard product={product} />

                </motion.div>
              ))}

            </div>

          </section>

          {/* ================= TESTIMONIALS ================= */}

          <section className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-white to-pink-50 border border-white/40 shadow-[0_20px_80px_rgba(0,0,0,0.06)] px-8 py-16 lg:px-16">

            <div className="text-center max-w-3xl mx-auto">

              <p className="text-pink-500 font-semibold uppercase tracking-[4px]">
                Testimonials
              </p>

              <h2 className="text-4xl lg:text-5xl font-black mt-4">
                Loved By Parents 💕
              </h2>

              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                Thousands of parents trust LittleStyle
                for premium comfort and modern fashion.
              </p>

            </div>

            <div className="grid lg:grid-cols-3 gap-8 mt-16">

              {testimonials.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -8,
                  }}
                  className="rounded-[30px] bg-white shadow-xl border border-gray-100 p-8"
                >

                  <div className="flex gap-1 text-yellow-400 mb-6">

                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        fill="currentColor"
                      />
                    ))}

                  </div>

                  <p className="text-gray-600 leading-relaxed text-lg">
                    "{item.text}"
                  </p>

                  <div className="mt-8 flex items-center gap-4">

                    <div className="w-14 h-14 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white font-bold">
                      {item.name[0]}
                    </div>

                    <div>

                      <h4 className="font-bold text-lg">
                        {item.name}
                      </h4>

                      <p className="text-gray-500">
                        Verified Customer
                      </p>

                    </div>

                  </div>

                </motion.div>
              ))}

            </div>

          </section>


        </div>
      </div>

      {/* ================= ANALYTICS ================= */}

      <Analytics />

    </>
  );
}