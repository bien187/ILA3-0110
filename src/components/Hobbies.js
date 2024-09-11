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
            mit 11 Jahren beim Leichtathletik hängen und ich zeigte schnell
            Talent. Nach 4 Jahren und einigen Medaillen durfte ich dem Aargauer
            Vorkader beitreten und fasste auch dort schnell Fuss. Mit 15 Jahren
            schaffte ich bei einer Regionalausscheidung die Kantonslimite und
            wäre in den kantonalen Kader aufgestiegen. Leider überkreuzten sich
            meine Trainingszeiten mit der IMS und ich musste mich schweren
            Herzens dazu entscheiden, mit der Leichtathletik aufzuhören.
            Mittlerweile gehe ich regelmässig ins Fitnessstudio und finde mit
            Joggen meinen Ausgleich.
          </p>
        </div>

        <div className="hobbies-card aviation-card">
          <div className="hobbies-icon aviation-icon"></div>
          <h2 className="hobbies-title">Aviatik</h2>
          <p className="hobbies-description">
            Von klein auf hatte ich grosses Interesse an Flugzeugen und später
            auch an der Aviatik im Allgemeinen. Angefangen hat alles, als mein
            Vater mich regelmässig zum Flughafen Zürich mitnahm und wir die
            startenden und landenden Flugzeuge beobachteten. Heute lebe ich mein
            Hobby aus, indem ich neben dem Spielen von Flugsimulatoren wie dem
            Digital Combat Simulator (DCS) und IL-2 Sturmovik auch regelmässig
            mit meinen Freunden Flugshows in ganz Europa besuche.
          </p>
        </div>

        <div className="hobbies-card photography-card">
          <div className="hobbies-icon photography-icon"></div>
          <h2 className="hobbies-title">Fotografie</h2>
          <p className="hobbies-description">
            Ich fotografiere seit dem ich 11 Jahre alt bin. In den letzten
            Jahren habe ich mein Können mit viel Ausprobieren, YouTube Tutorials
            und Büchern stetig erweitert und konnte so bereits viele Erfahrungen
            im Umgang mit einer Kamera sammeln. Ich fotografiere häufig in
            meiner Freizeit und in den Ferien. Ausserdem nehme ich meine Kamera
            auch auf Flugshows mit und kann so zwei meiner
            Hobbies miteinander verbinden.
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
