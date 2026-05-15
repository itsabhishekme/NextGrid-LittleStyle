"use client";

import Link from "next/link";

import Image from "next/image";

import {
  Heart,
  ShoppingCart,
  Eye,
  Sparkles,
  ShieldCheck,
  Truck,
  BadgeCheck,
  Star,
  CheckCircle2,
} from "lucide-react";

import {
  useState,
  useEffect,
} from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

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
  category?: string;
  stock?: number;
};

const keyOf = (id: string) =>
  `wishlist:${id}`;

export default function ProductCard({
  product,
}: {
  product: Product;
}) {
  const { addToCart } =
    useCart();

  const [liked, setLiked] =
    useState(false);

  const [added, setAdded] =
    useState(false);

  const [hovered, setHovered] =
    useState(false);

  // ================= LOAD WISHLIST =================

  useEffect(() => {
    try {
      setLiked(
        localStorage.getItem(
          keyOf(product.id)
        ) === "true"
      );
    } catch {}
  }, [product.id]);

  // ================= TOGGLE LIKE =================

  const toggleLike = () => {
    setLiked((prev) => {
      const next = !prev;

      try {
        localStorage.setItem(
          keyOf(product.id),
          String(next)
        );
      } catch {}

      return next;
    });
  };

  // ================= ADD TO CART =================

  const handleAdd = () => {
    if (added) return;

    addToCart(product);

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1400);
  };

  // ================= PRICE FORMAT =================

  const formatPrice = (
    value: number
  ) =>
    new Intl.NumberFormat(
      "en-IN",
      {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
      }
    ).format(value);

  // ================= DISCOUNT =================

  const discountPercent =
    product.discount ||
    (product.oldPrice
      ? Math.round(
          ((product.oldPrice -
            product.price) /
            product.oldPrice) *
            100
        )
      : 0);

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
      whileHover={{
        y: -10,
      }}
      transition={{
        duration: 0.35,
      }}
      onHoverStart={() =>
        setHovered(true)
      }
      onHoverEnd={() =>
        setHovered(false)
      }
      className="group relative overflow-hidden rounded-[34px] bg-white/70 backdrop-blur-2xl border border-white/40 shadow-[0_10px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_60px_rgba(236,72,153,0.15)] transition-all duration-500"
    >

      {/* ================= GLOW EFFECT ================= */}

      <div className="absolute top-0 right-0 w-[220px] h-[220px] bg-pink-200/20 rounded-full blur-[90px]" />

      <div className="absolute bottom-0 left-0 w-[180px] h-[180px] bg-purple-200/20 rounded-full blur-[80px]" />

      {/* ================= BADGES ================= */}

      <div className="absolute top-4 left-4 z-30 flex flex-col gap-3">

        {discountPercent > 0 && (
          <motion.div
            initial={{
              scale: 0,
            }}
            animate={{
              scale: 1,
            }}
            className="px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs font-bold shadow-xl"
          >

            {discountPercent}% OFF

          </motion.div>
        )}

        <div className="px-4 py-2 rounded-full bg-white/80 backdrop-blur-xl text-gray-700 text-xs font-semibold shadow-lg border border-white/40 flex items-center gap-2">

          <Sparkles
            size={12}
            className="text-pink-500"
          />

          Premium Quality

        </div>

      </div>

      {/* ================= ACTIONS ================= */}

      <div className="absolute top-4 right-4 z-30 flex flex-col gap-3">

        {/* LIKE */}

        <motion.button
          whileTap={{
            scale: 0.9,
          }}
          type="button"
          aria-label="Toggle wishlist"
          aria-pressed={liked}
          onClick={toggleLike}
          className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-xl shadow-lg border border-white/50 flex items-center justify-center hover:scale-110 transition-all duration-300"
        >

          <Heart
            size={20}
            className={`transition-all duration-300 ${
              liked
                ? "text-red-500 fill-red-500 scale-110"
                : "text-gray-600"
            }`}
          />

        </motion.button>

        {/* QUICK VIEW */}

        <Link
          href={`/products/${product.id}`}
        >

          <motion.div
            whileTap={{
              scale: 0.9,
            }}
            className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-xl shadow-lg border border-white/50 flex items-center justify-center hover:scale-110 transition-all duration-300"
          >

            <Eye
              size={20}
              className="text-gray-700"
            />

          </motion.div>

        </Link>

      </div>

      {/* ================= PRODUCT LINK ================= */}

      <Link
        href={`/products/${product.id}`}
      >

        <div className="cursor-pointer">

          {/* ================= IMAGE ================= */}

          <div className="relative overflow-hidden">

            {/* OVERLAY */}

            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10" />

            {/* IMAGE */}

            <div className="relative h-[320px] overflow-hidden">

              <Image
                src={
                  product.image ||
                  "/placeholder.png"
                }
                alt={product.name}
                fill
                sizes="400px"
                className="object-cover transition duration-700 group-hover:scale-110"
              />

            </div>

            {/* HOVER INFO */}

            <AnimatePresence>

              {hovered && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: 20,
                  }}
                  className="absolute bottom-5 left-5 right-5 z-20"
                >

                  <div className="rounded-2xl bg-white/20 backdrop-blur-xl border border-white/20 p-4 text-white">

                    <div className="flex items-center justify-between">

                      <div className="flex items-center gap-2">

                        <ShieldCheck
                          size={16}
                        />

                        <span className="text-sm font-medium">
                          Safe Fabric
                        </span>

                      </div>

                      <div className="flex items-center gap-2">

                        <Truck
                          size={16}
                        />

                        <span className="text-sm font-medium">
                          Fast Delivery
                        </span>

                      </div>

                    </div>

                  </div>

                </motion.div>
              )}

            </AnimatePresence>

          </div>

          {/* ================= CONTENT ================= */}

          <div className="relative p-6">

            {/* CATEGORY */}

            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-pink-100 text-pink-600 text-xs font-semibold mb-5">

              <Sparkles
                size={12}
              />

              {product.category ||
                "Luxury Collection"}

            </div>

            {/* TITLE */}

            <h3 className="text-2xl font-black text-gray-900 line-clamp-1 leading-tight">

              {product.name}

            </h3>

            {/* DESC */}

            <p className="text-gray-600 mt-3 leading-relaxed line-clamp-2">

              Premium soft clothing crafted
              with luxury comfort and modern
              fashion styling for little stars.

            </p>

            {/* RATING */}

            <div className="flex items-center justify-between mt-5">

              <div className="flex items-center gap-2">

                <div className="flex items-center gap-1 text-yellow-400">

                  {Array.from({
                    length: 5,
                  }).map(
                    (_, index) => (
                      <Star
                        key={index}
                        size={15}
                        className={`${
                          index <
                          Math.round(
                            product.rating ??
                              4.5
                          )
                            ? "fill-yellow-400"
                            : ""
                        }`}
                      />
                    )
                  )}

                </div>

                <span className="text-sm text-gray-600 font-medium">

                  {product.rating ??
                    4.8}

                </span>

              </div>

              <span className="text-sm text-gray-500">

                (
                {product.reviews ??
                  120}{" "}
                reviews)

              </span>

            </div>

            {/* PRICE */}

            <div className="flex items-end justify-between mt-6">

              <div>

                <div className="flex items-center gap-3">

                  <span className="text-3xl font-black text-pink-500">

                    {formatPrice(
                      product.price
                    )}

                  </span>

                  {product.oldPrice !=
                    null && (
                    <span className="text-gray-400 line-through text-lg">

                      {formatPrice(
                        product.oldPrice
                      )}

                    </span>
                  )}

                </div>

                <p className="text-sm text-green-600 font-medium mt-2">

                  Inclusive of all taxes

                </p>

              </div>

              {/* STOCK */}

              <div className="text-right">

                <div className="inline-flex items-center gap-2 rounded-full bg-green-100 text-green-600 px-3 py-2 text-xs font-bold">

                  <CheckCircle2
                    size={14}
                  />

                  In Stock

                </div>

              </div>

            </div>

          </div>

        </div>

      </Link>

      {/* ================= FOOTER ================= */}

      <div className="px-6 pb-6">

        {/* FEATURES */}

        <div className="grid grid-cols-2 gap-4 mb-5">

          <div className="rounded-2xl bg-gray-50 border border-gray-100 p-4 text-center">

            <BadgeCheck
              size={20}
              className="mx-auto text-pink-500"
            />

            <p className="text-sm font-semibold text-gray-700 mt-2">

              Premium Quality

            </p>

          </div>

          <div className="rounded-2xl bg-gray-50 border border-gray-100 p-4 text-center">

            <Truck
              size={20}
              className="mx-auto text-pink-500"
            />

            <p className="text-sm font-semibold text-gray-700 mt-2">

              Fast Delivery

            </p>

          </div>

        </div>

        {/* BUTTONS */}

        <div className="flex gap-4">

          {/* CART */}

          <motion.button
            whileTap={{
              scale: 0.95,
            }}
            type="button"
            onClick={handleAdd}
            disabled={added}
            className={`group flex-1 h-14 rounded-2xl text-white font-bold flex items-center justify-center gap-3 shadow-xl transition-all duration-300 ${
              added
                ? "bg-green-500"
                : "bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:scale-[1.02]"
            }`}
          >

            <ShoppingCart
              size={18}
              className="group-hover:scale-110 transition"
            />

            {added
              ? "Added Successfully"
              : "Add To Cart"}

          </motion.button>

        </div>

      </div>

    </motion.div>
  );
}