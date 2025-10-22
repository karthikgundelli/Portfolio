import React from "react";
import './style.css'

const Projects = () => {
  const projects = [
    {
       title:"FurniFlex – E-commerce Furniture Store",
      description: "FurniFlex is a fully responsive, modern e-commerce furniture store built with React.js.It allows users to browse products, filter by category, search by name, add items to cart, and manage cart quantities.The project also features a light/dark theme toggle, a mobile-friendly navbar with hamburger menu, and a professional UI/UX with animations and responsive design.This project demonstrates strong React fundamentals, state management using Context API, and front-end development skills, making it resume-ready for job applications" ,
       tech:"React.js, React Router DOM, Context API",
       link: "https://furni-flex-com.vercel.app/",
      
    },
    {
      title: "EstateMitra – Real Estate Platform",
      description: "Developed a real estate web app enabling users to buy and sell land without intermediaries. Implemented user authentication and database storage using Firebase. Designed responsive UI components enhancing usability across all devices. Deployed on Vercel with optimized performance.",
      tech: "React.js, Firebase, Bootstrap, Vercel",
      link: "https://estate-mitra.vercel.app/",
    },
    {
      title: "GreenNest – Organic Grocery E-commerce App",
      description: "Built an online grocery platform inspired by Blinkit with a modern and clean UI. Integrated real-time database for product listing and cart management using Firebase. Optimized loading performance and responsiveness for mobile-first experience. Deployed seamlessly using Vercel ensuring scalability.",
      tech: "React.js, Firebase, Bootstrap",
      link:"https://green-nest-kappa.vercel.app/login",
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
            <a href={proj.link}>click here to preview</a>
            <small><strong>Tech Stack:</strong> {proj.tech}</small>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;



