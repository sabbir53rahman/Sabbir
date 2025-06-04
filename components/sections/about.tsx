"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Coffee, Users, Award } from "lucide-react"
import Image from "next/image"

const stats = [
  { icon: <Code className="w-8 h-8" />, value: "50+", label: "Projects Completed" },
  { icon: <Coffee className="w-8 h-8" />, value: "1000+", label: "Cups of Coffee" },
  { icon: <Users className="w-8 h-8" />, value: "25+", label: "Happy Clients" },
  { icon: <Award className="w-8 h-8" />, value: "3+", label: "Years Experience" },
]

const interests = [
  "Web Development",
  "Mobile Apps",
  "UI/UX Design",
  "Open Source",
  "Machine Learning",
  "Cloud Computing",
  "DevOps",
  "Blockchain",
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="w-full max-w-md mx-auto"
              >
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-400/20 to-pink-400/20 p-8">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Sabbir Hossain"
                    width={400}
                    height={400}
                    className="rounded-2xl w-full"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
                    className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-20"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Passionate Developer & Creative Problem Solver</h3>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  I'm a dedicated MERN stack developer with a passion for creating exceptional digital experiences. With
                  over 3 years of experience, I've helped businesses transform their ideas into powerful web
                  applications.
                </p>
                <p>
                  My journey in tech started with curiosity and has evolved into a deep love for clean code, innovative
                  solutions, and continuous learning. I believe in the power of technology to make a positive impact.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects,
                  or mentoring aspiring developers in my community.
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Interests & Passions</h4>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  >
                    <Badge
                      variant="secondary"
                      className="bg-purple-400/20 text-purple-300 hover:bg-purple-400/30 transition-colors px-4 py-2"
                    >
                      {interest}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05, y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: index * 0.5,
                    }}
                    className="text-purple-400 mb-4 flex justify-center"
                  >
                    {stat.icon}
                  </motion.div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 + index * 0.1, type: "spring" }}
                    className="text-4xl font-bold text-white mb-2"
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-gray-400 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
