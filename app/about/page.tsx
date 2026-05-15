"use client";

import Image from "next/image";

import Link from "next/link";

import { motion } from "framer-motion";

import {
  ArrowRight,
  Sparkles,
  Heart,
  ShieldCheck,
  Globe,
  Star,
  Truck,
  Award,
  Baby,
  HeartHandshake,
} from "lucide-react";

export default function About() {
  const stats = [
    {
      value: "10K+",
      label: "Happy Parents",
    },
    {
      value: "500+",
      label: "Premium Products",
    },
    {
      value: "4.9★",
      label: "Customer Rating",
    },
    {
      value: "100%",
      label: "Certified Safe Fabrics",
    },
  ];

  const features = [
    {
      icon: Heart,
      title: "Soft & Gentle",
      desc: "Ultra-soft fabrics carefully designed for delicate baby skin.",
    },
    {
      icon: Sparkles,
      title: "Modern Luxury",
      desc: "Premium fashion inspired by global modern trends.",
    },
    {
      icon: ShieldCheck,
      title: "Certified Safety",
      desc: "Every material tested for maximum comfort and protection.",
    },
  ];

  const values = [
    {
      icon: Globe,
      title: "Global Inspiration",
      desc: "Fashion inspired by worldwide baby fashion trends.",
    },
    {
      icon: Award,
      title: "Premium Quality",
      desc: "Every stitch crafted with care and precision.",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      desc: "Quick and secure delivery experience.",
    },
    {
      icon: HeartHandshake,
      title: "Trusted By Families",
      desc: "Loved by thousands of happy parents.",
    },
  ];

  const testimonials = [
    {
      name: "Sophia",
      review:
        "Absolutely amazing quality and beautiful designs.",
    },
    {
      name: "Emma",
      review:
        "Super soft fabric. My baby loves it so much.",
    },
    {
      name: "Olivia",
      review:
        "The best baby clothing brand I've purchased from.",
    },
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-white to-purple-50 min-h-screen">

      {/* ================= BACKGROUND EFFECTS ================= */}

      <div className="absolute inset-0 overflow-hidden -z-10">

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-400/20 rounded-full blur-[120px]" />

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-400/20 rounded-full blur-[120px]" />

        <div className="absolute top-[40%] left-[40%] w-[350px] h-[350px] bg-blue-300/10 rounded-full blur-[100px]" />

      </div>

      <div className="space-y-32">

        {/* ================= HERO SECTION ================= */}

        <section className="relative overflow-hidden">

          <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32 grid lg:grid-cols-2 gap-20 items-center">

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

              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white shadow-xl border border-pink-100 mb-8">

                <Sparkles
                  size={16}
                  className="text-pink-500"
                />

                <span className="text-sm font-semibold text-gray-700">
                  Premium Baby Fashion
                </span>

              </div>

              {/* TITLE */}

              <h1 className="text-5xl lg:text-7xl font-black leading-[1.05] text-gray-900">

                Crafted With
                <span className="block bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                  Love & Luxury 💖
                </span>

              </h1>

              {/* DESC */}

              <p className="mt-8 text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl">

                NextGrid LittleStyle is more than a
                fashion brand — it's a promise of comfort,
                softness, elegance, and happiness crafted
                specially for little stars.

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
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white border border-gray-200 shadow-lg font-semibold hover:bg-gray-50 transition-all duration-300"
                >

                  Contact Us

                </Link>

              </div>

              {/* STATS */}

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-16">

                {stats.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-3xl bg-white/70 backdrop-blur-2xl border border-white/40 shadow-xl p-5"
                  >

                    <h3 className="text-2xl lg:text-3xl font-black text-pink-500">
                      {item.value}
                    </h3>

                    <p className="text-sm text-gray-500 mt-2">
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

              <div className="absolute -top-6 -left-6 z-20 rounded-3xl bg-white/80 backdrop-blur-2xl shadow-2xl p-5 border border-white/50">

                <div className="flex items-center gap-4">

                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 text-white flex items-center justify-center">

                    <Baby size={26} />

                  </div>

                  <div>

                    <h4 className="font-bold text-lg">
                      Trusted By Families
                    </h4>

                    <p className="text-gray-500 text-sm">
                      Premium Comfort
                    </p>

                  </div>

                </div>

              </div>

              {/* IMAGE */}

              <div className="relative overflow-hidden rounded-[40px] shadow-[0_20px_80px_rgba(0,0,0,0.12)]">

                <Image
                  src="/baby-hero.jpg"
                  alt="About LittleStyle"
                  width={700}
                  height={700}
                  priority
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />

              </div>

              {/* FLOATING BOTTOM */}

              <div className="absolute -bottom-8 right-0 z-20 rounded-3xl bg-white/80 backdrop-blur-2xl shadow-2xl p-5 border border-white/50">

                <div className="flex items-center gap-4">

                  <div className="flex gap-1 text-yellow-400">

                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        fill="currentColor"
                      />
                    ))}

                  </div>

                  <div>

                    <h4 className="font-bold">
                      4.9 Customer Rating
                    </h4>

                    <p className="text-gray-500 text-sm">
                      Thousands of Reviews
                    </p>

                  </div>

                </div>

              </div>

            </motion.div>

          </div>

        </section>

        {/* ================= MISSION & VISION ================= */}

        <section className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-10">

            <motion.div
              whileHover={{
                y: -8,
              }}
              className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-pink-500 to-pink-400 text-white p-10 shadow-[0_20px_60px_rgba(236,72,153,0.35)]"
            >

              <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-white/10 rounded-full blur-[80px]" />

              <div className="relative z-10">

                <p className="uppercase tracking-[4px] text-pink-100 font-semibold">
                  Our Mission
                </p>

                <h2 className="text-4xl font-black mt-5">
                  Redefining Baby Fashion
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-pink-50">

                  To create luxury baby clothing combining
                  premium softness, elegant fashion, and
                  comfort — ensuring every baby feels safe,
                  stylish, and loved.

                </p>

              </div>

            </motion.div>

            <motion.div
              whileHover={{
                y: -8,
              }}
              className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-purple-500 to-indigo-500 text-white p-10 shadow-[0_20px_60px_rgba(139,92,246,0.35)]"
            >

              <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-white/10 rounded-full blur-[80px]" />

              <div className="relative z-10">

                <p className="uppercase tracking-[4px] text-purple-100 font-semibold">
                  Our Vision
                </p>

                <h2 className="text-4xl font-black mt-5">
                  Becoming A Global Brand
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-purple-50">

                  To become the world's most trusted and
                  loved premium baby fashion destination
                  for modern families everywhere.

                </p>

              </div>

            </motion.div>

          </div>

        </section>

        {/* ================= FEATURES ================= */}

        <section className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto">

            <p className="text-pink-500 uppercase tracking-[4px] font-semibold">
              Why Choose Us
            </p>

            <h2 className="text-4xl lg:text-5xl font-black mt-4">
              Designed For Comfort 💕
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Every detail is thoughtfully designed to
              provide elegance, safety, and premium comfort.
            </p>

          </div>

          <div className="grid lg:grid-cols-3 gap-10 mt-16">

            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -10,
                  }}
                  className="rounded-[36px] bg-white/70 backdrop-blur-2xl border border-white/40 shadow-[0_10px_40px_rgba(0,0,0,0.06)] p-10 text-center"
                >

                  <div className="w-20 h-20 rounded-[28px] bg-gradient-to-r from-pink-500 to-purple-500 text-white flex items-center justify-center mx-auto shadow-2xl">

                    <Icon size={36} />

                  </div>

                  <h3 className="text-2xl font-bold mt-8">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mt-4 leading-relaxed">
                    {item.desc}
                  </p>

                </motion.div>
              );
            })}

          </div>

        </section>

        {/* ================= VALUES ================= */}

        <section className="max-w-7xl mx-auto px-6">

          <div className="rounded-[40px] bg-gradient-to-br from-white to-pink-50 border border-white/40 shadow-[0_20px_80px_rgba(0,0,0,0.06)] p-10 lg:p-16">

            <div className="text-center max-w-3xl mx-auto">

              <p className="text-pink-500 uppercase tracking-[4px] font-semibold">
                Our Values
              </p>

              <h2 className="text-4xl lg:text-5xl font-black mt-4">
                Built With Passion ✨
              </h2>

            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

              {values.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    whileHover={{
                      y: -8,
                    }}
                    className="rounded-[30px] bg-white p-8 shadow-xl border border-gray-100"
                  >

                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 text-white flex items-center justify-center shadow-xl mb-6">

                      <Icon size={28} />

                    </div>

                    <h3 className="text-xl font-bold">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 mt-4 leading-relaxed">
                      {item.desc}
                    </p>

                  </motion.div>
                );
              })}

            </div>

          </div>

        </section>

        {/* ================= FOUNDER STORY ================= */}

        <section className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <motion.div
              whileHover={{
                scale: 1.02,
              }}
              className="relative overflow-hidden rounded-[40px] shadow-[0_20px_80px_rgba(0,0,0,0.12)]"
            >

              <Image
                src="/founder.jpg"
                alt="Founder"
                width={700}
                height={700}
                className="w-full h-full object-cover"
              />

            </motion.div>

            <div>

              <p className="text-pink-500 uppercase tracking-[4px] font-semibold">
                Founder Story
              </p>

              <h2 className="text-4xl lg:text-5xl font-black mt-5 leading-tight">
                From A Small Dream
                <span className="block text-pink-500">
                  To A Growing Brand
                </span>
              </h2>

              <p className="mt-8 text-lg text-gray-600 leading-relaxed">

                This journey began with one belief —
                babies deserve the same level of luxury,
                elegance, and comfort as adults.

              </p>

              <p className="mt-6 text-lg text-gray-600 leading-relaxed">

                What started as a small vision became
                a trusted fashion destination loved by
                thousands of modern families.

              </p>

              <div className="flex gap-5 mt-10">

                <Link
                  href="/products"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold shadow-2xl hover:scale-105 transition-all duration-300"
                >

                  Explore Products

                  <ArrowRight size={18} />

                </Link>

              </div>

            </div>

          </div>

        </section>

        {/* ================= TESTIMONIALS ================= */}

        <section className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto">

            <p className="text-pink-500 uppercase tracking-[4px] font-semibold">
              Testimonials
            </p>

            <h2 className="text-4xl lg:text-5xl font-black mt-4">
              Loved By Parents 💬
            </h2>

          </div>

          <div className="grid lg:grid-cols-3 gap-8 mt-16">

            {testimonials.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -10,
                }}
                className="rounded-[36px] bg-white/80 backdrop-blur-2xl border border-white/40 shadow-[0_10px_40px_rgba(0,0,0,0.06)] p-10"
              >

                <div className="flex gap-1 text-yellow-400">

                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      fill="currentColor"
                    />
                  ))}

                </div>

                <p className="mt-6 text-lg text-gray-600 leading-relaxed">

                  "{item.review}"

                </p>

                <div className="flex items-center gap-4 mt-8">

                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white flex items-center justify-center font-bold text-lg">

                    {item.name[0]}

                  </div>

                  <div>

                    <h4 className="font-bold text-lg">
                      {item.name}
                    </h4>

                    <p className="text-gray-500">
                      Verified Parent
                    </p>

                  </div>

                </div>

              </motion.div>
            ))}

          </div>

        </section>

        {/* ================= CTA ================= */}

        <section className="relative overflow-hidden bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 py-24">

          <div className="absolute inset-0 overflow-hidden">

            <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-[120px]" />

            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-[120px]" />

          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">

            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/10 mb-8">

              <Sparkles size={16} />

              Premium Baby Fashion

            </div>

            <h2 className="text-4xl lg:text-6xl font-black leading-tight">

              Give Your Baby
              <span className="block">
                The Best 💖
              </span>

            </h2>

            <p className="mt-8 text-lg text-white/80 leading-relaxed">

              Discover comfort, luxury, softness,
              and elegance in every outfit.

            </p>

            <div className="flex flex-wrap items-center justify-center gap-5 mt-12">

              <Link
                href="/products"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-black font-bold shadow-2xl hover:scale-105 transition-all duration-300"
              >

                Explore Collection

                <ArrowRight size={18} />

              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl text-white font-semibold hover:bg-white/20 transition-all duration-300"
              >

                Contact Us

              </Link>

            </div>

          </div>

        </section>

      </div>

    </div>
  );
}