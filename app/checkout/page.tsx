"use client";

import { useCart } from "@/context/CartContext";

import Image from "next/image";

import Link from "next/link";

import { useState } from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  ArrowRight,
  CheckCircle2,
  CreditCard,
  ShieldCheck,
  Sparkles,
  Ticket,
  Truck,
  Wallet,
  MapPin,
  Phone,
  User,
  ShoppingBag,
  Clock3,
  BadgeCheck,
} from "lucide-react";

type FormData = {
  name: string;
  address: string;
  phone: string;
};

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();

  const [form, setForm] = useState<FormData>({
    name: "",
    address: "",
    phone: "",
  });

  const [coupon, setCoupon] = useState("");

  const [discount, setDiscount] =
    useState(0);

  const [success, setSuccess] =
    useState(false);

  const [paymentMethod, setPaymentMethod] =
    useState("cod");

  const [couponSuccess, setCouponSuccess] =
    useState(false);

  const subtotal = cart.reduce(
    (acc: number, item: any) =>
      acc + item.price,
    0
  );

  const shipping =
    subtotal > 999 ? 0 : 99;

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

  const handleOrder = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.address ||
      !form.phone
    ) {
      alert("Please fill all details");
      return;
    }

    setSuccess(true);

    setTimeout(() => {
      clearCart();
    }, 1500);
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
                Premium Checkout Experience
              </span>

            </div>

            <h1 className="text-5xl lg:text-6xl font-black text-gray-900">
              Checkout 💳
            </h1>

            <p className="mt-5 text-lg text-gray-600 max-w-2xl">
              Complete your premium shopping
              experience securely and quickly.
            </p>

          </div>

        </div>

      </div>

      {/* ================= STEP INDICATOR ================= */}

      <div className="max-w-5xl mx-auto mb-14">

        <div className="grid grid-cols-3 gap-6">

          {[
            {
              title: "Cart",
              active: true,
            },
            {
              title: "Checkout",
              active: true,
            },
            {
              title: "Payment",
              active: false,
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`rounded-[28px] p-5 border backdrop-blur-2xl shadow-lg ${
                item.active
                  ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white border-transparent"
                  : "bg-white/70 border-white/40 text-gray-500"
              }`}
            >

              <div className="flex items-center gap-4">

                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold ${
                    item.active
                      ? "bg-white/20"
                      : "bg-gray-100"
                  }`}
                >
                  {index + 1}
                </div>

                <div>

                  <p className="text-sm opacity-80">
                    Step {index + 1}
                  </p>

                  <h3 className="font-bold text-lg">
                    {item.title}
                  </h3>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

      {/* ================= CONTENT ================= */}

      <div className="max-w-7xl mx-auto grid xl:grid-cols-3 gap-10">

        {/* ================= FORM ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="xl:col-span-2 rounded-[40px] bg-white/70 backdrop-blur-2xl border border-white/40 shadow-[0_20px_80px_rgba(0,0,0,0.08)] p-8 lg:p-10"
        >

          {/* TITLE */}

          <div className="flex items-center justify-between gap-5 mb-10">

            <div>

              <p className="text-sm uppercase tracking-[4px] text-pink-500 font-semibold">
                Shipping Details
              </p>

              <h2 className="text-4xl font-black mt-3">
                Delivery Information
              </h2>

            </div>

            <div className="w-16 h-16 rounded-3xl bg-gradient-to-r from-pink-500 to-purple-500 text-white flex items-center justify-center shadow-xl">

              <Truck size={28} />

            </div>

          </div>

          {/* FORM */}

          <form
            onSubmit={handleOrder}
            className="space-y-8"
          >

            {/* NAME */}

            <div>

              <label className="block font-semibold mb-3">
                Full Name
              </label>

              <div className="relative">

                <User
                  size={18}
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      name: e.target.value,
                    })
                  }
                  className="w-full h-16 rounded-2xl border border-gray-200 bg-white px-14 outline-none focus:border-pink-400"
                />

              </div>

            </div>

            {/* ADDRESS */}

            <div>

              <label className="block font-semibold mb-3">
                Delivery Address
              </label>

              <div className="relative">

                <MapPin
                  size={18}
                  className="absolute left-5 top-5 text-gray-400"
                />

                <textarea
                  rows={5}
                  placeholder="Enter your complete address"
                  value={form.address}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      address:
                        e.target.value,
                    })
                  }
                  className="w-full rounded-2xl border border-gray-200 bg-white py-5 pl-14 pr-5 outline-none focus:border-pink-400"
                />

              </div>

            </div>

            {/* PHONE */}

            <div>

              <label className="block font-semibold mb-3">
                Phone Number
              </label>

              <div className="relative">

                <Phone
                  size={18}
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  placeholder="+91 90000 00000"
                  value={form.phone}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      phone:
                        e.target.value,
                    })
                  }
                  className="w-full h-16 rounded-2xl border border-gray-200 bg-white px-14 outline-none focus:border-pink-400"
                />

              </div>

            </div>

            {/* PAYMENT */}

            <div>

              <div className="flex items-center gap-3 mb-6">

                <CreditCard
                  size={20}
                  className="text-pink-500"
                />

                <h3 className="text-2xl font-bold">
                  Payment Method
                </h3>

              </div>

              <div className="grid md:grid-cols-2 gap-5">

                {/* COD */}

                <button
                  type="button"
                  onClick={() =>
                    setPaymentMethod(
                      "cod"
                    )
                  }
                  className={`rounded-[30px] border p-6 text-left transition-all duration-300 ${
                    paymentMethod ===
                    "cod"
                      ? "border-pink-500 bg-pink-50 shadow-xl"
                      : "border-gray-200 bg-white"
                  }`}
                >

                  <div className="flex items-center justify-between">

                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 text-white flex items-center justify-center">

                      <Wallet size={24} />

                    </div>

                    {paymentMethod ===
                      "cod" && (
                      <CheckCircle2 className="text-pink-500" />
                    )}

                  </div>

                  <h4 className="text-xl font-bold mt-6">
                    Cash On Delivery
                  </h4>

                  <p className="text-gray-600 mt-3 leading-relaxed">
                    Pay when your order arrives
                    at your doorstep.
                  </p>

                </button>

                {/* CARD */}

                <button
                  type="button"
                  onClick={() =>
                    setPaymentMethod(
                      "card"
                    )
                  }
                  className={`rounded-[30px] border p-6 text-left transition-all duration-300 ${
                    paymentMethod ===
                    "card"
                      ? "border-pink-500 bg-pink-50 shadow-xl"
                      : "border-gray-200 bg-white"
                  }`}
                >

                  <div className="flex items-center justify-between">

                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 text-white flex items-center justify-center">

                      <CreditCard
                        size={24}
                      />

                    </div>

                    {paymentMethod ===
                      "card" && (
                      <CheckCircle2 className="text-pink-500" />
                    )}

                  </div>

                  <h4 className="text-xl font-bold mt-6">
                    Card / UPI
                  </h4>

                  <p className="text-gray-600 mt-3 leading-relaxed">
                    Pay securely using card,
                    UPI, or online banking.
                  </p>

                </button>

              </div>

            </div>

            {/* BUTTON */}

            <button className="group w-full h-16 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-bold text-lg shadow-2xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3">

              Place Order

              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition"
              />

            </button>

          </form>

        </motion.div>

        {/* ================= SUMMARY ================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: 40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          className="relative"
        >

          <div className="sticky top-28 rounded-[40px] overflow-hidden bg-white/70 backdrop-blur-2xl border border-white/40 shadow-[0_20px_80px_rgba(0,0,0,0.08)] p-8">

            {/* TITLE */}

            <div className="flex items-center justify-between mb-10">

              <div>

                <p className="text-sm uppercase tracking-[4px] text-pink-500 font-semibold">
                  Order Summary
                </p>

                <h2 className="text-3xl font-black mt-3">
                  Your Order
                </h2>

              </div>

              <div className="w-16 h-16 rounded-3xl bg-gradient-to-r from-pink-500 to-purple-500 text-white flex items-center justify-center shadow-xl">

                <ShoppingBag
                  size={28}
                />

              </div>

            </div>

            {/* PRODUCTS */}

            <div className="space-y-5 max-h-[350px] overflow-y-auto pr-2">

              {cart.map(
                (
                  item: any,
                  index: number
                ) => (
                  <div
                    key={index}
                    className="flex gap-4 rounded-3xl bg-white border border-gray-100 p-4 shadow-sm"
                  >

                    <div className="relative w-20 h-20 rounded-2xl overflow-hidden">

                      <Image
                        src={
                          item.image ||
                          "/placeholder.jpg"
                        }
                        alt={item.name}
                        fill
                        className="object-cover"
                      />

                    </div>

                    <div className="flex-1">

                      <h4 className="font-bold text-lg">
                        {item.name}
                      </h4>

                      <p className="text-gray-500 text-sm mt-1">
                        Premium Collection
                      </p>

                      <p className="text-pink-500 font-bold mt-3">
                        ₹{item.price}
                      </p>

                    </div>

                  </div>
                )
              )}

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
                    setCoupon(
                      e.target.value
                    )
                  }
                  placeholder="Coupon code"
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

                  <CheckCircle2
                    size={18}
                  />

                  <span>
                    Coupon applied
                    successfully
                  </span>

                </div>
              )}

            </div>

            {/* PRICE */}

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
                  Tax
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

            {/* DELIVERY */}

            <div className="mt-10 rounded-[30px] bg-pink-50 border border-pink-100 p-6">

              <div className="flex items-start gap-4">

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 text-white flex items-center justify-center">

                  <Clock3 size={24} />

                </div>

                <div>

                  <h4 className="font-bold text-lg">
                    Estimated Delivery
                  </h4>

                  <p className="text-gray-600 mt-2">
                    Delivery expected within
                    3–5 business days.
                  </p>

                </div>

              </div>

            </div>

            {/* TRUST */}

            <div className="mt-6 rounded-[30px] bg-green-50 border border-green-100 p-6">

              <div className="flex items-start gap-4">

                <div className="w-14 h-14 rounded-2xl bg-green-500 text-white flex items-center justify-center">

                  <ShieldCheck
                    size={24}
                  />

                </div>

                <div>

                  <h4 className="font-bold text-green-700 text-lg">
                    Secure Checkout
                  </h4>

                  <p className="text-green-600 mt-2 leading-relaxed">

                    All transactions are
                    encrypted and protected.

                  </p>

                </div>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

      {/* ================= SUCCESS MODAL ================= */}

      <AnimatePresence>

        {success && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-6"
          >

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
              }}
              className="relative overflow-hidden rounded-[40px] bg-white max-w-lg w-full p-10 shadow-[0_30px_100px_rgba(0,0,0,0.2)] text-center"
            >

              {/* GLOW */}

              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-green-300/20 rounded-full blur-[100px]" />

              <div className="relative z-10">

                <div className="w-28 h-28 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white flex items-center justify-center mx-auto shadow-2xl">

                  <BadgeCheck
                    size={60}
                  />

                </div>

                <h2 className="text-4xl font-black mt-10 text-gray-900">
                  Order Confirmed 🎉
                </h2>

                <p className="mt-5 text-lg text-gray-600 leading-relaxed">

                  Thank you for shopping
                  with LittleStyle.
                  Your premium order has
                  been placed successfully.

                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-10">

                  <Link
                    href="/"
                    className="flex-1 h-14 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold flex items-center justify-center hover:scale-105 transition-all duration-300"
                  >

                    Continue Shopping

                  </Link>

                  <button
                    onClick={() =>
                      setSuccess(false)
                    }
                    className="flex-1 h-14 rounded-2xl border border-gray-200 bg-white font-semibold hover:bg-gray-50 transition-all duration-300"
                  >

                    Close

                  </button>

                </div>

              </div>

            </motion.div>

          </motion.div>
        )}

      </AnimatePresence>

    </div>
  );
}