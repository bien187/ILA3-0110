import React from "react";
import "./Styles/Hobbies.css";

function Hobbies() {
  return (
    <div className="hobbies-main-container">
      <h1 className="hobbies-heading">Meine Hobbies</h1>
      <div className="hobbies-item-grid">
        <div className="hobbies-card sport-card">
          <div className="hobbies-icon sport-icon"></div>
          <h2 className="hobbies-title">Sport</h2>
          <p className="hobbies-description">
            Ich war schon immer sportbegeistert und habe von Turnverein über
            Tennis und Handball schon vieles ausprobiert. Letztendlich blieb ich
            mit 11 Jahren beim Leichathletik hängen und ich zeigte schnell
            Talent. Nach 4 Jahren und einigen Medaillen durfte ich dem Aargauer
            Vorkader beitreten und fasste auch dort schnell Fuss. Mit 15 Jahren
            schaffte ich bei einer Regionalausscheidung die Kantonslimite und
            wäre in den kantonalen Kader aufgestiegen. Leider überkreuzten sich
            meine Trainingszeiten mit der IMS und ich musste mich
            schwerenherzens dazu entscheiden, mit dem Leichathletik aufzuhören.
            Mitlerweile gehe ich regelmässig ins Fitnessstudio und finde mit
            Joggen meinen Ausgleich.
          </p>
        </div>

        <div className="hobbies-card aviation-card">
          <div className="hobbies-icon aviation-icon"></div>
          <h2 className="hobbies-title">Aviatik</h2>
          <p className="hobbies-description">
            Seit kleinauf hatte ich grosses Interesse an Flugzeugen und später
            dann auch an der generellen Aviatik. Neben dem Spielen von
            Flugsimulatoren wie dem Digital Combat Simulator (DCS) und IL-2
            Sturmovik besuche ich regelmässig mit Freunden Flugshows in ganz
            Europa und lebe so mein Interesse an diesem Thema aus.
          </p>
        </div>

        <div className="hobbies-card photography-card">
          <div className="hobbies-icon photography-icon"></div>
          <h2 className="hobbies-title">Fotografie</h2>
          <p className="hobbies-description">
            Ich fotografiere seit ich 13 Jahre alt bin. Ich habe mein Wissen und
            Können stetig erweitert und mich verbessert. Neben
            Freizeitfotografie nehme ich meine Kamera auch gerne auf bereits
            erwähnte Flugshows mit und kann so zwei meiner Hobbies miteinander
            verknüpfen.
          </p>
          <a
            href="https://adobe.ly/4dQ1fM6"
            target="_blank"
            rel="noopener noreferrer"
            className="hobbies-photos-link"
          >
            Einige meiner Bilder
            <span className="hobbies-link-underline"></span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hobbies;
