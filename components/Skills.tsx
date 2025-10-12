"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Import images
import html from "../public/html.png";
import css from "../public/css.png";
import javascript from "../public/javascript.png";
import react from "../public/react.png";
import reactNative from "../public/react-native.jpg";
import scss from "../public/scss1.png";
import tailwind from "../public/tailwind.png";
import nextjs from "../public/nextjs.png";
import express from "../public/Express.jpg";
import mysql from "../public/mysql.png";
import mongodb from "../public/mongodb.png";
import typescript from "../public/typescript.png";

const skills = [
  { name: "HTML", icon: html },
  { name: "CSS", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "React JS", icon: react },
  { name: "React Native", icon: reactNative },
  { name: "SCSS", icon: scss },
  { name: "Tailwind", icon: tailwind },
  { name: "Next JS", icon: nextjs },
  { name: "Express JS", icon: express },
  { name: "MySQL", icon: mysql },
  { name: "MongoDB", icon: mongodb },
  { name: "TypeScript", icon: typescript }
];

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15
  });

  return (
    <section
      id="skills"
      className="w-full py-20 px-4 relative bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e]"
    >
      <div className="max-w-[1240px] mx-auto">
        <h2 className="text-center text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 p-4 mb-10">
          My Favourite Frameworks
        </h2>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.08, y: -4 }}
              transition={{ type: "spring", stiffness: 180, damping: 14 }}
              className="bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-lg hover:shadow-pink-500/30"
            >
              <div className="flex flex-col items-center justify-center">
                <div className="w-16 h-16 relative mb-4">
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    fill
                    sizes="64px"
                    className="object-contain rounded-md"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-white font-semibold text-lg">
                  {skill.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
