import React from "react";
import './style.css'

const Skills = () => {
  const skills = ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Bootstrap", "Firebase", "API Integration", "Git/GitHub", "Vercel/Netlify"];

  return (
    <section id="skills" className="skills">
      <h2>Technical Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">{skill}</div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
