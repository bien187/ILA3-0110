import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import "./Styles/Contact.css"; // Stelle sicher, dass du eine separate CSS-Datei für das Styling importierst

function Contact() {
  return (
    <div className="contact-container">
      <h1 className="title">Hier finden Sie mich:</h1>
      <div className="contact-icons">
        <a
          href="https://www.linkedin.com/in/ben-m%C3%BCller-4b959a273/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="contact-icon" size={30} />
        </a>
        <a
          href="https://github.com/bien187"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="contact-icon" size={30} />
        </a>
        <a
          href="mailto:ben.linus.mueller@outlook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoIosMail className="contact-icon" size={30} />
        </a>
      </div>
    </div>
  );
}

export default Contact;
