import React, { useContext, useEffect, useRef } from "react";
import Swiper from "swiper";
import Probox from "./probox";
import project1 from "../../assets/my projects/srms.png";
import project2 from "../../assets/my projects/snotes.png";
import project3 from "../../assets/my projects/auth.png";
import project4 from "../../assets/my projects/reactchatapp.png";
import project5 from "../../assets/my projects/snackgame.png";
import project6 from "../../assets/my projects/tiktoktoe.png";
import project7 from "../../assets/my projects/simpleslider.png";
import project8 from "../../assets/my projects/simplecal.png";
import "swiper/swiper-bundle.css";
import "./pg.css";
import { themeContext } from "../../Context";

function Projects() {
  const nightmood = useContext(themeContext);
  const { isNightMode } = nightmood;
  const style = {
    background: `${isNightMode ? "black" : "white"}`,
    color: `${isNightMode ? "white" : "black"}`,
  };

  const projects = [
    {
      project: project1,
      projectname: "Student Record mangement System",
      link: "www.github.io",
      tag: "MERN",
    },
    {
      project: project2,
      projectname: "Secure Notes",
      link: "www.github.io",
      tag: "MERN",
    },
    {
      project: project3,
      projectname: "Authentication System",
      link: "www.github.io",
      tag: "MERN",
    },
    {
      project: project4,
      projectname: "Chat App",
      link: "www.github.io",
      tag: "React+SocketIO",
    },
    {
      project: project5,
      projectname: "Snack Game",
      link: "www.github.io",
      tag: "html,css,js",
    },
    {
      project: project6,
      projectname: "Tik Tok Toe",
      link: "www.github.io",
      tag: "html,css,js",
    },
    {
      project: project7,
      projectname: "Images Slider",
      link: "www.github.io",
      tag: "html,css,js",
    },
    {
      project: project8,
      projectname: "Calculator",
      link: "www.github.io",
      tag: "html,css,js",
    }
  ];

  const swiperRef = useRef(null);

  useEffect(() => {
    swiperRef.current = new Swiper(".swiper-container", {
      slidesPerView: 1,
      spaceBetween: 20,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        576: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 3,
        },
      },
    });

    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy();
      }
    };
  }, []);

  return (
    <section id="projects" className="projectspage" style={style}>
      <div className="promaincon">
        <div className="propagename">Projects</div>
        <div className="all-pro">
          <div className="swiper-container">
            <div className="swiper-wrapper">
              {projects.map((e, i) => (
                <Probox
                  img={e.project}
                  name={e.projectname}
                  tag={e.tag}
                  link={e.link}
                  key={i}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
