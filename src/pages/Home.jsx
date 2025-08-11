import React from "react";
import { ThemeToggle } from "../components/ThemeToggle";
import StarBackground from "../components/StarBackground";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Skill from "../components/Skill";
import Project from "../components/Project";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* theme toggle */}
      <ThemeToggle />
      {/* background effect */}
      <StarBackground />
      {/* Navbaer */}
      <Navbar />
      {/* Main Content */}
      <main>
        <HeroSection />
        <About />
        <Skill />
        <Project />
      </main>

      {/* Footer */}
    </div>
  );
};

export default Home;
