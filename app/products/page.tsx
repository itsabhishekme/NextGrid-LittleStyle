"use client";

import { useState, useMemo, useEffect } from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("");

  // ✅ FIX: debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search.trim().toLowerCase());
    }, 300);

    return () => clearTimeout(timer);
  }, [search]);

  // ✅ FIX: clean categories
  const categories = [
    "All",
    ...Array.from(
      new Set(products.map((p) => p.category?.trim()))
    ).filter(Boolean),
  ];

  // ✅ FILTER LOGIC
  const filteredProducts = useMemo(() => {
    let result = products;

    if (debouncedSearch) {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(debouncedSearch)
      );
    }

    if (category !== "All") {
      result = result.filter((p) => p.category === category);
    }

    if (sort === "low") {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sort === "high") {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    return result;
  }, [debouncedSearch, category, sort]);

  const resetFilters = () => {
    setSearch("");
    setCategory("All");
    setSort("");
  };

  return (
    <div className="bg-gradient-to-b from-pink-50 via-white to-blue-50 min-h-screen px-6 py-10">

      {/* 🌟 HEADER */}
      <div className="max-w-7xl mx-auto mb-10 flex justify-between items-center flex-wrap gap-4">
        <div>
          <h1 className="text-4xl font-extrabold">
            Explore Collection 👶
          </h1>
          <p className="text-gray-500 mt-1">
            {filteredProducts.length} products found
          </p>
        </div>

        {(search || category !== "All" || sort) && (
          <button
            onClick={resetFilters}
            className="text-sm bg-gray-200 px-4 py-2 rounded-full hover:bg-gray-300 transition"
          >
            Clear Filters ✖
          </button>
        )}
      </div>

      {/* 🔍 FILTER BAR */}
      <div className="max-w-7xl mx-auto bg-white p-5 rounded-3xl shadow-lg mb-10 grid md:grid-cols-3 gap-4">

        {/* SEARCH */}
        <input
          type="text"
          aria-label="Search products"
          placeholder="🔍 Search products..."
          className="border p-3 rounded-xl focus:ring-2 focus:ring-pink-400 outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* CATEGORY */}
        <select
          aria-label="Select category"
          className="border p-3 rounded-xl focus:ring-2 focus:ring-pink-400"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>

        {/* SORT */}
        <select
          aria-label="Sort products"
          className="border p-3 rounded-xl focus:ring-2 focus:ring-pink-400"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="low">💰 Low → High</option>
          <option value="high">💎 High → Low</option>
        </select>

      </div>

      {/* 🎯 ACTIVE FILTER TAGS (FIXED UX) */}
      <div className="max-w-7xl mx-auto flex flex-wrap gap-3 mb-6">

        {search && (
          <button
            onClick={() => setSearch("")}
            className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm hover:bg-pink-200"
          >
            Search: {search} ✖
          </button>
        )}

        {category !== "All" && (
          <button
            onClick={() => setCategory("All")}
            className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm hover:bg-blue-200"
          >
            {category} ✖
          </button>
        )}

        {sort && (
          <button
            onClick={() => setSort("")}
            className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm hover:bg-green-200"
          >
            Sorted ✖
          </button>
        )}

      </div>

      {/* 🛍️ GRID */}
      <div className="max-w-7xl mx-auto">

        {filteredProducts.length === 0 ? (
          <div className="text-center py-24">
            <div className="text-7xl">😢</div>
            <h2 className="text-2xl font-semibold mt-4">
              No products found
            </h2>
            <p className="text-gray-500 mt-2">
              Try adjusting filters or search
            </p>

            <button
              onClick={resetFilters}
              className="mt-6 bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

            {filteredProducts.map((p) => (
              <div
                key={p.id}
                className="transform hover:-translate-y-2 transition duration-300"
              >
                <ProductCard product={p} />
              </div>
            ))}

          </div>
        )}

      </div>

    </div>
  );
}