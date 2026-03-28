// import { Briefcase, Code, User } from "lucide-react";
// import React from "react";

// const About = () => {
//   return (
//     <section id="about" className="py-24 px-4 relative">
//       <div className="container mx-auto max-w-5xl">
//         <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
//           About <span className="text-primary"> Me</span>
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//           <div className="space-y-6">
//             <h3 className="text-2xl font-semibold">
//               Passionate Web Developer & Gen-AI Developer
//             </h3>

//             <p className="text-muted-foreground">
//               With over 1 years of experience in web development, I specialize
//               in creating responsive, accessible, and performant web
//               applications using modern technologies.
//             </p>

//             <p className="text-muted-foreground">
//               I'm passionate about creating elegant solutions to complex
//               problems, and I'm constantly learning new technologies and
//               techniques to stay at the forefront of the ever-evolving web
//               landscape.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
//               <a href="#contact" className="cosmic-button">
//                 Get In Touch
//               </a>

//               <a
//                 href="/resume.pdf"
//                 download="Abhilash_Resume.pdf"
//                 className=" px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
//               >
//                 Download CV
//               </a>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 gap-6">
//             <div className="gradient-border p-6 card-hover">
//               <div className="flex items-start gap-4">
//                 <div className="p-3 rounded-full bg-primary/10">
//                   <Code className="h-6 w-6 text-primary" />
//                 </div>

//                 <div className="text-left">
//                   <h4 className="font-semibold text-lg">Web Development</h4>
//                   <p className="text-muted-foreground">
//                     Creating responsive websites and web applications With
//                     modern frameworks.
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="gradient-border p-6 card-hover">
//               <div className="flex items-start gap-4">
//                 <div className="p-3 rounded-full bg-primary/10">
//                   <User className="h-6 w-6 text-primary" />
//                 </div>

//                 <div className="text-left">
//                   <h4 className="font-semibold text-lg">UI/UX Design</h4>
//                   <p className="text-muted-foreground">
//                     Designing intuitive user interfaces and seamless user
//                     experience.
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="gradient-border p-6 card-hover">
//               <div className="flex items-start gap-4">
//                 <div className="p-3 rounded-full bg-primary/10">
//                   <Briefcase className="h-6 w-6 text-primary" />
//                 </div>

//                 <div className="text-left">
//                   <h4 className="font-semibold text-lg">Project Managment</h4>
//                   <p className="text-muted-foreground">
//                     Leading projects from conception to completion with agile
//                     methodologies.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

import { Briefcase, Code, User } from "lucide-react";
import React from "react";

const About = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Full Stack Developer (MERN / Next.js) & AI Automation Engineer
            </h3>

            <p className="text-muted-foreground">
              I am a Full Stack Developer with 2+ years of experience building
              scalable web applications and AI-powered systems. I specialize in
              MERN and Next.js ecosystems, with strong expertise in backend
              architecture, API design, and performance optimization.
            </p>

            <p className="text-muted-foreground">
              I have hands-on experience integrating Generative AI APIs,
              building automation workflows, and developing data-driven
              platforms such as analytics dashboards and web scraping systems
              using Playwright and Selenium. I focus on creating efficient,
              user-centric, and production-ready solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/resume.pdf"
                download="Abhilash_Resume.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right Cards */}
          <div className="grid grid-cols-1 gap-6">
            {/* Development */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Full Stack Development
                  </h4>
                  <p className="text-muted-foreground">
                    Building scalable applications using React, Next.js,
                    Node.js, FastAPI, and modern backend architectures.
                  </p>
                </div>
              </div>
            </div>

            {/* AI & Automation */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    AI & Automation Workflows
                  </h4>
                  <p className="text-muted-foreground">
                    Developing AI-powered features, automation systems, and
                    scraping solutions using Gemini APIs, N8N, Playwright, and
                    Selenium.
                  </p>
                </div>
              </div>
            </div>

            {/* System & Projects */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Scalable Systems & Projects
                  </h4>
                  <p className="text-muted-foreground">
                    Experience building analytics dashboards, API monetization
                    platforms, and deploying applications with CI/CD pipelines
                    and cloud platforms like Vercel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
