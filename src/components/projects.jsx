import React, { useState, useEffect } from "react";
import {
  ExternalLink,
  Github,
  Code,
  Database,
  Smartphone,
  Shield,
  Droplets,
  GraduationCap,
  Monitor,
  ChevronLeft,
  ChevronRight,
  Contact,
  ShoppingCart,
  Scissors,
} from "lucide-react";
import { VerticalTiltShiftShader } from "three/examples/jsm/Addons.js";

const prefix = process.env.NODE_ENV === "production" ? "/MyPortfolio" : "";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState({});

  // Auto-advance slideshow every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => {
        const newIndex = { ...prev };
        projects.forEach((project) => {
          if (project.images && project.images.length > 1) {
            const currentIndex = newIndex[project.id] || 0;
            const nextIndex = (currentIndex + 1) % project.images.length;
            newIndex[project.id] = nextIndex;
          }
        });
        return newIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const projects = [
    {
      id: 6,
      title: "Embula – Restaurant Website",
      description:
        "Embula is a restaurant website featuring a dynamic food menu showcase, shopping cart, and secure online payments. It includes a table reservation system allowing customers to pre-book dine-in slots and an AI-powered chatbot for menu navigation, reservations, and customer support. Additional pages like Contact Us and Feedback improve customer interaction and service quality. The frontend uses Next.js with Tailwind CSS, and the backend is powered by Spring Boot with MySQL integration.",
      techStack: ["Next.js", "Tailwind CSS", "Spring Boot", "MySQL", "AI"],
      icon: ShoppingCart, // you can pick an appropriate icon
      gradient: "from-yellow-400 to-orange-500",
      github: "https://github.com/Embula-Project",
      category: "Full-Stack Development",
      images: [
        {
          url: `portfolio_images/embula home page.png`,
          alt: "Homepage of emmbula restaurant",
        },
        {
          url: `portfolio_images/embula2.png`,
          alt: "Reservation Page with Table Selection",
        },
        {
          url: `portfolio_images/embula3.png`,
          alt: "Reservation confirmation page",
        },
        {
          url: `portfolio_images/table reservation.png`,
          alt: "table selection modal",
        },
      ],
    },
    {
      id: 5,
      title: "PresCrypt – Doctor-Patient Management System",
      description:
        "PresCrypt is a full-stack healthcare management system designed to securely connect patients, doctors, and administrators on a unified platform. It features secure authentication and role-based access, patient registration, appointment scheduling, health record access, and prescription management. The system includes an AI-powered chatbot for navigation and support, real-time doctor availability, video consultations, and integrated communication using SignalR. Admins can manage doctor approvals and access control, while patients can grant or revoke consent for doctors to view their health records. The backend uses ASP.NET Core with JWT-based authorization, and the frontend is built with Next.js and Tailwind CSS. PresCrypt also integrates with OpenMRS for external medical record systems and includes strong security features.",
      techStack: ["ASP.NET Core", "C#", "Next.js", "MS SQL", "Flask", "AI"],
      icon: Shield,
      gradient: "from-red-500 to-pink-500",
      github: "https://github.com/TechGenPioneers",
      category: "Full-Stack Development",
      images: [
        {
          url: `portfolio_images/prescrypt-1.jpg`,
          alt: "Login Dashboard",
        },
        {
          url: `portfolio_images/prescrypt-2.jpg`,
          alt: "Patient Records",
        },
        {
          url: `portfolio_images/prescrypt-3.png`,
        },

      ],
    },
    {
      id: 7,
      title: "CarVo – Vehicle Service Management System ",
      description:
        "CarVo is a vehicle service management platform designed for employees, customers, and administrators to manage service tasks and workflows efficiently. Features include task tracking, work logs, time tracking, and part requests. The frontend was built with Next.js and Tailwind CSS, while backend APIs were developed using Spring Boot and MySQL.",
      techStack: ["Spring Boot", "Next.js", "Tailwind CSS", "MySQL"],
      gradient: "from-blue-500 to-indigo-500",
      github: "https://github.com/ravndu-dlshan/asms-frontend",
      category: "Full-Stack Development",
      images: [
        {
          url: `portfolio_images/carvo3.jpeg`,
        },
        {
          url: `portfolio_images/carvo1.png`,
          alt: "Employee Portal Dashboard",
        },
        {
          url: `portfolio_images/carvo22.jpeg`,
          alt: "Part Request Section",
        },
        

      ],
    },
    {
      id: 1,
      title: "Personal Portfolio Website",
      description:
        "This portfolio website is a modern, responsive web application built using Next.js and Tailwind CSS. It showcases my projects, technical skills, and about me in a clean and interactive layout. The site supports smooth navigation, project filtering, and a dark theme. It's deployed on GitHub Pages with a custom asset prefix and export configuration to support static hosting. The project emphasizes accessibility, performance optimization, and developer-friendly practices.",
      techStack: ["Next.js", "Tailwind CSS"],
      icon: Code,
      gradient: "from-pink-500 to-cyan-500",
      github: "https://github.com/tharushidsilva/MyPortfolio",
      category: "Frontend Development",
      images: [
        {
          url: `portfolio_images/portfolio.png`,
          alt: "Portfolio Homepage",
        },
        {
          url: `portfolio_images/portfolio1.png`,
          alt: "Portfolio Projects",
        },
      ],
    },
    {
      id: 8,
      title: "LeaderTailors Website (Client Project)",
      description:
        "LeaderTailors is a business website for a company in Katubedda, Sri Lanka, aimed at digitalizing operations and improving customer engagement. It features a Blazer Rental module, allowing customers to view, select, and reserve blazers online with real-time availability. The frontend is responsive, user-friendly, and built with Next.js and Tailwind CSS.",
      techStack: ["Next.js", "Tailwind CSS"],
      icon: Scissors,  // pick a related icon
      gradient: "from-green-400 to-teal-500",
      github: "https://github.com/YourUsername/LeaderTailors",
      website: "https://leader-tailors.vercel.app/",
      category: "Frontend Development",
      images: [
        {
          url: `portfolio_images/leader tailors1.png`,
          alt: "Blazer Rental Homepage",
        },
        {
          url: `portfolio_images/leadertailors2.png`,
          alt: "Blazer Selection and Reservation",
        },
        {
          url: `portfolio_images/leadertailors3.png`,
          alt: "Reservation Confirmation",
        },
        {
          url: `portfolio_images/leadertailors4.png`, 
          alt: "Contact Us Page",
        }
      ],
    },
    {
  id: 9,
  title: "SketchFlow – Collaborative Learning Platform",
  description:
    "SketchFlow is a real-time collaborative learning platform that allows multiple users to interact simultaneously. It features live text and voice chat with real time notifications, a shared whiteboard for collaborative drawing, and interactive session management. The system uses network programming concepts to enable real-time communication between users, ensuring smooth synchronization of messages, drawings, and session states. Ideal for group learning, brainstorming sessions, and collaborative projects.",
  techStack: ["Java", "Socket Programming", "Network Programming", "Multithreading"],
  gradient: "from-purple-500 to-indigo-500",
  github: "https://github.com/NPSketchFlow",
  category: "Network Programming / Full-Stack Development",
  images: [
    {
      url: `portfolio_images/sketchflow-1.jpg`,
      alt: "Real-time Whiteboard Interface",
    },
    {
      url: `portfolio_images/sketchflow-2.jpg`,
      alt: "Text and Voice Chat Feature",
    },
  ],
},


    {
      id: 2,
      title: "Water Tank Cleaning System",
      description:
        "This Level 1 microcontroller-based hardware project was developed to transform traditional water tank cleaning by offering a fully automated, efficient, and hygienic solution. Motivated by the real-world challenges people face with manual tank cleaning, our team conducted extensive research to design an innovative system aimed at eliminating manual labor, reducing contamination risks, and ensuring safer water usage.The system features with advanced motorized lid integrating,Rotating cleaning brushes,High-pressure water pumps,Sensor units to monitor water levels and cleaning progressand A central Arduino microcontroller for complete automation",
      techStack: ["Arduino", "C++", "IoT", "Sensors"],
      icon: Droplets,
      gradient: "from-blue-400 to-teal-500",
      category: "IoT & Hardware",
      images: [
        {
          url: `portfolio_images/watertank2.jpg`,
          alt: "Arduino Setup",
        },
        {
          url: `portfolio_images/watertank1.jpg`,
          alt: "Water Tank System",
        },
      ],
    },

    {
      id: 3,
      title: "School Information Management System",
      description:
        "Full-stack web application for managing teacher and student data using Angular, Node.js/Express, and SQLite. Includes complete CRUD operations and responsive user interface. Built as capstone project.",
      techStack: ["Angular", "Node.js", "Express", "SQLite"],
      icon: GraduationCap,
      gradient: "from-purple-500 to-indigo-500",
      github:
        "https://github.com/TharushiDSilva/assignment---capstone-project-sandareka",
      category: "Full-Stack Development",
      images: [
        {
          url: `portfolio_images/school1.png`,
          alt: "Dashboard Overview",
        },
      ],
    },
    {
      id: 4,
      title: "FlagX – Smartphone Comparison Platform",
      description:
        "Built with React, Ballerina, and MongoDB, this platform provides real-time flagship smartphone comparisons and launch updates. Data fetched via Ballerina APIs from Apple/Samsung sources.",
      techStack: ["React", "Ballerina", "MongoDB", "APIs"],
      icon: Smartphone,
      gradient: "from-green-500 to-emerald-500",
      github: "#",
      category: "Web Development",
      images: [
        {
          url: `portfolio_images/flagx1.png`,
          alt: "Smartphone Comparison",
        },
        { url: `portfolio_images/flagx2.png`, alt: "Launch Updates" },
      ],
    },
  ];

  const techStackColors = {
    "Next.js": "bg-black text-white",
    "Tailwind CSS": "bg-cyan-500 text-white",
    React: "bg-blue-500 text-white",
    JavaScript: "bg-yellow-500 text-black",
    Arduino: "bg-teal-600 text-white",
    "C++": "bg-blue-600 text-white",
    IoT: "bg-green-600 text-white",
    Sensors: "bg-orange-500 text-white",
    Angular: "bg-red-600 text-white",
    "Node.js": "bg-green-500 text-white",
    Express: "bg-gray-700 text-white",
    SQLite: "bg-blue-400 text-white",
    Ballerina: "bg-purple-600 text-white",
    MongoDB: "bg-green-700 text-white",
    APIs: "bg-indigo-500 text-white",
    "ASP.NET Core": "bg-purple-700 text-white",
    "C#": "bg-purple-500 text-white",
    "MS SQL": "bg-red-700 text-white",
    Flask: "bg-gray-800 text-white",
    AI: "bg-gradient-to-r from-purple-500 to-pink-500 text-white",
  };

  const nextImage = (projectId) => {
    const project = projects.find((p) => p.id === projectId);
    if (project && project.images.length > 1) {
      setCurrentImageIndex((prev) => ({
        ...prev,
        [projectId]: ((prev[projectId] || 0) + 1) % project.images.length,
      }));
    }
  };

  const prevImage = (projectId) => {
    const project = projects.find((p) => p.id === projectId);
    if (project && project.images.length > 1) {
      setCurrentImageIndex((prev) => ({
        ...prev,
        [projectId]:
          ((prev[projectId] || 0) - 1 + project.images.length) %
          project.images.length,
      }));
    }
  };

  return (
    <section
      id="projects"
      className="relative py-20 px-6 min-h-screen"
      style={{
        background:
          "linear-gradient(135deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))",
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-8 h-8 bg-black-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-8 h-8 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-40 left-1/2 w-8 h-8 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
      </div>

      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-200 max-w-3xl mx-auto text-lg">
            A showcase of my technical journey through various domains - from
            web development to IoT systems, each project represents a unique
            challenge and learning experience.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20 ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } flex flex-col lg:flex`}
              style={{
                animationDelay: `${index * 150}ms`,
                animation: "fadeInUp 0.6s ease-out forwards",
              }}
            >
              {/* Project Image - Fixed height container */}
              <div className="lg:w-1/2 relative overflow-hidden">
                <div
                  className="w-full h-80 md:h-96 lg:h-full lg:min-h-[400px] relative bg-gray-900/50 flex items-center justify-center"
                  style={{
                    minHeight: "320px", // Ensures consistent height on mobile
                  }}
                >
                  {project.images && project.images.length > 0 ? (
                    <>
                      {/* Image Container with Fade Transition */}
                      <div className="absolute inset-0 flex items-center justify-center p-4">
                        {project.images.map((image, imgIndex) => (
                          <img
                            key={imgIndex}
                            src={image.url}
                            alt={image.alt}
                            className={`absolute max-w-full max-h-full object-contain rounded-lg shadow-lg transition-all duration-700 ease-in-out transform ${
                              (currentImageIndex[project.id] || 0) === imgIndex
                                ? "opacity-100 scale-100"
                                : "opacity-0 scale-95"
                            }`}
                            style={{
                              maxHeight: "calc(100% - 2rem)",
                              maxWidth: "calc(100% - 2rem)",
                            }}
                            onError={(e) => {
                              console.log(
                                `Failed to load image: ${e.target.src}`
                              );
                              e.target.style.display = "none";
                            }}
                          />
                        ))}
                      </div>

                      {/* Fallback gradient background */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 -z-10`}
                      />

                      {/* Navigation arrows for multiple images */}
                      {project.images.length > 1 && (
                        <>
                          <button
                            onClick={() => prevImage(project.id)}
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full opacity-70 hover:opacity-100 transition-all duration-300 z-10"
                          >
                            <ChevronLeft className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => nextImage(project.id)}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full opacity-70 hover:opacity-100 transition-all duration-300 z-10"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </button>

                          {/* Image indicators */}
                          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                            {project.images.map((_, imgIndex) => (
                              <button
                                key={imgIndex}
                                onClick={() =>
                                  setCurrentImageIndex((prev) => ({
                                    ...prev,
                                    [project.id]: imgIndex,
                                  }))
                                }
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                  (currentImageIndex[project.id] || 0) ===
                                  imgIndex
                                    ? "bg-white scale-125"
                                    : "bg-white/50 hover:bg-white/75"
                                }`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </>
                  ) : (
                    // Fallback when no images are provided
                    <div
                      className={`absolute inset-0 w-full h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
                    >
                      <project.icon className="w-16 h-16 text-white/70" />
                    </div>
                  )}

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                </div>
              </div>

              {/* Project Content */}
              <div className="lg:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                {/* Category Tag */}
                <div className="inline-block self-start px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300 mb-4 border border-white/20">
                  {project.category}
                </div>

                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-pink-300 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 line-clamp-6 md:line-clamp-none">
                  {project.description}
                </p>

              {  /* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
                          {project.techStack.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className={`px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium border border-white/20 ${
                            techStackColors[tech] || "bg-gray-600 text-white"
                            } hover:scale-105 transition-transform duration-200`}
                          >
                            {tech}
                          </span>
                          ))}
                        </div>

                        {/* Buttons side-by-side (no new line) */}
                        {(project.github || project.website) && (
                          <div className="flex items-center gap-4 flex-nowrap overflow-x-auto">
                          {project.github && project.github !== "#" && (
                            <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2 md:space-x-3 bg-gray-800/50 hover:bg-gray-700/60 text-white py-2 md:py-3 px-4 md:px-6 rounded-lg border border-gray-600/50 hover:border-gray-500 transition-all duration-300 text-xs md:text-sm font-medium group/btn hover:scale-105 whitespace-nowrap"
                            >
                            <Github className="w-4 h-4 md:w-5 md:h-5 group-hover/btn:rotate-12 transition-transform duration-300" />
                            <span>View Code</span>
                            </a>
                          )}

                          {project.website && (
                            <a
                            href={project.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2 md:space-x-3 bg-gray-800/50 hover:bg-gray-700/60 text-white py-2 md:py-3 px-4 md:px-6 rounded-lg border border-gray-600/50 hover:border-gray-500 transition-all duration-300 text-xs md:text-sm font-medium group/btn hover:scale-105 whitespace-nowrap"
                            >
                            <ExternalLink className="w-4 h-4 md:w-5 md:h-5 group-hover/btn:rotate-12 transition-transform duration-300" />
                            <span>Visit Website</span>
                            </a>
                          )}
                          </div>
                        )}
                        </div>

                        {/* Hover Effect Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
              ></div>
            </div>
               ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-6 {
          display: -webkit-box;
          -webkit-line-clamp: 6;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Projects;
