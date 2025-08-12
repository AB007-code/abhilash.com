import { ArrowRight, ExternalLink, Github } from "lucide-react";
import React from "react";

const projects = [
  {
    id: 1,
    title: "Amazon Landing Page",
    description: "A fully functional landing page app using React and Node.js",
    image: "/projects/Amazon Landing Page.png",
    tags: ["React", "Node", "Express", "Mongodb"],
    demoUrl: "https://amazon-website-mern.netlify.app/",
    githubUrl: "https://github.com/AB007-code/amazon-landing-page",
  },
  {
    id: 2,
    title: "Delta Services",
    description: "A beautiful landing page app using React and Bootstrap",
    image: "/projects/Delta-Services.png",
    tags: ["React", "Bootstrap"],
    demoUrl: "https://deltaservicescoin.netlify.app/",
    githubUrl: "https://github.com/AB007-code/delta-services",
  },
  {
    id: 3,
    title: "E-Commerce",
    description:
      "Fully Featured e-commerce platform to add the product in cart and filter the product by their name",
    image: "/projects/E-Commerce.png",
    tags: ["Html", "Css", "Bootstrap", "Javascript"],
    demoUrl: "https://ab007-code.github.io/Tech-Shop/",
    githubUrl: "https://github.com/AB007-code/Tech-Shop",
  },
  {
    id: 4,
    title: "Mart Website",
    description:
      "This E-commerce website is designed on frontend only. The user can Add the product, Remove the product in the cart, Search products with filter functionality and access the single product details",
    image: "/projects/Mart-Website.png",
    tags: ["React", "Redux", "Bootstrap", "Api"],
    demoUrl: "https://react-mart-website.netlify.app/",
    githubUrl: "https://github.com/AB007-code/mart",
  },
  {
    id: 5,
    title: "Tic Tac Toe",
    description:
      "This website is designed to play the game with two people. First both user has to give the name then game will start and if player win the game then the winner name will be highlight.",
    image: "/projects/Tic-Tac-Toe Game.png",
    tags: ["Html", "Css", "Javascript", "Bootstrap"],
    demoUrl: "https://ab007-code.github.io/TIC-TAC-TOE/",
    githubUrl: "https://github.com/AB007-code/TIC-TAC-TOE",
  },
  {
    id: 5,
    title: "Weather Website",
    description:
      "This beautiful website gives you the weather prediction according to the given cities name. According to the weather information or day or night, image and background-image changes.",
    image: "/projects/Weather Prediction.png",
    tags: ["Html", "Css", "Javascript", "Bootstrap"],
    demoUrl: "https://ab007-code.github.io/Weather-App/",
    githubUrl: "https://github.com/AB007-code/Weather-App",
  },
];

const Project = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each projects was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                {/* </div> */}

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex spaxe-x-3">
                    <a
                      href={project.demoUrl}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      target="_blank"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      target="_blank"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 ">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            href="https://github.com/AB007-code"
            target="_blank"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Project;
