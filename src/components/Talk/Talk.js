import React from "react";
import { Element } from "react-scroll";
import "./Talk.css";

function Talk() {
  return (
    <div>
      <Element name="lets-talk" className="lets-talk">
        <div className="talks__mainHeading">
          <h3>Let’s Talk</h3>
          <h4>
            If you like my works and my designs and mainly
            <b> you like to hire me contact me.</b> <br /> It would be my
            pleasure to work on the next big idea.
          </h4>
        </div>
        <form id="first_name" className="talk">
          <div className="form-text">
            <label htmlFor="">Name</label>
            <input type="text" />
          </div>
          <div className="form-text">
            <label htmlFor="">Gmail</label>
            <input type="text" />
          </div>
          <div className="form-textArea">
            <label htmlFor="">Message</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
          <button className="form-button">Send Message</button>
        </form>
      </Element>
    </div>
  );
}

export default Talk;
