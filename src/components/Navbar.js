import React, { useState } from "react";
import Logo from "../logob&w.png";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
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
            <button onClick={() => handleScroll("home")}>Home</button>
          </li>
          <li>
            <button onClick={() => handleScroll("about")}>About</button>
          </li>
          <li>
            <button onClick={() => handleScroll("academic")}>Academic</button>
          </li>
          <li>
            <button onClick={() => handleScroll("experience")}>
              Experience
            </button>
          </li>
          <li>
            <button onClick={() => handleScroll("projects")}>Projects</button>
          </li>
          <li>
            <button onClick={() => handleScroll("contact")}>Contact</button>
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
