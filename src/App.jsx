import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experince";
import Education from "./components/Education";
import Interests from "./components/Interests";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About/>
      <Skills />
      <Projects/>
      <Experience />
      <Education/>
      <Interests/>
      <Footer />
    </div>
  );
}

export default App;
