import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Styles/Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false); 
  };

  return (
    <header className="navbar-header">
      {/* Menü-Toggle für kleine Bildschirme */}
      <div className="menu-toggle" onClick={handleMenuToggle}>
        <span className="menu-icon"></span>
        <span className="menu-icon"></span>
        <span className="menu-icon"></span>
      </div>

      {/* Navbar mit Links */}
      <nav className={`navbar ${isMenuOpen ? "open" : ""}`}>
        <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <Link
            to="/home"
            className={`nav-item ${currentPath === "/home" ? "active" : ""}`}
            onClick={handleLinkClick}
          >
            Home
            <span className="underline"></span>
          </Link>
          <Link
            to="/aboutme"
            className={`nav-item ${currentPath === "/aboutme" ? "active" : ""}`}
            onClick={handleLinkClick}
          >
            About Me
            <span className="underline"></span>
          </Link>
          <Link
            to="/projects"
            className={`nav-item ${currentPath === "/projects" ? "active" : ""}`}
            onClick={handleLinkClick}
          >
            Projekte
            <span className="underline"></span>
          </Link>
          <Link
            to="/hobbies"
            className={`nav-item ${currentPath === "/hobbies" ? "active" : ""}`}
            onClick={handleLinkClick}
          >
            Hobbies
            <span className="underline"></span>
          </Link>
          <Link
            to="/contact"
            className={`nav-item ${currentPath === "/contact" ? "active" : ""}`}
            onClick={handleLinkClick}
          >
            Kontakt
            <span className="underline"></span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
