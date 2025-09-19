import React from "react";
import "./assets/styles/App.css";
import Header from "./components/Header";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Achievements />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;