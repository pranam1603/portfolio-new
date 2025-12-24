import React from "react";
import Typewriter from "typewriter-effect";
import Image from "../character.png";
import { useLanguage } from "../context/LanguageContext";
import { heroText } from "../data/text";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaReddit,
  FaTwitter,
  FaCircle,
} from "react-icons/fa";

const Hero = () => {
  const { lang } = useLanguage();
  let roles = heroText[lang].roles;
  return (
    <div id="home" className="home">
      {" "}
      <div className="hero container">
        {" "}
        <div className="home-content">
          {" "}
          <p>{heroText[lang].heroSubtitle}</p>
          <h1>{heroText[lang].heroTitle}</h1>{" "}
          <div className="typewriter">
            {" "}
            <Typewriter
              options={{
                strings: roles,
                autoStart: true,
                loop: true,
              }}
            />{" "}
          </div>{" "}
          <div className="icons">
            {" "}
            <a
              href="https://github.com/pranam1603"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <FaGithub className="github" />{" "}
            </a>{" "}
            <a
              href="https://linkedin.com/in/pranamjain"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <FaLinkedin className="linkedin" />{" "}
            </a>{" "}
            <a
              href="https://x.com/Pranamjain02"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <FaTwitter className="twitter" />{" "}
            </a>{" "}
            <a
              href="https://www.reddit.com/user/Pranamj/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <FaReddit className="reddit" />{" "}
            </a>{" "}
          </div>{" "}
          <div className="hero-tags">
            <div className="tag work">
              <FaCircle className="icon" /> {heroText[lang].buttons[0]}
            </div>
            <a href="mailto:jain.pranamm@gmail.com" className="tag email">
              <FaEnvelope className="icon" /> {heroText[lang].buttons[1]}
            </a>
          </div>
        </div>{" "}
        <div className="hero-image">
          {" "}
          <img src={Image} alt="Pranam Jain" />{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
export default Hero;
