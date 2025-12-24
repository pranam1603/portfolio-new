import React from "react";
import { FaUser, FaCalendarAlt, FaClock } from "react-icons/fa";

const BeginnerMistakesBlog = () => {
  return (
    <section className="blog">
      <div className="blog-container">
        {/* Back */}
        <a href="/#blogs" className="blog-back">
          ← Back to Blog
        </a>

        {/* Title */}
        <h1 className="blog-title">
          Common Mistakes I Made as a Beginner Developer (and How I Fixed Them)
        </h1>

        {/* Meta */}
        <div className="blog-meta">
          <span>
            <FaUser /> Pranam Jain
          </span>
          <span>
            <FaCalendarAlt /> October 18, 2025
          </span>
          <span>
            <FaClock /> 5 minutes read
          </span>
        </div>

        {/* Tags */}
        <div className="blog-tags">
          <span>Learning</span>
          <span>Software Engineering</span>
          <span>Machine Learning</span>
          <span>Career</span>
        </div>

        {/* Content */}
        <div className="blog-content">
          <p>
            When I started learning software development, I believed that good
            developers wrote clean, correct code from the beginning. Over time,
            I learned something far more important: good developers are not the
            ones who avoid mistakes, but the ones who learn quickly and
            deliberately from them.
          </p>

          <p>
            This blog is a reflection on the most common mistakes I made early
            in my journey as a software and machine learning developer, and how
            fixing them shaped the way I build systems today.
          </p>

          <h2>Trying to Learn Everything at Once</h2>
          <p>
            At the beginning, I tried to learn multiple programming languages,
            frameworks, and machine learning concepts at the same time. I
            believed that faster learning meant better progress.
          </p>
          <p>In reality, it created confusion and shallow understanding.</p>
          <p>
            <strong>What changed:</strong> I shifted my focus to strong
            fundamentals and learned one stack at a time. Depth helped me move
            faster in the long run.
          </p>

          <h2>Relying Too Much on Tutorials</h2>
          <p>
            I spent many hours watching tutorials and coding along. It felt
            productive, but when I tried to build something independently, I
            struggled.
          </p>
          <p>
            <strong>What changed:</strong> I began using tutorials only as
            guidance. Real learning started when I tried to build projects on my
            own and struggled through problems.
          </p>

          <h2>Writing Code That Worked but Was Hard to Maintain</h2>
          <p>
            My early code focused only on functionality. It worked, but it was
            difficult to read, debug, or extend.
          </p>
          <p>
            <strong>What changed:</strong> I learned to write clean, readable
            code with clear variable names, smaller functions, and better
            structure. Maintainability became just as important as correctness.
          </p>

          <h2>Avoiding Error Messages and Debugging</h2>
          <p>
            Long error messages used to intimidate me. I often copied solutions
            without fully understanding the issue.
          </p>
          <p>
            <strong>What changed:</strong> I learned to read error messages
            carefully, understand the root cause, and debug step by step.
            Debugging became a learning process rather than a frustration.
          </p>

          <h2>Using Advanced Tools Too Early</h2>
          <p>
            I once believed that using advanced frameworks or complex machine
            learning models would make my projects more impressive.
          </p>
          <p>Instead, it often made them harder to understand and maintain.</p>
          <p>
            <strong>What changed:</strong> I learned that simple, well-explained
            solutions are more valuable than complex ones. Tool choice should
            serve the problem, not the other way around.
          </p>

          <h2>Focusing on Models Instead of Data (ML-Specific)</h2>
          <p>
            In machine learning projects, I spent more time tuning algorithms
            than understanding the data.
          </p>
          <p>
            <strong>What changed:</strong> I realized that data quality, feature
            selection, and validation matter more than model complexity. This
            shift significantly improved my results.
          </p>

          <h2>What These Mistakes Taught Me</h2>
          <p>These experiences helped me develop an engineering mindset:</p>
          <ul>
            <li>Clarity over complexity</li>
            <li>Fundamentals over trends</li>
            <li>Understanding over speed</li>
          </ul>
          <p>
            Most importantly, I learned how to reflect on my work and
            continuously improve.
          </p>

          <h2>Final Thoughts</h2>
          <p>
            Every developer starts by making mistakes. What matters is the
            willingness to learn from them and grow.
          </p>
          <p>
            These mistakes shaped how I now approach software and machine
            learning problems with patience, structure, and a focus on long-term
            quality.
          </p>
          <p>
            <strong>
              And that mindset, I believe, is what truly defines a good
              engineer.
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default BeginnerMistakesBlog;
