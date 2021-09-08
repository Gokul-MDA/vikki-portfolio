import React from "react";
import "./About.css";
import about_image from "../../images/About.svg";

const About = (props) => {
  return (
    <div className="about">
      <div className="box">
        <div className="about__content">
          <div className="about__image">
            <img src={about_image} alt="" />
          </div>
          <div className="about__me">
            <h4>ABOUT ME</h4>
            <h5>
              My name is Vigneshwaran, Visual Design is my strength and I have
              knowledge about UI/UX, wireframing, and prototyping.{" "}
            </h5>
          </div>
          <span className="close-icon" onClick={props.handleClose}>
            x
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
