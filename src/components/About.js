import React from "react";
import { FaReact, FaCogs, FaCode, FaBrain } from "react-icons/fa";

import allSkills from "../data/allSkills";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        {/* LEFT */}
        <div className="about-left">
          <div className="badge">✦ About Me</div>

          <h2 className="about-title">
            Building clean, reliable solutions with a focus on impact
          </h2>

          <p className="about-text">
            Software Engineer and Applied Machine Learning Researcher with
            hands-on experience building data-driven systems using Java, Python,
            and modern ML techniques. Currently working as a Student Assistant
            at IISYS, Hochschule Hof, contributing to research on commuter
            mobility estimation using large-scale real-world data.{" "}
          </p>

          <p className="about-text">
            Strong background in backend development, REST APIs, performance
            optimization, and applied machine learning, with industry exposure
            to full-stack systems.
          </p>
          <p className="about-language">
            <b>Languages: English (C1), German (B1), Hindi (Native)</b>
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
            <h4>Research & Development</h4>
          </div>

          <div className="service-card">
            <FaCode />
            <h4>Programming</h4>
          </div>

          <div className="service-card">
            <FaBrain />
            <h4>ML & AI</h4>
          </div>

          <div className="service-card">
            <FaReact />
            <h4>Software Development</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
