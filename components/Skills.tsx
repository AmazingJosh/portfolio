import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Import your images
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
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section
      id="skills"
      className="w-full py-20 px-4 relative bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e]"
    >
      <div className="max-w-[1240px] mx-auto">
        <h2 className="text-center text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-700 mb-16">
          My Favourite Frameworks
        </h2>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            },
            hidden: {}
          }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-xl text-center hover:shadow-pink-500/40"
            >
              <Image
                src={skill.icon}
                alt={skill.name}
                width={64}
                height={64}
                className="mx-auto mb-4 object-contain"
              />
              <h3 className="text-white font-semibold">{skill.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
