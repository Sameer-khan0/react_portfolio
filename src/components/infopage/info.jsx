import { useContext } from "react";
import { motion } from "framer-motion";
import imoji from '../../assets/img/glassesimoji.png'
import imoji0 from '../../assets/img/glasses.png'
import "./infoitems/info.css";
import Container from "./infoitems/Container";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaGithub,
} from "react-icons/fa";
import Infoimg from "./infoitems/info2.png";
import imgbg1 from "../../assets/img/Vector2.png";
import imgbg2 from "../../assets/img/Vector1.png";
import { themeContext } from "../../Context";
import cv from './infoitems/cv.pdf'

function info() {
  const nightmood = useContext(themeContext);
   const { isNightMode } = nightmood;

  const transition = { duration: 2, type: "spring" };
  const iconstyle = { color: isNightMode ? "white" : "" };

  return (
    <saction
      id="info-context"
      className="info"
      style={{
        background: isNightMode ? "black" : "white",
        color: isNightMode ? "white" : "black",
      }}
    >
      <div className="left-content" id="left-c">
        <div className="i-name">
          <span className="greeting">Hy! I Am</span>
          <span className="name">Muhammad sameer</span>
          <span>
            Full Stack Web Developer with a strong background in both frontend
            and backend development. I am passionate about web designing and
            development, consistently delivering high-quality work.
          </span>
        </div>
        <a href={cv} download>
        <button className="button i-button">
          Downlaod CV
        </button>
        </a>
        <div className="i-icons">
          <a href="https://twitter.com/samkhan6tt"><FaTwitter style={iconstyle} className="icon" /></a>
          <a href="https://www.facebook.com/100093069812273"><FaFacebook style={iconstyle} className="icon" /></a>
          <a href="https://www.instagram.com/sameer_1o2/"><FaInstagram style={iconstyle} className="icon" /></a>
          <a href="https://www.linkedin.com/in/muhammad-sameer-719b9a270/"><FaLinkedin style={iconstyle} className="icon" /></a>
          <a href="https://wa.me/03090248230"><FaWhatsapp style={iconstyle} className="icon" /></a>
          <a href="https://github.com/Sameer-khan0"><FaGithub style={iconstyle} className="icon" /></a>
        </div>
      </div>
      <div className="right-content h-[50%] md:h-[100%]" id="right-c">
        <motion.div
        className="floatright"  
        initial={{ left: "-30%" }}
        whileInView={{ left: "-7%" }}
        transition={transition}
        >
          <Container img='crown' msg="Web developer"/>
        </motion.div>
        <motion.div
          initial={{ top: "11%", left: "74%" }}
          className="floatright"  
          whileInView={{ left: "68%" }}
          transition={transition}
        >
          <img src={imoji0} alt="Image" />
        </motion.div>
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floatright"
        >
          <img src={imoji} alt="emoji" />
        </motion.div>

        <motion.div
          initial={{ right: "9rem", top: "24rem" }}
          whileInView={{ right: "0rem" }}
          transition={transition}
          className="floatright"
        >
        <Container img='thum' width='7rem' />
        </motion.div>

        <div className="bg-back">
          <img src={imgbg1} alt="" className="bg-1" />
        </div>
        <div className="bg-back0">
          <img src={imgbg2} alt="" className="bg-2" />
        </div>
        <div className="profilepic">
          <img className=" h-[100%] " src={Infoimg} alt="profile" />
        </div>
      </div>
    </saction>
  );
}

export default info;
