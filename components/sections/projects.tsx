"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ExternalLink,
  Github,
  Sparkles,
  Layers,
  ArrowUpRight,
} from "lucide-react";

import LMS from "@/components/assets/lms.png";
import COCO from "@/components/assets/Coco.png";
import SMS from "@/components/assets/sms.png";
import Hikhma from "@/components/assets/hikhma.png";

// This array can scale infinitely. The grid fluidly adapts.
const projects = [
  {
    title: "Learning Management System",
    category: "Full Stack",
    description:
      "Architected a scalable LMS for educators to seamlessly deploy courses and facilitate student enrollment. Engineered robust role-based access, real-time analytics, and secure payment integrations.",
    image: LMS,
    technologies: ["Next.js", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/sabbir53rahman/LMS_Client",
    live: "https://lms-client-wxa2.onrender.com/",
    featured: true, // Optional flag if treating specific items differently later
  },
  {
    title: "Xero SMS Gateway",
    category: "Frontend",
    description:
      "Built the client-facing portal for a global virtual SIM provider. Designed a fluid analytics dashboard with real-time charting, order management, and multi-provider API integrations.",
    image: SMS,
    technologies: ["React", "Next.js", "Recharts", "Tailwind"],
    github: "https://github.com/sabbir53rahman/xero-sms",
    live: "https://xero-sms.onrender.com/",
    featured: false,
  },
  {
    title: "Hikmah Digital Library",
    category: "Full Stack",
    description:
      "Developed a comprehensive digital catalogue handling 25,000+ publications. Implemented high-performance data fetching, advanced filtering mechanics, and intuitive user wishlists.",
    image: Hikhma,
    technologies: ["React", "Next.js", "Tailwind", "Ant Design"],
    github: "https://github.com/sabbir53rahman/alhikmah",
    live: "https://hikmahlibrary.com/",
    featured: false,
  },
  {
    title: "COCO Combat",
    category: "Web3/Gaming",
    description:
      "Constructed an engaging tap-to-earn game interface focused on high-fps animations, responsive interactions, and compelling reward loops for sustained user retention.",
    image: COCO,
    technologies: ["React", "Vite", "Framer Motion", "Tailwind"],
    github: "https://github.com/sabbir53rahman/coco",
    live: "https://www.cococombat.com/",
    featured: false,
  },
  // Adding placeholders to demonstrate infinite scalability
  {
    title: "Finance Dashboard UI",
    category: "Frontend",
    description:
      "A highly interactive fintech application dashboard demonstrating real-time websocket data synchronization and complex financial charting utilizing D3.js.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["React", "TypeScript", "D3.js", "Zustand"],
    github: "#",
    live: "#",
    featured: false,
  },
  {
    title: "AI Prompt Marketplace",
    category: "Full Stack",
    description:
      "A decentralized marketplace for buying and selling optimized AI prompt templates. Integrated with Stripe Connect for seamless peer-to-peer developer payouts.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Next.js 14", "Prisma", "PostgreSQL", "Stripe"],
    github: "#",
    live: "#",
    featured: false,
  },
];

// All possible categories extracted dynamically from the project data
const categories = [
  "All Work",
  ...Array.from(new Set(projects.map((p) => p.category))),
];

export default function Projects() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const [activeCategory, setActiveCategory] = useState("All Work");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Filter logic
  const filteredProjects = projects.filter(
    (project) =>
      activeCategory === "All Work" || project.category === activeCategory,
  );

  return (
    <section
      id="projects"
      className="py-24 md:py-32 bg-[#030303] relative border-t border-white/5 overflow-hidden"
    >
      {/* Absolute Ambient Backgrounds */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-0 right-[20%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[20%] left-[10%] w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-[150px] mix-blend-screen" />
      </div>

      <div
        className="max-w-[90rem] mx-auto px-6 lg:px-12 relative z-10"
        ref={containerRef}
      >
        {/* Dynamic Header & Filter Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-slate-300 text-xs font-semibold uppercase tracking-[0.2em] mb-8">
              <Layers className="w-4 h-4 text-indigo-400" />
              Portfolio
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-white mb-6 leading-[1.1]">
              Selected{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-400 to-indigo-400">
                Works.
              </span>
            </h2>
            <p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed">
              A scalable collection of applications demonstrating engineering
              depth across the stack. Filter by category to explore specific
              skillsets.
            </p>
          </motion.div>

          {/* Minimal Scalable Filter System */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shrink-0"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-white text-slate-900 shadow-xl"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Highly Scalable, Auto-Flowing Grid System */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              key={project.title}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative flex flex-col h-full bg-[#0a0a0a] rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-colors duration-500 shadow-xl"
            >
              {/* Ambient Glow that follows hover internally */}
              <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />

              {/* Project Image Area Container */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-900/50 border-b border-white/5 z-10 shrink-0">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover object-top opacity-80 group-hover:opacity-100 filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 hover:scale-105"
                />
                {/* Subtle vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent opacity-60" />

                {/* Top Meta Float */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-20">
                  <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-xs font-mono tracking-widest text-indigo-300 uppercase shadow-xl group-hover:bg-indigo-500/20 group-hover:text-white transition-all">
                    {project.category}
                  </span>
                  <div className="flex gap-2 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <Link
                      href={project.github}
                      target="_blank"
                      className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </Link>
                    <Link
                      href={project.live}
                      target="_blank"
                      className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white hover:bg-indigo-600 transition-colors shadow-lg shadow-indigo-500/25"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Content Area flex-grow ensures buttons/tags align uniformly at the bottom */}
              <div className="flex flex-col flex-grow p-6 sm:p-8 relative z-10">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-slate-400 text-sm sm:text-base font-light leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack Footer */}
                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5 mt-auto">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded flex items-center bg-white/5 text-[11px] font-mono tracking-wide text-slate-300 border border-white/5 group-hover:border-white/10 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2.5 py-1 rounded flex items-center bg-white/5 text-[11px] font-mono tracking-wide text-indigo-400 border border-indigo-500/20">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
