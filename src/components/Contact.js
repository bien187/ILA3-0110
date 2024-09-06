import React from "react";
import "./Styles/Contact.css"; // Stelle sicher, dass du eine separate CSS-Datei für das Styling importierst



function Contact() {
  return (
    <div className="contact-container">
      <div className="title">Hier finden Sie mich:</div>
      <div className="contact-icons">
        <a
          href="https://www.linkedin.com/in/ben-m%C3%BCller-4b959a273/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/pics/LinkedIn_Logo.png"
            alt="LinkedIn"
            className="contact-icon"
          />
        </a>
        <a
          href="https://github.com/bien187"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/pics/1673867242172.jpeg"
            alt="GitHub"
            className="contact-icon"
          />
        </a>
        <a
          href="mailto:Ben.Linus.Mueller@outlook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/pics/Outlook-1000x600.png"
            alt="Outlook"
            className="contact-icon"
          />
        </a>
      </div>
    </div>
  );
}

export default Contact;
