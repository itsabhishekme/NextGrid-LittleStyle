"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart, ShoppingCart } from "lucide-react";
import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";

type Product = {
  id: string;
  name: string;
  price: number;
  image?: string;
  rating?: number;
  reviews?: number;
  oldPrice?: number;
  discount?: number;
};

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  const [liked, setLiked] = useState(false);
  const [added, setAdded] = useState(false);

  // ✅ Persist wishlist
  useEffect(() => {
    const saved = localStorage.getItem(`wish-${product.id}`);
    if (saved === "true") setLiked(true);
  }, [product.id]);

  const toggleLike = () => {
    const newValue = !liked;
    setLiked(newValue);
    localStorage.setItem(`wish-${product.id}`, String(newValue));
  };

  // ✅ Prevent spam click
  const handleAdd = () => {
    if (added) return;

    addToCart(product);
    setAdded(true);

    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <div className="group relative bg-white rounded-2xl shadow-md overflow-hidden transition hover:shadow-xl hover:-translate-y-1">

      {/* 🏷️ BADGE */}
      {product.discount && (
        <span className="absolute top-3 left-3 bg-pink-500 text-white text-xs px-2 py-1 rounded-full z-10">
          {product.discount}% OFF
        </span>
      )}

      {/* ❤️ WISHLIST */}
      <button
        aria-label="Toggle wishlist"
        aria-pressed={liked}
        onClick={toggleLike}
        className="absolute top-3 right-3 bg-white/90 backdrop-blur p-2 rounded-full shadow z-10 hover:scale-110 transition"
      >
        <Heart
          size={18}
          className={`transition ${
            liked ? "text-red-500 fill-red-500" : ""
          }`}
        />
      </button>

      {/* 🖼️ IMAGE */}
      <Link href={`/products/${product.id}`}>
        <div className="relative overflow-hidden">

          {/* subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent z-10" />

          <Image
            src={product.image || "/placeholder.png"}
            alt={product.name}
            width={400}
            height={300}
            sizes="(max-width: 768px) 100vw, 33vw"
            className="w-full h-60 object-cover transition duration-300 group-hover:scale-110"
          />
        </div>
      </Link>

      {/* 📦 CONTENT */}
      <div className="p-4">

        <h3 className="font-semibold line-clamp-1">
          {product.name}
        </h3>

        {/* ⭐ RATING */}
        <div className="text-yellow-400 text-sm mt-1">
          ⭐ {product.rating ?? 4.5} ({product.reviews ?? 120})
        </div>

        {/* 💰 PRICE */}
        <div className="mt-2 flex items-center gap-2">
          <span className="text-pink-500 font-bold text-lg">
            ₹{product.price}
          </span>

          {product.oldPrice && (
            <span className="text-gray-400 line-through text-sm">
              ₹{product.oldPrice}
            </span>
          )}
        </div>

        {/* 🛒 BUTTON */}
        <button
          onClick={handleAdd}
          disabled={added}
          className={`mt-4 w-full flex items-center justify-center gap-2 py-2 rounded-lg text-white transition ${
            added
              ? "bg-green-500 cursor-not-allowed"
              : "bg-pink-500 hover:bg-pink-600"
          }`}
        >
          <ShoppingCart size={16} />
          {added ? "Added ✅" : "Add to Cart"}
        </button>

      </div>

    </div>
  );
}