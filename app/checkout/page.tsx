"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function CheckoutPage() {
  const { cart } = useCart();

  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: "",
  });

  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [success, setSuccess] = useState(false);

  const subtotal = cart.reduce(
    (acc: number, item: any) => acc + item.price,
    0
  );

  const shipping = subtotal > 999 ? 0 : 99;
  const tax = Math.round(subtotal * 0.05);

  const total = subtotal + shipping + tax - discount;

  const applyCoupon = () => {
    if (coupon === "BABY10") {
      setDiscount(100);
    } else {
      alert("Invalid coupon");
    }
  };

  const handleOrder = (e: any) => {
    e.preventDefault();

    if (!form.name || !form.address || !form.phone) {
      alert("Please fill all details");
      return;
    }

    setSuccess(true);
  };

  return (
    <div className="bg-gradient-to-b from-pink-50 via-white to-blue-50 min-h-screen px-6 py-10">

      {/* 🧭 STEP INDICATOR */}
      <div className="max-w-5xl mx-auto flex justify-between mb-10 text-sm font-medium">
        <span className="text-gray-400">Cart</span>
        <span className="text-pink-500 font-bold">Checkout</span>
        <span className="text-gray-400">Payment</span>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

        {/* 🧾 FORM */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:col-span-2 bg-white p-8 rounded-3xl shadow-xl"
        >
          <h2 className="text-2xl font-bold mb-6">
            Shipping Information
          </h2>

          <form onSubmit={handleOrder} className="space-y-5">

            <input
              placeholder="Full Name"
              className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-pink-400"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />

            <textarea
              placeholder="Full Address"
              rows={3}
              className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-pink-400"
              value={form.address}
              onChange={(e) =>
                setForm({ ...form, address: e.target.value })
              }
            />

            <input
              placeholder="Phone Number"
              className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-pink-400"
              value={form.phone}
              onChange={(e) =>
                setForm({ ...form, phone: e.target.value })
              }
            />

            {/* 💳 PAYMENT */}
            <div>
              <h3 className="font-semibold mb-3">Payment Method</h3>

              <div className="grid gap-3">
                <label className="flex items-center gap-3 p-3 border rounded-xl cursor-pointer hover:bg-gray-50">
                  <input type="radio" name="payment" defaultChecked />
                  Cash on Delivery
                </label>

                <label className="flex items-center gap-3 p-3 border rounded-xl cursor-pointer hover:bg-gray-50">
                  <input type="radio" name="payment" />
                  UPI / Card
                </label>
              </div>
            </div>

            {/* 🚀 PLACE ORDER */}
            <button className="w-full mt-4 bg-pink-500 text-white py-3 rounded-full text-lg shadow-lg hover:scale-105 transition">
              Place Order 🚀
            </button>

          </form>
        </motion.div>

        {/* 🛒 SUMMARY */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-6 rounded-3xl shadow-xl h-fit sticky top-24"
        >
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>

          {/* PRODUCTS */}
          <div className="space-y-4 max-h-60 overflow-y-auto">
            {cart.map((item: any, i: number) => (
              <div key={i} className="flex gap-4">
                <div className="relative w-16 h-16">
                  <Image
                    src={item.image || "/placeholder.jpg"}
                    alt={item.name}
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>

                <div>
                  <p className="text-sm font-medium">{item.name}</p>
                  <p className="text-pink-500 text-sm">
                    ₹{item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 🎁 COUPON */}
          <div className="flex gap-2 mt-4">
            <input
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              placeholder="Coupon code"
              className="border p-2 rounded w-full"
            />
            <button
              onClick={applyCoupon}
              className="bg-black text-white px-3 rounded"
            >
              Apply
            </button>
          </div>

          <hr className="my-4" />

          {/* 💰 PRICE */}
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

          {/* 🚚 DELIVERY INFO */}
          <p className="text-xs text-gray-500 mt-4">
            🚚 Estimated delivery in 3-5 days
          </p>

          {/* TRUST */}
          <p className="text-xs text-green-600 mt-2">
            🔒 Secure Checkout | 100% Safe Payments
          </p>

        </motion.div>

      </div>

      {/* ✅ SUCCESS POPUP */}
      {success && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-10 rounded-2xl text-center">
            <h2 className="text-2xl font-bold text-green-600">
              Order Placed 🎉
            </h2>
            <p className="mt-2 text-gray-600">
              Thank you for shopping with us!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}