import React from "react";
import "./Styles/Projects.css";

function Projects() {
  return (
    <div className="projects-container">
      <h1 className="project-title">Projekte</h1>
      <div className="projects-grid">
        <div className="project-card project-item">
          <img
            src="/pics/Hornets_Nest.png"
            alt="Hornets Nest"
            className="project-image project-img"
          />
          <div className="project-content project-details">
            <h3 className="project-title">Hornets Nest</h3>
            <p className="project-description">
              Hornets Nest war meine erste richtige Webseite. Mit ihr konnte ich
              das erste Mal mein Interesse an der Aviatik und den Spaß vom
              Programmieren einer Webseite miteinander verknüpfen. Mittlerweile
              würde ich einiges anders machen und nicht nur mit HTML und CSS
              Dateien, sondern mit REACT arbeiten. Trotzdem bin ich stolz auf
              das damalige Ergebnis, da es doch einen ersten Meilenstein in
              meiner Arbeit an Webseiten markiert.
            </p>
            <div className="project-links project-links-container">
              <a
                href="https://github.com/bien187/LB_293_2"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link project-link-btn"
              >
                Zum Code
                <span className="underline"></span>
              </a>
              <a
                href="https://bien187.github.io/LB_293_2/"
                target="_blank"
                rel="noopener noreferrer"
                className="website-link website-link-btn"
              >
                Zur Seite
                <span className="underline"></span>
              </a>
            </div>
          </div>
        </div>

        <div className="project-card project-item">
          <img
            src="/pics/Lachleitung.png"
            alt="Lachleitung"
            className="project-image project-img"
          />
          <div className="project-content project-details">
            <h3 className="project-title">Lachleitung</h3>
            <p className="project-description">
              Die Lachleitung ist eine WebApp mit Chat-Funktion. Der Benutzer
              kann sich mit Firestore via Googleaccount anmelden und dann in
              einem Chatroom mit anderen Benutzern kommunizieren. Die Chats
              werden verschlüsselt in Firestore gespeichert und sind so für den
              Admin nicht einsehbar.
            </p>
            <div className="project-links project-links-container">
              <a
                href="https://github.com/JaThHu/LA1303---Verschl-sselungsapp/tree/main"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link project-link-btn"
              >
                Zum Code
                <span className="underline"></span>
              </a>
              <a
                href="https://lachleitung.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="website-link website-link-btn"
              >
                Zur Seite
                <span className="underline"></span>
              </a>
            </div>
          </div>
        </div>

        <div className="project-card project-item">
          <img
            src="/pics/Ideen_Insel.png"
            alt="Ideeninsel"
            className="project-image project-img"
          />
          <div className="project-content project-details">
            <h3 className="project-title">Ideeninsel</h3>
            <p className="project-description">
              Die Ideensinsel ist eine Pinnwand für spontane Einfälle. Diese
              können über das Textfeld eingegeben und dann via den
              "Hinzufügen"-Button "angepinnt" werden. Dank der Firestore
              Integration werden diese Ideen auch während des Reloads der Seite
              gespeichert und bleiben "angepinnt", bis sie vom Benutzer wieder
              gelöscht werden.
            </p>
            <div className="project-links project-links-container">
              <a
                href="https://github.com/Goeschel18769/La-1304-IdeenInsel"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link project-link-btn"
              >
                Zum Code
                <span className="underline"></span>
              </a>
              <a
                href="https://ideeninsel.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="website-link website-link-btn"
              >
                Zur Seite
                <span className="underline"></span>
              </a>
            </div>
          </div>
        </div>

        <div className="project-card project-item">
          <img
            src="/pics/EscapeToDubai.png"
            alt="Escape to Dubai"
            className="project-image project-img"
          />
          <div className="project-content project-details">
            <h3 className="project-title">Escape to Dubai</h3>
            <p className="project-description">
              Escape to Dubai ist ein 2D-Jump-and-Run-Spiel programmiert in
              Unity. Das Ziel ist es, den Charakter durch die drei Level
              "Küttigen Bahnhof", "Basel Flughafen" und "Dubai" zu führen. Es
              gibt animierte Gegner und ein Coin-Collect-System mit Score.
              Außerdem bietet das Spiel einen Startscreen, eine Erklärung und
              natürlich einen Levelselector. Das Spiel wurde in Unity mit Hilfe
              von Unity-Presets und C# programmiert.
            </p>
            <div className="project-links project-links-container">
              <a
                href="https://github.com/xBl0oM/Escape-to-Dubai"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link project-link-btn"
              >
                Zum Code
                <span className="underline"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
