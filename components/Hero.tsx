"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaWhatsapp, FaLocationArrow } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import HeaderImg from "../public/img.svg";
import { Spotlight } from "./ui/Spotlight";
import { BackgroundBeams } from "./ui/background-beams";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./MagicButton";

const words =
  "Hi, I'm Joshua — a Full Stack Developer crafting fast, modern, and scalable web & mobile apps using the MERN stack.";

const Hero = () => {
  const socialLinks = [
    {
      href: "https://github.com/amazingjosh",
      icon: FaGithub,
      label: "GitHub",
      color: "from-gray-700 to-gray-900",
      hoverColor: "hover:from-gray-600 hover:to-gray-800"
    },
    {
      href: "https://twitter.com/amazhiel_",
      icon: RiTwitterXFill,
      label: "Twitter",
      color: "from-blue-500 to-blue-700",
      hoverColor: "hover:from-blue-400 hover:to-blue-600"
    },
    {
      href: "https://wa.me/message/UPKYII5XJW5GH1",
      icon: FaWhatsapp,
      label: "WhatsApp",
      color: "from-green-500 to-green-700",
      hoverColor: "hover:from-green-400 hover:to-green-600"
    },
    {
      href: "mailto:theamazingkeyz@gmail.com",
      icon: HiOutlineMail,
      label: "Email",
      color: "from-pink-500 to-rose-600",
      hoverColor: "hover:from-pink-400 hover:to-rose-500"
    }
  ];

  return (
    <section
      id="home"
      className="relative mt-20 flex flex-col items-center justify-center min-h-screen text-center overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 rounded-3xl"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-500/10 rounded-full blur-3xl" />
      </div>

      {/* Background Effects */}
      <Spotlight
        className="-top-32 -left-20 h-screen"
        fill="rgba(168, 85, 247, 0.4)"
      />
      <BackgroundBeams />

      <div className="relative z-10 max-w-6xl px-4 py-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-8"
        >
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
            <div className="relative mt-4 bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500 rounded-full px-6 py-3 border border-white/20">
              <p className="text-white font-bold text-xs sm:text-sm uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                Turning Ideas into Digital Products 🚀
              </p>
            </div>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-white">Hi, I'm </span>
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500 bg-clip-text text-transparent">
              Joshua
            </span>
          </h1>
        </motion.div>

        {/* Description with TextGenerateEffect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <TextGenerateEffect
            className="text-lg sm:text-xl lg:text-2xl font-medium text-gray-300 max-w-3xl mx-auto"
            words={words}
          />
        </motion.div>

        {/* Content Container */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-12 mb-12">
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-violet-500/20 rounded-2xl blur-xl" />

              {/* Social links container */}
              <div className="relative bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-6">
                <p className="text-gray-400 text-sm font-semibold mb-4 uppercase tracking-wide">
                  Connect With Me
                </p>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: 0.8 + index * 0.1,
                        type: "spring",
                        stiffness: 200
                      }}
                      whileHover={{ scale: 1.15, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative"
                    >
                      {/* Icon glow */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${social.color} rounded-xl blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300`}
                      />

                      {/* Icon container */}
                      <div
                        className={`relative bg-gradient-to-br ${social.color} ${social.hoverColor} p-3 rounded-xl transition-all duration-300 shadow-lg`}
                      >
                        <social.icon className="text-white w-6 h-6" />
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative">
              {/* Rotating gradient border */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500 rounded-full blur-2xl opacity-30"
              />

              {/* Image container */}
              <div className="relative bg-slate-900/30 backdrop-blur-sm rounded-full p-8 border border-white/10">
                <Image
                  src={HeaderImg}
                  alt="Joshua coding illustration"
                  width={300}
                  height={300}
                  loading="eager"
                  priority
                  className="object-contain"
                  id="svg"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <Link href="#projects" scroll={true}>
            <MagicButton
              title="See my latest projects"
              icon={<FaLocationArrow />}
              position="right"
            />
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <p className="text-gray-400 text-xs uppercase tracking-widest">
              Scroll Down
            </p>
            <div className="w-6 h-10 border-2 border-gray-600 rounded-full p-1">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-3 bg-gradient-to-b from-pink-500 to-violet-500 rounded-full mx-auto"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
