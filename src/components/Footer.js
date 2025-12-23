import React from "react";
import Logo from "../namelogo-removebg-preview.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* LEFT */}
        <div className="footer-left">
          <img className="footer-logo" src={Logo} alt="logo" />
        </div>

        {/* CENTER */}
        <div className="footer-center">
          © 2025 All rights reserved. • Made with ❤️ by Pranam Jain
        </div>

        {/* RIGHT */}
        <div className="footer-right">
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
