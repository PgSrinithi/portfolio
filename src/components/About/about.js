import React from 'react';
import './about.css';
import UIDesign from "../../assets/ui-design.png";
import webdesign from "../../assets/website-design.png";
import deveopsDesign from "../../assets/devops.png";

const About = () => {
    const skillSet = [
        {
            src: UIDesign,
            title: "UI/UX design",
            description: "Turning Figma designs into captivating web experiences with precision and creativity"
        },
        {
            src: webdesign,
            title: "Fullstack developer",
            description: "Proficient in ReactJS and C#, seamlessly integrating frontend elegance with backend robustness for comprehensive web solutions"
        }, {
            src: deveopsDesign,
            title: "DevOps Engineer",
            description: "Ensuring streamlined development pipelines and robust infrastructure for optimal software delivery."
        },
    ]
    return (
        <section id="about">
            <span className='aboutTitle'>What I do</span>
            <span className='aboutDescription'>I am a seasoned full-stack developer with expertise in frontend technologies such as HTML, CSS, JavaScript, TypeScript, and ReactJS. On the backend, I have proficiency in .NET Core, leveraging MySQL databases. I have also implemented comprehensive test coverage using Jest for the frontend and NUnit for the backend, ensuring robust and reliable applications. My diverse skill set and hands-on experience contribute to delivering seamless and scalable solutions across the entire development stack.</span><br />
            <span className='aboutBars'>
                {skillSet.map((skill) => {
                    return (
                    <span className='aboutBar'>
                        <img src={skill.src} alt="" className='aboutBarImg' />
                        <div className='aboutBarText'>
                            <h2>{skill.title}</h2>
                            <p>{skill.description}</p>
                        </div>
                    </span>
                    )
                })}
            </span>

        </section>
    )
}

export default About