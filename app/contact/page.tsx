"use client";

import { useState } from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Clock3,
  Sparkles,
  CheckCircle2,
  ChevronDown,
  Send,
  ShieldCheck,
  Headphones,
  Globe,
  Building2,
  BadgeCheck,
  MessageSquare,
  HeartHandshake,
} from "lucide-react";

type FormType = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type ErrorType = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

export default function ContactPage() {
  const [form, setForm] =
    useState<FormType>({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

  const [errors, setErrors] =
    useState<ErrorType>({});

  const [loading, setLoading] =
    useState(false);

  const [submitted, setSubmitted] =
    useState(false);

  const [activeFAQ, setActiveFAQ] =
    useState<number | null>(0);

  const validate = (): ErrorType => {
    const err: ErrorType = {};

    if (form.name.trim().length < 2) {
      err.name =
        "Please enter a valid name";
    }

    if (
      !/^\S+@\S+\.\S+$/.test(
        form.email
      )
    ) {
      err.email =
        "Please enter a valid email";
    }

    if (
      form.subject.trim().length < 3
    ) {
      err.subject =
        "Subject is too short";
    }

    if (
      form.message.trim().length < 10
    ) {
      err.message =
        "Minimum 10 characters required";
    }

    return err;
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (loading) return;

    const validation = validate();

    if (
      Object.keys(validation).length > 0
    ) {
      setErrors(validation);
      return;
    }

    setErrors({});

    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      setSubmitted(true);

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1800);
  };

  const faqs = [
    {
      question:
        "How long does delivery take?",
      answer:
        "Orders are typically delivered within 3–5 business days across India.",
    },
    {
      question:
        "Are your fabrics baby-safe?",
      answer:
        "Yes. Every fabric is carefully selected and tested for softness and safety.",
    },
    {
      question:
        "Can I exchange products?",
      answer:
        "Absolutely. We offer easy exchange and return support for eligible orders.",
    },
    {
      question:
        "Do you provide premium packaging?",
      answer:
        "Yes. Every order includes luxury protective packaging for a premium unboxing experience.",
    },
  ];

  return (
    <div className="relative overflow-hidden min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 py-16 px-4 sm:px-6 lg:px-8">

      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0 overflow-hidden -z-10">

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-300/20 rounded-full blur-[120px]" />

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-300/20 rounded-full blur-[120px]" />

        <div className="absolute top-[40%] left-[40%] w-[350px] h-[350px] bg-blue-300/10 rounded-full blur-[100px]" />

      </div>

      {/* ================= HERO ================= */}

      <div className="max-w-5xl mx-auto text-center mb-24">

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
        >

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white shadow-lg border border-pink-100 mb-8">

            <Sparkles
              size={16}
              className="text-pink-500"
            />

            <span className="text-sm font-semibold text-gray-700">
              Premium Customer Experience
            </span>

          </div>

          <h1 className="text-5xl lg:text-7xl font-black leading-[1.05] text-gray-900">

            Contact
            <span className="block bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              LittleStyle ✨
            </span>

          </h1>

          <p className="mt-8 text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">

            Our premium support team is ready
            to assist you with orders, product
            inquiries, and customer support.

          </p>

        </motion.div>

      </div>

      {/* ================= MAIN GRID ================= */}

      <div className="max-w-7xl mx-auto grid xl:grid-cols-2 gap-10">

        {/* ================= FORM ================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: -40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          className="relative overflow-hidden rounded-[40px] bg-white/70 backdrop-blur-2xl border border-white/40 shadow-[0_20px_80px_rgba(0,0,0,0.08)] p-8 lg:p-10"
        >

          <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-pink-200/30 rounded-full blur-[100px]" />

          <div className="relative z-10">

            {!submitted ? (
              <>
                {/* HEADER */}

                <div className="flex items-center justify-between mb-10">

                  <div>

                    <p className="uppercase tracking-[4px] text-pink-500 text-sm font-semibold">
                      Get In Touch
                    </p>

                    <h2 className="text-4xl font-black mt-3">
                      Send Us A Message
                    </h2>

                  </div>

                  <div className="w-16 h-16 rounded-3xl bg-gradient-to-r from-pink-500 to-purple-500 text-white flex items-center justify-center shadow-xl">

                    <Send size={28} />

                  </div>

                </div>

                {/* FORM */}

                <form
                  onSubmit={handleSubmit}
                  className="space-y-7"
                >

                  {/* NAME */}

                  <div>

                    <label className="block font-semibold mb-3">
                      Full Name
                    </label>

                    <input
                      type="text"
                      placeholder="Enter your name"
                      value={form.name}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          name:
                            e.target.value,
                        })
                      }
                      className="w-full h-16 rounded-2xl border border-gray-200 bg-white px-5 outline-none focus:border-pink-400"
                    />

                    {errors.name && (
                      <p className="text-red-500 text-sm mt-2">
                        {errors.name}
                      </p>
                    )}

                  </div>

                  {/* EMAIL */}

                  <div>

                    <label className="block font-semibold mb-3">
                      Email Address
                    </label>

                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          email:
                            e.target.value,
                        })
                      }
                      className="w-full h-16 rounded-2xl border border-gray-200 bg-white px-5 outline-none focus:border-pink-400"
                    />

                    {errors.email && (
                      <p className="text-red-500 text-sm mt-2">
                        {errors.email}
                      </p>
                    )}

                  </div>

                  {/* SUBJECT */}

                  <div>

                    <label className="block font-semibold mb-3">
                      Subject
                    </label>

                    <input
                      type="text"
                      placeholder="Enter subject"
                      value={form.subject}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          subject:
                            e.target.value,
                        })
                      }
                      className="w-full h-16 rounded-2xl border border-gray-200 bg-white px-5 outline-none focus:border-pink-400"
                    />

                    {errors.subject && (
                      <p className="text-red-500 text-sm mt-2">
                        {errors.subject}
                      </p>
                    )}

                  </div>

                  {/* MESSAGE */}

                  <div>

                    <label className="block font-semibold mb-3">
                      Message
                    </label>

                    <textarea
                      rows={6}
                      placeholder="Write your message..."
                      value={form.message}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          message:
                            e.target.value,
                        })
                      }
                      className="w-full rounded-2xl border border-gray-200 bg-white p-5 outline-none focus:border-pink-400"
                    />

                    {errors.message && (
                      <p className="text-red-500 text-sm mt-2">
                        {errors.message}
                      </p>
                    )}

                  </div>

                  {/* BUTTON */}

                  <button
                    type="submit"
                    disabled={loading}
                    className={`group w-full h-16 rounded-2xl text-white font-bold text-lg shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 ${
                      loading
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:scale-[1.02]"
                    }`}
                  >

                    {loading
                      ? "Sending Message..."
                      : "Send Message"}

                    {!loading && (
                      <ArrowRight
                        size={18}
                        className="group-hover:translate-x-1 transition"
                      />
                    )}

                  </button>

                </form>
              </>
            ) : (
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                className="text-center py-12"
              >

                <div className="w-28 h-28 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white flex items-center justify-center mx-auto shadow-2xl">

                  <CheckCircle2
                    size={60}
                  />

                </div>

                <h2 className="text-4xl font-black mt-10">
                  Message Sent 🎉
                </h2>

                <p className="mt-5 text-lg text-gray-600 leading-relaxed max-w-md mx-auto">

                  Thank you for contacting us.
                  Our support team will reach
                  out shortly.

                </p>

                <button
                  type="button"
                  onClick={() =>
                    setSubmitted(false)
                  }
                  className="mt-10 px-8 py-4 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold shadow-2xl hover:scale-105 transition-all duration-300"
                >

                  Send Another Message

                </button>

              </motion.div>
            )}

          </div>

        </motion.div>

        {/* ================= RIGHT SECTION ================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: 40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          className="space-y-8"
        >

          {/* CONTACT INFO */}

          <div className="grid sm:grid-cols-2 gap-6">

            {[
              {
                icon: Mail,
                title: "Email Support",
                desc: "support@littlestyle.com",
              },
              {
                icon: Phone,
                title: "Phone Number",
                desc: "+91 90000 00000",
              },
              {
                icon: MapPin,
                title: "Office Location",
                desc: "Bangalore, India",
              },
              {
                icon: Clock3,
                title: "Business Hours",
                desc: "Mon - Sat • 9AM - 8PM",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -8,
                  }}
                  className="rounded-[32px] bg-white/70 backdrop-blur-2xl border border-white/40 shadow-xl p-8"
                >

                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 text-white flex items-center justify-center shadow-xl mb-6">

                    <Icon size={28} />

                  </div>

                  <h3 className="text-xl font-bold">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mt-3 leading-relaxed">
                    {item.desc}
                  </p>

                </motion.div>
              );
            })}

          </div>

          {/* PREMIUM SUPPORT */}

          <div className="rounded-[40px] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 p-10 text-white shadow-[0_20px_80px_rgba(168,85,247,0.35)]">

            <p className="uppercase tracking-[4px] text-white/70 text-sm font-semibold">
              Premium Support
            </p>

            <h2 className="text-4xl font-black mt-4">
              We’re Here To Help ✨
            </h2>

            <p className="mt-5 text-white/80 leading-relaxed">

              Our support specialists ensure
              quick assistance and a seamless
              customer experience.

            </p>

            <div className="grid sm:grid-cols-2 gap-5 mt-10">

              {[
                {
                  icon: ShieldCheck,
                  title:
                    "Secure Communication",
                },
                {
                  icon: Headphones,
                  title:
                    "Dedicated Support",
                },
                {
                  icon: BadgeCheck,
                  title:
                    "Trusted Experience",
                },
                {
                  icon: HeartHandshake,
                  title:
                    "Customer Satisfaction",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 p-6"
                  >

                    <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-5">

                      <Icon size={26} />

                    </div>

                    <h3 className="text-xl font-bold">
                      {item.title}
                    </h3>

                  </div>
                );
              })}

            </div>

          </div>

          {/* OFFICE CARD */}

          <div className="rounded-[40px] bg-white/70 backdrop-blur-2xl border border-white/40 shadow-[0_20px_80px_rgba(0,0,0,0.08)] overflow-hidden">

            <div className="p-8 border-b border-gray-100">

              <div className="flex items-center gap-5">

                <div className="w-16 h-16 rounded-3xl bg-gradient-to-r from-pink-500 to-purple-500 text-white flex items-center justify-center shadow-xl">

                  <Building2 size={30} />

                </div>

                <div>

                  <p className="uppercase tracking-[4px] text-pink-500 text-sm font-semibold">
                    Headquarters
                  </p>

                  <h2 className="text-3xl font-black mt-2">
                    LittleStyle Office
                  </h2>

                </div>

              </div>

            </div>

            <div className="p-8 space-y-6">

              <div className="flex gap-4">

                <MapPin className="text-pink-500 mt-1" />

                <div>

                  <h4 className="font-bold text-lg">
                    Office Address
                  </h4>

                  <p className="text-gray-600 mt-1">
                    Bangalore, Karnataka,
                    India
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <MessageSquare className="text-pink-500 mt-1" />

                <div>

                  <h4 className="font-bold text-lg">
                    Customer Assistance
                  </h4>

                  <p className="text-gray-600 mt-1">
                    Dedicated premium support
                    for all customers.
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <Globe className="text-pink-500 mt-1" />

                <div>

                  <h4 className="font-bold text-lg">
                    Service Availability
                  </h4>

                  <p className="text-gray-600 mt-1">
                    Nationwide delivery and
                    premium customer support.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

      {/* ================= FAQ ================= */}

      <div className="max-w-5xl mx-auto mt-32">

        <div className="text-center">

          <p className="text-pink-500 uppercase tracking-[4px] font-semibold">
            FAQ
          </p>

          <h2 className="text-4xl lg:text-5xl font-black mt-4">
            Frequently Asked Questions
          </h2>

        </div>

        <div className="space-y-5 mt-16">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-[30px] bg-white/70 backdrop-blur-2xl border border-white/40 shadow-lg"
            >

              <button
                type="button"
                onClick={() =>
                  setActiveFAQ(
                    activeFAQ === index
                      ? null
                      : index
                  )
                }
                className="w-full flex items-center justify-between gap-5 p-7 text-left"
              >

                <span className="text-lg font-bold text-gray-900">
                  {faq.question}
                </span>

                <motion.div
                  animate={{
                    rotate:
                      activeFAQ ===
                      index
                        ? 180
                        : 0,
                  }}
                >

                  <ChevronDown
                    size={24}
                    className="text-pink-500"
                  />

                </motion.div>

              </button>

              <AnimatePresence>

                {activeFAQ === index && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      height: 0,
                    }}
                    animate={{
                      opacity: 1,
                      height: "auto",
                    }}
                    exit={{
                      opacity: 0,
                      height: 0,
                    }}
                    className="px-7 pb-7 text-gray-600 leading-relaxed"
                  >

                    {faq.answer}

                  </motion.div>
                )}

              </AnimatePresence>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}