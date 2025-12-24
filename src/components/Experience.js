import React, { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { expText } from "../data/text";

const Experience = () => {
  const { lang } = useLanguage();
  const [active, setActive] = useState(expText[lang].expData[0]);

  useEffect(() => {
    setActive(expText[lang].expData[0]);
  }, [lang]);
  return (
    <section className="experience" id="experience">
      <div className="experience-container">
        {/* TOP CENTER */}
        <div className="experience-header">
          <div className="badge">✦ {expText[lang].expBadge}</div>
          <h2 className="experience-title">{expText[lang].expTitle}</h2>
        </div>

        {/* CONTENT */}
        <div className="experience-content">
          {/* LEFT LIST */}
          <div className="experience-left">
            <ul>
              {expText[lang].expData.map((item) => (
                <li
                  key={item.id}
                  className={active.id === item.id ? "active" : ""}
                  onClick={() => setActive(item)}
                >
                  {item.id}
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT DETAILS */}
          <div className="experience-right">
            <h3>{active.role}</h3>

            <span className="experience-badge">{active.company}</span>

            <p className="experience-date">{active.date}</p>

            <ul className="experience-points">
              {active.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
