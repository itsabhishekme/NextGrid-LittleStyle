"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  const validate = () => {
    let err: any = {};

    if (form.name.trim().length < 2)
      err.name = "Enter valid name";

    if (!/^\S+@\S+\.\S+$/.test(form.email))
      err.email = "Enter valid email";

    if (form.message.trim().length < 10)
      err.message = "Minimum 10 characters";

    return err;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (loading) return;

    const v = validate();
    if (Object.keys(v).length) {
      setErrors(v);
      return;
    }

    setErrors({});
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    }, 1200);
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-pink-50 min-h-screen px-6 py-10">

      {/* HERO */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-5xl font-extrabold">
          Let’s Talk 💬
        </h1>
        <p className="text-gray-600 mt-4">
          Have questions or ideas? We’d love to hear from you.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="backdrop-blur-xl bg-white/70 p-8 rounded-3xl shadow-xl"
        >
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* NAME */}
              <div className="relative">
                <input
                  placeholder=" "
                  className="peer w-full border p-3 rounded-xl focus:ring-2 focus:ring-pink-400 outline-none"
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                />
                <label
                  className={`absolute left-3 bg-white px-1 text-gray-500 transition-all duration-200 
                  ${
                    form.name
                      ? "-top-2 text-sm text-pink-500"
                      : "top-3 text-base"
                  }`}
                >
                  Name
                </label>
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* EMAIL */}
              <div className="relative">
                <input
                  type="email"
                  placeholder=" "
                  className="peer w-full border p-3 rounded-xl focus:ring-2 focus:ring-pink-400"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                />
                <label
                  className={`absolute left-3 bg-white px-1 text-gray-500 transition-all duration-200 
                  ${
                    form.email
                      ? "-top-2 text-sm text-pink-500"
                      : "top-3 text-base"
                  }`}
                >
                  Email
                </label>
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* MESSAGE */}
              <div>
                <textarea
                  rows={5}
                  className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-pink-400 outline-none"
                  placeholder="Your Message"
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                />

                <div className="flex justify-between text-xs text-gray-500">
                  <span>{errors.message}</span>
                  <span>{form.message.length}/200</span>
                </div>
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 rounded-full text-white font-semibold transition ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-pink-500 hover:bg-pink-600 hover:scale-105"
                }`}
              >
                {loading ? "Sending..." : "Send Message 🚀"}
              </button>

            </form>
          ) : (
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="text-center py-10"
            >
              <div className="text-6xl">🎉</div>
              <h2 className="text-2xl font-bold text-green-600 mt-4">
                Message Sent Successfully
              </h2>
              <p className="text-gray-500 mt-2">
                We’ll reply within 24 hours.
              </p>

              {/* ✅ RESET BUTTON */}
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 bg-pink-500 text-white px-6 py-2 rounded-full"
              >
                Send Another Message
              </button>
            </motion.div>
          )}
        </motion.div>

        {/* INFO */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
            <h3 className="font-semibold">📧 Email</h3>
            <p className="text-gray-600 mt-1">support@nextgrid.com</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
            <h3 className="font-semibold">📞 Phone</h3>
            <p className="text-gray-600 mt-1">+91 90000 00000</p>
          </div>

          <iframe
            src="https://maps.google.com/maps?q=india&t=&z=5&ie=UTF8&iwloc=&output=embed"
            className="w-full h-48 rounded-2xl shadow"
          />
        </div>
      </div>

      {/* FAQ FIX */}
      <div className="max-w-4xl mx-auto mt-20">
        <h2 className="text-3xl font-bold text-center mb-8">FAQs</h2>

        {[1, 2].map((_, i) => (
          <div key={i} className="bg-white rounded-xl mb-3 shadow overflow-hidden">
            <button
              onClick={() =>
                setActiveFAQ(activeFAQ === i ? null : i)
              }
              className="w-full text-left font-semibold p-4"
            >
              Question {i + 1}
            </button>

            <AnimatePresence>
              {activeFAQ === i && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="px-4 pb-4 text-gray-600"
                >
                  Answer content goes here.
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

    </div>
  );
}