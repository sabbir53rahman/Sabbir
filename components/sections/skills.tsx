"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Layers,
  Workflow,
  Blocks,
  Zap,
  Terminal,
  Database,
  Shield,
  Smartphone,
} from "lucide-react";

// Categorized skillset focusing on modern tech terminology and aesthetic representation
const skillDomains = [
  {
    category: "Frontend Architecture",
    icon: <Layers className="w-5 h-5" />,
    description:
      "Engineering scalable client-side infrastructure and performant reactive UIs.",
    skills: [
      { name: "React Ecosystem", expertise: "Expert", level: 95 },
      { name: "Next.js (App Router)", expertise: "Expert", level: 90 },
      { name: "TypeScript / ES6+", expertise: "Advanced", level: 85 },
      { name: "Framer Motion", expertise: "Advanced", level: 80 },
    ],
    accent: "text-sky-400",
    bgAccent: "bg-sky-500/10",
    borderAccent: "border-sky-500/20",
  },
  {
    category: "Styling & Design Systems",
    icon: <Workflow className="w-5 h-5" />,
    description:
      "Translating sophisticated Figma designs into complex, responsive, pixel-perfect views.",
    skills: [
      { name: "Tailwind CSS", expertise: "Expert", level: 95 },
      { name: "CSS Modules / Sass", expertise: "Advanced", level: 85 },
      { name: "Radix / Shadcn UI", expertise: "Advanced", level: 85 },
      { name: "Glassmorphism & Gradients", expertise: "Proficient", level: 90 },
    ],
    accent: "text-violet-400",
    bgAccent: "bg-violet-500/10",
    borderAccent: "border-violet-500/20",
  },
  {
    category: "Backend Systems",
    icon: <Database className="w-5 h-5" />,
    description:
      "Building robust Node.js microservices and highly concurrent RESTful APIs.",
    skills: [
      { name: "Node.js Platform", expertise: "Advanced", level: 88 },
      { name: "Express Framework", expertise: "Advanced", level: 85 },
      { name: "NoSQL (MongoDB)", expertise: "Advanced", level: 85 },
      {
        name: "Authentication (JWT/OAuth)",
        expertise: "Proficient",
        level: 80,
      },
    ],
    accent: "text-emerald-400",
    bgAccent: "bg-emerald-500/10",
    borderAccent: "border-emerald-500/20",
  },
  {
    category: "Tooling & Optimization",
    icon: <Zap className="w-5 h-5" />,
    description:
      "Maintaining optimal developer experience (DX) and end-user performance metrics.",
    skills: [
      { name: "Git Workflow / CI/CD", expertise: "Advanced", level: 85 },
      { name: "State (Redux/Zustand)", expertise: "Advanced", level: 90 },
      { name: "API Docs (Postman)", expertise: "Proficient", level: 85 },
      { name: "Deployment (Vercel)", expertise: "Advanced", level: 85 },
    ],
    accent: "text-amber-400",
    bgAccent: "bg-amber-500/10",
    borderAccent: "border-amber-500/20",
  },
];

export default function Skills() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  return (
    <section
      id="skills"
      className="py-24 md:py-32 bg-[#030303] relative border-t border-white/5 overflow-hidden"
    >
      {/* Absolute Ambient Backgrounds */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[150px] mix-blend-screen" />
      </div>

      <div
        className="max-w-[90rem] mx-auto px-6 lg:px-12 relative z-10"
        ref={containerRef}
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-start max-w-4xl mb-16 md:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-slate-300 text-xs font-semibold uppercase tracking-[0.2em] mb-8">
            <Blocks className="w-4 h-4 text-violet-400" />
            Core Competencies
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-white mb-6 leading-[1.1]">
            Technical <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-sky-400 to-violet-400">
              Proficiency.
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed max-w-2xl">
            A comprehensive overview of the technologies, frameworks, and
            conceptual architectures I utilize to transform designs into
            production-ready software.
          </p>
        </motion.div>

        {/* High-End Masonry Flex Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {skillDomains.map((domain, index) => (
            <motion.div
              key={domain.category}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex font-mono"
            >
              <div className="group relative w-full rounded-[2rem] bg-[#0a0a0a] border border-white/10 hover:border-white/25 transition-all duration-500 p-8 flex flex-col overflow-hidden">
                {/* Dynamic Internal Glow that moves slightly on hover */}
                <div
                  className={`absolute -top-[100px] -right-[100px] w-[200px] h-[200px] ${domain.accent.replace("text-", "bg-")}/10 rounded-full blur-[80px] group-hover:scale-150 transition-transform duration-1000 ease-out`}
                />

                {/* Domain Header */}
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div
                    className={`w-12 h-12 rounded-2xl ${domain.bgAccent} ${domain.borderAccent} border flex items-center justify-center ${domain.accent} shadow-inner group-hover:rotate-12 transition-transform duration-500`}
                  >
                    {domain.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight leading-snug font-sans">
                    {domain.category}
                  </h3>
                </div>

                <p className="text-sm font-sans text-slate-400 font-light leading-relaxed mb-10 relative z-10 flex-grow">
                  {domain.description}
                </p>

                {/* Skill List */}
                <div className="space-y-6 relative z-10">
                  {domain.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.15 + skillIndex * 0.1,
                      }}
                      className="group/skill flex flex-col gap-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-xs sm:text-sm font-medium text-slate-300 group-hover/skill:text-white transition-colors duration-300">
                          {skill.name}
                        </span>
                        <span
                          className={`text-[10px] tracking-widest uppercase font-semibold border px-2 py-0.5 rounded-full ${domain.bgAccent} ${domain.accent} ${domain.borderAccent}`}
                        >
                          {skill.expertise}
                        </span>
                      </div>

                      {/* Ultra-Modern Progress Bar */}
                      <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{
                            duration: 1.5,
                            delay: index * 0.2 + skillIndex * 0.1 + 0.3,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className={`h-full rounded-full relative ${domain.accent.replace("text-", "bg-")}`}
                        >
                          {/* Animated Shimmer Line */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent w-[200%] animate-[shimmer_2s_infinite]" />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner to emphasize continuous learning */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 sm:mt-24 p-8 sm:p-10 rounded-[2rem] bg-gradient-to-br from-indigo-500/10 via-[#0a0a0a] to-[#0a0a0a] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-8 text-center sm:text-left"
        >
          <div className="flex items-center gap-4 sm:gap-6 flex-col sm:flex-row">
            <div className="w-16 h-16 rounded-full bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30 shrink-0">
              <Terminal className="w-6 h-6 text-indigo-400" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white tracking-tight mb-2">
                Systems & Methodologies
              </h4>
              <p className="text-sm font-light text-slate-400 max-w-2xl">
                Beyond specific languages, my core focus involves mastering
                fundamental computer science principles:{" "}
                <b className="text-slate-300 font-medium">
                  Clean Architecture, Design Patterns, Agile SCRUM workflows,
                  and Test-Driven Development (TDD).
                </b>
              </p>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
