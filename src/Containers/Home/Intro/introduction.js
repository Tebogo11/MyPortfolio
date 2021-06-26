import React from "react";
import "./introCss.css";

const intro = () => {
  return (
    <div>
      <div className="jumbotron tl intro">
        <h1 className="display-3 textColor animate__animated animate__shakeX">
          Hi There
        </h1>
        <h1 className="display-6 textColor animate__animated  animate__slideInLeft">
          My name is Tebogo Dube
        </h1>
        <p className="lead textColor introP">
          Welcome to my online portfolio, where you can learn a little about me
          and view some of the projects I have worked on over time.
        </p>
        <div className="mt3  borderline"></div>
      </div>
    </div>
  );
};

export default intro;
