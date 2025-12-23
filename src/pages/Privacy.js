import React from "react";
// import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <section className="legal">
      <div className="legal-container">
        {/* Back */}
        <a href="/" className="back-link">
          ← Back to Home
        </a>

        {/* Title */}
        <h1>Privacy Policy</h1>
        <p className="last-updated">Last updated: December 22, 2025</p>

        {/* Content */}
        <div className="legal-content">
          <h2>Information We Collect</h2>
          <p>
            This website is a personal portfolio created for educational and
            professional purposes. When you contact me through the contact form,
            I may collect limited personal information such as your name, email
            address, and message content.
          </p>

          <h2>How We Use Your Information</h2>
          <p>
            The information you provide is used only to respond to your inquiry
            or message. Your information is not shared, sold, or used for
            marketing purposes.
          </p>

          <h2>Data Security</h2>
          <p>
            Reasonable technical measures are taken to protect your information
            from unauthorized access or misuse. However, no method of data
            transmission over the internet is completely secure.
          </p>

          <h2>Contact</h2>
          <p>
            If you have any questions regarding this Privacy Policy, you can
            contact me through mail or the contact form available on this
            website.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
