import React from "react";

const Insights = () => {
  return (
    <section className="insights">
      <div className="insights-container">
        {/* Top badge */}
        <div className="badge">✦ Blog</div>

        {/* Heading */}
        <h2 className="insights-title">
          Latest <span>Insights</span>
        </h2>
        <p className="insights-subtitle">
          Explore my thoughts on AI, Technology, and Learning Journey of my
          career.
        </p>

        {/* Cards */}
        <div className="insights-grid">
          {/* Card 1 */}
          <div className="insight-card">
            <div className="card-meta">
              <span>📅 December 20, 2025</span>
              <span>⏱ 7 minutes read</span>
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
                Read more →
              </a>
            </div>

            <div className="tags">
              <span>Machine Learning</span>
              <span>NLP</span>
              <span>Python</span>
              <span>Projects</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="insight-card">
            <div className="card-meta">
              <span>📅 October 18, 2025</span>
              <span>⏱ 5 minutes read</span>
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
                Read more →
              </a>
            </div>

            <div className="tags">
              <span>Learning</span>
              <span>Software Engineering</span>
              <span>Machine Learning</span>
              <span>Career</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights;
