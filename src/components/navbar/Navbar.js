import React from "react";
import { Link } from "react-router-dom";
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
          <Link className="menu__items" to="hello">
            HELLO
          </Link>
        </div>
        <div className="navBar__menuItems">
          <Link className="menu__items" to="works">
            WORKS
          </Link>
        </div>
        <div className="navBar__menuItems">
          <Link className="menu__items" to="resume">
            RESUME
          </Link>
        </div>
        <div className="navBar__menuItems">
          <Link className="menu__items" to="lets-talk">
            LET'S TALK
          </Link>
        </div>
      </div>
      <div className="navBar__socialIcon">
        <a href="https://www.twitter.com">
          <img src={twitter} alt="" />
        </a>
        <a href="https://www.linkedin.com">
          <img src={linkedIn} alt="" />
        </a>
        <a href="https://www.facebook.com">
          <img src={facebook} alt="" />
        </a>
        <a href="https://www.instagram.com">
          <img src={instagram} alt="" />
        </a>
      </div>
    </div>
  );
}

export default navbar;
