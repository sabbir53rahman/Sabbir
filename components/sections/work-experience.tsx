"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Globe, ExternalLink, Sparkles, Code2, Layers, Zap } from "lucide-react";
import Image from "next/image";
import { Globe3D, GlobeMarker } from "@/components/ui/3d-globe";

const sampleMarkers: GlobeMarker[] = [
  { lat: 23.8103, lng: 90.4125, src: "https://assets.aceternity.com/avatars/1.webp", label: "Dhaka" },
  { lat: 40.7128, lng: -74.006, src: "https://assets.aceternity.com/avatars/1.webp", label: "New York" },
  { lat: 51.5074, lng: -0.1278, src: "https://assets.aceternity.com/avatars/2.webp", label: "London" },
  { lat: 35.6762, lng: 139.6503, src: "https://assets.aceternity.com/avatars/3.webp", label: "Tokyo" },
  { lat: -33.8688, lng: 151.2093, src: "https://assets.aceternity.com/avatars/4.webp", label: "Sydney" },
  { lat: 25.2048, lng: 55.2708, src: "https://assets.aceternity.com/avatars/10.webp", label: "Dubai" },
  { lat: 1.3521, lng: 103.8198, src: "https://assets.aceternity.com/avatars/12.webp", label: "Singapore" },
];

const professionalExperience = [
  {
    company: "Techloop Ltd",
    url: "https://www.techloop.ltd/",
    role: "Frontend Freelancer",
    period: "2024 — Present (1.5 Years)",
    location: "Global / Remote",
    description: "Collaborating with Techloop Ltd to deliver high-performance, visually stunning frontend solutions. focused on crafting seamless user experiences using modern JavaScript frameworks and design systems.",
    achievements: [
      "Engineered responsive and interactive web applications for diverse clients.",
      "Optimized frontend performance and core web vitals for real-world projects.",
      "Collaborated closely with designers and backend teams for end-to-end delivery.",
      "Implemented advanced animations and state management patterns.",
    ],
    technologies: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    accent: "text-purple-400",
    bg: "bg-purple-500/5",
    border: "border-purple-500/10",
  }
];

export default function WorkExperience() {
  return (
    <section id="work" className="py-24 px-6 relative bg-[#030303] overflow-hidden">
      {/* Background Architectural Patterns */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v1.5h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[150px] -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 px-4">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/5 text-purple-400 text-[10px] font-mono font-bold uppercase tracking-[0.2em] mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Professional Career
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
              Industry <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-purple-400 to-purple-500 italic font-light">
                Experience.
              </span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="md:max-w-sm mb-4"
          >
            <p className="text-slate-400 font-light text-lg italic md:text-right">
              Crafting production-ready digital products with industry leaders and innovative startups.
            </p>
          </motion.div>
        </div>

        <div className="space-y-8 px-4">
          {professionalExperience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative p-[1px] rounded-[3rem] bg-gradient-to-br from-white/10 via-transparent to-white/5 hover:from-white/20 transition-all duration-700"
            >
              <div className="bg-[#080808] rounded-[2.9rem] p-8 md:p-14 relative overflow-hidden">
                {/* Subtle Glow */}
                <div className={`absolute top-0 right-0 w-64 h-64 opacity-0 group-hover:opacity-[0.03] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 transition-opacity duration-1000 ${exp.accent.replace("text", "bg")}`} />
                
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-6 mb-10">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-3xl md:text-5xl font-bold text-white group-hover:text-purple-400 transition-colors">
                            {exp.company}
                          </h3>
                          <a 
                            href={exp.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                          >
                            <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                          </a>
                        </div>
                        <div className="flex items-center gap-2 text-slate-400 font-light text-lg">
                           <Briefcase className="w-5 h-5 text-purple-500/50" />
                           {exp.role}
                        </div>
                      </div>

                      <div className="flex flex-col items-start lg:items-end gap-2 shrink-0">
                         <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-500/5 border border-purple-500/10 text-purple-400 text-[10px] font-mono font-bold tracking-[0.1em]">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                         </div>
                         <div className="flex items-center gap-2 text-slate-500 text-sm italic pr-2 font-light">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                         </div>
                      </div>
                    </div>

                    <p className="text-slate-400 font-light text-lg leading-relaxed mb-12 max-w-4xl border-l border-white/5 pl-8 italic">
                      "{exp.description}"
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                       <div className="space-y-6">
                          <h4 className="flex items-center gap-2 text-[10px] font-mono font-bold tracking-widest text-slate-500 uppercase">
                             <Zap className="w-4 h-4 text-purple-500" />
                             Core Contributions
                          </h4>
                          <ul className="space-y-4">
                             {exp.achievements.map((item, i) => (
                               <li key={i} className="flex gap-4 group/item">
                                 <div className="w-1.5 h-1.5 rounded-full mt-2.5 bg-purple-500/40 group-hover/item:bg-purple-400 group-hover/item:scale-125 transition-all rotate-45 shrink-0" />
                                 <span className="text-slate-400 font-light text-base leading-snug group-hover/item:text-slate-200 transition-colors">
                                    {item}
                                 </span>
                               </li>
                             ))}
                          </ul>
                       </div>

                       <div className="space-y-6">
                          <h4 className="flex items-center gap-2 text-[10px] font-mono font-bold tracking-widest text-slate-500 uppercase">
                             <Layers className="w-4 h-4 text-purple-500" />
                             Technology Stack
                          </h4>
                          <div className="flex flex-wrap gap-2">
                             {exp.technologies.map((tech, i) => (
                               <div key={i} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-white/20 transition-all cursor-default">
                                  <Code2 className="w-3.5 h-3.5 text-purple-400" />
                                  <span className="text-[10px] font-mono font-bold tracking-widest uppercase">{tech}</span>
                               </div>
                             ))}
                          </div>
                       </div>
                    </div>
                  </div>

                  {/* 3D Global Visualization */}
                  <div className="w-full lg:w-2/5 h-[300px] md:h-[400px] lg:h-[500px] relative">
                    <div className="absolute inset-0 bg-purple-500/10 blur-[120px] rounded-full scale-75" />
                    <div className="relative w-full h-full">
                       <Globe3D 
                         markers={sampleMarkers}
                         config={{
                           atmosphereColor: "#8b5cf6",
                           atmosphereIntensity: 15,
                           bumpScale: 5,
                           autoRotateSpeed: 0.5,
                         }}
                       />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
