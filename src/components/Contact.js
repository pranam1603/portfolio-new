import { useForm } from "@formspree/react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaPaperPlane,
  FaGithub,
  FaReddit,
} from "react-icons/fa";

const Contact = () => {
  const [state, handleSubmit] = useForm("xzdpjnjq");

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="badge">✦ Contact</div>
        {/* Header */}
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-subtitle">
          I'd love to connect with you and discuss how we can transform our
          thoughts.
        </p>
        {/* Grid */}
        <div className="contact-grid">
          {/* Left: Form */}
          <div className="contact-card">
            <h3>Send us a message</h3>
            <p className="card-desc">
              Fill out the form below and I'll get back to you as soon as
              possible.
            </p>

            <form onSubmit={handleSubmit} className="contact-form">
              <label>Your Name</label>
              <input
                name="Name"
                type="text"
                placeholder="Enter your full name"
              />

              <label>Email</label>
              <input
                name="Email"
                type="email"
                placeholder="your.email@company.com"
              />

              <label>Description</label>
              <textarea
                name="Message"
                placeholder="How can we help you?"
                rows="4"
              ></textarea>

              {state.succeeded ? (
                <p className="form-message">
                  Thanks for connecting, I’ll come back to you!
                </p>
              ) : (
                <button disabled={state.submitting} type="submit">
                  <FaPaperPlane />
                  Send Message
                </button>
              )}
            </form>
          </div>

          {/* Right */}
          <div className="contact-right">
            {/* Info */}
            <div className="contact-card">
              <h3>Contact Information</h3>
              <p className="card-desc">
                Reach out to me through any of these channels.
              </p>

              <div className="info-item">
                <div className="info-icon">
                  <FaEnvelope />
                </div>
                <div>
                  <strong>Email</strong>
                  <p>pranam.jain@hof-university.de</p>
                  <p>jain.pranamm@gmail.com</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <strong>Location</strong>
                  <p>Hof, Germany</p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="contact-card">
              <h3>Follow Me</h3>
              <p className="card-desc">
                Connect with me on social media for updates and insights.
              </p>

              <div className="social-icons">
                <a href="https://www.linkedin.com/in/pranamjain/">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/pranam1603/">
                  <FaGithub />
                </a>
                <a href="https://x.com/Pranamjain02/">
                  <FaTwitter />
                </a>
                <a href="https://www.reddit.com/user/Pranamj/">
                  <FaReddit />
                </a>
                <a href="https://www.instagram.com/pranam.jainn/">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
