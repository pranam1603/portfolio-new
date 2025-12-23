import React from "react";

const Terms = () => {
  return (
    <section className="legal">
      <div className="legal-container">
        {/* Back */}
        <a href="/" className="back-link">
          ← Back to Home
        </a>

        <h1>Terms & Conditions</h1>
        <p className="last-updated">Last updated: December 22, 2025</p>

        <div className="legal-content">
          <h2>Purpose of This Website</h2>
          <p>
            This website is a personal portfolio created for educational and
            professional showcase purposes. It does not provide commercial or
            paid services.
          </p>

          <h2>Use of Content</h2>
          <p>
            All content on this website, including text, project descriptions,
            and code examples, is provided for informational purposes only. You
            may view and reference the content for personal or educational use.
            Redistribution or commercial use is not permitted without prior
            permission.
          </p>

          <h2>External Links</h2>
          <p>
            This website may contain links to external platforms such as GitHub,
            LinkedIn, or other third-party websites. I am not responsible for
            the content or privacy practices of those websites.
          </p>

          <h2>Disclaimer</h2>
          <p>
            The content on this website is provided “as is” without any
            warranties, express or implied. While efforts are made to keep the
            information accurate and up to date, no guarantees are made
            regarding completeness or reliability.
          </p>

          <h2>Contact</h2>
          <p>
            If you have any questions regarding these Terms & Conditions, you
            can contact me through mail, and the contact form available on this
            website.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Terms;
