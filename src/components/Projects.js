import React from "react";
import "./Styles/Projects.css";

function ProjectCard({ project }) {
  return (
    <div className="project-card project-item">
      <img
        src={project.image}
        alt={project.title}
        className="project-image project-img"
      />
      <div className="project-content project-details">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-links project-links-container">
          {project.links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link project-link-btn"
            >
              {link.text}
              <span className="underline"></span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const projects = [
   
    {
      id: 2,
      title: "Lachleitung",
      description:
        "Die Lachleitung ist eine WebApp mit Chat-Funktion. Der Benutzer kann sich mit Firestore via Googleaccount anmelden und dann in einem Chatroom mit anderen Benutzern kommunizieren. Die Chats werden verschlüsselt in Firestore gespeichert und sind so für den Admin nicht einsehbar.",
      image: "/pics/Lachleitung.png",
      links: [
        {
          href: "https://github.com/JaThHu/LA1303---Verschl-sselungsapp/tree/main",
          text: "Zum Code",
        },
        {
          href: "https://lachleitung.netlify.app/",
          text: "Zur Seite",
        },
      ],
    },
    {
      id: 3,
      title: "Ideeninsel",
      description:
        "Die Ideensinsel ist eine Pinnwand für spontane Einfälle. Diese können über das Textfeld eingegeben und dann via den Hinzufügen-Button angepinnt werden. Dank der Firestore Integration werden diese Ideen auch während des Reloads der Seite gespeichert und bleiben angepinnt, bis sie vom Benutzer wieder gelöscht werden.",
      image: "/pics/Ideen_Insel.png",
      links: [
        {
          href: "https://github.com/Goeschel18769/La-1304-IdeenInsel",
          text: "Zum Code",
        },
        {
          href: "https://ideeninsel.netlify.app/",
          text: "Zur Seite",
        },
      ],
    },
    {
      id: 5,
      title: "Ideeninsel V2",
      description:
        "Die Ideeninsel V2 ist eine komplett überarbeitete und geupgradete Version der Ideeninsel. Neben einem neuen GUI, kann sich der Benutzer einen eigenen Account erstellen und sich mit diesem einloggen, er kann Ideen up- und downvoten und sich die geposteten Ideen in einem PDF ausgeben lassen.",
      image: "/pics/ideeninselV2.png",
      links: [
        {
          href: "https://github.com/Goeschel18769/La-1304-IdeenInsel",
          text: "Zum Code",
        },
        {
          href: "https://ideeninsel2.netlify.app/",
          text: "Zur Seite",
        },
      ],
    },
    {
      id: 4,
      title: "Escape to Dubai",
      description:
        "Escape to Dubai ist ein 2D-Jump-and-Run-Spiel welches in Unity programmiert wurde. Das Ziel ist es, den Charakter durch die drei Level Küttigen Bahnhof, Basel Flughafen und Dubai zu führen. Es gibt animierte Gegner, welche den Spieler angreifen und ein Coin-Collect-System mit Score. Außerdem bietet das Spiel einen Startscreen, eine Erklärung und natürlich einen Levelselector. Das Spiel wurde in Unity mit Hilfe von Unity-Presets und C# programmiert.",
      image: "/pics/EscapeToDubai.png",
      links: [
        {
          href: "https://github.com/xBl0oM/Escape-to-Dubai",
          text: "Zum Code",
        },
      ],
    },

 {
      id: 1,
      title: "Hornets Nest",
      description:
        "Hornets Nest war meine erste richtige Webseite. Mit ihr konnte ich das erste Mal mein Interesse an der Aviatik und den Spaß den ich am Programmieren habe in einer Webseite miteinander verbinden. Mittlerweile würde ich einiges anders machen und nicht nur mit HTML und CSS Dateien, sondern mit REACT arbeiten. Trotzdem bin ich stolz auf das damalige Ergebnis, da es doch einen ersten Meilenstein in meiner Arbeit an Webseiten markiert.",
      image: "/pics/Hornets_Nest.png",
      links: [
        {
          href: "https://github.com/bien187/LB_293_2",
          text: "Zum Code",
        },
        {
          href: "https://bien187.github.io/LB_293_2/",
          text: "Zur Seite",
        },
      ],
    },
  ];

  return (
    <div className="projects" style={{ marginLeft: '9.8%' }}>
      <h1 className="project-title">Projekte</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {projects.map((project, index) => (
          <div key={project.id} style={{ flex: '0 0 33.33%', boxSizing: 'border-box', padding: '10px' }}>
            <div className="project-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <ProjectCard project={project} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
