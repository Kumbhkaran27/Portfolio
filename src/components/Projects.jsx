import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, Calendar, Tag, Info } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import useMediaQuery from "../hooks/useMediaQuery";

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });
  const isMobile = useMediaQuery("(max-width: 640px)");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const projectCategories = [
    "All",
    "Full Stack Development",
    "AI & Machine Learning",
    "iOS & Android Development",
  ];

  const projects = [
    {
      title: "GitHub Time-Series Forecasting",
      description: "Full-stack forecasting tool for GitHub repos",
      image: "/Portfolio/github.png",
      period: "Jan 2024 - Apr 2024",
      technologies: ["React", "Flask", "Google Cloud", "TensorFlow", "Prophet", "StatsModels", "Docker"],
      detailedPoints: [
        "Built a full-stack app to forecast GitHub metrics using LSTM, Prophet, and StatsModels.",
        "Hosted on Google Cloud using Dockerized microservices.",
        "Leveraged GCP services for data processing and scalable infrastructure.",
      ],
      github: "https://github.com/Kumbhkaran27/GitHub-Time-Series-Forecasting",
      categories: ["Full Stack Development", "AI & Machine Learning"],
    },
    {
      title: "Currency Converter",
      description: "Flutter app with real-time exchange rates",
      image: "/Portfolio/currency.png",
      period: "May 2024",
      technologies: ["Flutter", "Dart", "MVC", "REST API"],
      detailedPoints: [
        "Developed a Flutter app using OOP & MVC.",
        "Integrated REST API for real-time exchange rates.",
        "Designed with multi-screen navigation and good scalability.",
      ],
      github: "https://github.com/Kumbhkaran27/Flutter_Currency_Converter",
      categories: ["iOS & Android Development"],
    },
    {
      title: "Battleships",
      description: "Classic game developed in Flutter",
      image: "/Portfolio/battleship.png",
      period: "Apr 2024",
      technologies: ["Flutter", "API", "Mobile Game", "Real-time Updates"],
      detailedPoints: [
        "Created a mobile game with real-time game list view.",
        "Owned backend integration and optimized API endpoints.",
        "Ensured seamless user experience and efficient protocol handling.",
      ],
      github: "https://github.com/Kumbhkaran27/Flutter_Battleships",
      categories: ["iOS & Android Development"],
    },
    {
      title: "Personal Portfolio Website",
      description: "React + Tailwind personal portfolio site",
      image: "/Portfolio/portfolio.png",
      period: "Jun 2024",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "JavaScript"],
      detailedPoints: [
        "Built this responsive portfolio using React, Tailwind & Framer Motion.",
        "Animated UI components, structured skill cards, and dark mode integration.",
        "Showcases personal work and highlights experience.",
      ],
      github: "https://github.com/Kumbhkaran27/Portfolio",
      categories: ["Full Stack Development"],
    },
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) =>
          project.categories.includes(activeCategory)
        );

  const ProjectCard = ({ project, index }) => (
    <motion.div
      initial={isMobile ? {} : { opacity: 0, y: 20 }}
      animate={
        isMobile
          ? { opacity: 1, y: 0 }
          : inView
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: 20 }
      }
      transition={{ duration: 0.6, delay: 0.1 * index }}
      whileHover={isMobile ? {} : { scale: 1.03 }}
      className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow overflow-hidden flex flex-col"
    >
      <div className="relative h-48 w-full">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3 bg-white/90 px-3 py-1 rounded-full text-xs font-medium flex items-center">
          <Tag className="h-3 w-3 mr-1 text-pink-700" />
          {project.categories[0]}
        </div>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{project.period}</span>
        </div>
        <h3 className="text-xl font-bold text-pink-700 mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-gradient-to-tr from-pink-100 via-pink-200 to-purple-200 text-pink-900 rounded-md text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-auto pt-4 flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-pink-700 hover:underline flex items-center gap-1"
          >
            <Github className="h-4 w-4" /> Code
          </a>
          <button
            onClick={() => setSelectedProject(project)}
            className="text-sm text-pink-700 hover:underline flex items-center gap-1"
          >
            <Info className="h-4 w-4" /> Details
          </button>
        </div>
      </div>
    </motion.div>
  );

  return (
    <SectionWrapper id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={isMobile ? {} : { opacity: 0, y: 20 }}
          animate={
            isMobile
              ? { opacity: 1, y: 0 }
              : inView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold bg-gradient-to-tr from-pink-600 via-pink-700 to-purple-900 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="mt-2 h-1 w-20 bg-gradient-to-tr from-pink-600 via-pink-700 to-purple-900 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Here are some of the projects I've worked on that showcase my
            technical skills and problem-solving abilities.
          </p>
        </motion.div>

        <div className="flex justify-center mb-8 flex-wrap gap-2">
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm font-medium rounded-full border transition-colors duration-200 ${
                activeCategory === category
                  ? "bg-gradient-to-tr from-pink-600 via-pink-700 to-purple-900 text-white"
                  : "bg-white text-gray-800 border-gray-300 hover:bg-green-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-2 right-2 text-gray-500 hover:text-black"
              >
                ×
              </button>
              <h3 className="text-xl font-bold text-pink-700 mb-1">
                {selectedProject.title}
              </h3>
              <p className="text-sm text-purple-800 mb-2">
                {selectedProject.period}
              </p>
              <h4 className="font-medium mb-1">Technologies</h4>
              <div className="flex flex-wrap gap-2 mb-3">
                {selectedProject.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-gradient-to-tr from-pink-100 via-pink-200 to-purple-200 text-pink-900 rounded-md text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <h4 className="font-medium mb-1">Key Achievements</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                {selectedProject.detailedPoints.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
