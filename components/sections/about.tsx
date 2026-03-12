"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import {
  Code,
  Coffee,
  Users,
  Award,
  Activity,
  ArrowRight,
  Terminal,
  Cpu,
  Globe,
  Zap,
} from "lucide-react";
import sabbir from "@/components/assets/sabbir1.png";

const stats = [
  {
    icon: <Code className="w-5 h-5" />,
    value: "50+",
    label: "Deployments",
    description: "Production-ready systems architected & delivered.",
    color: "text-indigo-400",
    bg: "bg-indigo-500/5",
    border: "border-indigo-500/10",
  },
  {
    icon: <Users className="w-5 h-5" />,
    value: "25+",
    label: "Partners",
    description: "Global collaborations with diverse engineering teams.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/5",
    border: "border-emerald-500/10",
  },
  {
    icon: <Award className="w-5 h-5" />,
    value: "3+",
    label: "Years",
    description: "Intensive focus on the React & Node.js ecosystem.",
    color: "text-amber-400",
    bg: "bg-amber-500/5",
    border: "border-amber-500/10",
  },
  {
    icon: <Coffee className="w-5 h-5" />,
    value: "1k+",
    label: "Commits",
    description: "Continuous iteration and code quality maintenance.",
    color: "text-rose-400",
    bg: "bg-rose-500/5",
    border: "border-rose-500/10",
  },
];

const competencies = [
  { name: "Full-Stack Design", icon: <Layers className="w-3 h-3" /> },
  { name: "MERN Specialist", icon: <Cpu className="w-3 h-3" /> },
  { name: "API Infrastructure", icon: <Globe className="w-3 h-3" /> },
  { name: "Cloud Architecture", icon: <Zap className="w-3 h-3" /> },
];

import { Layers } from "lucide-react";

export default function About() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="py-24 md:py-32 px-6 relative bg-[#030303] overflow-hidden"
    >
      {/* Background Architectural Patterns */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v1.5h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[150px] -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[150px] translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10" ref={containerRef}>
        {/* Header System */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/5 text-amber-500 text-[10px] font-mono font-bold uppercase tracking-[0.2em] mb-6">
              <Activity className="w-3.5 h-3.5" />
              Operational Core
            </div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[0.95]">
              Architecting Digital <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-slate-400 to-slate-500 italic font-light">
                Excellence.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-start md:items-end gap-4"
          >
            <p className="text-slate-400 font-light text-lg max-w-sm md:text-right leading-relaxed">
              Bridging the gap between complex requirements and streamlined
              digital interfaces through precision engineering.
            </p>
          </motion.div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start mb-32">
          {/* Visual Asset Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Premium Frame */}
            <div className="relative aspect-[4/5] rounded-[3rem] p-2 bg-gradient-to-br from-white/10 via-transparent to-white/5 shadow-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-[#0a0a0a] rounded-[2.8rem] overflow-hidden">
                <Image
                  src={sabbir}
                  alt="Sabbir Hossain"
                  fill
                  className="object-cover scale-105 filter grayscale-[30%] group-hover:grayscale-0 group-hover:scale-100 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent opacity-60" />
              </div>
            </div>

            {/* Floating Experience Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -right-4 md:-right-8 p-1 rounded-3xl bg-gradient-to-br from-amber-500/20 to-transparent backdrop-blur-xl border border-white/10 shadow-2xl z-20"
            >
              <div className="bg-[#0a0a0a] rounded-[1.4rem] p-6 flex flex-col items-center">
                <span className="text-3xl font-bold text-white leading-none mb-1">
                  03+
                </span>
                <span className="text-[10px] font-mono font-bold tracking-widest text-amber-500 uppercase">
                  Years Experience
                </span>
              </div>
            </motion.div>

            {/* Decorative Vector */}
            <div className="absolute -top-10 -left-10 w-40 h-40 border border-white/5 rounded-full pointer-events-none" />
            <div className="absolute -top-5 -left-5 w-20 h-20 border border-white/10 rounded-full pointer-events-none" />
          </motion.div>

          {/* Narrative Section */}
          <div className="lg:col-span-7 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-tight">
                Engineering{" "}
                <span className="text-slate-400 font-light italic">
                  Scalability
                </span>{" "}
                <br />
                from the Core Out.
              </h3>

              <div className="space-y-6 text-slate-400 text-lg font-light leading-relaxed">
                <p>
                  As a Full-Stack Engineer specializing in the MERN ecosystem, I
                  don't just build websites; I architect{" "}
                  <b className="text-white font-medium">
                    high-performance digital environments
                  </b>
                  . My focus lies at the intersection of robust backend
                  infrastructure and fluid, user-centric frontend interfaces.
                </p>
                <p>
                  I've dedicated my career to mastering the intricacies of
                  React.js, Next.js, and Node.js, allowing me to transform
                  complex business requirements into elegant, scalable software
                  solutions. Every line of code I write is optimized for{" "}
                  <b className="text-white font-medium">
                    maximum efficiency and future growth
                  </b>
                  .
                </p>
              </div>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-8 pt-8 border-t border-white/5">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-4 text-indigo-400">
                  <Terminal className="w-5 h-5" />
                  <h4 className="text-sm font-bold uppercase tracking-widest font-mono">
                    Philosophy
                  </h4>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  I believe in clean architecture, type-safe development, and
                  the power of modular design. Code should be as readable as it
                  is performant.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-4 text-emerald-400">
                  <Cpu className="w-5 h-5" />
                  <h4 className="text-sm font-bold uppercase tracking-widest font-mono">
                    Approach
                  </h4>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  A data-first approach to system design, ensuring that user
                  experiences are backed by ultra-reliable and secure
                  infrastructure.
                </p>
              </motion.div>
            </div>

            {/* Modern Tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.7 }}
              className="flex flex-wrap gap-3"
            >
              {competencies.map((item, idx) => (
                <div
                  key={idx}
                  className="group flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-500/30 transition-all duration-300"
                >
                  <div className="text-slate-500 group-hover:text-indigo-400 transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-mono font-bold tracking-widest text-slate-400 uppercase group-hover:text-white transition-colors">
                    {item.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bento Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className={`group relative p-8 rounded-[2rem] border ${stat.border} ${stat.bg} backdrop-blur-sm hover:translate-y--2 transition-all duration-500 shadow-xl hover:shadow-2xl overflow-hidden`}
            >
              {/* Internal glow hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-current opacity-0 group-hover:opacity-[0.03] rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 transition-opacity" />

              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${stat.border} bg-black/40 ${stat.color} mb-8 group-hover:scale-110 transition-transform duration-500`}
              >
                {stat.icon}
              </div>

              <div className="space-y-2">
                <div className="text-4xl font-bold text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase">
                  {stat.label}
                </div>
                <p className="text-slate-600 text-xs leading-relaxed group-hover:text-slate-400 transition-colors pt-2">
                  {stat.description}
                </p>
              </div>

              <div className="absolute bottom-6 right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                <ArrowRight className={`w-4 h-4 ${stat.color}`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
