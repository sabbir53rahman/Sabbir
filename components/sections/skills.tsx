"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Frontend",
    icon: "🎨",
    skills: [
      { name: "React", level: 95, color: "from-blue-400 to-blue-600" },
      { name: "Next.js", level: 90, color: "from-gray-400 to-gray-600" },
      { name: "TypeScript", level: 85, color: "from-blue-500 to-blue-700" },
      { name: "Tailwind CSS", level: 92, color: "from-cyan-400 to-cyan-600" },
      {
        name: "Framer Motion",
        level: 80,
        color: "from-purple-400 to-purple-600",
      },
    ],
  },
  {
    title: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: 88, color: "from-green-400 to-green-600" },
      { name: "Express.js", level: 85, color: "from-gray-500 to-gray-700" },
      { name: "MongoDB", level: 82, color: "from-green-500 to-green-700" },
      { name: "Mongoose", level: 80, color: "from-purple-400 to-purple-600" }, 
      { name: "JWT Auth", level: 77, color: "from-yellow-400 to-yellow-600" },
    ],
  },
  {
    title: "Tools & Others",
    icon: "🛠️",
    skills: [
      { name: "Git", level: 90, color: "from-orange-400 to-orange-600" },
      { name: "Figma", level: 85, color: "from-purple-400 to-purple-600" },
      { name: "Render", level: 80, color: "from-indigo-500 to-indigo-700" },
      { name: "Postman", level: 75, color: "from-red-400 to-orange-500" },
      { name: "Vercel", level: 78, color: "from-gray-800 to-black" },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 px-4 bg-black/20 relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Skills
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks that I
            use to bring ideas to life
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            >
              <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm h-full">
                <CardContent className="p-8">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className="text-4xl mb-4 text-center"
                  >
                    {category.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white text-center mb-8">
                    {category.title}
                  </h3>

                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{
                          duration: 0.6,
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                        }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-white font-medium">
                            {skill.name}
                          </span>
                          <Badge
                            variant="secondary"
                            className="bg-purple-400/20 text-purple-300"
                          >
                            {skill.level}%
                          </Badge>
                        </div>

                        <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={
                              isInView ? { width: `${skill.level}%` } : {}
                            }
                            transition={{
                              duration: 1.5,
                              delay:
                                categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                              ease: "easeOut",
                            }}
                            className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                          >
                            <motion.div
                              animate={{ x: [-10, 10, -10] }}
                              transition={{
                                duration: 2,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                              }}
                              className="absolute inset-0 bg-white/20 rounded-full"
                            />
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 text-lg mb-8">
            Always learning and exploring new technologies to stay ahead of the
            curve
          </p>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="inline-block text-4xl"
          >
            🚀
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
