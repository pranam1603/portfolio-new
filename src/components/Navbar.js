import React, { useState } from "react";
import Logo from "../logob&w.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-left">
          <a href="/">
            <img src={Logo} alt="Pranam Jain" className="nav-logo" />
          </a>
        </div>

        <ul className={`nav-right ${open ? "open" : ""}`}>
          <li>
            <a href="/#home" onClick={() => setOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="/#about" onClick={() => setOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href="/#academic" onClick={() => setOpen(false)}>
              Academic
            </a>
          </li>
          <li>
            <a href="/#experience" onClick={() => setOpen(false)}>
              Experiance
            </a>
          </li>
          <li>
            <a href="/#projects" onClick={() => setOpen(false)}>
              Projects
            </a>
          </li>
          <li>
            <a href="/#contact" onClick={() => setOpen(false)}>
              Contact
            </a>
          </li>
        </ul>

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
