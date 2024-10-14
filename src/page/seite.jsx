import React from 'react';
import './seite.css'; // Import der CSS-Datei

// Richtiges Importieren der Icons
import { IoMailOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

const Seite = () => {
  return (
    <div className="container">
      <div className="card">
        <img
          src={`${process.env.PUBLIC_URL}/pics/WhatsApp Bild 2024-09-02 um 16.15.28_53b8891a.jpg`}
          alt="Ben Müller"
          className="portrait"
        />
        <div className="text-container">
          <h1>Ben Müller</h1>
          <p className="title">IMS-Student</p>
          <p>
            <IoMailOutline /> <a href="mailto:Ben.Linus.Mueller@outlook.com">Ben.Linus.Mueller@outlook.com</a>
          </p>
          <p>
            <FaPhone /> <a href="tel:+41775328461">+41 77 532 84 61</a>
          </p>
          <p>
            <CgWebsite /> <a href="https://ben-mueller.netlify.app/" target="_blank" rel="noopener noreferrer">ben-mueller.netlify.app</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Seite;
