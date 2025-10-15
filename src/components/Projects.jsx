import React from "react";
import project1 from "../images/project1.png";
import project2 from "../images/project2.png";

const Projects = () => {
  const projectList = [
    {
      img: project1,
      title: "Weather App",
      description:
        "A responsive weather app using OpenWeather API, HTML, CSS, and JavaScript.",
    },
    {
      img: project2,
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
          <div key={index} className="project-card">
            <img src={project.img} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
