"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  CheckCircle2,
  Heart,
  ExternalLink,
  MessageSquare,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactDetails = [
  {
    icon: <Mail className="w-6 h-6" />,
    label: "Email",
    value: "sabbir53rahman@gmail.com",
    href: "mailto:sabbir53rahman@gmail.com",
    accent: "text-rose-400 group-hover:text-rose-300",
    bg: "bg-rose-500/5 group-hover:bg-rose-500/10",
    border: "border-rose-500/10 group-hover:border-rose-500/20",
  },
  {
    icon: <Phone className="w-6 h-6" />,
    label: "Phone",
    value: "+880 187 450 7908",
    href: "tel:+8801874507908",
    accent: "text-emerald-400 group-hover:text-emerald-300",
    bg: "bg-emerald-500/5 group-hover:bg-emerald-500/10",
    border: "border-emerald-500/10 group-hover:border-emerald-500/20",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    label: "Location",
    value: "Dhaka, Bangladesh",
    href: "#",
    accent: "text-indigo-400 group-hover:text-indigo-300",
    bg: "bg-indigo-500/5 group-hover:bg-indigo-500/10",
    border: "border-indigo-500/10 group-hover:border-indigo-500/20",
  },
];

const socialLinks = [
  {
    icon: <Github className="w-5 h-5" />,
    href: "https://github.com/sabbir53rahman",
    name: "GitHub",
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    href: "https://www.linkedin.com/in/sabbir-rahman-a72681298/",
    name: "LinkedIn",
  },
  {
    icon: <Twitter className="w-5 h-5" />,
    href: "#",
    name: "Twitter",
  },
];

export default function ContactAndFooter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (submitStatus.type) setSubmitStatus({ type: null, message: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS configuration is missing. Please check environment variables.",
        );
      }

      emailjs.init(publicKey);
      await emailjs.send(serviceId, templateId, {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        reply_to: formData.email,
      });

      setSubmitStatus({
        type: "success",
        message: "Message dispatched successfully. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus({
        type: "error",
        message: "Transport failure. Please try direct email instead.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section
        id="contact"
        className="py-24 md:py-32 px-6 relative bg-[#030303] overflow-hidden"
      >
        {/* Modern Background Accents */}
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v1.5h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-indigo-400 text-[10px] font-mono font-bold uppercase tracking-[0.2em] mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                </span>
                Available for intake
              </div>
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-[0.95]">
                Let's Build Something <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-slate-400 to-slate-500">
                  Exceptional.
                </span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-slate-400 font-light text-lg max-w-sm md:text-right"
            >
              Architecting scalable systems and pixel-perfect experiences. Let's
              turn your vision into optimized reality.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Contact Info (Bento Cards) */}
            <div className="lg:col-span-5 space-y-4">
              {contactDetails.map((detail, index) => (
                <motion.a
                  key={index}
                  href={detail.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className={`group block relative p-6 rounded-3xl border ${detail.border} ${detail.bg} backdrop-blur-sm transition-all duration-500 overflow-hidden shadow-2xl hover:shadow-indigo-500/5 hover:translate-y--1`}
                >
                  <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className={`w-4 h-4 ${detail.accent}`} />
                  </div>

                  <div className="flex items-center gap-6">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center border transition-all duration-500 group-hover:scale-110 ${detail.accent} ${detail.border} bg-black/40`}
                    >
                      {detail.icon}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold tracking-widest text-slate-500 uppercase block mb-1">
                        {detail.label}
                      </span>
                      <p className="text-lg font-medium text-white transition-colors">
                        {detail.value}
                      </p>
                    </div>
                  </div>
                </motion.a>
              ))}

              {/* Socials Grid */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                {socialLinks.map((link, idx) => (
                  <motion.a
                    key={idx}
                    href={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + 0.1 * idx }}
                    className="group relative h-24 rounded-3xl bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-2 hover:bg-white/10 hover:border-white/20 transition-all duration-500"
                  >
                    <div className="text-slate-400 group-hover:text-white group-hover:scale-110 transition-all duration-500">
                      {link.icon}
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 group-hover:text-slate-300">
                      {link.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Premium Form */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="lg:col-span-7"
            >
              <div className="relative p-1 rounded-[2.5rem] bg-gradient-to-b from-white/10 to-transparent shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]">
                <div className="bg-[#0a0a0a] rounded-[2.3rem] p-8 md:p-12 relative overflow-hidden">
                  {/* Decorative mesh inside form */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none opacity-50" />

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-8">
                      <MessageSquare className="w-5 h-5 text-indigo-400" />
                      <h3 className="text-2xl font-bold text-white tracking-tight">
                        Direct Channel
                      </h3>
                    </div>

                    {submitStatus.type && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className={`mb-8 p-4 rounded-2xl flex items-center gap-3 border backdrop-blur-md ${
                          submitStatus.type === "success"
                            ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400 text-sm font-medium"
                            : "bg-rose-500/10 border-rose-500/20 text-rose-400 text-sm font-medium"
                        }`}
                      >
                        <CheckCircle2 className="w-5 h-5 shrink-0" />
                        {submitStatus.message}
                      </motion.div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-mono font-bold tracking-widest text-slate-500 uppercase ml-1">
                            Identity
                          </label>
                          <Input
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="John Doe"
                            className="bg-white/5 border-white/5 text-white placeholder:text-slate-600 focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 rounded-2xl h-14 pl-6 transition-all duration-300"
                            required
                            disabled={isSubmitting}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-mono font-bold tracking-widest text-slate-500 uppercase ml-1">
                            Address
                          </label>
                          <Input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="john@example.com"
                            className="bg-white/5 border-white/5 text-white placeholder:text-slate-600 focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 rounded-2xl h-14 pl-6 transition-all duration-300"
                            required
                            disabled={isSubmitting}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-mono font-bold tracking-widest text-slate-500 uppercase ml-1">
                          Purpose
                        </label>
                        <Input
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="Project Inquiry"
                          className="bg-white/5 border-white/5 text-white placeholder:text-slate-600 focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 rounded-2xl h-14 pl-6 transition-all duration-300"
                          required
                          disabled={isSubmitting}
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-mono font-bold tracking-widest text-slate-500 uppercase ml-1">
                          Payload
                        </label>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell me about your vision..."
                          rows={5}
                          className="bg-white/5 border-white/5 text-white placeholder:text-slate-600 resize-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 rounded-[2rem] p-6 transition-all duration-300"
                          required
                          disabled={isSubmitting}
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-16 bg-white hover:bg-slate-200 disabled:bg-slate-800 disabled:text-slate-500 text-black rounded-2xl font-bold tracking-tight transition-all duration-500 flex justify-center items-center gap-3 overflow-hidden group shadow-[0_0_40px_-10px_rgba(255,255,255,0.2)] active:scale-[0.98]"
                      >
                        {isSubmitting ? (
                          <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <>
                            <span className="relative z-10 transition-transform duration-500 group-hover:-translate-x-1">
                              Transmit Message
                            </span>
                            <Send className="w-4 h-4 transition-all duration-500 group-hover:translate-x-2 group-hover:-translate-y-2" />
                          </>
                        )}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Corporate/Premium Footer */}
      <footer className="bg-[#030303] pt-12 pb-16 px-6 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          {/* Large Logo Backdrop */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.02] mix-blend-overlay overflow-hidden hidden md:block">
            <h2 className="text-[18vw] font-black tracking-tighter leading-none select-none">
              SABBIR
            </h2>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h2 className="text-3xl font-bold tracking-tighter text-white mb-2">
                SABBIR<span className="text-indigo-500">.</span>
              </h2>
              <p className="text-slate-500 text-xs font-mono tracking-widest uppercase">
                Engineering <span className="text-slate-300">&</span>{" "}
                Architecture
              </p>
            </div>

            <div className="flex gap-8 text-xs font-mono font-bold tracking-widest text-slate-500 uppercase">
              <a href="#about" className="hover:text-white transition-colors">
                Origins
              </a>
              <a
                href="#projects"
                className="hover:text-white transition-colors"
              >
                Manifesto
              </a>
              <a href="#contact" className="hover:text-white transition-colors">
                Inbound
              </a>
            </div>

            <div className="flex flex-col items-center md:items-end gap-3">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                Crafted with{" "}
                <Heart className="w-3.5 h-3.5 text-rose-500 fill-current" /> in
                Dhaka
              </div>
              <p className="text-[10px] font-mono text-slate-600 uppercase tracking-widest">
                © {new Date().getFullYear()} SABBIR HOSSAIN. DIGITAL EXCELLENCE
                GUARANTEED.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
