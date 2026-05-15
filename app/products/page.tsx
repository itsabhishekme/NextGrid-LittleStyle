"use client";

import {
  useState,
  useMemo,
  useEffect,
} from "react";

import { motion } from "framer-motion";

import {
  Search,
  SlidersHorizontal,
  Sparkles,
  ArrowRight,
  Grid3X3,
  BadgeCheck,
  Truck,
  ShieldCheck,
  HeartHandshake,
  X,
} from "lucide-react";

import { products } from "@/data/products";

import ProductCard from "@/components/ProductCard";

export default function ProductsPage() {
  const [search, setSearch] =
    useState("");

  const [debouncedSearch, setDebouncedSearch] =
    useState("");

  const [category, setCategory] =
    useState("All");

  const [sort, setSort] =
    useState("");

  // ================= DEBOUNCE =================

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(
        search.trim().toLowerCase()
      );
    }, 300);

    return () => clearTimeout(timer);
  }, [search]);

  // ================= CATEGORIES =================

  const categories = [
    "All",
    ...Array.from(
      new Set(
        products.map((p) =>
          p.category?.trim()
        )
      )
    ).filter(Boolean),
  ];

  // ================= FILTER PRODUCTS =================

  const filteredProducts = useMemo(() => {
    let result = products;

    if (debouncedSearch) {
      result = result.filter((p) =>
        p.name
          .toLowerCase()
          .includes(
            debouncedSearch
          )
      );
    }

    if (category !== "All") {
      result = result.filter(
        (p) =>
          p.category === category
      );
    }

    if (sort === "low") {
      result = [...result].sort(
        (a, b) =>
          a.price - b.price
      );
    } else if (sort === "high") {
      result = [...result].sort(
        (a, b) =>
          b.price - a.price
      );
    }

    return result;
  }, [
    debouncedSearch,
    category,
    sort,
  ]);

  // ================= RESET =================

  const resetFilters = () => {
    setSearch("");
    setCategory("All");
    setSort("");
  };

  return (
    <div className="relative overflow-hidden min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 py-12 px-4 sm:px-6 lg:px-8">

      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0 overflow-hidden -z-10">

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-300/20 rounded-full blur-[120px]" />

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-300/20 rounded-full blur-[120px]" />

        <div className="absolute top-[40%] left-[40%] w-[350px] h-[350px] bg-blue-300/10 rounded-full blur-[100px]" />

      </div>

      {/* ================= HERO ================= */}

      <div className="max-w-7xl mx-auto mb-16">

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
          className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 px-8 py-16 lg:px-16 lg:py-20 text-white shadow-[0_20px_80px_rgba(168,85,247,0.35)]"
        >

          {/* GLOW */}

          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-[120px]" />

          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-[120px]" />

          <div className="relative z-10 max-w-4xl">

            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/10 mb-8">

              <Sparkles size={16} />

              Premium Baby Fashion

            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-[1.05]">

              Explore Our
              <span className="block">
                Luxury Collection ✨
              </span>

            </h1>

            <p className="mt-8 text-lg lg:text-xl text-white/80 leading-relaxed max-w-2xl">

              Discover premium clothing designed
              with softness, elegance, and comfort
              for your little stars.

            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <div className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 px-6 py-4">

                <h3 className="text-3xl font-black">
                  {products.length}+
                </h3>

                <p className="text-white/70 mt-1">
                  Premium Products
                </p>

              </div>

              <div className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 px-6 py-4">

                <h3 className="text-3xl font-black">
                  10K+
                </h3>

                <p className="text-white/70 mt-1">
                  Happy Families
                </p>

              </div>

              <div className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 px-6 py-4">

                <h3 className="text-3xl font-black">
                  4.9★
                </h3>

                <p className="text-white/70 mt-1">
                  Customer Rating
                </p>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

      {/* ================= FILTER BAR ================= */}

      <div className="max-w-7xl mx-auto sticky top-24 z-30 mb-10">

        <div className="rounded-[36px] bg-white/70 backdrop-blur-2xl border border-white/40 shadow-[0_10px_40px_rgba(0,0,0,0.06)] p-5 lg:p-7">

          <div className="flex flex-col xl:flex-row gap-5">

            {/* SEARCH */}

            <div className="relative flex-1">

              <Search
                size={20}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                placeholder="Search premium products..."
                value={search}
                onChange={(e) =>
                  setSearch(
                    e.target.value
                  )
                }
                className="w-full h-16 rounded-2xl border border-gray-200 bg-white pl-14 pr-5 outline-none focus:border-pink-400"
              />

            </div>

            {/* CATEGORY */}

            <div className="relative min-w-[220px]">

              <Grid3X3
                size={18}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <select
                value={category}
                onChange={(e) =>
                  setCategory(
                    e.target.value
                  )
                }
                className="w-full h-16 rounded-2xl border border-gray-200 bg-white pl-14 pr-5 outline-none focus:border-pink-400 appearance-none"
              >

                {categories.map((cat) => (
                  <option key={cat}>
                    {cat}
                  </option>
                ))}

              </select>

            </div>

            {/* SORT */}

            <div className="relative min-w-[220px]">

              <SlidersHorizontal
                size={18}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <select
                value={sort}
                onChange={(e) =>
                  setSort(
                    e.target.value
                  )
                }
                className="w-full h-16 rounded-2xl border border-gray-200 bg-white pl-14 pr-5 outline-none focus:border-pink-400 appearance-none"
              >

                <option value="">
                  Sort Products
                </option>

                <option value="low">
                  Price: Low → High
                </option>

                <option value="high">
                  Price: High → Low
                </option>

              </select>

            </div>

          </div>

          {/* ACTIVE FILTERS */}

          {(search ||
            category !== "All" ||
            sort) && (
            <div className="flex flex-wrap gap-3 mt-6">

              {search && (
                <button
                  onClick={() =>
                    setSearch("")
                  }
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100 text-pink-600 font-medium hover:bg-pink-200 transition"
                >

                  Search: {search}

                  <X size={16} />

                </button>
              )}

              {category !== "All" && (
                <button
                  onClick={() =>
                    setCategory(
                      "All"
                    )
                  }
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-medium hover:bg-blue-200 transition"
                >

                  {category}

                  <X size={16} />

                </button>
              )}

              {sort && (
                <button
                  onClick={() =>
                    setSort("")
                  }
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-600 font-medium hover:bg-green-200 transition"
                >

                  Sorted

                  <X size={16} />

                </button>
              )}

              <button
                onClick={
                  resetFilters
                }
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-black text-white font-semibold hover:scale-105 transition-all duration-300"
              >

                Reset All

              </button>

            </div>
          )}

        </div>

      </div>

      {/* ================= FEATURES ================= */}

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 mb-14">

        {[
          {
            icon: Truck,
            title: "Fast Delivery",
            desc: "Quick shipping across India",
          },
          {
            icon: ShieldCheck,
            title: "Secure Checkout",
            desc: "100% secure payment protection",
          },
          {
            icon: HeartHandshake,
            title: "Premium Support",
            desc: "Dedicated customer assistance",
          },
        ].map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={index}
              whileHover={{
                y: -8,
              }}
              className="rounded-[32px] bg-white/70 backdrop-blur-2xl border border-white/40 shadow-xl p-8"
            >

              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 text-white flex items-center justify-center shadow-xl mb-6">

                <Icon size={28} />

              </div>

              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-3 leading-relaxed">
                {item.desc}
              </p>

            </motion.div>
          );
        })}

      </div>

      {/* ================= RESULTS ================= */}

      <div className="max-w-7xl mx-auto mb-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

        <div>

          <p className="uppercase tracking-[4px] text-pink-500 text-sm font-semibold">
            Product Collection
          </p>

          <h2 className="text-4xl font-black mt-3">
            Featured Products
          </h2>

        </div>

        <div className="rounded-2xl bg-white/70 backdrop-blur-xl border border-white/40 shadow-lg px-6 py-4">

          <p className="text-gray-600">
            Showing
            <span className="font-bold text-pink-500 mx-2">
              {
                filteredProducts.length
              }
            </span>
            premium products
          </p>

        </div>

      </div>

      {/* ================= PRODUCTS GRID ================= */}

      <div className="max-w-7xl mx-auto">

        {filteredProducts.length ===
        0 ? (
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="relative overflow-hidden rounded-[40px] bg-white/70 backdrop-blur-2xl border border-white/40 shadow-[0_20px_80px_rgba(0,0,0,0.08)] py-24 px-8 text-center"
          >

            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-pink-200/30 rounded-full blur-[100px]" />

            <div className="relative z-10">

              <div className="text-8xl">
                😢
              </div>

              <h2 className="text-4xl font-black mt-8">
                No Products Found
              </h2>

              <p className="mt-5 text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">

                Try adjusting your filters
                or search query to explore
                more premium collections.

              </p>

              <button
                onClick={
                  resetFilters
                }
                className="group inline-flex items-center gap-3 mt-10 px-8 py-4 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-bold shadow-2xl hover:scale-105 transition-all duration-300"
              >

                Reset Filters

                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition"
                />

              </button>

            </div>

          </motion.div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

            {filteredProducts.map(
              (
                product,
                index
              ) => (
                <motion.div
                  key={product.id}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay:
                      index * 0.05,
                  }}
                  whileHover={{
                    y: -10,
                  }}
                  className="group"
                >

                  <ProductCard
                    product={
                      product
                    }
                  />

                </motion.div>
              )
            )}

          </div>
        )}

      </div>

      {/* ================= CTA ================= */}

      <div className="max-w-7xl mx-auto mt-24">

        <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 px-8 py-16 lg:px-16 text-white shadow-[0_20px_80px_rgba(168,85,247,0.35)]">

          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-[120px]" />

          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-[120px]" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">

            <div className="max-w-2xl">

              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/10 mb-8">

                <BadgeCheck
                  size={16}
                />

                Premium Quality Guarantee

              </div>

              <h2 className="text-4xl lg:text-5xl font-black leading-tight">

                Luxury Fashion
                <span className="block">
                  For Little Stars ✨
                </span>

              </h2>

              <p className="mt-6 text-lg text-white/80 leading-relaxed">

                Experience premium softness,
                elegant fashion, and modern
                comfort in every collection.

              </p>

            </div>

            <button className="group inline-flex items-center gap-3 px-8 py-5 rounded-2xl bg-white text-black font-bold shadow-2xl hover:scale-105 transition-all duration-300">

              Explore Collection

              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition"
              />

            </button>

          </div>

        </div>

      </div>

    </div>
  );
}