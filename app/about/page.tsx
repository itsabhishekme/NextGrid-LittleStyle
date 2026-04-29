"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="bg-gradient-to-b from-pink-50 via-white to-blue-50 min-h-screen overflow-hidden">

      {/* 🌟 HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Crafted with <span className="text-pink-500">Love</span> for Little Ones 👶
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            NextGrid LittleStyle is not just a clothing brand — it's a promise of
            comfort, softness, and style. Every stitch is designed with care,
            ensuring your baby feels safe and happy.
          </p>

          <div className="flex gap-4 mt-8">
            <a
              href="/products"
              className="bg-pink-500 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition"
            >
              Shop Collection
            </a>

            <a
              href="/contact"
              className="border border-gray-300 px-6 py-3 rounded-full hover:bg-gray-100 transition"
            >
              Contact Us
            </a>
          </div>
        </motion.div>

        <motion.div
          className="relative w-full h-[420px]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <Image
            src="/baby-hero.jpg"
            alt="Baby"
            fill
            className="object-cover rounded-3xl shadow-2xl"
          />
        </motion.div>
      </section>

      {/* 📊 STATS SECTION */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-6 text-center">

          {[
            { value: "10K+", label: "Happy Parents" },
            { value: "500+", label: "Products" },
            { value: "4.9⭐", label: "Ratings" },
            { value: "100%", label: "Safe Fabrics" },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-pink-50 shadow hover:shadow-xl transition"
            >
              <h3 className="text-3xl font-bold text-pink-500">
                {item.value}
              </h3>
              <p className="text-gray-600 mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 💖 MISSION + VISION */}
      <section className="py-20 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        
        <div className="bg-gradient-to-br from-pink-100 to-pink-50 p-10 rounded-3xl shadow-lg">
          <h2 className="text-2xl font-bold text-pink-600">Our Mission</h2>
          <p className="mt-4 text-gray-700">
            To redefine baby fashion by combining luxury softness with modern
            aesthetics — ensuring every baby feels like they’re wrapped in love.
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-10 rounded-3xl shadow-lg">
          <h2 className="text-2xl font-bold text-blue-600">Our Vision</h2>
          <p className="mt-4 text-gray-700">
            To become the most loved baby clothing brand globally, trusted by
            millions of parents for quality and care.
          </p>
        </div>

      </section>

      {/* 👶 FEATURES */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-14">
          Why Choose Us 💕
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {[
            { icon: "🧵", title: "Soft Fabric", desc: "Ultra-soft materials safe for sensitive baby skin." },
            { icon: "🎨", title: "Modern Design", desc: "Stylish outfits inspired by global trends." },
            { icon: "🛡️", title: "Safe & Certified", desc: "Tested fabrics ensuring maximum safety." },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-3xl shadow-md hover:shadow-2xl transition text-center"
            >
              <div className="text-5xl">{item.icon}</div>
              <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 👨‍💼 FOUNDER STORY */}
      <section className="bg-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          <Image
            src="/founder.jpg"
            alt="Founder"
            width={500}
            height={400}
            className="rounded-3xl shadow-xl"
          />

          <div>
            <h2 className="text-3xl font-bold">From a Vision to Reality</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              This journey began with a simple belief — babies deserve the same
              level of fashion and comfort as adults. What started as an idea is
              now a growing brand trusted by parents.
            </p>

            <p className="mt-4 text-gray-600">
              Every design carries a story, every fabric carries care.
            </p>
          </div>

        </div>
      </section>

      {/* ⭐ TESTIMONIALS */}
      <section className="py-20 max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-10">
          What Parents Say 💬
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {["Amazing quality!", "So soft & cute!", "Best baby clothes ever!"].map((text, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-md">
              <p className="text-gray-600">"{text}"</p>
              <p className="mt-4 font-semibold text-pink-500">— Happy Parent</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🚀 FINAL CTA */}
      <section className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-20 text-center">
        <h2 className="text-4xl font-bold">
          Give Your Baby the Best 💖
        </h2>

        <p className="mt-4 text-lg">
          Discover comfort, quality, and style in every outfit.
        </p>

        <a
          href="/products"
          className="inline-block mt-6 bg-white text-pink-500 px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition"
        >
          Explore Collection
        </a>
      </section>

    </div>
  );
}