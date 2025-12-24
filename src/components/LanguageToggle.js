import React from "react";
import { useLanguage } from "../context/LanguageContext";

const LanguageToggle = () => {
  const { lang, toggleLanguage } = useLanguage();

  return (
    <div className="language-toggle">
      <button
        className={lang === "en" ? "active" : ""}
        onClick={() => lang !== "en" && toggleLanguage()}
      >
        EN
      </button>
      <button
        className={lang === "de" ? "active" : ""}
        onClick={() => lang !== "de" && toggleLanguage()}
      >
        DE
      </button>
    </div>
  );
};

export default LanguageToggle;
