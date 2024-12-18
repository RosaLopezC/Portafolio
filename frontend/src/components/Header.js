import React from "react";
import "./Header.css";
import linkedinLogo from "../assets/linkedin.png";
import siteLogo from "../assets/logo.png";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


const Header = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-left">
          <a
            href="https://www.linkedin.com/in/rosalopezc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinLogo} alt="LinkedIn" className="linkedin-logo" />
          </a>
        </div>

        <div className="nav-center">
          <span className="nav-link" onClick={() => scrollToSection("about")}>
            Sobre Mí
          </span>
          <img
            src={siteLogo}
            alt="Logo"
            className="site-logo"
            onClick={() => window.scrollTo(0, 0)}
          />
          <span
            className="nav-link"
            onClick={() => scrollToSection("experience")}
          >
            Experiencias
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
