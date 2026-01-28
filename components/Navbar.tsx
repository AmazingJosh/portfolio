import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { HiHome, HiLightningBolt, HiChat } from "react-icons/hi";
import { MdRocketLaunch } from "react-icons/md";
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

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menu]);

  const closeMenuAndScrollToTop = () => {
    setMenu(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`fixed w-full h-20 z-50 transition-all duration-200 ${
        shadow
          ? "bg-slate-900/80 backdrop-blur-xl shadow-2xl shadow-purple-500/10 border-b border-slate-800"
          : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center h-full w-full px-4 md:px-8 2xl:px-16">
        <div className="my-4">
          <a href="/" className="group relative">
            {/* Glow effect on logo */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-violet-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <img
              alt="logo"
              src={Logo}
              className="relative object-cover w-[70px] h-[70px] md:w-[85px] md:h-[85px] p-1 rounded-full transition-transform duration-300 group-hover:scale-110"
            />
          </a>
        </div>
        <div>
          {/* Desktop Menu */}
          <ul className="hidden lg:flex md:items-center">
            <ScrollLink to="home" smooth duration={500}>
              <li className="uppercase text-sm ml-10 md:text-lg text-violet-800 hover:text-white cursor-pointer transition-all duration-300 relative group">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-violet-500 group-hover:w-full transition-all duration-300" />
              </li>
            </ScrollLink>
            <ScrollLink to="skills" smooth duration={500}>
              <li className="uppercase text-sm ml-10 md:text-lg text-violet-800 hover:text-white cursor-pointer transition-all duration-300 relative group">
                Skills
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-violet-500 group-hover:w-full transition-all duration-300" />
              </li>
            </ScrollLink>
            <ScrollLink to="recentproject" smooth duration={500}>
              <li className="uppercase text-sm ml-10 md:text-lg text-violet-800 hover:text-white cursor-pointer transition-all duration-300 relative group">
                Projects
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-violet-500 group-hover:w-full transition-all duration-300" />
              </li>
            </ScrollLink>
            <div className="flex m-4 gap-2">
              <a
                href="https://wa.me/message/UPKYII5XJW5GH1"
                className="group relative"
                aria-label="WhatsApp"
              >
                <div className="absolute inset-0 bg-green-500 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                <FaWhatsapp
                  className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-gray-300 p-2 rounded-full transition-all duration-300 group-hover:bg-green-500 group-hover:text-white group-hover:scale-110 group-hover:border-transparent"
                  size={40}
                />
              </a>
              <a
                href="https://github.com/AmazingJosh"
                className="group relative"
                aria-label="GitHub"
              >
                <div className="absolute inset-0 bg-gray-700 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                <FaGithub
                  className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-gray-300 p-2 rounded-full transition-all duration-300 group-hover:bg-gray-800 group-hover:text-white group-hover:scale-110 group-hover:border-transparent"
                  size={40}
                />
              </a>
              <a
                href="https://linkedin.com/in/amjcodes"
                className="group relative"
                aria-label="LinkedIn"
              >
                <div className="absolute inset-0 bg-blue-600 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                <FaLinkedin
                  className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-gray-300 p-2 rounded-full transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 group-hover:border-transparent"
                  size={40}
                />
              </a>
            </div>
            <ScrollLink to="contact" smooth duration={500}>
              <li className="relative group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                <div className="relative bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 text-white text-center font-bold text-lg py-2 px-6 ml-8 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105">
                  Let's Connect
                </div>
              </li>
            </ScrollLink>
          </ul>

          {/* Mobile Menu Button */}
          <div
            onClick={toggle}
            className="lg:hidden cursor-pointer hover:scale-110 transition-transform duration-200 relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-violet-500/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-2 rounded-lg">
              <AiOutlineMenu size={28} className="text-gray-300" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 z-40 ${
          menu ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggle}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`lg:hidden fixed right-0 top-0 h-screen w-[85%] sm:w-[75%] md:w-[60%] bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 shadow-2xl border-l border-slate-800 z-50 transition-transform duration-500 ease-out ${
          menu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <img
                alt="logo"
                src={Logo}
                className="object-cover w-12 h-12 rounded-full"
              />
              <span className="text-white font-bold text-lg">Menu</span>
            </div>
            <button
              onClick={toggle}
              className="rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 shadow-lg hover:shadow-xl p-3 cursor-pointer transition-all duration-300 hover:rotate-90 hover:bg-slate-700 group"
              aria-label="Close menu"
            >
              <AiOutlineClose
                className="text-gray-300 group-hover:text-white transition-colors duration-300"
                size={24}
              />
            </button>
          </div>

          {/* Tagline */}
          <div className="px-6 py-4 border-b border-slate-800">
            <p className="text-gray-300 font-medium text-base sm:text-lg bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500 bg-clip-text text-transparent flex items-center gap-2">
              Let's Have An Amazing Experience
              <HiLightningBolt className="text-pink-500 text-xl" />
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto px-6 py-6">
            <ul className="space-y-2">
              {[
                { to: "home", label: "Home", Icon: HiHome },
                { to: "skills", label: "Skills", Icon: HiLightningBolt },
                { to: "recentproject", label: "Projects", Icon: MdRocketLaunch }
              ].map((item, index) => (
                <ScrollLink
                  key={item.to}
                  to={item.to}
                  smooth
                  duration={500}
                  onClick={closeMenuAndScrollToTop}
                >
                  <li
                    className="group relative overflow-hidden rounded-xl bg-slate-800/30 backdrop-blur-sm border border-slate-700 hover:bg-gradient-to-r hover:from-purple-900/50 hover:to-pink-900/50 hover:border-slate-600 transition-all duration-300 cursor-pointer"
                    style={{
                      animation: menu
                        ? `slideIn 0.3s ease-out ${index * 0.1}s both`
                        : "none"
                    }}
                  >
                    <div className="flex items-center gap-4 p-4 sm:p-5">
                      <item.Icon className="text-gray-400 text-2xl sm:text-3xl group-hover:scale-125 group-hover:text-pink-500 transition-all duration-300" />
                      <span className="text-gray-300 font-semibold text-lg sm:text-xl group-hover:translate-x-2 group-hover:text-white transition-all duration-300">
                        {item.label}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-pink-500 to-violet-500 group-hover:w-full transition-all duration-300" />
                  </li>
                </ScrollLink>
              ))}
            </ul>

            {/* Social Links */}
            <div className="mt-8 mb-6">
              <p className="text-gray-400 font-semibold text-sm mb-4 uppercase tracking-wide">
                Connect With Me
              </p>
              <div className="flex gap-4 justify-start">
                {[
                  {
                    href: "https://wa.me/message/UPKYII5XJW5GH1",
                    Icon: FaWhatsapp,
                    label: "WhatsApp",
                    color: "hover:bg-green-500"
                  },
                  {
                    href: "https://github.com/AmazingJosh",
                    Icon: FaGithub,
                    label: "GitHub",
                    color: "hover:bg-gray-700"
                  },
                  {
                    href: "https://linkedin.com/in/amjcodes",
                    Icon: FaLinkedin,
                    label: "LinkedIn",
                    color: "hover:bg-blue-600"
                  }
                ].map(({ href, Icon, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    className="group relative"
                    aria-label={label}
                  >
                    <div className="absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300 bg-current" />
                    <div
                      className={`relative bg-slate-800/50 backdrop-blur-sm border-2 border-slate-700 p-3 sm:p-4 rounded-full shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110 hover:border-transparent ${color} hover:text-white`}
                    >
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-gray-300 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <ScrollLink
              to="contact"
              smooth
              duration={500}
              onClick={closeMenuAndScrollToTop}
            >
              <button className="relative group w-full mt-4 overflow-hidden rounded-full">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-violet-500 blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                <div className="relative bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 text-white font-bold text-base sm:text-lg py-4 px-6 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 transform active:scale-95 flex items-center justify-center gap-2">
                  Let's Connect
                  <HiChat className="text-xl sm:text-2xl" />
                </div>
              </button>
            </ScrollLink>
          </nav>
        </div>
      </div>

      {/* Add custom keyframe animation */}
      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default NavBar;
