"use client";

import Image from "next/image";
import { Trash2, Plus, Minus } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

type CartItemType = {
  id: string;
  name: string;
  price: number;
  image?: string;
  quantity: number;
};

export default function CartItem({ item }: { item: CartItemType }) {
  const { removeFromCart, updateQuantity } = useCart();

  const [loading, setLoading] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const MIN_QTY = 1;
  const MAX_QTY = 10;

  // 💰 Format currency
  const formatPrice = (value: number) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(value);

  // ❌ REMOVE ITEM
  const handleRemove = () => {
    setLoading(true);

    timerRef.current = setTimeout(() => {
      removeFromCart(item.id);
    }, 300);
  };

  // CLEANUP
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  // ➕➖ CHANGE QTY
  const changeQty = (newQty: number) => {
    if (newQty < MIN_QTY || newQty > MAX_QTY) return;
    updateQuantity(item.id, newQty);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: 100 }}
      className="flex flex-col md:flex-row items-center gap-6 bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition"
    >

      {/* 🖼️ IMAGE */}
      <div className="w-28 h-28 relative overflow-hidden rounded-xl bg-gray-100">
        <Image
          src={item.image || "/placeholder.png"}
          alt={item.name}
          fill
          sizes="112px"
          className="object-cover transition duration-300 hover:scale-110"
        />
      </div>

      {/* 📦 DETAILS */}
      <div className="flex-1 text-center md:text-left">

        <h3 className="font-semibold text-lg line-clamp-1">
          {item.name}
        </h3>

        <p className="text-gray-500 text-sm mt-1">
          {formatPrice(item.price)} each
        </p>

        {/* ➕➖ QUANTITY */}
        <div
          className="flex items-center justify-center md:justify-start gap-3 mt-4"
          aria-live="polite"
        >
          <button
            onClick={() => changeQty(item.quantity - 1)}
            disabled={item.quantity <= MIN_QTY}
            aria-label="Decrease quantity"
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
          >
            <Minus size={16} />
          </button>

          <motion.span
            key={item.quantity}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="font-semibold text-lg"
          >
            {item.quantity}
          </motion.span>

          <button
            onClick={() => changeQty(item.quantity + 1)}
            disabled={item.quantity >= MAX_QTY}
            aria-label="Increase quantity"
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
          >
            <Plus size={16} />
          </button>
        </div>

      </div>

      {/* 💰 PRICE */}
      <div className="text-center md:text-right">

        <motion.p
          key={item.quantity}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-lg font-bold text-pink-500"
        >
          {formatPrice(item.price * item.quantity)}
        </motion.p>

        {/* ❌ REMOVE */}
        <button
          onClick={handleRemove}
          disabled={loading}
          aria-label="Remove item"
          className="mt-3 flex items-center gap-2 text-red-500 text-sm hover:underline disabled:opacity-50"
        >
          {loading ? (
            <span className="animate-pulse">Removing...</span>
          ) : (
            <>
              <Trash2 size={16} />
              Remove
            </>
          )}
        </button>

      </div>

    </motion.div>
  );
}