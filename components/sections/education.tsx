"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Calendar, MapPin, Award } from "lucide-react";

const educationData = [
  {
    college: "Bikrompur Adarsha Degree College",
    degree: "Bachelor of Social Science (Honors)",
    major: "Political Science",
    period: "2020 — Present",
    status: "Honors 4th Year",
    location: "Munshiganj, Bangladesh",
    description: "Currently pursuing an undergraduate degree with a focus on political theory, public administration, and international relations.",
    achievements: [
      "Specializing in Modern Political Systems",
      "Developing analytical and research capabilities",
      "Maintaining strong academic performance while pursuing tech career",
    ],
    accent: "text-blue-400",
    bg: "bg-blue-500/5",
    border: "border-blue-500/10",
  }
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 relative bg-[#030303] overflow-hidden">
      {/* Background Architectural Patterns */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v1.5h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 px-4">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex-1"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-[10px] font-mono font-bold uppercase tracking-[0.2em] mb-4">
              <GraduationCap className="w-3.5 h-3.5" />
              Academic Background
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
              Scholastic <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-blue-400 to-blue-500 italic font-light">
                Foundations.
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
              "Education is the most powerful weapon which you can use to change the world."
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-8 px-4">
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group relative p-1 rounded-[2.5rem] bg-gradient-to-b from-white/10 to-transparent"
            >
              <div className="bg-[#0a0a0a] rounded-[2.3rem] p-8 md:p-12">
                <div className="flex flex-col lg:flex-row justify-between gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-4 rounded-2xl ${edu.bg} border ${edu.border} ${edu.accent}`}>
                        <BookOpen className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-blue-400 transition-colors">
                          {edu.college}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 mt-2">
                          <span className="flex items-center gap-1.5 text-slate-400 text-sm font-light">
                            <MapPin className="w-4 h-4" />
                            {edu.location}
                          </span>
                          <span className="flex items-center gap-1.5 text-slate-400 text-sm font-light">
                            <Calendar className="w-4 h-4" />
                            {edu.period}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4 mb-8">
                      <h4 className="text-xl font-medium text-slate-200">
                        {edu.degree} — <span className="text-blue-400">{edu.status}</span>
                      </h4>
                      <p className="text-slate-400 font-light leading-relaxed max-w-3xl">
                        {edu.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {edu.achievements.map((achievement, ai) => (
                        <div key={ai} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 group-hover:border-blue-500/20 transition-all">
                          <Award className="w-5 h-5 text-blue-400 shrink-0" />
                          <p className="text-slate-300 text-sm font-light">
                            {achievement}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="lg:w-1/4 flex items-center justify-center">
                     <div className="relative">
                        <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full" />
                        <GraduationCap className="w-32 h-32 text-blue-400/20 relative animate-pulse" />
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
