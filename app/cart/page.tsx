"use client";

import { useCart } from "@/context/CartContext";

import Image from "next/image";

import Link from "next/link";

import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import {
  ArrowRight,
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
  ShieldCheck,
  Truck,
  Ticket,
  HeartHandshake,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

type Product = {
  id: string;
  name: string;
  price: number;
  image?: string;
};

export default function CartPage() {
  const {
    cart,
    removeFromCart,
    clearCart,
  } = useCart();

  const [quantities, setQuantities] = useState<{
    [key: string]: number;
  }>({});

  const [coupon, setCoupon] = useState("");

  const [discount, setDiscount] = useState(0);

  const [couponSuccess, setCouponSuccess] =
    useState(false);

  const updateQty = (
    id: string,
    change: number
  ) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(
        1,
        (prev[id] || 1) + change
      ),
    }));
  };

  const getQty = (id: string) =>
    quantities[id] || 1;

  const subtotal = cart.reduce(
    (acc: number, item: Product) =>
      acc + item.price * getQty(item.id),
    0
  );

  const shipping = subtotal > 999 ? 0 : 99;

  const tax = Math.round(subtotal * 0.05);

  const total =
    subtotal + shipping + tax - discount;

  const applyCoupon = () => {
    if (coupon.toUpperCase() === "BABY10") {
      setDiscount(100);
      setCouponSuccess(true);
    } else {
      setDiscount(0);
      setCouponSuccess(false);
      alert("Invalid Coupon");
    }
  };

  return (
    <div className="relative overflow-hidden min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 py-14 px-4 sm:px-6 lg:px-8">

      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0 overflow-hidden -z-10">

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-300/20 rounded-full blur-[120px]" />

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-300/20 rounded-full blur-[120px]" />

        <div className="absolute top-[40%] left-[40%] w-[350px] h-[350px] bg-blue-300/10 rounded-full blur-[100px]" />

      </div>

      {/* ================= HEADER ================= */}

      <div className="max-w-7xl mx-auto mb-14">

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

          <div>

            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white shadow-lg border border-pink-100 mb-6">

              <Sparkles
                size={16}
                className="text-pink-500"
              />

              <span className="text-sm font-semibold text-gray-700">
                Premium Shopping Cart
              </span>

            </div>

            <h1 className="text-5xl lg:text-6xl font-black text-gray-900">

              Your Cart 🛒

            </h1>

            <p className="mt-5 text-lg text-gray-600 max-w-2xl">

              Review your premium selections and
              complete your shopping experience.

            </p>

          </div>

          {cart.length > 0 && (
            <button
              onClick={clearCart}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-red-50 border border-red-100 text-red-500 font-semibold hover:bg-red-100 transition-all duration-300"
            >

              <Trash2 size={18} />

              Clear Cart

            </button>
          )}

        </div>

      </div>

      {/* ================= EMPTY STATE ================= */}

      {cart.length === 0 ? (
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="max-w-4xl mx-auto"
        >

          <div className="relative overflow-hidden rounded-[40px] bg-white/70 backdrop-blur-2xl border border-white/40 shadow-[0_20px_80px_rgba(0,0,0,0.08)] px-8 py-20 text-center">

            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-pink-200/30 rounded-full blur-[100px]" />

            <div className="relative z-10">

              <div className="w-32 h-32 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white flex items-center justify-center mx-auto shadow-2xl">

                <ShoppingBag size={60} />

              </div>

              <h2 className="text-4xl font-black mt-10 text-gray-900">
                Your Cart Is Empty
              </h2>

              <p className="mt-5 text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">

                Looks like you haven’t added any
                products yet. Explore our premium
                baby fashion collection now.

              </p>

              <Link
                href="/products"
                className="group inline-flex items-center gap-3 mt-10 px-8 py-4 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-bold shadow-2xl hover:scale-105 transition-all duration-300"
              >

                Start Shopping

                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition"
                />

              </Link>

            </div>

          </div>

        </motion.div>
      ) : (
        <div className="max-w-7xl mx-auto grid xl:grid-cols-3 gap-10">

          {/* ================= CART ITEMS ================= */}

          <div className="xl:col-span-2 space-y-8">

            <AnimatePresence>

              {cart.map((item: Product, index) => (
                <motion.div
                  key={item.id}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                  transition={{
                    delay: index * 0.05,
                  }}
                  className="group relative overflow-hidden rounded-[36px] bg-white/70 backdrop-blur-2xl border border-white/40 shadow-[0_10px_40px_rgba(0,0,0,0.06)] p-6 lg:p-8"
                >

                  {/* BG GLOW */}

                  <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-pink-200/20 rounded-full blur-[80px]" />

                  <div className="relative z-10 flex flex-col md:flex-row gap-8">

                    {/* IMAGE */}

                    <div className="relative w-full md:w-[220px] h-[240px] rounded-[28px] overflow-hidden shadow-xl">

                      <Image
                        src={
                          item.image ||
                          "/placeholder.jpg"
                        }
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-105 transition duration-700"
                      />

                    </div>

                    {/* CONTENT */}

                    <div className="flex-1 flex flex-col justify-between">

                      <div>

                        <div className="flex flex-wrap items-start justify-between gap-5">

                          <div>

                            <p className="text-sm uppercase tracking-[4px] text-pink-500 font-semibold">
                              Premium Collection
                            </p>

                            <h2 className="text-3xl font-black mt-3 text-gray-900">
                              {item.name}
                            </h2>

                          </div>

                          <div className="text-right">

                            <p className="text-sm text-gray-500">
                              Total Price
                            </p>

                            <h3 className="text-3xl font-black text-pink-500 mt-1">
                              ₹
                              {item.price *
                                getQty(item.id)}
                            </h3>

                          </div>

                        </div>

                        <p className="mt-5 text-gray-600 leading-relaxed max-w-2xl">

                          Crafted with premium softness,
                          modern fashion design, and
                          luxury comfort for your little
                          one.

                        </p>

                      </div>

                      {/* ACTIONS */}

                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mt-10">

                        {/* QUANTITY */}

                        <div className="flex items-center gap-4">

                          <span className="font-semibold text-gray-700">
                            Quantity
                          </span>

                          <div className="flex items-center gap-4 rounded-2xl bg-gray-100 p-2">

                            <button
                              onClick={() =>
                                updateQty(
                                  item.id,
                                  -1
                                )
                              }
                              className="w-10 h-10 rounded-xl bg-white shadow hover:scale-105 transition-all duration-300 flex items-center justify-center"
                            >

                              <Minus size={18} />

                            </button>

                            <span className="w-8 text-center font-bold text-lg">
                              {getQty(item.id)}
                            </span>

                            <button
                              onClick={() =>
                                updateQty(
                                  item.id,
                                  1
                                )
                              }
                              className="w-10 h-10 rounded-xl bg-white shadow hover:scale-105 transition-all duration-300 flex items-center justify-center"
                            >

                              <Plus size={18} />

                            </button>

                          </div>

                        </div>

                        {/* REMOVE */}

                        <button
                          onClick={() =>
                            removeFromCart(item.id)
                          }
                          className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-red-50 border border-red-100 text-red-500 font-semibold hover:bg-red-100 transition-all duration-300"
                        >

                          <Trash2 size={18} />

                          Remove Item

                        </button>

                      </div>

                    </div>

                  </div>

                </motion.div>
              ))}

            </AnimatePresence>

            {/* ================= TRUST ================= */}

            <div className="grid md:grid-cols-3 gap-6">

              {[
                {
                  icon: Truck,
                  title: "Fast Delivery",
                  desc: "Safe shipping across India",
                },
                {
                  icon: ShieldCheck,
                  title: "Secure Checkout",
                  desc: "100% protected payment",
                },
                {
                  icon: HeartHandshake,
                  title: "Premium Support",
                  desc: "Dedicated customer care",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="rounded-[30px] bg-white/70 backdrop-blur-2xl border border-white/40 shadow-lg p-6"
                  >

                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 text-white flex items-center justify-center shadow-lg mb-5">

                      <Icon size={24} />

                    </div>

                    <h3 className="text-xl font-bold">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 mt-2">
                      {item.desc}
                    </p>

                  </div>
                );
              })}

            </div>

          </div>

          {/* ================= SUMMARY ================= */}

          <div className="relative">

            <div className="sticky top-28 rounded-[40px] overflow-hidden bg-white/70 backdrop-blur-2xl border border-white/40 shadow-[0_20px_80px_rgba(0,0,0,0.08)] p-8">

              {/* TITLE */}

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-sm uppercase tracking-[4px] text-pink-500 font-semibold">
                    Order Summary
                  </p>

                  <h2 className="text-3xl font-black mt-3">
                    Checkout
                  </h2>

                </div>

                <div className="w-16 h-16 rounded-3xl bg-gradient-to-r from-pink-500 to-purple-500 text-white flex items-center justify-center shadow-xl">

                  <ShoppingBag size={28} />

                </div>

              </div>

              {/* FREE SHIPPING */}

              <div className="mt-10">

                <div className="flex items-center justify-between text-sm text-gray-600 mb-3">

                  <span>
                    Free Shipping Progress
                  </span>

                  <span>
                    ₹{subtotal}/₹1000
                  </span>

                </div>

                <div className="h-3 rounded-full bg-gray-200 overflow-hidden">

                  <motion.div
                    initial={{
                      width: 0,
                    }}
                    animate={{
                      width: `${Math.min(
                        (subtotal / 1000) *
                          100,
                        100
                      )}%`,
                    }}
                    className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"
                  />

                </div>

                <p className="mt-3 text-sm text-gray-500">

                  {subtotal < 1000
                    ? `Add ₹${
                        1000 - subtotal
                      } for free shipping`
                    : "Free shipping unlocked 🎉"}

                </p>

              </div>

              {/* COUPON */}

              <div className="mt-10">

                <div className="flex items-center gap-2 mb-4">

                  <Ticket
                    size={18}
                    className="text-pink-500"
                  />

                  <span className="font-semibold">
                    Apply Coupon
                  </span>

                </div>

                <div className="flex gap-3">

                  <input
                    value={coupon}
                    onChange={(e) =>
                      setCoupon(e.target.value)
                    }
                    placeholder="Enter coupon code"
                    className="flex-1 h-14 rounded-2xl border border-gray-200 bg-white px-5 outline-none focus:border-pink-400"
                  />

                  <button
                    onClick={applyCoupon}
                    className="px-6 rounded-2xl bg-black text-white font-semibold hover:scale-105 transition-all duration-300"
                  >

                    Apply

                  </button>

                </div>

                {couponSuccess && (
                  <div className="flex items-center gap-2 mt-4 text-green-500">

                    <CheckCircle2 size={18} />

                    <span>
                      Coupon applied successfully
                    </span>

                  </div>
                )}

              </div>

              {/* PRICE DETAILS */}

              <div className="mt-10 space-y-5">

                <div className="flex justify-between text-gray-600">

                  <span>
                    Subtotal
                  </span>

                  <span>
                    ₹{subtotal}
                  </span>

                </div>

                <div className="flex justify-between text-gray-600">

                  <span>
                    Shipping
                  </span>

                  <span>
                    {shipping === 0
                      ? "Free"
                      : `₹${shipping}`}
                  </span>

                </div>

                <div className="flex justify-between text-gray-600">

                  <span>
                    Tax (5%)
                  </span>

                  <span>
                    ₹{tax}
                  </span>

                </div>

                {discount > 0 && (
                  <div className="flex justify-between text-green-500 font-semibold">

                    <span>
                      Discount
                    </span>

                    <span>
                      -₹{discount}
                    </span>

                  </div>
                )}

                <div className="border-t border-gray-200 pt-5 flex justify-between items-center">

                  <span className="text-xl font-bold">
                    Total
                  </span>

                  <span className="text-4xl font-black text-pink-500">
                    ₹{total}
                  </span>

                </div>

              </div>

              {/* BUTTON */}

              <Link
                href="/checkout"
                className="group flex items-center justify-center gap-3 mt-10 h-16 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-bold shadow-2xl hover:scale-[1.02] transition-all duration-300"
              >

                Proceed To Checkout

                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition"
                />

              </Link>

              {/* SECURITY */}

              <div className="mt-8 rounded-3xl bg-green-50 border border-green-100 p-5">

                <div className="flex items-start gap-4">

                  <div className="w-12 h-12 rounded-2xl bg-green-500 text-white flex items-center justify-center">

                    <ShieldCheck size={22} />

                  </div>

                  <div>

                    <h4 className="font-bold text-green-700">
                      Secure Checkout
                    </h4>

                    <p className="text-green-600 text-sm mt-1 leading-relaxed">

                      Your payment information is
                      encrypted and securely processed.

                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}