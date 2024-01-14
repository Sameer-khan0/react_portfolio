import React, { useContext } from "react";
import {
    FaHtml5,
    FaCss3Alt,
    FaBootstrap,
    FaPython,
    FaJsSquare,
    FaSass,
    FaNodeJs,
    FaReact,
    FaCss3,
    FaAdjust,
    FaEject,
    FaDatabase,
  } from "react-icons/fa";
import "./skill.css";
import Basicskl from "./skillboxs/Skillbox";
import { themeContext } from "../../Context";
import skillimg from './skill.png'

function SkillsComponent() {
  const nightmood = useContext(themeContext)
  const {isNightMode}=nightmood
  const style={'background':`${isNightMode?'black':'white'}`,'color':`${isNightMode?'white':'black'}`}

  const skillsData = [
        { name: "HTML", progress: "80", icon: <FaHtml5 /> },
        { name: "CSS", progress: "70", icon: <FaCss3Alt /> },
        { name: "JavaScript", progress: "65", icon: <FaJsSquare /> },
        { name: "SASS", progress: "50", icon: <FaSass /> },
        { name: "Bootstrap", progress: "60", icon: <FaBootstrap /> },
        { name: "Python", progress: "50", icon: <FaPython /> },
        { name: "React", progress: "70", icon: <FaReact /> },
        { name: "Framer", progress: "60", icon: <FaAdjust /> },
        { name: "Tailwindcss", progress: "50", icon: <FaCss3 /> },
        { name: "Node js", progress: "60", icon: <FaNodeJs /> },
        { name: "Machine Learning", progress: "30", icon: <FaPython/> },
        { name: "Ejs", progress: "65", icon: <FaEject /> },
        { name: "MongoDB", progress: "60", icon: <FaDatabase /> },
  ];

  return (
    <section id="skills" className="skillpage" style={style}>
      <div className="per-sides">
        <div className="per-left">
      <div className="per-head">My Skills</div>
          <div className="per-img" style={{color:`${isNightMode?"#fff":"#2c3e50"}`}}>
            <img src={skillimg} alt="img" />
          </div>
        </div>
        <div className="per-right">
          <div className="per-boxs">
          {skillsData.map((e,i) =>
            <Basicskl key={i} name={e.name} progress={e.progress} icon={e.icon} />
          )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsComponent;
