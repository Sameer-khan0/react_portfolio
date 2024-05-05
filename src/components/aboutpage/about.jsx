import { useContext } from "react";
import aboutimg from "./abt0.png";
import "./about.css";
import { motion } from "framer-motion";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import {themeContext} from '../../Context'

function about() {
  const transition = { duration: 2, type: "spring" };

  const nightmood = useContext(themeContext);
   const { isNightMode } = nightmood;
   const color={'color':isNightMode?'#bfbfbf':'black'}
  return (
    <section id="about" className="about" style={{background:isNightMode?'black':''}}>
      <div className="abt-left-con h-[50%] ">
        <motion.div
          className="aboutitem"
          initial={{ left: "1rem", top: "0rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <FaFacebook />
        </motion.div>
        <motion.div
          className="aboutitem"
          initial={{ right: "1rem", top: "2rem" }}
          whileInView={{ right: "5rem" }}
          transition={transition}
        >
          <a href="https://twitter.com/samkhan6tt"><FaTwitter /></a>
        </motion.div>
        <motion.div
          className="aboutitem"
          initial={{ left: "1rem", top: "1.5rem" }}
          whileInView={{ left: "6rem" }}
          transition={transition}
        >
         <a href="https://www.linkedin.com/in/muhammad-sameer-719b9a270/"> <FaLinkedin /></a>
        </motion.div>
        <motion.div
          className="aboutitem"
          initial={{ left: "2rem", bottom: "1.1rem" }}
          whileInView={{ left: "9rem" }}
          transition={transition}
        >
         <a href="https://www.instagram.com/sameer_1o2/"> <FaInstagram /></a>
        </motion.div>
        <motion.div
          className="aboutitem"
          initial={{ right: "1rem", bottom: "1.2rem" }}
          whileInView={{ right: "7rem" }}
          transition={transition}
        >
          <a href="https://wa.me/03090248230"><FaWhatsapp /></a>
        </motion.div>
        <img src={aboutimg} className=" h-[100%] rounded-full object-contain "  alt="Muhammad Sameer" />
      </div>
      <div className="abt-right-con">
        <div className="abt-heading">
          <h2 style={color}>About Me</h2>
        </div>
        <div className="abt-introduction">
          <p style={color}>
            Hello! I'm Muhammad Sameer, an undergraduate student pursuing a
            degree in Software Engineering. Passionate about web development, I
            specialize in full-stack web development.
          </p>
          <p style={color} >
            I love creating seamless and user-friendly web experiences. From
            designing the front end to masnaging the back end, I enjoy the entire
            process of bringing ideas to life in the digital world.
          </p>
          <p style={color}>
            Feel free to reach out to me at{" "}
            <a href="mailto:muhmmadsameer86@gmail.com">
              muhmmadsameer86@gmail.com
            </a>{" "}
            or call me at <a href="tel:+923430159930">0343-0159930</a>. I'm
            always open to new opportunities, collaborations, or just a friendly
            chat about technology!
          </p>
        </div>
        <a href="#contact">
        <button className="button i-button">Contect me</button>
        </a>
      </div>
    </section>
  );
}

export default about;
