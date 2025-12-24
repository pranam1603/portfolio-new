import React from "react";
import { FaReact, FaCogs, FaCode, FaBrain } from "react-icons/fa";

import allSkills from "../data/allSkills";
import { aboutText } from "../data/text.js";
import { useLanguage } from "../context/LanguageContext.js";

const About = () => {
  const { lang } = useLanguage();
  return (
    <section className="about" id="about">
      <div className="about-container">
        {/* LEFT */}
        <div className="about-left">
          <div className="badge">✦ {aboutText[lang].aboutBadge}</div>

          <h2 className="about-title">{aboutText[lang].aboutTitle}</h2>

          {aboutText[lang].aboutTexts.map((text) => {
            return <p className="about-text">{text}</p>;
          })}
          <p className="about-language">
            <b>{aboutText[lang].aboutLanguage}</b>
          </p>

          {/* SKILLS */}
          <div className="about-skills">
            {allSkills.map((skill) => {
              return (
                <span>
                  {skill.icon} {skill.name}
                </span>
              );
            })}
          </div>
        </div>

        {/* RIGHT */}
        <div className="about-right">
          <div className="service-card">
            <FaCogs />
            <h4>{aboutText[lang].aboutTabs[0]}</h4>
          </div>

          <div className="service-card">
            <FaCode />
            <h4>{aboutText[lang].aboutTabs[1]}</h4>
          </div>

          <div className="service-card">
            <FaBrain />
            <h4>{aboutText[lang].aboutTabs[2]}</h4>
          </div>

          <div className="service-card">
            <FaReact />
            <h4>{aboutText[lang].aboutTabs[3]}</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
