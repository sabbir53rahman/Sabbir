"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Calendar,
  MapPin,
  ExternalLink,
  Briefcase,
  Terminal,
  Cpu,
  History,
  ArrowRight,
  ShieldCheck,
  Globe,
  Database,
} from "lucide-react";

const experiences = [
  {
    title: "Infrastructure Specialist",
    company: "Self-Learning Era",
    location: "Growth Phase",
    period: "2020 — 2022",
    description:
      "Initiated the transition into professional web engineering. Focused on understanding the underlying protocols of the web, hosting environments, and modular system design.",
    achievements: [
      "Deployed custom-tailored digital solutions for local clients.",
      "Mastered theme/plugin architecture and performance tuning.",
      "Optimized database queries and server-side caching mechanics.",
      "Gained deep insights into DNS and hosting configurations.",
    ],
    technologies: ["WordPress", "PHP", "MySQL", "AWS Core"],
    accent: "text-amber-400",
    bg: "bg-amber-500/5",
    border: "border-amber-500/10",
    icon: <Database className="w-5 h-5" />,
  },
  {
    title: "Frontend Systems Engineer",
    company: "Freelance & Practice",
    location: "Dhaka, Bangladesh",
    period: "2022 — 2023",
    description:
      "Specialized in advanced frontend architecture and state management. Focused on bridging the gap between complex UI/UX designs and performant, accessible codebases.",
    achievements: [
      "Developed 10+ high-fidelity, responsive enterprise-grade interfaces.",
      "Mastered React core patterns and hooks for optimized rendering.",
      "Integrated complex Tailwind CSS systems for scalable styling.",
      "Achieved 95+ Lighthouse performance scores across all builds.",
    ],
    technologies: ["React.js", "Zustand", "Framer Motion", "Tailwind CSS"],
    accent: "text-emerald-400",
    bg: "bg-emerald-500/5",
    border: "border-emerald-500/10",
    icon: <Globe className="w-5 h-5" />,
  },
  {
    title: "MERN Stack Architect",
    company: "Self Projects & Freelance",
    location: "Global / Remote",
    period: "2023 — Present",
    description:
      "Architecting high-performance digital ecosystems using the MERN stack. Focused on building ultra-scalable backend infrastructures and fluid, responsive front-end experiences for modern enterprises.",
    achievements: [
      "Engineered mission-critical RESTful APIs with Node.js & Express.",
      "Architected secure, robust JWT-based authentication systems.",
      "Optimized MongoDB schemas for high-concurrency data operations.",
      "Orchestrated cloud deployments ensuring 99.9% uptime.",
    ],
    technologies: [
      "Next.js 14",
      "TypeScript",
      "Node.js",
      "Redis",
      "PostgreSQL",
    ],
    accent: "text-indigo-400",
    bg: "bg-indigo-500/5",
    border: "border-indigo-500/10",
    icon: <Cpu className="w-5 h-5" />,
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 md:py-32 px-6 relative bg-[#030303] overflow-hidden"
    >
      {/* Background Architectural Patterns */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v1.5h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[150px] translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[150px] -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header System */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-indigo-400 text-[10px] font-mono font-bold uppercase tracking-[0.2em] mb-6">
              <History className="w-3.5 h-3.5" />
              Chronicle of Growth
            </div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[0.95]">
              Technical <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-slate-400 to-slate-500 italic font-light">
                Evolution.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-start md:items-end gap-4"
          >
            <p className="text-slate-400 font-light text-lg max-w-sm md:text-right leading-relaxed">
              Mapped progression of technical expertise, from foundational
              concepts to advanced full-stack systems engineering.
            </p>
          </motion.div>
        </div>

        {/* Operational Roadmap Layout */}
        <div className="relative">
          {/* Central Transport Line Default */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/5 hidden lg:block" />
          
          {/* Central Transport Line Animated */}
          <motion.div 
            initial={{ height: "0%" }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
            className="absolute left-1/2 -translate-x-1/2 top-0 w-px bg-gradient-to-b from-indigo-500/0 via-white/20 to-indigo-500/0 hidden lg:block origin-top" 
          />

          <div className="space-y-24 lg:space-y-40">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.8,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`relative flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0 ${
                  index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Visual Connector Node (Desktop) */}
                <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-[#030303] z-20 hidden lg:flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
                    className={`w-3 h-3 rounded-full bg-[#030303] border-2 border-white/20 relative group-hover:border-white transition-colors`}
                  >
                    <div
                      className={`absolute inset-[-4px] rounded-full bg-current opacity-40 filter blur-[4px] animate-pulse ${exp.accent.replace("text", "bg")}`}
                    />
                  </motion.div>
                </div>

                {/* Information Card (Bento Path) */}
                <div className="w-full lg:w-[45%]">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`group relative p-1 rounded-[2.5rem] bg-gradient-to-b from-white/10 to-transparent hover:from-white/20 transition-all duration-700 shadow-2xl`}
                  >
                    <div className="bg-[#0a0a0a] rounded-[2.3rem] p-8 md:p-10 relative overflow-hidden">
                      {/* Subtle Internal Glow */}
                      <div
                        className={`absolute top-0 right-0 w-40 h-40 opacity-0 group-hover:opacity-[0.05] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 transition-opacity duration-1000 ${exp.accent.replace("text", "bg")}`}
                      />

                      <div className="relative z-10">
                        {/* Meta Head */}
                        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                          <div
                            className={`flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/5 border ${exp.border} ${exp.accent}`}
                          >
                            {exp.icon}
                            <span className="text-[10px] font-mono font-bold tracking-widest uppercase">
                              {exp.period}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-slate-500 italic font-light text-sm">
                            <MapPin className="w-3.5 h-3.5" />
                            {exp.location}
                          </div>
                        </div>

                        {/* Heading */}
                        <div className="mb-8">
                          <h3 className="text-3xl font-bold text-white mb-2 tracking-tight group-hover:text-indigo-400 transition-colors duration-500">
                            {exp.title}
                          </h3>
                          <div className="flex items-center gap-2 text-slate-400 text-sm font-light">
                            <Briefcase className="w-4 h-4 text-slate-600" />
                            {exp.company}
                          </div>
                        </div>

                        {/* Narrative */}
                        <p className="text-slate-400 font-light text-base leading-relaxed mb-10 pb-10 border-b border-white/5">
                          {exp.description}
                        </p>

                        {/* Points of Excellence */}
                        <div className="space-y-6">
                          <h4 className="text-[10px] font-mono font-bold tracking-widest text-slate-600 uppercase flex items-center gap-2">
                            <ShieldCheck className="w-3.5 h-3.5" />
                            Engineering Milestones
                          </h4>
                          <div className="space-y-4">
                            {exp.achievements.map((item, i) => (
                              <div key={i} className="flex gap-4 group/item">
                                <div
                                  className={`w-1.5 h-1.5 rounded-full mt-2 transition-all duration-500 group-hover/item:scale-150 rotate-45 ${exp.accent.replace("text", "bg")}`}
                                />
                                <p className="text-sm text-slate-400 font-light leading-snug group-hover/item:text-slate-200 transition-colors">
                                  {item}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Tech Tag System */}
                        <div className="flex flex-wrap gap-2 pt-10">
                          {exp.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-[10px] font-mono font-bold tracking-widest text-slate-500 uppercase hover:text-white hover:border-white/10 transition-all cursor-default"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Visual Contrast Panel (Desktop) */}
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                  className="hidden lg:block w-[45%] pointer-events-none"
                >
                  <div className="relative flex flex-col items-center">
                    <div
                      className={`text-9xl font-black opacity-[0.02] mix-blend-overlay tracking-tighter italic ${exp.accent}`}
                    >
                      {exp.period.split(" — ")[0].replace("20", "")}
                    </div>
                    <div className="flex items-center gap-4 mt-[-40px]">
                      <div className="h-px w-20 bg-white/10" />
                      <div className="text-[12px] font-mono font-bold tracking-widest text-slate-700 uppercase">
                        Phase {experiences.indexOf(exp) + 1}
                      </div>
                      <div className="h-px w-20 bg-white/10" />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
