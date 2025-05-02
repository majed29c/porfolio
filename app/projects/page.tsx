import React from "react";

const projects = [
  {
    title: "Care4Pets Clinic",
    description: "A comprehensive pet store and clinic management system for pet lovers.",
    logo: "🐾", // Emoji for pets
    link: "https://github.com/majed29c/care4pets-clinic", // Link to the project page
  },
  {
    title: "ThinkLink",
    description: "An advanced learning platform designed to make education accessible and engaging.",
    logo: "📚", // Emoji for learning
    link: "https://github.com/majed29c/ThinkLink",
  },
  {
    title: "Spaceship System",
    description: "A futuristic system for managing spaceships and intergalactic operations.",
    logo: "🚀", // Emoji for spaceship
    link: "/projects/spaceship",
  },
  {
    title: "Chatbot Using GROQ",
    description: "An intelligent chatbot powered by GROQ for seamless communication.",
    logo: "🤖", // Emoji for chatbot
    link: "https://github.com/Yasmine-Zahreddine/SpaceshipManagementSystem",
  },
  {
    title: "Professional Portfolio",
    description: "A professional portfolio showcasing advanced design and functionality.",
    logo: "💼", // Emoji for portfolio
    link: "https://github.com/majed29c/porfolio",
  },
  {
    title: "Pizzaliano",
    description: "A modern pizza shop management system with online ordering capabilities.",
    logo: "🍕", // Emoji for pizza
    link: "https://github.com/majed29c/pizzaliano",
  },
];

const ProjectsPage = () => {
  return (
    <div className="relative z-10 min-h-screen text-white px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border-white/10 bg-white/5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col items-center"
          >
            <div className="text-5xl mb-4">{project.logo}</div> {/* Emoji as logo */}
            <h2 className="text-2xl font-semibold mb-4 text-center">
              {project.title}
            </h2>
            <p className="text-gray-400 text-center flex-grow">{project.description}</p>
            {/* Link before the button */}
            <a
              href={project.link}
              className="text-blue-400 hover:underline mt-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More
            </a>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
            <button className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white transition-colors duration-300">
              View Details
            </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;