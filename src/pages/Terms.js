import React from "react";
import { termText } from "../data/text";
import { useLanguage } from "../context/LanguageContext";

const Terms = () => {
  const { lang } = useLanguage();

  return (
    <section className="legal">
      <div className="legal-container">
        {/* Back */}
        <a href="/" className="back-link">
          ← {termText[lang].termBack}
        </a>

        <h1>{termText[lang].termTitle}</h1>
        <p className="last-updated">{termText[lang].termUpdate}</p>

        <div className="legal-content">
          {termText[lang].termText.map((text) => {
            return (
              <>
                <h2>{text.subHeading}</h2>
                <p>{text.text}</p>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Terms;
