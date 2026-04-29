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

const keyOf = (id: string) => `wishlist:${id}`;

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  const [liked, setLiked] = useState(false);
  const [added, setAdded] = useState(false);

  // ✅ Load wishlist safely
  useEffect(() => {
    try {
      setLiked(localStorage.getItem(keyOf(product.id)) === "true");
    } catch {}
  }, [product.id]);

  const toggleLike = () => {
    setLiked((prev) => {
      const next = !prev;
      try {
        localStorage.setItem(keyOf(product.id), String(next));
      } catch {}
      return next;
    });
  };

  const handleAdd = () => {
    if (added) return;

    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <div className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition relative">

      {/* ❤️ Wishlist */}
      <button
        type="button"
        aria-label="Toggle wishlist"
        aria-pressed={liked}
        onClick={toggleLike}
        className="absolute top-3 right-3 z-20 bg-white/95 p-2 rounded-full shadow hover:scale-110 active:scale-95 transition"
      >
        <Heart
          size={18}
          className={
            liked
              ? "text-red-500 fill-red-500 transition-all duration-200"
              : "text-gray-600 transition-all duration-200"
          }
        />
      </button>

      {/* 🏷️ Discount Badge */}
      {product.discount ? (
        <span className="absolute top-3 left-3 z-20 bg-pink-500 text-white text-xs px-2 py-1 rounded-full">
          {product.discount}% OFF
        </span>
      ) : null}

      {/* 🔗 Clickable Area ONLY where needed */}
      <Link href={`/products/${product.id}`}>
        <div className="cursor-pointer">
          <div className="relative">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent z-10" />
            <Image
              src={product.image || "/placeholder.png"}
              alt={product.name}
              width={400}
              height={300}
              className="w-full h-60 object-cover transition duration-300 group-hover:scale-110"
            />
          </div>

          <div className="p-4">
            <h3 className="font-semibold line-clamp-1">
              {product.name}
            </h3>
          </div>
        </div>
      </Link>

      {/* 📦 Non-clickable section */}
      <div className="px-4 pb-4">
        <div className="text-yellow-400 text-sm mt-1">
          ⭐ {product.rating ?? 4.5} ({product.reviews ?? 120})
        </div>

        <div className="mt-2 flex items-center gap-2">
          <span className="text-pink-500 font-bold text-lg">
            ₹{product.price}
          </span>
          {product.oldPrice != null && (
            <span className="text-gray-400 line-through text-sm">
              ₹{product.oldPrice}
            </span>
          )}
        </div>

        {/* 🛒 Add to Cart */}
        <button
          type="button"
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