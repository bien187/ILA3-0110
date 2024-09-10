import React, { useEffect } from "react";
import "./Styles/Projects.css";

function Projects() {
  return (
    <div>
      <div className="projects-container">
        <h1 className="project-title">Projekte</h1>
        <div className="projects-grid">{/* Projektkarten */}</div>
      </div>
      <footer className="footer">
        Ben Müller- 2024 - Einige Rechte vorbehalten
      </footer>
    </div>
  );
}

export default Projects;
