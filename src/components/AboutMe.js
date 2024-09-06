import React from "react";
import "./Styles/AboutMe.css";

const AboutMe = () => {
  return (
    <div className="aboutme-wrapper">
      {/* About Me Section */}
      <section className="aboutme-section">
        <div className="aboutme-container">
          <div className="left-side">
            <div className="left-content">
              <h1>Ben Müller</h1>
              <h2>Das bin ich:</h2>
            </div>
          </div>
          <div className="right-side">
            <div className="info-box">
              <h3>Alter</h3>
              <p>17 Jahre</p>
            </div>
            <div className="info-box">
              <h3>Geburtsdatum</h3>
              <p>27. Februar 2007</p>
            </div>
            <div className="info-box">
              <h3>Ausbildung</h3>
              <p>Informatikmittelschule Aarau</p>
            </div>
            <div className="info-box">
              <h3>Hobbies</h3>
              <p>Sport, Aviatik & Fotografieren</p>
            </div>
            <div className="info-box">
              <h3>Wohnort</h3>
              <p>Lenzburg</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <h2>Meine Fähigkeiten</h2>

        {/* Skill Level Headers 
        <div className="skill-levels">
          <span>Grundkenntnisse</span>
          <span>Fortgeschrittene Kenntnisse</span>
          <span>Erfahren</span>
          <span>Experte</span>
        </div>
          */}
        <div className="skills-container">
          {/* Frontend Skills */}
          <h3>Frontend</h3>
          
          <div className="skill">
            <span>HTML</span>
            <div className="progress-bar">
              <div className="progress" style={{ width: "100%" }}></div>
            </div>
          </div>
          <div className="skill">
            <span>CSS</span>
            <div className="progress-bar">
              <div className="progress" style={{ width: "100%" }}></div>
            </div>
          </div>
          <div className="skill">
            <span>ReactJS</span>
            <div className="progress-bar">
              <div className="progress" style={{ width: "75%" }}></div>
            </div>
          </div>  
          <div className="skill">
            <span>JavaScript</span>
            <div className="progress-bar">
              <div className="progress" style={{ width: "75%" }}></div>
            </div>
          </div>
          <div className="skill">
            <span>Tailwind CSS</span>
            <div className="progress-bar">
              <div className="progress" style={{ width: "50%" }}></div>
            </div>
          </div>
        

          {/* Backend Skills */}
          <h3>Backend</h3>
          <div className="skill">
            <span>.NET</span>
            <div className="progress-bar">
              <div className="progress" style={{ width: "75%" }}></div>
            </div>
          </div>
          <div className="skill">
            <span>Firebase</span>
            <div className="progress-bar">
              <div className="progress" style={{ width: "50%" }}></div>
            </div>
          </div>

          {/* Datenbanken */}
          <h3>Datenbanken</h3>
          <div className="skill">
            <span>MongoDB</span>
            <div className="progress-bar">
              <div className="progress" style={{ width: "75%" }}></div>
            </div>
          </div>
          <div className="skill">
            <span>SQL</span>
            <div className="progress-bar">
              <div className="progress" style={{ width: "25%" }}></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;