"use client";

import { navItems } from "@/data";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import RecentProjects from "@/components/RecentProjects";

import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Skills from "@/components/Skills";

const Home = () => {
  return (
    <main className="relative bg-white flex justify-center items-center flex-col overflow-hidden mx-auto md:px-10 px-[2px]">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Skills/>
        <RecentProjects />
       <Footer />
      </div>
    </main>
  );
};

export default Home;
