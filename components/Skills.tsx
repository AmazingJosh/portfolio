"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
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

interface Skill {
  name: string;
  icon: StaticImageData;
  category: string;
  color: string;
}

const skills: Skill[] = [
  {
    name: "HTML",
    icon: html,
    category: "Frontend",
    color: "from-orange-500 to-red-500"
  },
  {
    name: "CSS",
    icon: css,
    category: "Frontend",
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "JavaScript",
    icon: javascript,
    category: "Frontend",
    color: "from-yellow-400 to-yellow-600"
  },
  {
    name: "React JS",
    icon: react,
    category: "Frontend",
    color: "from-cyan-400 to-blue-500"
  },
  {
    name: "React Native",
    icon: reactNative,
    category: "Mobile",
    color: "from-blue-400 to-purple-500"
  },
  {
    name: "SCSS",
    icon: scss,
    category: "Frontend",
    color: "from-pink-500 to-rose-600"
  },
  {
    name: "Tailwind",
    icon: tailwind,
    category: "Frontend",
    color: "from-teal-400 to-cyan-500"
  },
  {
    name: "Next JS",
    icon: nextjs,
    category: "Frontend",
    color: "from-gray-700 to-gray-900"
  },
  {
    name: "Express JS",
    icon: express,
    category: "Backend",
    color: "from-green-600 to-emerald-700"
  },
  {
    name: "MySQL",
    icon: mysql,
    category: "Database",
    color: "from-blue-600 to-indigo-700"
  },
  {
    name: "MongoDB",
    icon: mongodb,
    category: "Database",
    color: "from-green-500 to-teal-600"
  },
  {
    name: "TypeScript",
    icon: typescript,
    category: "Frontend",
    color: "from-blue-500 to-blue-700"
  }
];

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section
      id="skills"
      className="w-full py-24 px-4 relative overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 rounded-3xl"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block"
          >
            <span className="text-pink-500 font-semibold text-sm sm:text-base uppercase tracking-widest mb-2 block">
              Tech Stack
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Skills &
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500 bg-clip-text text-transparent ml-3">
                Expertise
              </span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-pink-500 to-violet-500 mx-auto rounded-full mt-4" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mt-6"
          >
            Technologies and frameworks I use to bring ideas to life
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              skill={skill}
              index={index}
              inView={inView}
            />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 text-sm sm:text-base mb-6">
            Always learning and exploring new technologies
          </p>
          <div className="flex items-center justify-center gap-2">
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
    </section>
  );
};

// Separate component for each skill card with individual viewport detection
interface SkillCardProps {
  skill: Skill;
  index: number;
  inView: boolean;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, index, inView: parentInView }) => {
  const { ref: cardRef, inView: cardInView } = useInView({
    triggerOnce: true,
    threshold: 0.3 // Trigger when 30% of card is visible
  });

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <motion.div
      ref={cardRef}
      variants={itemVariants}
      initial="hidden"
      animate={parentInView ? "visible" : "hidden"}
      whileHover={{ y: -8, scale: 1.03 }}
      className="group relative"
    >
      {/* Gradient Border Effect - Auto-animates on scroll into view */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${skill.color} rounded-2xl blur-xl`}
        initial={{ opacity: 0 }}
        animate={cardInView ? { opacity: 0.6 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: index * 0.05 }}
      />

      {/* Card */}
      <div className="relative bg-slate-900/50 backdrop-blur-xl border border-slate-800 group-hover:border-slate-700 rounded-2xl p-6 sm:p-8 transition-all duration-300 overflow-hidden">
        {/* Subtle shine effect - Auto-animates */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"
          initial={{ opacity: 0 }}
          animate={cardInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: index * 0.05 + 0.2 }}
        />

        {/* Content */}
        <div className="relative flex flex-col items-center justify-center space-y-4">
          {/* Icon Container with pulse animation */}
          <motion.div
            className="relative"
            animate={cardInView ? { scale: [1, 1.05, 1] } : {}}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3,
              delay: index * 0.1
            }}
          >
            {/* Icon glow - auto-plays */}
            <motion.div
              className={`absolute inset-0 bg-gradient-to-br ${skill.color} rounded-xl blur-md`}
              initial={{ opacity: 0 }}
              animate={cardInView ? { opacity: 0.4 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: index * 0.05 + 0.3 }}
            />
            <motion.div
              className="relative w-16 h-16 sm:w-20 sm:h-20 bg-slate-800/50 rounded-xl p-3 transition-transform duration-300"
              initial={{ scale: 0.8, rotate: -10 }}
              animate={cardInView ? { scale: 1, rotate: 0 } : {}}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: index * 0.05 + 0.1
              }}
            >
              <Image
                src={skill.icon}
                alt={skill.name}
                fill
                sizes="80px"
                className="object-contain p-1"
                loading="lazy"
              />
            </motion.div>
          </motion.div>

          {/* Skill Name with gradient text animation */}
          <div className="text-center">
            <motion.h3
              className="text-white font-bold text-base sm:text-lg mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-violet-400 transition-all duration-300"
              initial={{ opacity: 0, y: 10 }}
              animate={cardInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 + 0.4 }}
            >
              {skill.name}
            </motion.h3>
            <motion.span
              className="text-gray-500 text-xs sm:text-sm font-medium"
              initial={{ opacity: 0 }}
              animate={cardInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 + 0.5 }}
            >
              {skill.category}
            </motion.span>
          </div>

          {/* Progress Bar Animation - Auto-plays on scroll */}
          <motion.div
            className="w-full h-1 bg-slate-800 rounded-full overflow-hidden"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={cardInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.05 + 0.6 }}
          >
            <motion.div
              className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
              initial={{ width: 0 }}
              animate={cardInView ? { width: "100%" } : { width: 0 }}
              transition={{
                duration: 1.2,
                delay: index * 0.05 + 0.8,
                ease: "easeOut"
              }}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;