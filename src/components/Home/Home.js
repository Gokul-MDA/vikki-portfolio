import React, { useState } from "react";
import { Element } from "react-scroll";
import "./Home.css";
import boy1 from "../../images/A_Boy.svg";
import About from "../About/About";

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Element name="hello">
      <div className="home">
        <div className="home__left">
          <h3>
            Hello there! <br /> I'm Vigneshwaran
          </h3>
          <h4>
            A Passionate designer interested in <b>Visual Design</b> . Worked on
            illustration and very much focused in <b>quality of my work</b> .
            Designing is my field of expertise.
          </h4>
          <button className="home__button" onClick={togglePopup}>
            ABOUT ME
          </button>
          {isOpen && <About handleClose={togglePopup} />}
        </div>
        <div className="home__right">
          <img src={boy1} alt="" />
        </div>
      </div>
    </Element>
  );
}

export default Home;
