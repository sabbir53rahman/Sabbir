"use client"

import { motion } from "framer-motion"
import { Heart, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white py-10 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Branding and Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left space-y-3"
        >
          <h2 className="text-3xl font-extrabold text-white">
            Sabbir<span className="text-purple-500">.</span>
          </h2>
          <p className="text-gray-400 flex justify-center md:justify-start items-center gap-2 text-sm">
            Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> using Next.js & Framer Motion
          </p>
        </motion.div>

        {/* Copyright + Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center md:text-right space-y-4"
        >
          <p className="text-sm text-gray-400">
            © {currentYear} Sabbir Hossain. All rights reserved.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="sm"
              className="border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white"
            >
              <ArrowUp className="w-4 h-4 mr-2" />
              Back to Top
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}
