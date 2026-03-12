"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import {
  Quote,
  Star,
  ChevronLeft,
  ChevronRight,
  MessageSquareQuote,
} from "lucide-react";
import Image from "next/image";

// Placeholder testimonials - these would be replaced with real data
const testimonials = [
  {
    name: "Alex Reed",
    role: "CEO",
    company: "Nexus Innovations",
    content:
      "An absolute professional. Sabbir transformed our cumbersome legacy application into a lightning-fast, modern React experience. His architectural decisions saved us months of future technical debt.",
    rating: 5,
    project: "Enterprise SaaS Platform",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Samantha Wright",
    role: "Director of Product",
    company: "Aura Systems",
    content:
      "The precision and speed at which Sabbir delivers is remarkable. He has a unique ability to translate complex business requirements into intuitive, fluid user interfaces.",
    rating: 5,
    project: "Dashboard Redesign",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Marcus Chen",
    role: "Lead Engineer",
    company: "FinTech Solutions",
    content:
      "Working with Sabbir was a masterclass in modern MERN stack development. His REST APIs are robust, secure, and incredibly well-documented. A vital asset to any ambitious technical project.",
    rating: 5,
    project: "Financial Data Processing API",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Elena Rodriguez",
    role: "Marketing Director",
    company: "Creative Pulse",
    content:
      "We needed a portfolio platform that was as creative as our agency. Sabbir delivered an award-winning UI that performs flawlessly under heavy traffic. The animations are phenomenal.",
    rating: 5,
    project: "Digital Agency Portfolio",
    image: "/placeholder.svg?height=100&width=100",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-play functionality
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isHovered]);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    if (newDirection === 1) {
      setIndex((prev) => (prev + 1) % testimonials.length);
    } else {
      setIndex(
        (prev) => (prev - 1 + testimonials.length) % testimonials.length,
      );
    }
  };

  const jumpToIndex = (newIndex: number) => {
    setDirection(newIndex > index ? 1 : -1);
    setIndex(newIndex);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
      rotateY: direction > 0 ? 10 : -10,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
      rotateY: direction < 0 ? 10 : -10,
    }),
  };

  return (
    <section
      id="testimonials"
      className="py-24 md:py-40 px-4 relative bg-[#030303] overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-indigo-500/10 rounded-full blur-[150px] mix-blend-screen" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        {/* Superior Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-xl text-slate-300 text-xs font-semibold uppercase tracking-[0.2em] mb-8">
            <MessageSquareQuote className="w-4 h-4 text-indigo-400" />
            Endorsements
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-white mb-6">
            Client{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-sky-400">
              Feedback.
            </span>
          </h2>
          <p className="text-lg text-slate-400 font-light max-w-2xl mx-auto">
            Real experiences from founders and engineering leaders regarding my
            architectural decisions, code quality, and delivery speed.
          </p>
        </motion.div>

        {/* The Carousel Container */}
        <div
          className="relative max-w-5xl mx-auto perspective-1000"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Main Slider Area */}
          <div className="relative h-[450px] sm:h-[350px] lg:h-[400px] flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 },
                  scale: { duration: 0.4 },
                  rotateY: { duration: 0.4 },
                }}
                className="absolute w-full px-4 sm:px-12"
              >
                {/* Premium Glass Card */}
                <div className="relative overflow-hidden bg-[#0a0a0a] rounded-[2.5rem] border border-white/10 p-8 sm:p-12 lg:p-16 shadow-2xl flex flex-col md:flex-row gap-8 lg:gap-16 items-center w-full">
                  {/* Subtle internal glow aligned to top left */}
                  <div className="absolute -top-32 -left-32 w-64 h-64 bg-indigo-500/20 rounded-full blur-[80px]" />

                  {/* Quotation Mark Watermark */}
                  <Quote className="absolute -top-6 -right-6 w-48 h-48 text-white/[0.02] pointer-events-none -rotate-12" />

                  {/* Typography Content */}
                  <div className="flex-1 relative z-10 text-center md:text-left">
                    <div className="flex justify-center md:justify-start gap-1 mb-8">
                      {[...Array(testimonials[index].rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-indigo-400 fill-indigo-400/20 drop-shadow-[0_0_10px_rgba(129,140,248,0.5)]"
                        />
                      ))}
                    </div>

                    <p className="text-xl sm:text-2xl lg:text-3xl text-white font-medium leading-[1.4] tracking-tight mb-8">
                      "{testimonials[index].content}"
                    </p>

                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-t border-white/10 pt-6">
                      <div>
                        <h4 className="text-lg font-bold text-white tracking-tight">
                          {testimonials[index].name}
                        </h4>
                        <p className="text-slate-400 text-sm font-medium">
                          {testimonials[index].role}{" "}
                          <span className="mx-1 text-white/20">|</span>{" "}
                          <span className="text-indigo-400">
                            {testimonials[index].company}
                          </span>
                        </p>
                      </div>

                      <div className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs font-mono tracking-widest uppercase text-slate-300 backdrop-blur-md whitespace-nowrap hidden sm:block">
                        {testimonials[index].project}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slider Controls */}
          <div className="flex items-center justify-between mt-8 px-4 sm:px-12 relative z-20">
            {/* Circular Nav Buttons */}
            <div className="flex gap-4">
              <button
                onClick={() => paginate(-1)}
                className="w-12 h-12 rounded-full border border-white/10 bg-[#0a0a0a] flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all hover:scale-105 active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => paginate(1)}
                className="w-12 h-12 rounded-full border border-white/10 bg-[#0a0a0a] flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all hover:scale-105 active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Minimalist Dot Indicators */}
            <div className="flex gap-3">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => jumpToIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-500 ease-out ${
                    idx === index
                      ? "w-8 bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.6)]"
                      : "w-1.5 bg-slate-700 hover:bg-slate-500"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
