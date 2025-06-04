"use client"

import { motion } from "framer-motion"

export function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating geometric shapes */}
      <motion.div
        animate={{
          y: [-20, 20, -20],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20"
      />

      <motion.div
        animate={{
          y: [20, -20, 20],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 right-1/4 w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 transform rotate-45 opacity-20"
      />

      <motion.div
        animate={{
          y: [-15, 15, -15],
          x: [-10, 10, -10],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-gradient-to-r from-pink-400 to-yellow-400 rounded-full opacity-20"
      />

      <motion.div
        animate={{
          y: [10, -10, 10],
          rotate: [0, 90, 180],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 right-1/3 w-5 h-5 bg-gradient-to-r from-green-400 to-blue-400 transform rotate-12 opacity-20"
      />
    </div>
  )
}
