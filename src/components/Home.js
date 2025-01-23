import React from "react";
import "./Styles/Home.css";
import Projects from "./Projects";
import Hobbies from "./Hobbies";
import Contact from "./Contact";

function Home() {
  return (
    <div className="home">
      <h1 className="home-title">Welcome to My Portfolio</h1>
      <Projects />
      <Hobbies />
      <Contact />
    </div>
  );
}

export default Home;
