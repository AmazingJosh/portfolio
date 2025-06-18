"use client";
import React, { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

import Logo from "@/assets/logo.png"
import Image from "next/image";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  
  const [shadow,setShadow]=useState(false)
  const [menu,setMenu]=useState(false)
  const [navbg, setNavbg]=useState('#ecf0f3')
  const [link,setLink]=useState('#1f2937')
  const toggle=()=>setMenu(!menu)

  
  useEffect(() => {
    const handleShadow=()=>{
      window.scrollY >=90 ? setShadow(true):setShadow(false)
    }
    window.addEventListener('scroll',handleShadow)
  
  }, [])


  // set true for the initial state so that nav bar is visible in the hero section
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        // also set true for the initial state
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(true);
        }
      }
    }
   
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 2,
        }}
      >
        <div
          className={
            shadow
              ? "bg-white fixed w-full h-20 z-50 shadow-xl"
              : "fixed  w-full h-20 z-50"
          }
        >
          <div className="bg-gradient-to-b from-[#ecedef] to-white flex justify-between sm:justify-around ">
            <div className="sm:my-4 my-2">
              <a href="/">
                {" "}
                <Image
                  src={Logo}
                  className="object-cover w-[85px] h-[85px] p-1 rounded-full"
                  alt={""}
                />
              </a>
            </div>
            <div className="text-black">
              <ul className="hidden md:flex md:items-center md:justify-evenly ">
                <a href="/#home">
                  <li className="uppercase text-sm  ml-10 md:text-lg hover:border-b">
                    Home
                  </li>
                </a>
                <a href="/#skills">
                  {" "}
                  <li className="uppercase text-sm ml-10 md:text-lg   hover:border-b">
                    SKILLS
                  </li>
                </a>
                <a href="/#recentproject">
                  <li className="uppercase text-sm ml-10 md:text-lg  hover:border-b">
                    projects
                  </li>
                </a>
                <div className="flex m-4 ">
                  <a href="https://wa.me/message/UPKYII5XJW5GH1">
                    <FaWhatsapp
                      className="border-2 border-white bg-green-600 text-white p-2 rounded-full m-1"
                      size={40}
                    />
                  </a>
                  <a href="https://github.com/AmazingJosh">
                    <FaGithub
                      className="border border-white text-white bg-black p-2 rounded-full m-1"
                      size={40}
                    />
                  </a>
                  <a href="https://twitter.com/theamazingJosh_?t=Fd8bDkjcxRV8G1JQQQH3PQs=09">
                    <RiTwitterXFill
                      className="border text-white bg-black p-2 m-1"
                      size={40}
                    />
                  </a>
                </div>
                <a href="/#contact">
                  <li className=" border hover:bg-white border-pink-500 hover:ease-in-out hover:duration-500 text-center font-bold text-lg   py-[10px] px-[10px] ml-10  hover:border-b">
                    Lets Connect
                  </li>
                </a>
              </ul>

              <div onClick={toggle} className="lg:hidden p-5">
                <AiOutlineMenu size={25} />
              </div>
            </div>
          </div>
          {/**menu */}
          <div
            className={
              menu
                ? "lg:hidden fixed left-0 top-0 w-full h-screen bg-black/40"
                : ""
            }
          >
            <div
              className={
                menu
                  ? " fixed left-0 top-0 w-[70%] sm:w-[60%] md:[w-45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
                  : "fixed left-[-100%] top-0 w-[70%] sm:w-[60%] md:[w-45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              }
            >
              <div className="text-violet-900">
                <div className="w-full flex items-center justify-between">
                  <h1 className=" font-normal text-xl sm:text-4xl ">AMAZING</h1>
                  <div
                    onClick={toggle}
                    className="rounded-full shadow-lg shadow-gray-400 p-3 sm:p-6 cursor-pointer"
                  >
                    <AiOutlineClose />
                  </div>
                </div>
                <div className="border-b sm:my-6 border-gray-300 my-4">
                  <p className="md:w-[90%] sm:text-3xl">
                    Lets Have An Amazing Experience
                  </p>
                </div>
              </div>
              <div className="text-violet-900">
                <ul className="py-4 flex flex-col">
                  <a href="/#home">
                    <li className="py-4 text-sm sm:text-2xl">Home</li>
                  </a>

                  <a href="/#skills">
                    <li className="py-4 text-sm sm:text-2xl">Skills</li>
                  </a>

                  <a href="/#recentproject">
                    <li className="py-4 text-sm sm:text-2xl">Project</li>
                  </a>
                  <div className="flex ml-[-4px]">
                    <a href="https://wa.me/message/UPKYII5XJW5GH1">
                      <FaWhatsapp
                        className="border border-black p-2 sm:w-16 sm:h-16 rounded-full m-1 shadow-lg shadow-black/30"
                        size={40}
                      />
                    </a>
                    <a href="https://github.com/AmazingJosh">
                      <FaGithub
                        className="border border-black p-2 sm:w-16 sm:h-16  rounded-full m-1 shadow-lg shadow-black/30"
                        size={40}
                      />
                    </a>
                    <a href="https://twitter.com/theamazingJosh_?t=Fd8bDkjcxRV8G1JQQQH3PQs=09">
                      <RiTwitterXFill
                        className="border border-black p-2 sm:w-16 sm:h-16  rounded-full m-1 shadow-lg shadow-black/30"
                        size={40}
                      />
                    </a>
                  </div>

                  <a href="/#contact">
                    <li className=" border  hover:bg-white border-purple-600  sm:text-3xl sm:p-6 hover:ease-in-out hover:duration-500 text-center font-bold text-[#56] text-lg ml-[-20px] py-[10px] px-[20px] mt-5  hover:border-b">
                      Connect with me
                    </li>
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
