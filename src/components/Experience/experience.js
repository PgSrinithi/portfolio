import React from "react";
import "./experience.css";

const Experience = () => {
  const listOfExperience = [
    {
      designation: "System Engineer Trainee",
      period: "Feb'21 - July'21",
      description:
        "Mastered React.js and Java Spring Boot, actively driving front-end development in a collaborative team project dedicated to crafting an innovative web application for hotel management",
    },
    {
      designation: "System Engineer",
      period: "July'21 - July'22",
      description:
        "Embarked on my role as a front-end developer, specializing in React.js and MobX, actively contributing to the web application development. Simultaneously, engaged in TypeScript for mobile application development, enhancing the digital solutions for a Canadian-based fertilizer company",
    },
    {
      designation: "Senior System Engineer",
      period: "July'22 - Present",
      description:
        "In the same project, I evolved into a proficient backend developer, expanding my role to a full-stack developer for enhanced productivity. Additionally, I delved into report development using OpenXML and Telerik Report Designer",
    },
  ];
  return (
    <section id="experience">
      <h2 className="experienceTitle">Experience</h2>
      <span className="experienceDescription">
        Presenting the designations and roles I've acquired and continually
        developed during my enriching three-year professional journey
      </span>
      <div className="experienceSection">
      {listOfExperience.map((experience) => {
        return (
          <div className="experienceCard">
            <h3>{experience.designation}</h3>
            <span>{experience.period}</span>
            <p>{experience.description}</p>
          </div>
        );
      })}</div>
    </section>
  );
};

export default Experience;
