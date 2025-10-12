import React from "react";
import Image from "next/image";
import Link from "next/link";
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
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center h-screen text-center overflow-hidden bg-[#ecf0f3]"
    >
      {/* Background Effects */}
      <Spotlight className="-top-32 -left-20 h-screen" fill="white" />
      <BackgroundBeams />

      <div className="relative z-10 max-w-4xl px-4">
        <p className="animate-pulse mt-16 md:mt-28 mb-6 border-4 border-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white uppercase tracking-widest text-sm sm:text-base py-2 px-6">
          Turning Ideas into Functional Digital Products 🚀
        </p>

        <TextGenerateEffect
          className="text-lg sm:text-2xl font-semibold text-gray-800 mb-8"
          words={words}
        />

        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {/* Social Links */}
          <div className="flex justify-center gap-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-full border-4 border-white shadow-xl">
            <a
              href="https://github.com/amazingjosh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub
                className="bg-black text-white p-2 rounded-full hover:scale-110 transition"
                size={45}
              />
            </a>

            <a
              href="https://twitter.com/theamazingJosh_"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <RiTwitterXFill
                className="bg-black text-white p-2 rounded-full hover:scale-110 transition"
                size={45}
              />
            </a>

            <a
              href="https://wa.me/message/UPKYII5XJW5GH1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp
                className="bg-green-600 text-white p-2 rounded-full hover:scale-110 transition"
                size={45}
              />
            </a>

            <Link href="mailto:theamazingkeyz@gmail.com" aria-label="Email">
              <HiOutlineMail
                className="bg-pink-500 text-white p-2 rounded-full hover:scale-110 transition"
                size={45}
              />
            </Link>
          </div>

          <Image
            src={HeaderImg}
            alt="Joshua coding illustration"
            width={300}
            height={300}
            loading="lazy"
            className="object-contain"
            id="svg"
          />
        </div>

        <Link href="#projects" scroll={true}>
          <MagicButton
            title="See my latest projects"
            icon={<FaLocationArrow />}
            position="right"
          />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
