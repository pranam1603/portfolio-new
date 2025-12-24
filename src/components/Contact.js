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
import { contactText } from "../data/text";
import { useLanguage } from "../context/LanguageContext";

const Contact = () => {
  const { lang } = useLanguage();
  const [state, handleSubmit] = useForm("xzdpjnjq");

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="badge">✦ {contactText[lang].contactBadge}</div>
        {/* Header */}
        <h2 className="contact-title">{contactText[lang].contactTitle}</h2>
        <p className="contact-subtitle">{contactText[lang].contactSubtitle}</p>
        {/* Grid */}
        <div className="contact-grid">
          {/* Left: Form */}
          <div className="contact-card">
            <h3>{contactText[lang].contactFormTitle}</h3>
            <p className="card-desc">{contactText[lang].contactFormSubTitle}</p>

            <form onSubmit={handleSubmit} className="contact-form">
              <label for="name">{contactText[lang].contactFormName}</label>
              <input
                id="name"
                name="Name"
                type="text"
                placeholder={contactText[lang].contactFormSubName}
              />

              <label for="email">{contactText[lang].contactFormEmail}</label>
              <input
                id="email"
                name="Email"
                type="email"
                placeholder={contactText[lang].contactFormSubEmail}
              />

              <label for="message">
                {contactText[lang].contactFormMessage}
              </label>
              <textarea
                id="message"
                name="Message"
                placeholder={contactText[lang].contactFormSubMessage}
                rows="4"
              ></textarea>

              {state.succeeded ? (
                <p className="form-message">
                  {contactText[lang].contactMessage}
                </p>
              ) : (
                <button disabled={state.submitting} type="submit">
                  <FaPaperPlane /> {contactText[lang].contactSend}
                </button>
              )}
            </form>
          </div>

          {/* Right */}
          <div className="contact-right">
            {/* Info */}
            <div className="contact-card">
              <h3>{contactText[lang].contactInfoTitle}</h3>
              <p className="card-desc">
                {contactText[lang].contactInfoSubTitle}
              </p>

              <div className="info-item">
                <div className="info-icon">
                  <FaEnvelope />
                </div>
                <div>
                  <strong>{contactText[lang].contactInfoMail}</strong>
                  <p>pranam.jain@hof-university.de</p>
                  <p>jain.pranamm@gmail.com</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <strong>{contactText[lang].contactLocation}</strong>
                  <p>{contactText[lang].contactCountry}</p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="contact-card">
              <h3>{contactText[lang].contactFollow}</h3>
              <p className="card-desc">
                {contactText[lang].contactFollowSubTitle}
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
