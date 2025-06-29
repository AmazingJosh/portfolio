import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

const Logo =
  "https://res.cloudinary.com/dd0jpkzai/image/upload/v1724286557/amazing-high-resolution-logo_fx4niq.png";

const NavBar = () => {
  const [shadow, setShadow] = useState(false);
  const [menu, setMenu] = useState(false);

  const toggle = () => setMenu(!menu);

  useEffect(() => {
    const handleShadow = () => {
      window.scrollY >= 90 ? setShadow(true) : setShadow(false);
    };
    window.addEventListener("scroll", handleShadow);

    return () => {
      window.removeEventListener("scroll", handleShadow);
    };
  }, []);

  const closeMenuAndScrollToTop = () => {
    setMenu(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={
        shadow
          ? "bg-white text-violet-700 fixed w-full h-20 z-50 shadow-xl"
          : "bg-white text-violet-700 fixed w-full h-20 z-50"
      }
    >
      <div className="flex justify-between items-center h-full w-full px-2 2xl:px-16">
        <div className="my-4">
          <a href="/">
            <img
              alt="logo"
              src={Logo}
              className="object-cover w-[85px] h-[85px] p-1 rounded-full"
            />
          </a>
        </div>
        <div>
          <ul className="hidden lg:flex md:items-center">
            <ScrollLink to="home" smooth duration={500}>
              <li className="uppercase text-sm ml-10 md:text-lg hover:border-b">
                Home
              </li>
            </ScrollLink>
            <ScrollLink to="skills" smooth duration={500}>
              <li className="uppercase text-sm ml-10 md:text-lg hover:border-b">
                Skills
              </li>
            </ScrollLink>
            <ScrollLink to="recentproject" smooth duration={500}>
              <li className="uppercase text-sm ml-10 md:text-lg hover:border-b">
                Projects
              </li>
            </ScrollLink>
            <div className="flex m-4">
              <a href="https://wa.me/message/UPKYII5XJW5GH1">
                <FaWhatsapp
                  className="border border-pink-600 p-2 rounded-full m-1"
                  size={40}
                />
              </a>
              <a href="https://github.com/AmazingJosh">
                <FaGithub
                  className="border border-pink-600 p-2 rounded-full m-1"
                  size={40}
                />
              </a>
              <a href="https://linkedin.com/in/amjcodes">
                <FaLinkedin
                  className="border border-pink-600 p-2 rounded-full m-1"
                  size={40}
                />
              </a>
            </div>
            <ScrollLink to="contact" smooth duration={500}>
              <li className="border hover:bg-white border-pink-500 hover:ease-in-out hover:duration-500 text-center font-bold text-lg py-[10px] px-[10px] ml-8 hover:border-b">
                Let's Connect
              </li>
            </ScrollLink>
          </ul>

          <div onClick={toggle} className="lg:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      {/** Mobile Menu */}
      <div
        className={
          menu ? "lg:hidden fixed left-0 top-0 w-full h-screen bg-black/40" : ""
        }
      >
        <div
          className={
            menu
              ? "fixed left-0 top-0 w-[70%] sm:w-[60%] md:[w-45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 w-[70%] sm:w-[60%] md:[w-45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
          }
        >
          <div className="w-full flex items-center justify-between">
            <h1 className="text-purple-900 font-mono shadow-2xl text-xl sm:text-4xl"></h1>
            <div
              onClick={toggle}
              className="rounded-full shadow-lg shadow-gray-400 p-3 sm:p-6 cursor-pointer"
            >
              <AiOutlineClose />
            </div>
          </div>
          <div className="border-b sm:my-6 border-gray-300 my-4">
            <p className="md:w-[90%] sm:text-3xl">
              Let's Have An Amazing Experience
            </p>
          </div>
          <ul className="py-4 flex flex-col">
            <ScrollLink
              to="home"
              smooth
              duration={500}
              onClick={closeMenuAndScrollToTop}
            >
              <li className="py-4 text-sm sm:text-2xl">Home</li>
            </ScrollLink>
            <ScrollLink
              to="skills"
              smooth
              duration={500}
              onClick={closeMenuAndScrollToTop}
            >
              <li className="py-4 text-sm sm:text-2xl">Skills</li>
            </ScrollLink>
            <ScrollLink
              to="recentproject"
              smooth
              duration={500}
              onClick={closeMenuAndScrollToTop}
            >
              <li className="py-4 text-sm sm:text-2xl">Projects</li>
            </ScrollLink>
            <div className="flex ml-[-4px]">
              <a href="https://wa.me/message/UPKYII5XJW5GH1">
                <FaWhatsapp
                  className="border border-black p-2 sm:w-16 sm:h-16 rounded-full m-1 shadow-lg shadow-black/30"
                  size={40}
                />
              </a>
              <a href="https://github.com/AmazingJosh">
                <FaGithub
                  className="border border-black p-2 sm:w-16 sm:h-16 rounded-full m-1 shadow-lg shadow-black/30"
                  size={40}
                />
              </a>
              <a href="https://linkedin.com/in/amjcodes">
                <FaLinkedin
                  className="border border-black p-2 sm:w-16 sm:h-16 rounded-full m-1 shadow-lg shadow-black/30"
                  size={40}
                />
              </a>
            </div>
            <ScrollLink
              to="contact"
              smooth
              duration={500}
              onClick={closeMenuAndScrollToTop}
            >
              <li className="border hover:bg-white border-purple-600 sm:text-3xl sm:p-6 hover:ease-in-out hover:duration-500 text-center font-bold text-[#56] text-lg ml-[-20px] py-[10px] px-[20px] mt-5 hover:border-b">
                Connect with me
              </li>
            </ScrollLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
