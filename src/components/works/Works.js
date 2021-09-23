import React from "react";
import { Element } from "react-scroll";
import { Link } from "react-router-dom";
import "./Works.css";
import Drona from "../../images/Drona.png";
import CooKoo from "../../images/CooKoo.png";
import DronaSoftware from "../../images/DronaSoftware.png";
import Dockt from "../../images/Dockt.png";
import arrow from "../../images/arrow-down.png";

function Works() {
  return (
    <div>
      <Element name="works" className="works1">
        <div className="works-bg">
          <div className="works__mainHeading">
            <h3>" Design is thinking made Visual "</h3>
            <h4>
              The designer does not begin with some preconceived idea. Rather,
              the idea is the result of careful study and observation, and the
              design a product of that idea.
            </h4>
            <h5>Here's a few work that I'd like to share.</h5>
            <img src={arrow} alt="" />
          </div>
        </div>

        <div className="works__imageLeft">
          <div className="works__cooKoo">
            <img src={CooKoo} alt="Drona" />
          </div>
          <div className="works__cooKoo-content">
            <h3 className="content-h3">CooKoo app</h3>
            <h5 className="content-h5">Visual Designer (UI/UX)</h5>
            <h4 className="content-h4">
              CooKoo is a Food delivery app that provides food deliver at your
              door step very less timing with best packaging. Providing food
              from every famous Restaurants near by you. Order food with best
              user experience.
            </h4>
            <Link className="menu__items" target={"_blank"} to="cookoo">
              <button className="works__button">SEE MORE</button>
            </Link>
          </div>
        </div>
        <div className="works__imageRight">
          <div className="works__drona-content">
            <h3 className="content-h3">Drona app</h3>
            <h5 className="content-h5">Visual Designer (UI/UX)</h5>
            <h4 className="content-h4">
              Drona is a easy to use institution management app specially
              Designed for schools and colleges.
            </h4>
            <div className="works__buttons">
              <a
                target={"_blank"}
                rel="noreferrer"
                href="https://www.figma.com/proto/MchiY0fxetJEkZ02JEv1WF/Drona-app?page-id=0%3A1&node-id=30%3A20512&viewport=241%2C48%2C0.04&scaling=scale-down-width"
              >
                <button className="works__button">SEE MORE</button>
              </a>
            </div>
          </div>
          <div className="works__drona">
            <img src={Drona} alt="Drona" />
          </div>
        </div>
        <div className="works__imageLeft">
          <div className="works__dronaSoftware">
            <img src={DronaSoftware} alt="Drona" />
          </div>
          <div className="works__dronaSoftware-content">
            <h3 className="content-h3">Drona Software</h3>
            <h5 className="content-h5">Visual Designer (UI/UX)</h5>
            <h4 className="content-h4">
              Drona is a easy to use institution management app specially
              Designed for schools and colleges.
            </h4>
            <div className="works__buttons">
              <a
                target={"_blank"}
                rel="noreferrer"
                href="https://www.figma.com/proto/MyyhYOt5eIh5yTDrvt0rtF/Drona?page-id=0%3A1&node-id=8%3A2&viewport=241%2C48%2C0.11&scaling=scale-down-width"
              >
                <button className="works__button">SEE MORE</button>
              </a>
            </div>
          </div>
        </div>

        <div className="works__imageRight">
          <div className="works__dockt-content">
            <h3 className="content-h3">Dockt Landing Page</h3>
            <h5 className="content-h5">Visual Designer (UI/UX)</h5>
            <h4 className="content-h4">
              Dockt is a Billing software . we create Dockt landing page with
              awsome user interface.
            </h4>
            <div className="works__buttons">
              <a
                target={"_blank"}
                rel="noreferrer"
                href="https://dockt-head.vercel.app/"
              >
                <button className="works__button">SEE MORE</button>
              </a>
            </div>
          </div>
          <div className="works__dockt">
            <img src={Dockt} alt="Drona" />
          </div>
        </div>
      </Element>
    </div>
  );
}

export default Works;
