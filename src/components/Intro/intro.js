import React from "react";
import "./intro.css";
import download from "../../assets/download.png";
import resume from "../../assets/Resume_Srinithi.pdf";
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
        <a href={resume} download="Srinithi_Resume.pdf">
          <button className="btn">
            <img src={download} alt="Hire Me" className="btnImg"/>
           <span>Download CV</span> 
          </button>
        </a>
      </div>
    </section>
  );
};

export default Intro;
