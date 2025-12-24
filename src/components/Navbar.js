import React, { useState } from "react";
import Logo from "../logob&w.png";
import { useNavigate, useLocation } from "react-router-dom";
import { navText } from "../data/text";
import { useLanguage } from "../context/LanguageContext";

const Navbar = () => {
  const { lang } = useLanguage();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (id) => {
    setOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
        });
      }, 120);
    } else {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-left" onClick={() => handleScroll("home")}>
          <img src={Logo} alt="Pranam Jain" className="nav-logo" />
        </div>

        {/* Links */}
        <ul className={`nav-right ${open ? "open" : ""}`}>
          <li>
            <button onClick={() => handleScroll("home")}>
              {navText[lang].navHome}
            </button>
          </li>
          <li>
            <button onClick={() => handleScroll("about")}>
              {navText[lang].navAbout}
            </button>
          </li>
          <li>
            <button onClick={() => handleScroll("academic")}>
              {navText[lang].navAcademic}
            </button>
          </li>
          <li>
            <button onClick={() => handleScroll("experience")}>
              {navText[lang].navExperience}
            </button>
          </li>
          <li>
            <button onClick={() => handleScroll("projects")}>
              {navText[lang].navProjects}
            </button>
          </li>
          <li>
            <button onClick={() => handleScroll("contact")}>
              {navText[lang].navContact}
            </button>
          </li>
        </ul>

        {/* Hamburger */}
        <div
          className={`hamburger ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
