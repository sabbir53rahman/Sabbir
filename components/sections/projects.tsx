"use client";

import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Github,
  ExternalLink,
  Eye,
  Star,
  Play,
  Award,
  Code,
  Smartphone,
  BarChart3,
  Layers,
  Cpu,
  Briefcase,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import LMS from "@/components/assets/lms.png";
import COCO from "@/components/assets/Coco.png";
import SMS from "@/components/assets/sms.png";
import Hikhma from "@/components/assets/hikhma.png";
import Link from "next/link";

// Premium color combinations
const projects = [
  {
    title: "Learning Management System",
    description:
      "A modern learning management platform where teachers can create and sell courses, and students can easily enroll and learn at their own pace.",
    longDescription:
      "This Learning Management System empowers educators to create and manage their own courses, making them available for students to purchase and access online. It features intuitive course creation tools, secure student enrollment, and a seamless learning experience. The platform supports real-time updates, user authentication, course progress tracking, and flexible payment integration, making it ideal for individual instructors or educational teams looking to deliver content at scale.",
    image: LMS,
    technologies: [
      "Next.js",
      "Node.js",
      "Mongodb",
      "Mongoose",
      "Antd",
      "Tailwind",
    ],
    github: "https://github.com/sabbir53rahman/LMS_Client",
    live: "https://lms-client-wxa2.onrender.com/",
    featured: true,
    category: "Web App",
    stats: { stars: 89, views: "1.8k", forks: 32 },
    status: "Live",
    year: "2025",
    color: "from-rose-900 to-pink-700",
    accentColor: "rgba(225, 29, 72, 0.2)",
    textColor: "text-rose-300",
    borderColor: "border-rose-800/20",
  },
  {
    title: "Hikmah Library",
    description:
      "A comprehensive online Islamic library offering a vast collection of books, including the Quran, Hadith, and various Islamic literature.",
    longDescription:
      "Hikmah Library is one of Bangladesh's largest online Islamic libraries, providing users with access to over 25,000 books, 20,000 publishers, and 12,000 authors. The platform offers features such as wishlists, newsletters, and donation options to enhance user engagement and support.",
    image: Hikhma,
    technologies: ["HTML5", "Tailwind css", "Next.js", "Antd"],
    github: "https://github.com/sabbir53rahman/alhikmah",
    live: "https://hikmahlibrary.com/",
    featured: true,
    category: "Frontend",
    stats: {
      books: 25000,
      publishers: 20000,
      authors: 12000,
    },
    status: "Live",
    year: "2025",
    color: "from-green-600 to-teal-500",
    accentColor: "rgba(16, 185, 129, 0.2)",
    textColor: "text-green-300",
    borderColor: "border-green-800/20",
  },
  {
    title: "Xero SMS",
    description:
      "Online platform for buying SMS services from global virtual SIM providers, with a full-featured dashboard and secure transactions.",
    longDescription:
      "Xero SMS is an online SMS purchasing platform where users can buy SMS services from SIMs in various countries for verification purposes. The application includes a user dashboard, real-time updates, a clean UI, order management, and integration with third-party SMS providers. Designed for a seamless user experience and scalable performance.",
    image: SMS,
    technologies: ["React", "Next.js", "Tailwind CSS", "reChart.js"],
    github: "https://github.com/sabbir53rahman/xero-sms",
    live: "https://xero-sms.onrender.com/",
    featured: true,
    category: "Frontend",
    stats: {
      stars: 2,
      views: "1.9k",
    },
    status: "Live",
    year: "2025",
    color: "from-purple-800 to-indigo-600",
    accentColor: "rgba(139, 92, 246, 0.2)",
    textColor: "text-purple-300",
    borderColor: "border-purple-800/20",
  },
  {
    title: "COCO Combat",
    description:
      "A tap-to-earn game that combines engaging gameplay with earning opportunities.",
    longDescription:
      "COCO Combat is an interactive tap-to-earn game designed to provide users with an engaging gaming experience while offering earning opportunities. Players can participate in various in-game activities, complete missions, and earn rewards. The platform is built with a focus on performance and user engagement, featuring responsive design and smooth animations.",
    image: COCO,
    technologies: ["React", "Vite", "Tailwind CSS", "Temgen"],
    github: "https://github.com/sabbir53rahman/coco",
    live: "https://www.cococombat.com/",
    featured: false,
    category: "Frontend",
    stats: { stars: 0, views: "2.1k", forks: 0 },
    status: "Live",
    year: "2024",
    color: "from-amber-900 to-yellow-700",
    accentColor: "rgba(217, 119, 6, 0.2)",
    textColor: "text-amber-300",
    borderColor: "border-amber-800/20",
  },
  {
    title: "Crypto Portfolio Tracker",
    description:
      "Cryptocurrency portfolio management with real-time prices, profit/loss tracking, and market analysis tools.",
    longDescription:
      "A comprehensive crypto portfolio tracker that monitors your investments, provides real-time market data, calculates profit/loss, and offers detailed market analysis with charts and indicators.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: [
      "Vue.js",
      "Node.js",
      "CoinGecko API",
      "Chart.js",
      "MongoDB",
      "JWT",
    ],
    github: "#",
    live: "#",
    featured: false,
    category: "Finance",
    stats: { stars: 78, views: "1.5k", forks: 29 },
    status: "Live",
    year: "2023",
    color: "from-sky-900 to-cyan-700",
    accentColor: "rgba(14, 165, 233, 0.2)",
    textColor: "text-sky-300",
    borderColor: "border-sky-800/20",
  },
  {
    title: "Weather Forecast App",
    description:
      "Real-time weather application with location-based forecasts, interactive maps, and weather alerts.",
    longDescription:
      "A beautiful weather application that provides accurate forecasts, interactive weather maps, severe weather alerts, and detailed meteorological data. Features location-based services and offline capabilities.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: [
      "React Native",
      "TypeScript",
      "Weather API",
      "Maps SDK",
      "Redux",
    ],
    github: "#",
    live: "#",
    featured: false,
    category: "Mobile",
    stats: { stars: 45, views: "890", forks: 18 },
    status: "Live",
    year: "2022",
    color: "from-violet-900 to-purple-700",
    accentColor: "rgba(124, 58, 237, 0.2)",
    textColor: "text-violet-300",
    borderColor: "border-violet-800/20",
  },
];

const categories = [
  { name: "All", icon: <Layers className="w-5 h-5" /> },
  { name: "Featured", icon: <Sparkles className="w-5 h-5" /> },
  { name: "Web App", icon: <Code className="w-5 h-5" /> },
  { name: "Frontend", icon: <Cpu className="w-5 h-5" /> },
  { name: "Mobile", icon: <Smartphone className="w-5 h-5" /> },
  { name: "Dashboard", icon: <BarChart3 className="w-5 h-5" /> },
  { name: "Finance", icon: <Briefcase className="w-5 h-5" /> },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const filteredProjects = projects.filter((project) => {
    if (selectedCategory === "All") return true;
    if (selectedCategory === "Featured") return project.featured;
    return project.category === selectedCategory;
  });

  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const regularProjects = filteredProjects.filter((p) => !p.featured);

  const toggleExpandProject = (index: number) => {
    if (expandedProject === index) {
      setExpandedProject(null);
    } else {
      setExpandedProject(index);
    }
  };

  return (
    <section
      id="projects"
      className="py-32 px-4 bg-slate-950 relative overflow-hidden"
    >
      {/* Background Elements */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 opacity-20 pointer-events-none"
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-900/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-rose-900/30 rounded-full blur-3xl" />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700/30 rounded-full px-6 py-3 mb-8 backdrop-blur-sm"
          >
            <Award className="w-5 h-5 text-amber-300" />
            <span className="text-amber-300 font-medium">Featured Work</span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400">
              Projects
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-8">
            A showcase of my best work, featuring innovative solutions and
            cutting-edge technologies
          </p>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 bg-gradient-to-r from-amber-300 to-amber-500 mx-auto rounded-full"
          />
        </motion.div>

        {/* Enhanced Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex flex-wrap justify-center gap-4 p-2 bg-slate-900/80 backdrop-blur-md rounded-2xl border border-slate-800/50 max-w-4xl mx-auto shadow-xl shadow-slate-900/50">
            {categories.map((category, index) => (
              <motion.button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className={`relative flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedCategory === category.name
                    ? "text-slate-950"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {selectedCategory === category.name && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-gradient-to-r from-amber-300 to-amber-500 rounded-xl shadow-lg shadow-amber-500/25"
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{category.icon}</span>
                <span className="relative z-10">{category.name}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Featured Projects - Premium Layout */}
        {featuredProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-24"
          >
            <div className="grid gap-12">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                  onHoverStart={() => setHoveredProject(index)}
                  onHoverEnd={() => setHoveredProject(null)}
                  className="relative"
                >
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="group"
                  >
                    <Card
                      className={`overflow-hidden border-0 shadow-2xl shadow-${
                        project.color.split(" ")[0]
                      }/10 backdrop-blur-xl`}
                      style={{
                        background: `linear-gradient(to right bottom, rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.95))`,
                        boxShadow: `0 25px 50px -12px ${project.accentColor}`,
                      }}
                    >
                      <div className="grid lg:grid-cols-2 gap-0">
                        {/* Left side - Image */}
                        <div className="relative overflow-hidden h-full">
                          {/* Gradient overlay on the left edge */}
                          <div
                            className="absolute inset-y-0 left-0 w-1/3 z-10"
                            style={{
                              background: `linear-gradient(to right, rgba(15, 23, 42, 0.7), transparent)`,
                            }}
                          />

                          {/* Project number */}
                          <div className="absolute top-8 left-8 z-20">
                            <div
                              className={`flex items-center justify-center w-[40px] h-[40px] rounded-full bg-gradient-to-r ${project.color} shadow-lg`}
                              style={{
                                boxShadow: `0 10px 25px -5px ${project.accentColor}`,
                              }}
                            >
                              <span className="text-white text-xl font-bold">
                                {index + 1}
                              </span>
                            </div>
                          </div>

                          {/* Status badge */}
                          <div className="absolute top-8 right-8 z-20">
                            <Badge
                              className={`bg-gradient-to-r ${project.color} text-white border-0 px-3 py-1.5 text-sm font-medium shadow-lg`}
                              style={{
                                boxShadow: `0 10px 15px -3px ${project.accentColor}`,
                              }}
                            >
                              <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse" />
                              {project.status}
                            </Badge>
                          </div>

                          {/* Image */}
                          <div className="relative h-full min-h-[400px]">
                            <Image
                              src={project.image || "/placeholder.svg"}
                              alt={project.title}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-105"
                              style={{ objectPosition: "center" }}
                            />
                            <div
                              className="absolute inset-0"
                              style={{
                                background:
                                  "linear-gradient(to bottom, rgba(15, 23, 42, 0.3), rgba(15, 23, 42, 0.7)), linear-gradient(to right, rgba(15, 23, 42, 0.5), transparent)",
                              }}
                            />
                          </div>

                          {/* Category badge */}
                          <div className="absolute bottom-8 left-8 z-20">
                            <Badge
                              className="bg-slate-900/80 text-slate-200 border border-slate-700/50 backdrop-blur-sm px-3 py-1.5"
                              variant="outline"
                            >
                              {project.category}
                            </Badge>
                          </div>
                        </div>

                        {/* Right side - Content */}
                        <div className="p-10 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center justify-between mb-6">
                              <h3
                                className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${project.color}`}
                              >
                                {project.title}
                              </h3>
                              <motion.div
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{
                                  duration: 4,
                                  repeat: Number.POSITIVE_INFINITY,
                                  ease: "easeInOut",
                                }}
                                className={`w-10 h-10 rounded-full bg-gradient-to-r ${project.color} flex items-center justify-center shadow-lg`}
                                style={{
                                  boxShadow: `0 10px 15px -3px ${project.accentColor}`,
                                }}
                              >
                                <Star className="w-5 h-5 text-white" />
                              </motion.div>
                            </div>

                            <div className="flex items-center gap-4 text-sm text-slate-400 mb-6">
                              <span className="flex items-center gap-1">
                                <Star className="w-4 h-4" />
                                {project.stats.stars} stars
                              </span>
                              <span>•</span>
                              <span>{project.year}</span>
                            </div>

                            <div className="mb-8">
                              <AnimatePresence mode="wait">
                                <motion.p
                                  key={
                                    expandedProject === index
                                      ? "expanded"
                                      : "collapsed"
                                  }
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="text-slate-300 text-lg leading-relaxed"
                                >
                                  {expandedProject === index
                                    ? project.longDescription
                                    : project.description}
                                </motion.p>
                              </AnimatePresence>

                              <Button
                                variant="link"
                                onClick={() => toggleExpandProject(index)}
                                className={`${project.textColor} p-0 mt-2 h-auto font-medium`}
                              >
                                {expandedProject === index
                                  ? "Show less"
                                  : "Read more"}
                              </Button>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-8">
                              {project.technologies.map((tech, techIndex) => (
                                <motion.div
                                  key={tech}
                                  initial={{ opacity: 0, scale: 0 }}
                                  animate={
                                    isInView ? { opacity: 1, scale: 1 } : {}
                                  }
                                  transition={{
                                    duration: 0.3,
                                    delay: 0.8 + index * 0.1 + techIndex * 0.05,
                                  }}
                                >
                                  <Badge
                                    variant="outline"
                                    className={`bg-slate-800/50 text-slate-300 border-slate-700/50 hover:bg-slate-800 transition-colors px-3 py-1.5 ${project.borderColor}`}
                                  >
                                    {tech}
                                  </Badge>
                                </motion.div>
                              ))}
                            </div>
                          </div>

                          <div className="flex gap-4">
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="flex-1"
                            >
                              <Link href={project.github}>
                                <Button
                                  variant="outline"
                                  className="w-full border-slate-700/50 text-black hover:text-white hover:bg-slate-800/50 backdrop-blur-sm"
                                >
                                  <Github className="w-5 h-5 mr-2" />
                                  View Code
                                </Button>
                              </Link>
                            </motion.div>
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="flex-1"
                            >
                              <Link href={project.live}>
                                <Button
                                  className={`w-full bg-gradient-to-r ${project.color} hover:opacity-90 text-white shadow-lg`}
                                  style={{
                                    boxShadow: `0 10px 15px -3px ${project.accentColor}`,
                                  }}
                                >
                                  <Play className="w-5 h-5 mr-2" />
                                  Live Demo
                                </Button>
                              </Link>
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Regular Projects Grid - Premium Cards */}
        {regularProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex items-center justify-center gap-4 mb-12">
              <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent flex-1" />
              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500 text-center">
                More Projects
              </h3>
              <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent flex-1" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  onHoverStart={() => setHoveredProject(index + 100)}
                  onHoverEnd={() => setHoveredProject(null)}
                >
                  <motion.div
                    whileHover={{ y: -10, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="group h-full"
                  >
                    <Card
                      className="h-full overflow-hidden border-0 shadow-xl backdrop-blur-xl"
                      style={{
                        background: `linear-gradient(to right bottom, rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.95))`,
                        boxShadow: `0 20px 25px -5px ${project.accentColor}`,
                      }}
                    >
                      <div className="relative overflow-hidden">
                        <div className="relative h-56">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div
                            className="absolute inset-0"
                            style={{
                              background:
                                "linear-gradient(to bottom, rgba(15, 23, 42, 0.3), rgba(15, 23, 42, 0.7)), linear-gradient(to right, rgba(15, 23, 42, 0.5), transparent)",
                            }}
                          />
                        </div>

                        {/* Overlay with buttons */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{
                            opacity: hoveredProject === index + 100 ? 1 : 0,
                          }}
                          className="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent flex items-center justify-center"
                        >
                          <div className="flex gap-4">
                            <motion.div
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Link href={project.github}>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="border-slate-700/50 text-black hover:text-white hover:bg-slate-800/50 backdrop-blur-sm"
                                >
                                  <Github className="w-4 h-4 mr-2" />
                                  Code
                                </Button>
                              </Link>
                            </motion.div>
                            <motion.div
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Link href={project.live}>
                                <Button
                                  size="sm"
                                  className={`bg-gradient-to-r ${project.color} hover:opacity-90 text-white shadow-lg`}
                                  style={{
                                    boxShadow: `0 10px 15px -3px ${project.accentColor}`,
                                  }}
                                >
                                  <ExternalLink className="w-4 h-4 mr-2" />
                                  Live
                                </Button>
                              </Link>
                            </motion.div>
                          </div>
                        </motion.div>

                        {/* Category badge */}
                        <div className="absolute top-4 left-4">
                          <Badge
                            className="bg-slate-900/80 text-slate-300 border border-slate-700/50 backdrop-blur-sm"
                            variant="outline"
                          >
                            {project.category}
                          </Badge>
                        </div>

                        {/* Stats badges */}
                        <div className="absolute top-4 right-4 flex gap-2">
                          <Badge
                            variant="secondary"
                            className="bg-slate-900/80 text-slate-300 border-slate-700/50 backdrop-blur-sm"
                          >
                            <Star className="w-3 h-3 mr-1" />
                            {project.stats.stars}
                          </Badge>
                          <Badge
                            variant="secondary"
                            className="bg-slate-900/80 text-slate-300 border-slate-700/50 backdrop-blur-sm"
                          >
                            <Eye className="w-3 h-3 mr-1" />
                            {project.stats.views}
                          </Badge>
                        </div>
                      </div>

                      <CardContent className="p-6 flex-1 flex flex-col">
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-3">
                            <h4
                              className={`text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${project.color}`}
                            >
                              {project.title}
                            </h4>
                            <div
                              className={`w-8 h-8 rounded-full bg-gradient-to-r ${project.color} flex items-center justify-center opacity-80 shadow-lg`}
                              style={{
                                boxShadow: `0 10px 15px -3px ${project.accentColor}`,
                              }}
                            >
                              <span className="text-white text-xs font-bold">
                                {index + 1}
                              </span>
                            </div>
                          </div>
                          <p className="text-slate-300 mb-4 leading-relaxed">
                            {project.description}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies
                            .slice(0, 4)
                            .map((tech, techIndex) => (
                              <motion.div
                                key={tech}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={
                                  isInView ? { opacity: 1, scale: 1 } : {}
                                }
                                transition={{
                                  duration: 0.3,
                                  delay: 0.8 + index * 0.1 + techIndex * 0.05,
                                }}
                              >
                                <Badge
                                  variant="outline"
                                  className={`bg-slate-800/50 text-slate-300 border-slate-700/50 hover:bg-slate-800 transition-colors ${project.borderColor}`}
                                >
                                  {tech}
                                </Badge>
                              </motion.div>
                            ))}
                          {project.technologies.length > 4 && (
                            <Badge
                              variant="outline"
                              className="bg-slate-800/50 text-slate-300 border-slate-700/50"
                            >
                              +{project.technologies.length - 4}
                            </Badge>
                          )}
                        </div>

                        <div className="flex justify-between">
                          <Link href={project.github}>
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-slate-700/50 text-black hover:text-white hover:bg-slate-800/50 backdrop-blur-sm"
                            >
                              <Github className="w-4 h-4 mr-2" />
                              Code
                            </Button>
                          </Link>
                          <Link href={project.live}>
                            <Button
                              size="sm"
                              className={`bg-gradient-to-r ${project.color} hover:opacity-90 text-white shadow-lg`}
                              style={{
                                boxShadow: `0 10px 15px -3px ${project.accentColor}`,
                              }}
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Live
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-24"
        >
          <div
            className="rounded-3xl p-12 backdrop-blur-xl border border-slate-800/50 shadow-2xl"
            style={{
              background:
                "linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(15, 23, 42, 0.98)), radial-gradient(circle at top right, rgba(234, 179, 8, 0.15), transparent 70%), radial-gradient(circle at bottom left, rgba(139, 92, 246, 0.15), transparent 70%)",
              boxShadow: "0 25px 50px -12px rgba(234, 179, 8, 0.15)",
            }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.2, type: "spring" }}
              className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/30"
            >
              <Github className="w-8 h-8 text-slate-950" />
            </motion.div>

            <h3 className="text-3xl font-bold text-white mb-4">
              Explore My GitHub Repository
            </h3>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-lg">
              Discover more projects, code samples, and contributions. My GitHub
              repository showcases my coding style, problem-solving approach,
              and ongoing projects.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative inline-block group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              <Link href="https://github.com/sabbir53rahman">
                <Button
                  size="lg"
                  className="relative bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-slate-950 px-8 py-6 rounded-full text-lg font-medium shadow-xl"
                >
                  <Github className="w-6 h-6 mr-3" />
                  View All Projects on GitHub
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
