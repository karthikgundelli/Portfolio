import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import './style.css'

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-logo">Karthik</div>
      <div className={`nav-links ${navOpen ? "open" : ""}`}>
        <Link to="home" smooth={true} duration={500} onClick={() => setNavOpen(false)}>Home</Link>
        <Link to="about" smooth={true} duration={500} onClick={() => setNavOpen(false)}>About</Link>
        <Link to="skills" smooth={true} duration={500} onClick={() => setNavOpen(false)}>Skills</Link>
        <Link to="projects" smooth={true} duration={500} onClick={() => setNavOpen(false)}>Projects</Link>
        <Link to="experience" smooth={true} duration={500} onClick={() => setNavOpen(false)}>Experience</Link>
        <Link to="education" smooth={true} duration={500} onClick={() => setNavOpen(false)}>Education</Link>
      </div>
      <div className="nav-toggle" onClick={() => setNavOpen(!navOpen)}>
        {navOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
