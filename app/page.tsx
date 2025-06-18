"use client";

import Hero from "@/components/Hero";
// import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import RecentProjects from "@/components/RecentProjects";
import NavBar from "@/components/Navbar";

import Skills from "@/components/Skills";

const Home = () => {
  return (
    <main>
          <NavBar />
      <div className="relative bg-white/90 flex justify-center items-center flex-col overflow-hidden mx-auto md:px-10 px-[2px]">
        <div className="max-w-7xl w-full">
          <Hero />
          {/* <Grid /> */}
          <Skills /> 
          <RecentProjects />
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default Home;
