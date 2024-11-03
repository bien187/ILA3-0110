import React from "react";
import "./Styles/AboutMe.css";

const AboutMe = () => {
  return (
    <div className="aboutme-wrapper">
      <div className="aboutme-titel">
        <h1>Ben Müller</h1>
      </div>
      <section className="aboutme-section">
        <div className="aboutme-container">
          <div className="left-side">
            <div className="left-content">
              <h2>Meine Person</h2>
            </div>
          </div>
          <div className="right-side">
          <div class="placeholder"></div>

            <div className="info-box">
              <h3>Geburtsdatum</h3>
              <p>27. Februar 2007</p>
            </div>
            <hr />
            <div className="info-box">
              <h3>Wohnort</h3>
              <p>Lenzburg</p>
            </div>
            <hr />
            <div className="info-box">
              <h3>Ausbildung</h3>
              <div className="education">
                <p>3. Jahr Informatikmittelschule Aarau</p>
                <p>3 Jahre Bezirksschule</p>
                <p>6 Jahre Primarschule</p>
              </div>
            </div>
            <hr />
            <div className="info-box">
              <h3>Hobbies</h3>
              <div className="hobbies">
                <p>Sport</p>
                <p>Aviatik</p>
                <p>Fotografieren</p>
              </div>
            </div>
            <hr />
            <div className="info-box">
              <h3>Stärken</h3>
              <div className="strengths">
                <p>teamorientiert</p>
                <p>organisationsstark</p>
                <p>neugierig</p>
                <p>kreativ</p>
                <p>kommunikationsstark</p>
                <p>lernbereit</p>
              </div>
            </div>
          </div>
        </div>
        {/* Skills Section */}
        <div className="skills-container">
          <h2>Meine Fähigkeiten</h2>
          {/* Frontend Skills */}
          <h3>Frontend</h3>
          <div className="skill">
            <span>HTML</span>
            <div className="progress-bar">
              <div className="progress" style={{ width: "75%" }}></div>
            </div>
          </div>
          <div className="skill">
            <span>CSS</span>
            <div className="progress-bar">
              <div className="progress" style={{ width: "75%" }}></div>
            </div>
          </div>
          <div className="skill">
            <span>ReactJS</span>
            <div className="progress-bar">
              <div className="progress" style={{ width: "50%" }}></div>
            </div>
          </div>
          <div className="skill">
            <span>JavaScript</span>
            <div className="progress-bar">
              <div className="progress" style={{ width: "50%" }}></div>
            </div>
          </div>
          <div className="skill">
            <span>Tailwind CSS</span>
            <div className="progress-bar">
              <div className="progress" style={{ width: "25%" }}></div>
            </div>
          </div>
          <hr />
          {/* Backend Skills */}
          <h3>Backend</h3>
          
          <div className="skill">
            <span>C#</span>
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
          <hr />
          {/* Datenbanken */}
          <h3>Datenbanken</h3>
          <div className="skill">
            <span>MongoDB</span>
            <div className="progress-bar">
              <div className="progress" style={{ width: "50%" }}></div>
            </div>
          </div>
          <div className="skill">
            <span>SQL</span>
            <div className="progress-bar">
              <div className="progress" style={{ width: "50%" }}></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
