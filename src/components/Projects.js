import React, { useState } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import projectsData from "../data/allProjects";

const allTags = ["all", "node", "java", "react", "python & ml", "html css"];

const ITEMS_PER_PAGE = 3;

const Projects = () => {
  const [activeTag, setActiveTag] = useState("all");
  const [startIndex, setStartIndex] = useState(0);

  const filteredProjects =
    activeTag === "all"
      ? projectsData
      : projectsData.filter((p) => p.tags.includes(activeTag));

  const total = filteredProjects.length;

  const handleNext = () => {
    if (startIndex + ITEMS_PER_PAGE < total) {
      setStartIndex(startIndex + ITEMS_PER_PAGE);
    }
  };

  const handlePrev = () => {
    if (startIndex - ITEMS_PER_PAGE >= 0) {
      setStartIndex(startIndex - ITEMS_PER_PAGE);
    }
  };

  const visibleProjects = filteredProjects.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <div className="badge">✦ Portfolio</div>
        <h2 className="projects-title">My Projects</h2>

        {/* FILTER TAGS */}
        <div className="project-tabs">
          {allTags.map((tag) => (
            <button
              key={tag}
              className={tag === activeTag ? "active" : ""}
              onClick={() => {
                {
                  tag == "html css" ? setActiveTag("html") : setActiveTag(tag);
                }
                setStartIndex(0);
              }}
            >
              {tag.toUpperCase()}
            </button>
          ))}
        </div>

        {/* CAROUSEL */}
        <div className="projects-carousel">
          <button
            className="nav-btn"
            onClick={handlePrev}
            disabled={startIndex === 0}
          >
            <FaChevronLeft />
          </button>

          <div className="projects-row">
            {visibleProjects.map((project, index) => (
              <div className="project-card" key={index}>
                <div className="project-icon">🚀</div>

                <h3>{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>

                <p className="project-desc">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i}>{tag}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.code} target="_blank" rel="noreferrer">
                    <FaGithub />
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer">
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <button
            className="nav-btn"
            onClick={handleNext}
            disabled={startIndex + ITEMS_PER_PAGE >= total}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
