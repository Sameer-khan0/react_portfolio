import React from "react";
import './pg.css'

function probox(props) {
  return (
    <div className="swiper-slide" id="proslides">
      <div className="probox">
        <div className="proimg">
          <img src={props.img} alt="img" />
        </div>
        <div className="proname">{props.name}</div>
        <div className="protag">{props.tag}</div>
        <button className="button i-button" ><a href={props.link}>Source Code</a></button>
      </div>
    </div>
  );
}

export default probox;
