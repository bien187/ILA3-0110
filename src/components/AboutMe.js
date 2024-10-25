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
              <h2>Meine Person, Meine Fähigkeiten</h2>
            </div>
          </div>
          <div className="right-side">
            <div className="info-box">
              <h3>Geburtsdatum</h3>
              <p>27. Februar 2007</p>
            </div>
            <div className="info-box">
              <h3>Wohnort</h3>
              <p>Lenzburg</p>
            </div>
            <div className="info-box">
              <h3>Hobbies</h3>
              <p>Sport, Aviatik & Fotografieren</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
