import React from "react";
import profilePic from "../images/profile.jpg";

const Hero = () => {
  return (
    <section id="hero">
      <img src={profilePic} alt="Profile" className="profile-pic" />
      <h1>Hello, I'm Om Singh Rathod</h1>
      <p>Frontend Developer | JavaScript Enthusiast | Web Designer</p>
      <a href="/resume.pdf" target="_blank" className="btn">
        Download Resume
      </a>
    </section>
  );
};

export default Hero;
