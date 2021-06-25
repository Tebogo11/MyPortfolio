import React from "react";
import "./introCss.css";

const intro = () => {
  return (
    <div>
      <div className="jumbotron tl intro">
        <h1 className="display-4 textColor">Hi There,</h1>
        <h1 className="display-6 textColor">My name is Tebogo Dube</h1>
        <p className="lead textColor">
          Welcome to my online portfolio, where you can learn a little about me
          and view some of the projects I have worked on over time.
        </p>

        <div className="mt3  borderline">
          <p className="tr mv mantra textColor">
            My Mantra is:
            <em>
              "Its fine to celebrate success but it is more important to heed
              the lessons of failure"
            </em>
          </p>
          <p className="tr textColor">- Bill Gates</p>
        </div>
      </div>
    </div>
  );
};

export default intro;
