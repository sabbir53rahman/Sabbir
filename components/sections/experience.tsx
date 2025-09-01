"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

const experiences = [
  {
    title: "WordPress Developer (Learner)",
    company: "Self-Learning",
    location: "Dhaka, Bangladesh",
    period: "2020",
    description:
      "Started my web development journey by learning WordPress. Built custom themes, managed plugins, and understood the basics of web hosting and CMS.",
    achievements: [
      "Built 5+ client websites using WordPress",
      "Customized themes and plugins for unique designs",
      "Gained hands-on experience with cPanel and hosting",
      "Learned HTML, CSS, and basic PHP",
    ],
    technologies: ["WordPress", "HTML", "CSS", "PHP", "Elementor"],
    color: "from-yellow-400 to-orange-400",
  },
  {
    title: "Frontend Developer (Trainee)",
    company: "Freelance & Practice Projects",
    location: "Dhaka, Bangladesh",
    period: "2022",
    description:
      "Transitioned into frontend development with a focus on modern UI/UX. Built responsive interfaces, practiced real-world projects, and strengthened JavaScript fundamentals.",
    achievements: [
      "Built 10+ responsive frontend projects",
      "Learned React and modern JavaScript (ES6+)",
      "Implemented Tailwind CSS in multiple projects",
      "Improved page speed and UI consistency",
    ],
    technologies: ["React", "JavaScript", "Tailwind CSS", "Bootstrap"],
    color: "from-blue-400 to-cyan-400",
  },
  {
    title: "MERN Stack Developer",
    company: "Self Projects & Freelance",
    location: "Remote",
    period: "2023",
    description:
      "Expanded into full-stack development using the MERN stack. Built real-world apps, learned backend development, and implemented REST APIs and authentication.",
    achievements: [
      "Built and deployed 5+ full-stack projects",
      "Integrated JWT authentication and MongoDB",
      "Learned Node.js, Express.js, and Mongoose",
      "Practiced deployment using Vercel and Render",
    ],
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "Mongoose"],
    color: "from-purple-500 to-pink-500",
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      className="py-24 md:py-32 px-4 relative bg-slate-950"
    >
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Journey
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            A timeline of my professional growth and the amazing projects I've
            been part of
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full mt-4 md:mt-6" />
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical line for large screens */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-400 via-pink-400 to-purple-400 rounded-full opacity-30" />

          <div className="space-y-12 md:space-y-20">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex flex-col md:flex-row items-center md:items-start ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Card */}
                <div className="w-full md:w-1/2 px-0 md:px-8 mb-8 md:mb-0">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                      <CardContent className="p-6 md:p-8">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                              {exp.title}
                            </h3>
                            <div className="flex items-center gap-2 text-purple-400 font-semibold mb-2">
                              <ExternalLink className="w-4 h-4" />
                              {exp.company}
                            </div>
                          </div>
                          <motion.div
                            animate={{ rotate: [0, 5, -5, 0] }}
                            transition={{
                              duration: 4,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "easeInOut",
                            }}
                            className={`w-4 h-4 bg-gradient-to-r ${exp.color} rounded-full`}
                          />
                        </div>

                        {/* Period & Location */}
                        <div className="flex items-center gap-4 text-gray-400 text-sm mb-4 flex-wrap">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-300 mb-4 md:mb-6 leading-relaxed">
                          {exp.description}
                        </p>

                        {/* Achievements */}
                        <div className="mb-4 md:mb-6">
                          <h4 className="text-white font-semibold mb-2">
                            Key Achievements:
                          </h4>
                          <ul className="space-y-1 md:space-y-2">
                            {exp.achievements.map((achievement, achIndex) => (
                              <motion.li
                                key={achIndex}
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{
                                  duration: 0.5,
                                  delay: index * 0.2 + achIndex * 0.1,
                                }}
                                className="text-gray-300 flex items-center gap-2"
                              >
                                <div
                                  className={`w-2 h-2 bg-gradient-to-r ${exp.color} rounded-full`}
                                />
                                {achievement}
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="text-white font-semibold mb-2">
                            Technologies:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <motion.div
                                key={tech}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={
                                  isInView ? { opacity: 1, scale: 1 } : {}
                                }
                                transition={{
                                  duration: 0.3,
                                  delay: index * 0.2 + techIndex * 0.05,
                                }}
                              >
                                <Badge
                                  variant="secondary"
                                  className="bg-purple-400/20 text-purple-300"
                                >
                                  {tech}
                                </Badge>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>

                {/* Timeline dot */}
                <motion.div
                  className="flex-shrink-0 z-10 md:mx-0 mx-auto mb-8 md:mb-0"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: index * 0.5,
                    }}
                    className={`w-6 h-6 bg-gradient-to-r ${exp.color} rounded-full border-4 border-slate-950`}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
