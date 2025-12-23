import React from "react";
import Typewriter from "typewriter-effect";
import Image from "../character.png";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaReddit,
  FaTwitter,
  FaCircle,
} from "react-icons/fa";

const Hero = () => {
  return (
    <div id="home" className="home">
      {" "}
      <div className="hero container">
        {" "}
        <div className="home-content">
          {" "}
          <p>Hallo! ich heiße...</p>
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
              <FaCircle className="icon" /> Open to Work
            </div>
            <a href="mailto:jain.pranamm@gmail.com" className="tag email">
              <FaEnvelope className="icon" /> Send Email
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
