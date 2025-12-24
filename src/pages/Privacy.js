import React from "react";
import { privacyText } from "../data/text";
import { useLanguage } from "../context/LanguageContext";

const Privacy = () => {
  const { lang } = useLanguage();
  return (
    <section className="legal">
      <div className="legal-container">
        {/* Back */}
        <a href="/" className="back-link">
          ← {privacyText[lang].privacyBack}
        </a>

        {/* Title */}
        <h1>{privacyText[lang].privacyTitle}</h1>
        <p className="last-updated">{privacyText[lang].privacyUpdate}</p>

        {/* Content */}
        <div className="legal-content">
          {privacyText[lang].privacyText.map((text) => {
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

export default Privacy;
