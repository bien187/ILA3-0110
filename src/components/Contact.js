import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import "./Styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <h2 className="contact-title">Contact Me</h2>
      <p>Email: example@example.com</p>
      <p>Phone: 123-456-7890</p>
    </div>
  );
}

export default Contact;
