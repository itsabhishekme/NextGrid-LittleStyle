"use client";

import Image from "next/image";

import {
  Trash2,
  Plus,
  Minus,
  Heart,
  ShieldCheck,
  Sparkles,
  Truck,
  CheckCircle2,
  ShoppingBag,
} from "lucide-react";

import { useCart } from "@/context/CartContext";

import {
  useState,
  useRef,
  useEffect,
} from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

type CartItemType = {
  id: string;
  name: string;
  price: number;
  image?: string;
  quantity: number;
  category?: string;
};

export default function CartItem({
  item,
}: {
  item: CartItemType;
}) {
  const {
    removeFromCart,
    updateQuantity,
  } = useCart();

  const [loading, setLoading] =
    useState(false);

  const [liked, setLiked] =
    useState(false);

  const [showAdded, setShowAdded] =
    useState(false);

  const timerRef =
    useRef<NodeJS.Timeout | null>(
      null
    );

  const MIN_QTY = 1;

  const MAX_QTY = 10;

  // ================= PRICE FORMAT =================

  const formatPrice = (
    value: number
  ) =>
    new Intl.NumberFormat(
      "en-IN",
      {
        style: "currency",
        currency: "INR",
      }
    ).format(value);

  // ================= REMOVE =================

  const handleRemove = () => {
    setLoading(true);

    timerRef.current = setTimeout(
      () => {
        removeFromCart(item.id);
      },
      400
    );
  };

  // ================= CLEANUP =================

  useEffect(() => {
    return () => {
      if (timerRef.current)
        clearTimeout(
          timerRef.current
        );
    };
  }, []);

  // ================= CHANGE QTY =================

  const changeQty = (
    newQty: number
  ) => {
    if (
      newQty < MIN_QTY ||
      newQty > MAX_QTY
    )
      return;

    updateQuantity(
      item.id,
      newQty
    );

    setShowAdded(true);

    setTimeout(() => {
      setShowAdded(false);
    }, 1000);
  };

  return (
    <motion.div
      layout
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        x: 100,
      }}
      transition={{
        duration: 0.35,
      }}
      whileHover={{
        y: -4,
      }}
      className="group relative overflow-hidden rounded-[36px] bg-white/70 backdrop-blur-2xl border border-white/40 shadow-[0_10px_40px_rgba(0,0,0,0.06)] p-5 lg:p-7"
    >

      {/* ================= GLOW EFFECTS ================= */}

      <div className="absolute top-0 right-0 w-[220px] h-[220px] bg-pink-200/20 rounded-full blur-[90px]" />

      <div className="absolute bottom-0 left-0 w-[180px] h-[180px] bg-purple-200/20 rounded-full blur-[80px]" />

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 flex flex-col lg:flex-row gap-8 items-center">

        {/* ================= IMAGE ================= */}

        <div className="relative">

          {/* BADGE */}

          <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs font-bold shadow-lg">

            Premium

          </div>

          {/* HEART */}

          <button
            onClick={() =>
              setLiked(!liked)
            }
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/80 backdrop-blur-xl shadow-lg flex items-center justify-center hover:scale-110 transition-all duration-300"
          >

            <Heart
              size={18}
              className={`transition ${
                liked
                  ? "fill-red-500 text-red-500"
                  : "text-gray-500"
              }`}
            />

          </button>

          {/* IMAGE CARD */}

          <div className="relative w-[220px] h-[240px] overflow-hidden rounded-[30px] bg-gradient-to-br from-pink-50 to-purple-50 shadow-2xl">

            <Image
              src={
                item.image ||
                "/placeholder.png"
              }
              alt={item.name}
              fill
              sizes="220px"
              className="object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />

          </div>

        </div>

        {/* ================= DETAILS ================= */}

        <div className="flex-1 text-center lg:text-left">

          {/* CATEGORY */}

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100 text-pink-600 text-sm font-semibold">

            <Sparkles size={14} />

            {item.category ||
              "Luxury Collection"}

          </div>

          {/* TITLE */}

          <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mt-5 leading-tight">

            {item.name}

          </h2>

          {/* DESC */}

          <p className="mt-5 text-gray-600 leading-relaxed max-w-2xl">

            Crafted with premium softness,
            elegant fashion, and luxurious
            comfort specially designed for
            modern little stars.

          </p>

          {/* FEATURES */}

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6">

            {[
              {
                icon: ShieldCheck,
                text: "Safe Fabric",
              },
              {
                icon: Truck,
                text: "Fast Delivery",
              },
              {
                icon: CheckCircle2,
                text: "Premium Quality",
              },
            ].map(
              (
                itemFeature,
                index
              ) => {
                const Icon =
                  itemFeature.icon;

                return (
                  <div
                    key={index}
                    className="flex items-center gap-2 rounded-full bg-white border border-gray-100 px-4 py-2 shadow-sm"
                  >

                    <Icon
                      size={16}
                      className="text-pink-500"
                    />

                    <span className="text-sm font-medium text-gray-600">
                      {
                        itemFeature.text
                      }
                    </span>

                  </div>
                );
              }
            )}

          </div>

          {/* QUANTITY */}

          <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-5">

            <div>

              <p className="text-sm text-gray-500 mb-3">
                Quantity
              </p>

              <div
                className="flex items-center gap-4 rounded-2xl bg-gray-100/80 backdrop-blur-xl p-2 shadow-inner"
                aria-live="polite"
              >

                {/* MINUS */}

                <button
                  onClick={() =>
                    changeQty(
                      item.quantity -
                        1
                    )
                  }
                  disabled={
                    item.quantity <=
                    MIN_QTY
                  }
                  aria-label="Decrease quantity"
                  className="w-12 h-12 rounded-xl bg-white shadow hover:scale-105 transition-all duration-300 flex items-center justify-center disabled:opacity-50"
                >

                  <Minus
                    size={18}
                  />

                </button>

                {/* QTY */}

                <AnimatePresence mode="wait">

                  <motion.span
                    key={
                      item.quantity
                    }
                    initial={{
                      scale: 0.7,
                      opacity: 0,
                    }}
                    animate={{
                      scale: 1,
                      opacity: 1,
                    }}
                    exit={{
                      scale: 0.7,
                      opacity: 0,
                    }}
                    className="w-10 text-center text-xl font-black text-gray-900"
                  >

                    {
                      item.quantity
                    }

                  </motion.span>

                </AnimatePresence>

                {/* PLUS */}

                <button
                  onClick={() =>
                    changeQty(
                      item.quantity +
                        1
                    )
                  }
                  disabled={
                    item.quantity >=
                    MAX_QTY
                  }
                  aria-label="Increase quantity"
                  className="w-12 h-12 rounded-xl bg-white shadow hover:scale-105 transition-all duration-300 flex items-center justify-center disabled:opacity-50"
                >

                  <Plus
                    size={18}
                  />

                </button>

              </div>

            </div>

            {/* STATUS */}

            <AnimatePresence>

              {showAdded && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: 10,
                  }}
                  className="inline-flex items-center gap-2 rounded-full bg-green-100 text-green-600 px-4 py-2 font-medium"
                >

                  <CheckCircle2
                    size={18}
                  />

                  Cart Updated

                </motion.div>
              )}

            </AnimatePresence>

          </div>

        </div>

        {/* ================= PRICE SECTION ================= */}

        <div className="w-full lg:w-[280px]">

          <div className="rounded-[30px] bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 p-6 text-white shadow-[0_20px_60px_rgba(168,85,247,0.35)]">

            {/* PRICE */}

            <p className="text-white/70 text-sm uppercase tracking-[3px]">
              Total Price
            </p>

            <motion.h3
              key={item.quantity}
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="text-4xl font-black mt-3"
            >

              {formatPrice(
                item.price *
                  item.quantity
              )}

            </motion.h3>

            {/* UNIT */}

            <p className="mt-3 text-white/80">

              {formatPrice(
                item.price
              )}{" "}
              each

            </p>

            {/* REMOVE */}

            <button
              onClick={
                handleRemove
              }
              disabled={loading}
              aria-label="Remove item"
              className="group/remove mt-8 w-full h-14 rounded-2xl bg-white text-red-500 font-bold flex items-center justify-center gap-3 hover:scale-105 transition-all duration-300 disabled:opacity-50"
            >

              {loading ? (
                <span className="animate-pulse">
                  Removing...
                </span>
              ) : (
                <>
                  <Trash2
                    size={18}
                    className="group-hover/remove:rotate-12 transition"
                  />

                  Remove Item
                </>
              )}

            </button>

            {/* CTA */}

            <button className="mt-4 w-full h-14 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 text-white font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-3">

              <ShoppingBag
                size={18}
              />

              Premium Product

            </button>

          </div>

        </div>

      </div>

    </motion.div>
  );
}