import React from "react";
import { Element, Link } from "react-scroll";
import "./Navbar.css";
import icon from "../../images/logo.png";
import twitter from "../../images/twitter.png";
import instagram from "../../images/instagram.png";
import facebook from "../../images/facebook.png";
import linkedIn from "../../images/linkedIn.png";

function navbar() {
  return (
    <div className="navBar">
      <div className="navBar__icon">
        <img src={icon} alt="" />
      </div>
      <div className="navBar__menu">
        <div className="navBar__menuItems">
          <Link activeClass="active" to="hello" smooth={true}>
            HELLO
          </Link>
        </div>
        <div className="navBar__menuItems">
          <Link activeClass="active" to="works" smooth={true} offset={-250}>
            WORKS
          </Link>
        </div>
        <div className="navBar__menuItems">
          <Link activeClass="active" to="resume" smooth={true}>
            RESUME
          </Link>
        </div>
        <div className="navBar__menuItems">
          <Link activeClass="active" to="lets-talk" smooth={true} offset={-60}>
            LET'S TALK
          </Link>
        </div>
      </div>
      <div className="navBar__socialIcon">
        <a href="#">
          <img src={twitter} alt="" />
        </a>
        <a href="#">
          <img src={linkedIn} alt="" />
        </a>
        <a href="#">
          <img src={facebook} alt="" />
        </a>
        <a href="#">
          <img src={instagram} alt="" />
        </a>
      </div>
    </div>
  );
}

export default navbar;
