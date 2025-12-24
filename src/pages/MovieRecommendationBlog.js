import React from "react";
import { FaCalendarAlt, FaClock, FaUser } from "react-icons/fa";

const MovieRecommendationBlog = () => {
  return (
    <section className="blog">
      <div className="blog-container">
        {/* Back */}
        <a href="/#blogs" className="blog-back">
          ← Back to Blog
        </a>

        {/* Title */}
        <h1 className="blog-title">
          What I Learned Building a Movie Recommendation App from Scratch
        </h1>

        {/* Meta */}
        <div className="blog-meta">
          <span>
            <FaUser /> Pranam Jain
          </span>
          <span>
            <FaCalendarAlt /> December 20, 2025
          </span>
          <span>
            <FaClock /> 7 minutes read
          </span>
        </div>

        {/* Tags */}
        <div className="blog-tags">
          <span>Machine Learning</span>
          <span>NLP</span>
          <span>Python</span>
          <span>Projects</span>
        </div>

        {/* Content */}
        <div className="blog-content">
          <h2>It Started with a Simple Question</h2>
          <p>
            I didn’t aim to build a Netflix-level system. My goal was simple:
          </p>
          <blockquote>
            “If a user likes one movie, what similar movies can I recommend?”
          </blockquote>
          <p>
            That clarity helped me avoid overengineering and focus on solving
            the right problem.
          </p>

          <h2>Data Is the Real Challenge</h2>
          <p>
            Before writing any ML code, I spent most of my time handling data:
          </p>
          <ul>
            <li>Cleaning movie descriptions</li>
            <li>Handling missing values</li>
            <li>Combining genres, cast, crew, keywords, and overview text</li>
          </ul>
          <p>
            This taught me an important lesson: Machine learning problems
            usually fail because of data, not models.
          </p>
          <p>Good recommendations start with clean and meaningful data.</p>

          <h2>NLP Is More Practical Than Magical</h2>
          <p>I used basic NLP techniques:</p>
          <ul>
            <li>Text cleaning</li>
            <li>Stop-word removal</li>
            <li>Stemming</li>
            <li>CountVectorizer</li>
          </ul>
          <p>
            Instead of complex models, I represented movies as text vectors.
            This made the system simple, fast, and easy to understand.
          </p>
          <p>
            <strong>
              You don’t always need deep learning to build useful AI systems.
            </strong>
          </p>

          <h2>Similarity Beats Prediction</h2>
          <p>
            Initially, I thought recommendation meant predicting ratings. In
            reality, what mattered was similarity.
          </p>
          <p>
            Using cosine similarity, I measured how close two movies were based
            on their content. Once similarity worked well, recommendations
            naturally followed.
          </p>
          <p>Sometimes, smart math is better than heavy models.</p>

          <h2>Software Engineering Matters as Much as ML</h2>
          <p>
            Building the app with Streamlit taught me real software lessons:
          </p>
          <ul>
            <li>Structuring code cleanly</li>
            <li>Separating UI from ML logic</li>
            <li>Improving performance and readability</li>
          </ul>
          <p>
            Working code is not the same as maintainable code. Refactoring was
            as important as building features.
          </p>

          <h2>Debugging Is Part of the Process</h2>
          <p>
            Things broke often — libraries, data, edge cases. Instead of seeing
            this as failure, I learned to treat debugging as a skill.
          </p>
          <p>
            <em>
              If nothing breaks, you’re probably not building anything real.
            </em>
          </p>

          <h2>What This Project Taught Me Overall</h2>
          <p>
            This project helped me understand what end-to-end ML truly means:
          </p>
          <blockquote>
            Data → Features → Logic → App → User Experience
          </blockquote>
          <p>More importantly, it changed how I see AI:</p>
          <ul>
            <li>Less magic</li>
            <li>More engineering</li>
            <li>Strong fundamentals matter most</li>
          </ul>

          <h2>Final Thoughts</h2>
          <p>
            This movie recommendation app is more than a portfolio project. It
            represents my transition from learning concepts to building real
            systems.
          </p>
          <p>
            You don’t need advanced AI knowledge to start. You need curiosity,
            patience, and the willingness to build and break things.
          </p>
          <p>
            <strong>That’s where real learning begins.</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default MovieRecommendationBlog;
