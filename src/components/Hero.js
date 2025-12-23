import React from "react";
import Typewriter from "typewriter-effect";
import Image from "../WhatsApp Image 2025-10-01 at 12.15.25_f0a36872.jpg";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaReddit,
  FaTwitter,
} from "react-icons/fa";

const Hero = () => {
  return (
    <div id="home" className="home">
      {" "}
      <div className="hero container">
        {" "}
        <div className="home-content">
          {" "}
          <h1>Pranam Jain</h1>{" "}
          <div className="typewriter">
            {" "}
            <Typewriter
              options={{
                strings: [
                  " a Master Student. ",
                  " a Researcher",
                  "a Software Engineer",
                ],
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
            <a href="mailto:pranam.jain@hof-university.de">
              {" "}
              <FaEnvelope className="mail" />{" "}
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
