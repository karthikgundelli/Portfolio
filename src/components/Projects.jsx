import React from "react";
import './style.css'

const Projects = () => {
  const projects = [
    {
      title: "EstateMitra – Real Estate Platform",
      description: "Developed a real estate web app enabling users to buy and sell land without intermediaries. Implemented user authentication and database storage using Firebase. Designed responsive UI components enhancing usability across all devices. Deployed on Vercel with optimized performance.",
      tech: "React.js, Firebase, Bootstrap, Vercel",
    },
    {
      title: "GreenNest – Organic Grocery E-commerce App",
      description: "Built an online grocery platform inspired by Blinkit with a modern and clean UI. Integrated real-time database for product listing and cart management using Firebase. Optimized loading performance and responsiveness for mobile-first experience. Deployed seamlessly using Vercel ensuring scalability.",
      tech: "React.js, Firebase, Bootstrap",
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((proj, index) => (
          <div key={index} className="project-card">
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <small><strong>Tech Stack:</strong> {proj.tech}</small>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
