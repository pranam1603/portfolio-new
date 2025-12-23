import React, { useState } from "react";

const educationData = {
  education: {
    title: "Education",
    items: [
      {
        degree: "M.Sc. Applied Research in Computer Science",
        institute: "Hochschule Hof, Germany",
        date: "2025 – Present",
        details: [
          "Grade: 1.9",
          "Core Subjects: Data Engineering and Analysis, IT-Security, Design Science & Behavioural Aproaches in Computer Science, Research Project",
        ],
      },
      {
        degree: "B.Tech in Computer Science and Engineering",
        institute: "RGPV University, India",
        date: "2019 – 2023",
        details: [
          "Grade: 7.85 CGPA",
          "Bachelor Thesis: Developed a full-stack Event Management Web Application using the MERN stack, enabling organizers to manage event activities, service providers, and user workflows efficiently.",
        ],
      },
    ],
  },
  certifications: {
    title: "Certifications",
    items: [
      {
        degree: "Web Development Bootcamp",
        institute: "Angela Yu (Udemy)",
        date: "2023",
        details: [
          "Gained practical experience in modern web development fundamentals and full-stack workflows through hands-on projects.",
        ],
      },
      {
        degree: "Git & GitHub",
        institute: "Google",
        date: "2022",
        details: [
          "Learned version control fundamentals including Git workflows, branching, merging, pull requests, and collaborative development using GitHub.",
        ],
      },
    ],
  },
};

const Education = () => {
  const [activeTab, setActiveTab] = useState("education");

  return (
    <section className="education" id="academic">
      <div className="education-container">
        {/* Header */}
        <div className="education-header">
          <div className="badge">✦ Education</div>
          <h2 className="education-title">Academic Background</h2>
        </div>

        {/* Tabs */}
        <div className="education-tabs">
          <button
            className={activeTab === "education" ? "active" : ""}
            onClick={() => setActiveTab("education")}
          >
            Education
          </button>
          <button
            className={activeTab === "certifications" ? "active" : ""}
            onClick={() => setActiveTab("certifications")}
          >
            Certifications
          </button>
        </div>

        {/* Content */}
        <div className="education-content">
          {educationData[activeTab].items.map((item, index) => (
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
