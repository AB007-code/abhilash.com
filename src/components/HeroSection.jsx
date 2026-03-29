import { ArrowDown } from "lucide-react";
import React from "react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 sm:py-24"
    >
      <div className="container max-w-6xl mx-auto z-10">
        <div className="flex flex-col items-center gap-10 md:grid md:grid-cols-[0.82fr_1.18fr] md:items-center lg:gap-14">
          <div className="flex w-full justify-center md:justify-start opacity-0 animate-fade-in-delay-1">
            <div className="relative">
              <div className="absolute inset-0 rounded-[2rem] bg-primary/15 blur-3xl scale-95" />
              <div className="absolute inset-0 rounded-[2rem] bg-linear-to-br from-primary/12 via-transparent to-transparent" />
              <div className="relative overflow-hidden rounded-[2rem] border border-primary/15 bg-card/45 p-3 shadow-[0_18px_50px_rgba(0,0,0,0.24)] backdrop-blur-sm">
                <img
                  src="/projects/abhilash.jpg"
                  alt="Abhilash Chaurasiya"
                  className="h-[250px] w-[220px] rounded-[1.5rem] object-cover object-top sm:h-[320px] sm:w-[280px] md:h-[390px] md:w-[315px]"
                />
              </div>
            </div>
          </div>

          <div className="space-y-5 text-center md:text-left md:max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight leading-[1.08]">
              <span className="opacity-0 animate-fade-in">Hi, I'm</span>{" "}
              <span className="text-primary opacity-0 animate-fade-in-delay-1">
                Abhilash
              </span>{" "}
              <span className="text-gradient opacity-0 animate-fade-in-delay-2">
                Chaurasiya
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-[1.35rem] text-muted-foreground max-w-2xl md:mx-0 mx-auto opacity-0 animate-fade-in-delay-3 leading-8 md:leading-9">
              Full Stack Developer (MERN / Next.js) with experience building
              scalable web applications, AI-powered systems, and automation
              workflows. Skilled in React, Node.js, FastAPI, and web scraping
              (Playwright, Selenium), I create high-performance, user-centric
              solutions that are both functional and visually engaging.
            </p>

            <div className="pt-4 opacity-0 animate-fade-in-delay-4">
              <a href="#projects" className="cosmic-button">
                View My Work
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
