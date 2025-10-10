import React from "react";
import "./style.css";

const Interests = () => {
  const interests = ["UI/UX Design", "Frontend Development", "Reading Tech Blogs", "Gaming", "Traveling", "Learning AI/ML"];

  return (
    <section id="interests" className="interests">
      <h2>Interests</h2>
      <div className="interests-container">
        {interests.map((interest, index) => (
          <div key={index} className="interest-card">
            {interest}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Interests;
