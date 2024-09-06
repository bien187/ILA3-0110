import React, { useState } from "react";
import "./Styles/Header.scss";

function Header() {
  const [activePage, setActivePage] = useState("home");

  const handleNavClick = (page) => {
    setActivePage(page);
    document.body.className = page;
  };

  return (
    <nav role="navigation">
      <a
        href="#"
        data-page="home"
        className={activePage === "home" ? "active" : ""}
        onClick={() => handleNavClick("home")}
      >
        Home
      </a>
      <a
        href="#"
        data-page="about"
        className={activePage === "about" ? "active" : ""}
        onClick={() => handleNavClick("about")}
      >
        About
      </a>
      <a
        href="#"
        data-page="clients"
        className={activePage === "clients" ? "active" : ""}
        onClick={() => handleNavClick("clients")}
      >
        Clients
      </a>
      <a
        href="#"
        data-page="contact"
        className={activePage === "contact" ? "active" : ""}
        onClick={() => handleNavClick("contact")}
      >
        Contact Us
      </a>
    </nav>
  );
}

export default Header;
