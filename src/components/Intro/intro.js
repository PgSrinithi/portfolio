import React from "react";
import "./intro.css";
import { Link } from "react-scroll";
import btnImg from "../../assets/hireme.png";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello</span>
        <span className="introText">
          I'm <span className="introName">Srinithi,</span>
          <br />
          Full-Stack Developer
        </span>
        <p className="introPara">
          I am a full-Stack Developer with nearly 3 years of hands-on
          <br /> experience in designing and implementing end-to-end solutions
          for web applications.
        </p>
        <Link>
          <button className="btn">
            <img src={btnImg} alt="Hire Me" className="btnImg" />
            Hire Me
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Intro;
