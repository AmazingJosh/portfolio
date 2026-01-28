"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaLocationArrow,
  FaGithub,
  FaLinkedin,
  FaWhatsapp
} from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { HiOutlineMail, HiHeart } from "react-icons/hi";
import MagicButton from "./MagicButton";

const Footer = () => {
  const socialLinks = [
    {
      id: 1,
      icon: FaGithub,
      href: "https://github.com/amazingjosh",
      label: "GitHub",
      color: "hover:bg-gray-700"
    },
    {
      id: 2,
      icon: RiTwitterXFill,
      href: "https://twitter.com/amazhiel_",
      label: "Twitter",
      color: "hover:bg-blue-500"
    },
    {
      id: 3,
      icon: FaWhatsapp,
      href: "https://wa.me/message/UPKYII5XJW5GH1",
      label: "WhatsApp",
      color: "hover:bg-green-500"
    },
    {
      id: 4,
      icon: FaLinkedin,
      href: "https://linkedin.com/in/amjcodes",
      label: "LinkedIn",
      color: "hover:bg-blue-600"
    },
    {
      id: 5,
      icon: HiOutlineMail,
      href: "mailto:theamazingkeyz@gmail.com",
      label: "Email",
      color: "hover:bg-pink-500"
    }
  ];

  return (
    <footer
      className="relative rounded-3xl w-full overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900"
      id="contact"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Background grid */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-16"
        >
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-4xl"
          >
            Ready to take{" "}
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500 bg-clip-text text-transparent">
              your
            </span>{" "}
            digital presence to the next level?
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-gray-400 text-base sm:text-lg mb-8 max-w-2xl"
          >
            Reach out to me today and let&apos;s discuss how I can help you
            achieve your goals.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <a href="mailto:theamazingkeyz@gmail.com">
              <MagicButton
                title="Let's get in touch"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-12" />

        {/* Social Links Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-12"
        >
          <p className="text-gray-400 text-sm font-semibold mb-6 uppercase tracking-wide">
            Connect With Me
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  delay: 0.6 + index * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group relative"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-xl blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300 bg-gradient-to-r from-pink-500 to-violet-500" />

                {/* Icon container */}
                <div
                  className={`relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-4 rounded-xl transition-all duration-300 group-hover:border-slate-600 ${social.color} group-hover:text-white`}
                >
                  <social.icon className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors duration-300" />
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-slate-800"
        >
          {/* Copyright */}
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} AmazingJosh</p>
            <span>•</span>
                </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm">
            <a
              href="#home"
              className="text-gray-400 hover:text-white transition-colors duration-300 relative group"
            >
              Back to Top
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-violet-500 group-hover:w-full transition-all duration-300" />
            </a>
            <span className="text-gray-600">•</span>
            <a
              href="#skills"
              className="text-gray-400 hover:text-white transition-colors duration-300 relative group"
            >
              Skills
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-violet-500 group-hover:w-full transition-all duration-300" />
            </a>
            <span className="text-gray-600">•</span>
            <a
              href="#projects"
              className="text-gray-400 hover:text-white transition-colors duration-300 relative group"
            >
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-violet-500 group-hover:w-full transition-all duration-300" />
            </a>
          </div>
        </motion.div>

        {/* Decorative Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center mt-8"
        >
          <div className="flex items-center gap-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
