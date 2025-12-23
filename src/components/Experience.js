import React, { useState } from "react";

const experienceData = [
  {
    id: "IISYS",
    company: "Institute for Information Systems at Hochschule Hof",
    role: "Student Assistant",
    date: "October 2025 – Present",
    points: [
      "Developed PyTorch-based neural network models to estimate commuter origin distributions and peak travel times across spatial grids, achieving >75% prediction accuracy, directly supporting data-driven mobility analysis.",
      "Designed end-to-end machine learning pipelines covering preprocessing, feature engineering, training, evaluation, and automated inference, reducing manual analysis effort by 10–15%.",
      "Optimized model training workflows and data handling strategies, improving computational efficiency by 4% and enabling scalable experimentation on large mobility datasets.",
      "Translated research objectives into technical implementations by collaborating with researchers.",
      "Improved code reliability and maintainability through systematic testing, debugging, and code reviews, reducing model and pipeline failure cases.",
    ],
  },
  {
    id: "Nalnda",
    company: "Nalnda",
    role: "Software Developer",
    date: "June 2023 – May 2024",
    points: [
      "Built backend services and automation workflows to integrate structured data via REST APIs, improving data availability across internal systems.",
      "Optimized SQL queries and schema design, improving data retrieval performance for analytical and reporting use cases by 10-15 %.",
      "Delivered 15+ reusable React components, improving UI responsiveness and reducing page load times by 15–20% across core user journeys.",
      "Collaborated cross-functionally with product managers, designers, and QA teams to align technical data solutions with business needs.",
      "Used Git-based workflows (branching, reviews, version control) to maintain high code quality and traceability.",
    ],
  },
  {
    id: "Star Catalysts",
    company: "STAR CATALYSTS",
    role: "Software Developer",
    date: "September 2021 – April 2022",
    points: [
      "Built software solutions from scratch, including backend APIs and core application logic.",
      "Developed and customized Shopify plugins to extend store functionality and support business workflows.",
      "Implemented secure authentication and authorization using JWT, along with payment gateway integrations.",
      "Designed and managed MySQL databases, handling data modeling, queries, and backend data flow.",
    ],
  },
  {
    id: "Chegg",
    company: "CHEGG",
    role: "Calculus & CS Expert",
    date: "October 2020 – March 2023",
    points: [
      "Provided clear, step-by-step solutions to 200+ complex problems in Computer Science and Calculus, supporting undergraduate-level learning.",
      "Explained algorithms, data structures, programming concepts, and mathematical analysis in a structured and learner-friendly manner.",
      "Helped students strengthen conceptual understanding and problem-solving skills through detailed reasoning and examples.",
      "Maintained high accuracy and quality standards while working in a time-sensitive online academic support environment.",
    ],
  },
];

const Experience = () => {
  const [active, setActive] = useState(experienceData[0]);

  return (
    <section className="experience" id="experience">
      <div className="experience-container">
        {/* TOP CENTER */}
        <div className="experience-header">
          <div className="badge">✦ Part/Full Time Work</div>
          <h2 className="experience-title">Work Experience</h2>
        </div>

        {/* CONTENT */}
        <div className="experience-content">
          {/* LEFT LIST */}
          <div className="experience-left">
            <ul>
              {experienceData.map((item) => (
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
