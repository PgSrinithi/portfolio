import React, { useState } from "react";
import "./skills.css";
import HTML from "../../assets/HTML.png";
import CSS from "../../assets/CSS.png";
import javascript from "../../assets/JS.png";
import typescript from "../../assets/typescript.png";
import react from "../../assets/reactjs.png";
import mobx from "../../assets/mobx.png";
import jira from "../../assets/jira.jpg";
import github from "../../assets/github.png";
import circleci from "../../assets/circleci.png";
import jest from "../../assets/jest.jpg";
import nunit from "../../assets/nunit.png";
import csharp from "../../assets/csharp.png";

const Skills = () => {
  const listOfSkillSets = [
    {
      src: HTML,
      alt: "HTML",
      title: "HTML",
    },
    {
      src: CSS,
      alt: "CSS",
      title: "CSS",
    },
    {
      src: javascript,
      alt: "Javascript",
      title: "Javascript",
    },
    {
      src: typescript,
      alt: "Typescript",
      title: "Typescript",
    },
    {
      src: react,
      alt: "react",
      title: "React JS",
    },
    {
      src: csharp,
      alt: "csharp",
      title: "C#",
    },
    {
      src: mobx,
      alt: "mobx",
      title: "Mobx",
    },
    {
      src: jest,
      alt: "jest",
      title: "Jest",
    },
    {
      src: nunit,
      alt: "nunit",
      title: "NUnit",
    },
    {
      src: github,
      alt: "github",
      title: "Github",
    },
    {
      src: jira,
      alt: "jira",
      title: "Jira",
    },
    {
      src: circleci,
      alt: "circleci",
      title: "Circleci",
    },
  ];

  const [isSeeMoreClicked, setIsSeeMoreClicked] = useState(false);
  return (
    <section id="skills">
      <h2 className="skillTitle">Skills</h2>
      <span className="skillDescription">
        Here is a compilation of the skill set I've cultivated and elevated
        through hands-on experience in my past projects and over three years of
        professional development.
      </span>
      <div className="skillImages">
        {listOfSkillSets
          .slice(0, !isSeeMoreClicked ? 3 : listOfSkillSets?.length)
          .map((skill, index) => {
            return (
              <div className="skillCard" key={index}>
                <img src={skill.src} alt={skill.alt} className="skillImage" />
                <h3>{skill.title}</h3>
              </div>
            );
          })}
      </div>
      <button
        className="seeMoreBtn"
        onClick={() => setIsSeeMoreClicked(!isSeeMoreClicked)}
      >
        {isSeeMoreClicked ? "See Less" : "See More"}
      </button>
    </section>
  );
};

export default Skills;
