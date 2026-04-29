"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  const updateQty = (index: number, change: number) => {
    setQuantities((prev) => ({
      ...prev,
      [index]: Math.max(1, (prev[index] || 1) + change),
    }));
  };

  const getQty = (index: number) => quantities[index] || 1;

  const subtotal = cart.reduce(
    (acc: number, item: any, i: number) =>
      acc + item.price * getQty(i),
    0
  );

  const shipping = subtotal > 999 ? 0 : 99;
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + shipping + tax - discount;

  const applyCoupon = () => {
    if (coupon === "BABY10") {
      setDiscount(100);
    } else {
      setDiscount(0);
      alert("Invalid Coupon");
    }
  };

  return (
    <div className="bg-gradient-to-b from-pink-50 via-white to-blue-50 min-h-screen px-6 py-10">

      {/* HEADER */}
      <div className="max-w-7xl mx-auto mb-10 flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-extrabold">Your Cart 🛒</h1>
          <p className="text-gray-500">Almost there! Review your order</p>
        </div>

        {cart.length > 0 && (
          <button
            onClick={clearCart}
            className="text-sm text-red-500 hover:underline"
          >
            Clear Cart
          </button>
        )}
      </div>

      {/* EMPTY */}
      {cart.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-24"
        >
          <div className="text-7xl">🛍️</div>
          <h2 className="text-2xl font-semibold mt-4">
            Your cart is empty
          </h2>
          <Link
            href="/products"
            className="mt-6 inline-block bg-pink-500 text-white px-6 py-3 rounded-full"
          >
            Start Shopping
          </Link>
        </motion.div>
      ) : (

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

          {/* ITEMS */}
          <div className="md:col-span-2 space-y-6">

            {cart.map((item: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-5 rounded-3xl shadow-md flex gap-5"
              >
                <div className="relative w-28 h-28 rounded-xl overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.jpg"}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-pink-500 font-bold">₹{item.price}</p>

                  <div className="flex gap-3 mt-4">
                    <button onClick={() => updateQty(i, -1)}>-</button>
                    <span>{getQty(i)}</span>
                    <button onClick={() => updateQty(i, 1)}>+</button>
                  </div>
                </div>

                <div className="text-right">
                  <p className="font-bold">
                    ₹{item.price * getQty(i)}
                  </p>

                  <button
                    onClick={() => removeFromCart(i)}
                    className="text-red-500 text-sm"
                  >
                    Remove
                  </button>
                </div>
              </motion.div>
            ))}

          </div>

          {/* SUMMARY */}
          <div className="bg-white p-6 rounded-3xl shadow-lg sticky top-24">

            <h2 className="text-xl font-bold mb-4">Summary</h2>

            {/* FREE SHIPPING BAR */}
            <div className="mb-4">
              <div className="h-2 bg-gray-200 rounded">
                <div
                  className="h-2 bg-green-500 rounded"
                  style={{
                    width: `${Math.min((subtotal / 1000) * 100, 100)}%`,
                  }}
                />
              </div>
              <p className="text-sm text-gray-500 mt-1">
                {subtotal < 1000
                  ? `Add ₹${1000 - subtotal} for free shipping`
                  : "Free shipping unlocked 🎉"}
              </p>
            </div>

            {/* COUPON */}
            <div className="flex gap-2 mb-4">
              <input
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                placeholder="Coupon code"
                className="border p-2 rounded w-full"
              />
              <button
                onClick={applyCoupon}
                className="bg-black text-white px-4 rounded"
              >
                Apply
              </button>
            </div>

            {/* PRICING */}
            <div className="space-y-2 text-gray-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>
                <span>{shipping === 0 ? "Free" : `₹${shipping}`}</span>
              </div>

              <div className="flex justify-between">
                <span>Tax</span>
                <span>₹{tax}</span>
              </div>

              {discount > 0 && (
                <div className="flex justify-between text-green-500">
                  <span>Discount</span>
                  <span>-₹{discount}</span>
                </div>
              )}

              <hr />

              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>₹{total}</span>
              </div>
            </div>

            <Link
              href="/checkout"
              className="block mt-6 bg-pink-500 text-white text-center py-3 rounded-full"
            >
              Checkout →
            </Link>

          </div>

        </div>
      )}
    </div>
  );
}