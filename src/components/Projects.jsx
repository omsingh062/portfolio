import React from "react";
import project1 from "../images/project1.png";
import project2 from "../images/project2.png";
import project3 from "../images/project3.png";

const Projects = () => {
  const projectList = [
    {
      img: project1,
      title: "Weather App",
      description:
        "A responsive weather app using OpenWeather API, HTML, CSS, and JavaScript.",
      link: "https://weather-i9994ivbp-omsingh062s-projects.vercel.app/",
    },
    {
      img: project2,
      title: "To-Do List App",
      description:
        "An interactive to-do list web app with task management features.",
      link: "https://todo-app-git-main-omsingh062s-projects.vercel.app/",
    },
    {
      img: project3,
      title: "Gaming Hub 🎮",
      description:
        "A gaming website that includes fun mini-games like Tic Tac Toe, Rock Paper Scissors, and more — all in one stylish hub.",
      link: "https://gaming-hubs.onrender.com/",
    },
  ];

  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="project-gallery">
        {projectList.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <div className="project-image">
              <img src={project.img} alt={project.title} />
              <div className="overlay">
                <span>View Project</span>
              </div>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
