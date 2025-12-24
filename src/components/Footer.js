import React from "react";
import Logo from "../logob&w.png";
import { footerText } from "../data/text";
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const { lang } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* LEFT */}
        <div className="footer-left">
          <img className="footer-logo" src={Logo} alt="logo" />
        </div>

        {/* CENTER */}
        <div className="footer-center">{footerText[lang].footerReserve}</div>

        {/* RIGHT */}
        <div className="footer-right">
          <a href="/privacy">{footerText[lang].footerTerms}</a>
          <a href="/terms">{footerText[lang].footerPrivacy}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
