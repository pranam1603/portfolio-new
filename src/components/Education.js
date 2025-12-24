import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { eduText } from "../data/text";

const Education = () => {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState("education");

  return (
    <section className="education" id="academic">
      <div className="education-container">
        {/* Header */}
        <div className="education-header">
          <div className="badge">✦ {eduText[lang].eduBadge}</div>
          <h2 className="education-title">{eduText[lang].eduTitle}</h2>
        </div>

        {/* Tabs */}
        <div className="education-tabs">
          <button
            className={activeTab === "education" ? "active" : ""}
            onClick={() => setActiveTab("education")}
          >
            {eduText[lang].eduButtons[0]}
          </button>
          <button
            className={activeTab === "certifications" ? "active" : ""}
            onClick={() => setActiveTab("certifications")}
          >
            {eduText[lang].eduButtons[1]}
          </button>
        </div>

        {/* Content */}
        <div className="education-content">
          {eduText[lang].eduData[activeTab].items.map((item, index) => (
            <div className="education-card" key={index}>
              <h3>{item.degree}</h3>
              <p className="education-institute">{item.institute}</p>
              <p className="education-date">{item.date}</p>

              <ul>
                {item.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
