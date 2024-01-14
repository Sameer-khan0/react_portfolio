import React, { useContext } from "react";
import "./ser.css";
import serimg from "./ser.png";
import { FaCode, FaPaintBrush, FaDatabase } from 'react-icons/fa';
import Serbox from "./Serbox";
import { themeContext } from "../../Context";

function Service() {
  const nightmood = useContext(themeContext)
  const {isNightMode}=nightmood
  const style={'background':`${isNightMode?'black':'white'}`,'color':`${isNightMode?'white':'black'}`}

  const webDevelopmentServices = [
    {
      serviceName: "Web Development",
      logo: <FaCode />,
      move:'4rem',
      description:
      "We offer full-stack web development services using modern technologies to create scalable and efficient web applications.",
    },
    {
        serviceName: "UI/UX Design",
        logo: <FaPaintBrush />,
        move:'-5rem',
        description:
        "Our UI/UX design services focus on creating visually appealing and user-friendly interfaces for seamless user experiences.",
    },
    {
        serviceName: "Database Management",
        logo: <FaDatabase />,
        move:'4rem',
      description:
        "We specialize in database management, ensuring data integrity, security, and optimal performance for your applications.",
    },
  ];
  return (
    <section id="service" className="service" style={style}>
      <div className="ser-sides">
        <div className="ser-left">
      <div className="ser-head">My Services</div>
          <div className="ser-img">
            <img src={serimg} alt="img" />
          </div>
        </div>
        <div className="ser-right">
          <div className="ser-boxs">
            {webDevelopmentServices.map((e,i)=><Serbox name={e.serviceName} transition={e.move} logo={e.logo} desc={e.description} index={i}/>)}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
