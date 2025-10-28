import React from "react";
import { motion } from "framer-motion";
import project1 from "../images/project1.png";
import project2 from "../images/project2.png";
import "./Projects.css"; // <-- make sure to create this CSS file

const Projects = () => {
  const projectList = [
    {
      img: project1,
      href: "https://weather-i9994ivbp-omsingh062s-projects.vercel.app/",
      title: "Weather App",
      description:
        "A responsive weather app using OpenWeather API, HTML, CSS, and JavaScript.",
    },
    {
      img: project2,
      href: "https://todo-app-omega-psi.vercel.app/",
      title: "To-Do List App",
      description:
        "An interactive to-do list web app with task management features.",
    },
  ];

  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="project-gallery">
        {projectList.map((project, index) => (
          <motion.a
            key={index}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img src={project.img} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
