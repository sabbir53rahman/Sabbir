"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Download, Sparkles, Code, Zap, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import sabbir from "@/components/assets/sabbir.png";
import Image from "next/image";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={ref}
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* Floating Orbs */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 overflow-hidden"
      >
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
        />
      </motion.div>

      <motion.div
        style={{ y, opacity }}
        className="text-center z-10 max-w-6xl mx-auto px-4"
      >
        {/* Profile Image with Enhanced Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-12"
        >
          <div className="relative w-48 h-48 mx-auto">
            {/* Rotating Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, #8b5cf6, #ec4899, #06b6d4, #8b5cf6)",
              }}
            >
              <div className="absolute inset-2 rounded-full bg-slate-950" />
            </motion.div>

            {/* Inner Content */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-purple-400/20 to-pink-400/20 backdrop-blur-sm flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <Image
                  src={sabbir}
                  alt="Sabbir"
                  width={400}
                  height={400}
                  className="rounded-full object-cover"
                />
              </motion.div>
            </div>

            {/* Floating Icons */}
            <motion.div
              animate={{
                rotate: 360,
                y: [-10, 10, -10],
              }}
              transition={{
                rotate: {
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                },
                y: {
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                },
              }}
              className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center"
            >
              <Code className="w-6 h-6 text-white" />
            </motion.div>

            <motion.div
              animate={{
                rotate: -360,
                y: [10, -10, 10],
              }}
              transition={{
                rotate: {
                  duration: 10,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                },
                y: {
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                },
              }}
              className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center"
            >
              <Zap className="w-6 h-6 text-white" />
            </motion.div>

            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute -top-6 -left-6 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center"
            >
              <Star className="w-4 h-4 text-white" />
            </motion.div>
          </div>
        </motion.div>

        {/* Enhanced Typography */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8"
        >
          <motion.h1
            className="text-[24px] md:text-[28px] lg:text-[36px] font-black text-white mb-6 leading-none"
            style={{
              background:
                "linear-gradient(135deg, #ffffff 0%, #a855f7 50%, #ec4899 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Sabbir
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600"
            >
              Hossain
            </motion.span>
          </motion.h1>
        </motion.div>

        {/* Animated Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mb-8"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="w-2 h-2 bg-purple-400 rounded-full"
            />
            <h2 className="text-2xl md:text-4xl text-gray-300 font-light tracking-wider">
              Full Stack MERN Developer
            </h2>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="w-2 h-2 bg-pink-400 rounded-full"
            />
          </div>
        </motion.div>

        {/* Enhanced Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed mb-12"
        >
          Crafting digital experiences with{" "}
          <span className="text-purple-400 font-semibold">
            modern technologies
          </span>
          . I transform ideas into beautiful, functional applications that make
          a <span className="text-pink-400 font-semibold">real difference</span>
          .
        </motion.p>

        {/* Enhanced CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="relative bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-2xl"
            >
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                View My Work
              </motion.span>
              <ArrowRight className="ml-3 w-5 h-5" />
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
            <Button
              variant="outline"
              size="lg"
              className="relative border-2 border-purple-400/50 text-purple-400 hover:bg-purple-400/10 hover:border-purple-400 px-10 py-4 rounded-full text-lg font-semibold backdrop-blur-sm"
            >
              <Download className="mr-3 w-5 h-5" />
              Download CV
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex flex-col items-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="text-gray-400 text-sm mb-4 flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            Scroll to explore
            <Sparkles className="w-4 h-4" />
          </motion.div>
          <motion.div
            animate={{
              height: [20, 40, 20],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="w-px bg-gradient-to-b from-purple-400 to-transparent"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
