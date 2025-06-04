"use client";

import type React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  Calendar,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import emailjs from "@emailjs/browser";

const contactMethods = [
  {
    icon: <Mail className="w-8 h-8" />,
    title: "Email",
    description: "Drop me a line anytime",
    value: "sabbir53rahman@gmail.com",
    action: "mailto:sabbir53rahman@gmail.com",
    color: "from-blue-400 to-blue-600",
  },
  {
    icon: <Phone className="w-8 h-8" />,
    title: "Phone",
    description: "Call me for urgent matters",
    value: "+880 187 450 7908",
    action: "tel:+8801874507908",
    color: "from-green-400 to-green-600",
  },
  {
    icon: <MapPin className="w-8 h-8" />,
    title: "Location",
    description: "Based in Bangladesh",
    value: "Dhaka, Bangladesh",
    action: "#",
    color: "from-purple-400 to-purple-600",
  },
  {
    icon: <Calendar className="w-8 h-8" />,
    title: "Schedule",
    description: "Book a meeting",
    value: "Available Mon-Fri",
    action: "#",
    color: "from-pink-400 to-pink-600",
  },
];

const socialLinks = [
  {
    icon: <Github className="w-6 h-6" />,
    name: "GitHub",
    url: "https://github.com/sabbir53rahman",
    color: "hover:text-gray-400",
  },
  {
    icon: <Linkedin className="w-6 h-6" />,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/sabbir-rahman-a72681298/",
    color: "hover:text-blue-400",
  },
  {
    icon: <Mail className="w-6 h-6" />,
    name: "Email",
    url: "mailto:sabbir53rahman@gmail.com",
    color: "hover:text-red-400",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear status when user starts typing
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: "" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // Get environment variables
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      console.log(serviceId, templateId, publicKey);

      // Debug log (remove after testing)
      console.log("Environment variables check:", {
        serviceId: serviceId ? "✓ Loaded" : "✗ Missing",
        templateId: templateId ? "✓ Loaded" : "✗ Missing",
        publicKey: publicKey ? "✓ Loaded" : "✗ Missing",
      });

      // Validate environment variables
      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS configuration is missing. Please check environment variables."
        );
      }

      // Initialize EmailJS with the public key
      emailjs.init(publicKey);

      // Send the email directly from the client
      const result = await emailjs.send(serviceId, templateId, {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        reply_to: formData.email,
      });

      console.log("Email sent successfully:", result.text);

      setSubmitStatus({
        type: "success",
        message:
          "Thank you! Your message has been sent successfully. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);

      let errorMessage =
        "Failed to send message. Please try again or contact me directly at sabbir53rahman@gmail.com";

      if (error instanceof Error) {
        if (error.message.includes("public key")) {
          errorMessage =
            "Email service configuration error. Please contact me directly at sabbir53rahman@gmail.com";
        } else if (error.message.includes("environment variables")) {
          errorMessage =
            "Email service is temporarily unavailable. Please contact me directly at sabbir53rahman@gmail.com";
        }
      }

      setSubmitStatus({
        type: "error",
        message: errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 px-4 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Let's{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400">
              Connect
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Ready to bring your ideas to life? I'm always excited to work on new
            projects and collaborate with amazing people.
          </p>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 bg-gradient-to-r from-amber-300 to-amber-500 mx-auto rounded-full mt-6"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card
              className="border-0 shadow-2xl backdrop-blur-xl"
              style={{
                background: `linear-gradient(to right bottom, rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.95))`,
                boxShadow: "0 25px 50px -12px rgba(234, 179, 8, 0.15)",
              }}
            >
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Send me a message
                </h3>

                {/* Status Message */}
                {submitStatus.type && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
                      submitStatus.type === "success"
                        ? "bg-green-500/20 border border-green-500/30 text-green-300"
                        : "bg-red-500/20 border border-red-500/30 text-red-300"
                    }`}
                  >
                    {submitStatus.type === "success" ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <AlertCircle className="w-5 h-5" />
                    )}
                    <span>{submitStatus.message}</span>
                  </motion.div>
                )}

                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-white mb-2 block">
                        Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        className="bg-slate-800/50 border-slate-700/50 text-white placeholder:text-slate-400 focus:border-amber-500/50"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-white mb-2 block">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        className="bg-slate-800/50 border-slate-700/50 text-white placeholder:text-slate-400 focus:border-amber-500/50"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-white mb-2 block">
                      Subject *
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      className="bg-slate-800/50 border-slate-700/50 text-white placeholder:text-slate-400 focus:border-amber-500/50"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-white mb-2 block">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project..."
                      rows={6}
                      className="bg-slate-800/50 border-slate-700/50 text-white placeholder:text-slate-400 resize-none focus:border-amber-500/50"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-slate-950 py-3 text-lg font-semibold shadow-lg shadow-amber-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                          }}
                          className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full mr-2"
                        />
                      ) : (
                        <Send className="w-5 h-5 mr-2" />
                      )}
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Get in touch
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                I'm always open to discussing new opportunities, creative
                projects, or just having a chat about technology and
                development.
              </p>
            </div>

            <div className="grid gap-6">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.action}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="block"
                >
                  <Card
                    className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer backdrop-blur-xl"
                    style={{
                      background: `linear-gradient(to right bottom, rgba(15, 23, 42, 0.6), rgba(15, 23, 42, 0.8))`,
                      boxShadow: "0 10px 25px -5px rgba(234, 179, 8, 0.1)",
                    }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className={`w-16 h-16 rounded-full bg-gradient-to-r ${method.color} flex items-center justify-center text-white shadow-lg`}
                        >
                          {method.icon}
                        </motion.div>
                        <div>
                          <h4 className="text-white font-semibold text-lg mb-1">
                            {method.title}
                          </h4>
                          <p className="text-slate-400 text-sm mb-1">
                            {method.description}
                          </p>
                          <p className="text-amber-300 font-medium">
                            {method.value}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.a>
              ))}
            </div>

            <div className="pt-8">
              <h4 className="text-white font-semibold text-lg mb-4">
                Follow me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-12 h-12 rounded-full bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-white transition-colors ${social.color} backdrop-blur-sm`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <Card
            className="border-0 shadow-2xl backdrop-blur-xl"
            style={{
              background:
                "linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(15, 23, 42, 0.98)), radial-gradient(circle at top right, rgba(234, 179, 8, 0.15), transparent 70%), radial-gradient(circle at bottom left, rgba(139, 92, 246, 0.15), transparent 70%)",
              boxShadow: "0 25px 50px -12px rgba(234, 179, 8, 0.15)",
            }}
          >
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to start your project?
              </h3>
              <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                Let's discuss how we can bring your vision to life with
                cutting-edge technology and exceptional design.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-slate-950 px-8 py-3"
                    onClick={() =>
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Start a Project
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-amber-400/50 text-amber-400 hover:bg-amber-400/10 hover:text-amber-300 px-8 py-3"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Schedule a Call
                  </Button>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
