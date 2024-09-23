import React from 'react'
import { Spotlight } from './ui/Spotlight'


import Image from 'next/image'
import Link from 'next/link'
import { FaGithub,FaWhatsapp, FaLocationArrow,} from 'react-icons/fa'
import { RiTwitterXFill } from "react-icons/ri";


import {HiOutlineMail} from 'react-icons/hi'
import Header from "../public/img.svg"

import { TextGenerateEffect } from './ui/TextGenerateEffect'
import {BackgroundBeams} from './ui/background-beams'
import MagicButton from './MagicButton'

const words = "Hi, I am Joshua, i develop full stack mobile and web applications using the MERN stack technology"



const Hero = () => {
  return (
    <div className="pb-2 md:pb-16 pt-28 md:pt-36 w-full -z-50 ">
      <div className="rounded-xl">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[-50vw]"
          fill="purple"
        />
        <Spotlight className="-top-40 left-80 h-[80vh] w-[-50vw]" fill="pink" />
      </div>

      <div className="h-screen w-full rounded-md bg-[#ecf0f3] relative flex flex-col items-center justify-center antialiased">
        <div className="">
          <div id="home" className="w-full h-full text-center mt-[-100px]">
            <div className="max-w-4xl w-full h-full mx-auto flex justify-center items-center">
              <div
                id="welcome"
                className="hover:-translate-y-4 mx-auto duration-1000 transition delay-100 ease-in-out w-full "
              >
                <p className="animate-pulse mt-32 md:mt-40 md:p-4 border-white border-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg uppercase tracking-widest text-white sm:py-2 text-sm">
                  Welcome to my Portfolio, Let's build something together
                </p>
                <TextGenerateEffect
                  className="sm:p-4 pb-4 text-sm text-center sm:text-2xl font-bold"
                  words={words}
                />
                <div className="md:flex w-full">
                  <div className="md:flex md:justify-between">
                    <div className="flex items-center justify-around md:w-[600px] m-auto  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-4 border-white text-white shadow-xl p-4  rounded-full">
                      {/* <FaLinkedin className='border border-black p-2 hover:scale-110 ease-in rounded-full m-1' size={40}/> */}
                      <a href="https://wa.me/message/UPKYII5XJW5GH1">  <FaGithub
                  className="border border-black bg-black p-2 hover:scale-110 ease-in rounded-full m-1"
                   size={50}
                /> </a>
               
             
                      <a href="https://twitter.com/theamazingJosh_?t=Fd8bDkjcxRV8G1JQQQH3PQs=09">  <RiTwitterXFill
                  className="border border-black bg-black p-2 hover:scale-110 ease-in rounded-full m-1"
                   size={50}
                /> </a>
                      
                         <a href="https://wa.me/message/UPKYII5XJW5GH1">  <FaWhatsapp
                  className="border border-black bg-black p-2 hover:scale-110 ease-in rounded-full m-1"
                   size={50}
                /> </a>
                      
                        <a href="mailto:theamazingkeyz@gmail.com">  <HiOutlineMail
                  className="border border-black bg-black p-2 hover:scale-110 ease-in rounded-full m-1"
                   size={50}
                /> </a>
                    </div>
                    <Image
                      id="svg"
                      className="h-[300px] w-[300px] md:h-[250px] md:w-[400px] md:m-auto  "
                      src={Header}
                      alt="no-image"
                    />
                  </div>
                </div>
                <Link href="/#projects">
                  <MagicButton
                    title="scroll down to see some of my works"
                    icon={<FaLocationArrow />}
                    position="right"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <BackgroundBeams />
      </div>
    </div>
  );
}

export default Hero
