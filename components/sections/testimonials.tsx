"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "Sabbir delivered exceptional work on our e-commerce platform. His attention to detail and technical expertise exceeded our expectations. The project was completed on time and within budget.",
    rating: 5,
    project: "E-Commerce Platform",
  },
  {
    name: "Michael Chen",
    role: "CTO",
    company: "StartupHub",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "Working with Sabbir was a game-changer for our startup. He transformed our ideas into a beautiful, functional application that our users love. His communication throughout the project was excellent.",
    rating: 5,
    project: "Task Management App",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director",
    company: "Digital Agency",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "The social media dashboard Sabbir built for us has revolutionized how we manage our clients' campaigns. The analytics features are incredibly detailed and the interface is intuitive.",
    rating: 5,
    project: "Social Media Dashboard",
  },
  {
    name: "David Thompson",
    role: "Founder",
    company: "WeatherTech",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "Sabbir's expertise in mobile development helped us create a weather app that stands out in the market. His innovative approach and problem-solving skills are remarkable.",
    rating: 5,
    project: "Weather Forecast App",
  },
  {
    name: "Lisa Wang",
    role: "Operations Manager",
    company: "AI Solutions",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "The AI chat assistant Sabbir developed has significantly improved our customer service efficiency. His understanding of AI technologies and implementation is impressive.",
    rating: 5,
    project: "AI Chat Assistant",
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <section id="testimonials" className="py-32 px-4 relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            What Clients{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Say</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Don't just take my word for it - here's what my clients have to say about working with me
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="relative">
          {/* Main Testimonial */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-12">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="flex-1">
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                      className="text-purple-400 mb-6"
                    >
                      <Quote className="w-12 h-12" />
                    </motion.div>

                    <blockquote className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-6">
                      "{testimonials[currentIndex].content}"
                    </blockquote>

                    <div className="flex items-center gap-2 mb-4">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        </motion.div>
                      ))}
                    </div>

                    <div className="text-sm text-purple-400 font-medium mb-2">
                      Project: {testimonials[currentIndex].project}
                    </div>
                  </div>

                  <div className="text-center lg:text-right">
                    <motion.div whileHover={{ scale: 1.05 }} className="mb-4">
                      <Avatar className="w-24 h-24 mx-auto lg:mx-0 border-4 border-purple-400/30">
                        <AvatarImage src={testimonials[currentIndex].image || "/placeholder.svg"} />
                        <AvatarFallback className="bg-gradient-to-r from-purple-400 to-pink-400 text-white text-xl">
                          {testimonials[currentIndex].name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                    </motion.div>

                    <div>
                      <h4 className="text-xl font-bold text-white mb-1">{testimonials[currentIndex].name}</h4>
                      <p className="text-purple-400 font-medium mb-1">{testimonials[currentIndex].role}</p>
                      <p className="text-gray-400 text-sm">{testimonials[currentIndex].company}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="outline"
                size="sm"
                onClick={prevTestimonial}
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
            </motion.div>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-gradient-to-r from-purple-400 to-pink-400"
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="outline"
                size="sm"
                onClick={nextTestimonial}
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </motion.div>
          </div>

          {/* Thumbnail Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-5 gap-4"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => goToTestimonial(index)}
                className={`cursor-pointer transition-all duration-300 ${
                  index === currentIndex ? "opacity-100" : "opacity-50 hover:opacity-75"
                }`}
              >
                <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300">
                  <CardContent className="p-4 text-center">
                    <Avatar className="w-12 h-12 mx-auto mb-2 border-2 border-purple-400/30">
                      <AvatarImage src={testimonial.image || "/placeholder.svg"} />
                      <AvatarFallback className="bg-gradient-to-r from-purple-400 to-pink-400 text-white text-sm">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <h5 className="text-white text-sm font-medium mb-1">{testimonial.name}</h5>
                    <p className="text-gray-400 text-xs">{testimonial.company}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
