import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { blogText } from "../data/text";

const Insights = () => {
  const { lang } = useLanguage();

  return (
    <section className="insights">
      <div className="insights-container">
        {/* Top badge */}
        <div className="badge">✦ {blogText[lang].blogBadge}</div>

        {/* Heading */}
        <h2 className="insights-title">{blogText[lang].blogTitle}</h2>
        <p className="insights-subtitle">{blogText[lang].blogSubtitle}</p>

        {/* Cards */}
        <div className="insights-grid">
          {/* Card 1 */}
          <div className="insight-card">
            <div className="card-meta">
              <span>📅 {blogText[lang].blogData[0].date}</span>
              <span>⏱ {blogText[lang].blogData[0].time}</span>
            </div>

            <h3>
              What I Learned Building a Movie Recommendation App from Scratch
            </h3>

            <p>
              It Started with a Simple Question I didn’t aim to build a
              Netflix-level system. My goal was simple: “If a user likes one
              movie, what similar movies can I recommend?” That clarity
              helped....
            </p>

            <div className="card-footer">
              <span className="ai-tag">👤 Pranam Jain</span>
              <a href="/blog/What-I-Learned-Building-a-Movie-Recommendation-App-from-Scratch">
                {blogText[lang].blogRead} →
              </a>
            </div>

            <div className="tags">
              <span>ML</span>
              <span>NLP</span>
              <span>Python</span>
              <span>Projects</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="insight-card">
            <div className="card-meta">
              <span>📅 {blogText[lang].blogData[1].date}</span>
              <span>⏱ {blogText[lang].blogData[1].time}</span>
            </div>

            <h3>
              Common Mistakes I Made as a Beginner Developer (and How I Fixed
              Them)
            </h3>

            <p>
              When I started learning software development, I believed that good
              developers wrote clean, correct code from the beginning. Over
              time, I learned something far....
            </p>

            <div className="card-footer">
              <span className="ai-tag">👤 Pranam Jain</span>
              <a href="/blog/Common-Mistakes-I-Made-as-a-Beginner-Developer">
                {blogText[lang].blogRead} →
              </a>
            </div>

            <div className="tags">
              <span>Learning</span>
              <span>SDE</span>
              <span>ML</span>
              <span>Career</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights;
