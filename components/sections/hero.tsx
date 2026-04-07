"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Send,
  Terminal,
  Sparkles,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import sabbir from "@/components/assets/sabbir.png";

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-[#030303] pt-24 pb-16"
    >
      {/* Absolute Ambient Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-[150px] mix-blend-screen opacity-50" />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full flex flex-col items-center">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 lg:mb-12 cursor-pointer group"
          onClick={scrollToContact}
        >
          <div className="relative flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl transition-all duration-500 group-hover:bg-white/10 group-hover:border-white/20">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]"></span>
            </span>
            <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
              Available for ambitious projects
            </span>
            <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
          </div>
        </motion.div>

        {/* Hero Title Area - Typography Focused */}
        <div className="text-center max-w-5xl mx-auto flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-7xl lg:text-[7.5rem] font-bold tracking-[-0.04em] text-white leading-[0.95] mb-6"
          >
            Engineering <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-slate-400 to-slate-500">
              Digital Excellence.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg sm:text-xl lg:text-2xl font-light text-slate-400 max-w-3xl leading-relaxed tracking-wide mb-12"
          >
            Hi, I'm <b className="text-white font-medium">Sabbir Hossain</b>. A
            Full-Stack Engineer passionate about crafting pixel-perfect
            interfaces and infinitely scalable systems.
          </motion.p>
        </div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-20 w-full sm:w-auto"
        >
          <button
            onClick={scrollToProjects}
            className="group relative flex items-center justify-center gap-3 px-8 py-4 w-full sm:w-auto text-sm sm:text-base font-semibold text-[#030303] bg-white rounded-full overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white via-slate-200 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
            <Sparkles className="w-5 h-5 relative z-10" />
            <span className="relative z-10">Explore My Work</span>
          </button>

          <a
            href="/Resume_of_Sabbir_Hossain.pdf"
            target="_blank"
            className="group relative flex items-center justify-center gap-3 px-8 py-4 w-full sm:w-auto text-sm sm:text-base font-medium text-white bg-white/5 border border-white/10 rounded-full overflow-hidden backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/20 active:scale-[0.98]"
          >
            <Terminal className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors relative z-10" />
            <span className="relative z-10">View Resume</span>
          </a>
        </motion.div>

        {/* Showcasing Developer Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-4xl mx-auto perspective-1000 group z-10"
        >
          {/* 1. Ultra-Premium Ambient Glow (Bleeds light outside the border) */}
          <div className="absolute -inset-[2px] rounded-[2.5rem] opacity-30 group-hover:opacity-70 blur-2xl transition-all duration-1000 pointer-events-none z-0">
            <div className="absolute top-1/2 left-1/2 w-[150%] aspect-square -translate-x-1/2 -translate-y-1/2 animate-[spin_10s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_72deg,rgba(99,102,241,0.6)_160deg,rgba(255,255,255,0.8)_180deg,transparent_180deg,transparent_252deg,rgba(14,165,233,0.6)_340deg,rgba(255,255,255,0.8)_360deg)]" />
          </div>

          {/* 2. Animated Glowing Border Wrapper (Sharp clipped rim) */}
          <div className="relative rounded-[2.5rem] p-[2px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] overflow-hidden z-10 transition-transform duration-700">
            {/* The Crisp Rotating Light Gradient (Hotspot Comet) */}
            <div className="absolute top-1/2 left-1/2 z-0 w-[200%] md:w-[150%] aspect-square -translate-x-1/2 -translate-y-1/2 animate-[spin_8s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_72deg,rgba(99,102,241,1)_150deg,white_175deg,transparent_180deg,transparent_252deg,rgba(14,165,233,1)_330deg,white_355deg,transparent_360deg)] opacity-70 group-hover:opacity-100 transition-opacity duration-1200 blur-[2px]" />

            {/* Base static border layer to ensure border never disappears */}
            <div className="absolute inset-0 z-0 bg-white/5 rounded-[2.5rem]" />

            {/* 3. Inner Content Card */}
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 bg-[#0a0a0a]/90 backdrop-blur-3xl rounded-[2.4rem] p-6 sm:p-8 overflow-hidden border border-white/5 shadow-2xl">
              {/* Refined Ambient Inner Glow & Vignette */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent opacity-60 pointer-events-none" />
              <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.6)] pointer-events-none" />

              {/* Image Section */}
              <div className="w-32 h-32 sm:w-40 sm:h-40 shrink-0 relative rounded-full overflow-hidden border border-white/10 bg-slate-900 shadow-xl">
                <Image
                  src={sabbir}
                  alt="Sabbir Hossain"
                  fill
                  priority
                  className="object-cover scale-[1.15] object-[center_top] grayscale-[30%] contrast-125 transition-all duration-700 hover:scale-[1.10] hover:grayscale-0"
                />
              </div>

              {/* Dev Details */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left w-full">
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-px w-6 bg-indigo-500/50 hidden md:block" />
                  <span className="text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase">
                    Full-Stack Engineer
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  Building the Web, <br className="hidden md:block" />
                  <span className="text-slate-400 font-light italic">
                    One block at a time.
                  </span>
                </h3>

                <p className="text-sm text-slate-500 max-w-md mb-6 leading-relaxed">
                  Specializing in React ecosystem, scalable Node.js
                  architectures, and ultra-performant API design. Focused on
                  delivering premium user experiences.
                </p>

                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300 font-mono">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    BD/Remote
                  </div>
                  <Link
                    href="https://github.com/sabbir53rahman"
                    target="_blank"
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300 font-mono hover:bg-white/10 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5 text-slate-500" />
                    sabbir53rahman
                  </Link>
                </div>
              </div>

              {/* Right Side Decorative Tech Elements */}
              <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col gap-3">
                {[
                  "React.js",
                  "Next.js 14",
                  "Node.js",
                  "PostgreSQL",
                  "Docker",
                  "MongoDB",
                  "TypeScript",
                ].map((tech, i) => (
                  <div
                    key={tech}
                    className="flex items-center justify-end gap-3 group"
                  >
                    <span className="text-[10px] font-mono tracking-widest text-slate-600 uppercase group-hover:text-indigo-400 transition-colors">
                      {tech}
                    </span>
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-indigo-500 transition-colors shadow-[0_0_10px_rgba(99,102,241,0)] group-hover:shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
