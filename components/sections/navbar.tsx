"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div
          className={`flex justify-between items-center transition-all duration-500 rounded-full px-6 py-3 ${
            scrolled
              ? "bg-slate-950/70 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]"
              : "bg-transparent"
          }`}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold tracking-tighter text-white cursor-pointer select-none"
            onClick={() => scrollToSection("#home")}
          >
            SABBIR<span className="text-amber-500">.</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full hover:bg-white/5 ${
                  activeSection === item.href.substring(1)
                    ? "text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {item.name}
                {activeSection === item.href.substring(1) && (
                  <motion.div
                    layoutId="navbar-active"
                    className="absolute inset-0 rounded-full bg-white/10 pointer-events-none"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-3 border-l border-white/10 pl-4">
            <motion.a
              href="https://github.com/sabbir53rahman"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/sabbir-rahman-a72681298/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="mailto:sabbir53rahman@gmail.com"
              whileHover={{ scale: 1.1, y: -2 }}
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-4 right-4 mt-2"
          >
            <div className="bg-slate-950/95 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl flex flex-col space-y-2">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => scrollToSection(item.href)}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-colors ${
                    activeSection === item.href.substring(1)
                      ? "bg-white/10 text-white font-medium"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
