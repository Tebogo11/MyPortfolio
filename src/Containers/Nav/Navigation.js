import React from "react";
import logo from "../../asserts/logo.png";
import "./NavCss.css";
//UIComponents
import Button from "@material-ui/core/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navigation = ({ screenSelector }) => {
  const setCurrentPage = (screen) => {
    screenSelector(screen);
  };

  return (
    <div className="Navigation">
      <div>
        <img style={{ width: "150px" }} alt="logo" src={logo} />
      </div>
      <div className="TabNav">
        <Button onClick={() => setCurrentPage("Home")}>
          <p className="TabText">Home</p>
        </Button>
        <Button onClick={() => setCurrentPage("Projects")}>
          <p className="TabText">Projects</p>
        </Button>
        <Button onClick={() => setCurrentPage("Contact")}>
          <p className="TabText">Contact</p>
        </Button>
      </div>
      <div className="IconStyle">
        <div className="icon">
          <a
            href="https://github.com/Tebogo11"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "github"]}
              color="white"
              size="2x"
              swapOpacity
            />
          </a>
        </div>
        <div className="icon">
          <a
            href="https://stackoverflow.com/users/14677783/tebogo11"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "stack-overflow"]}
              color="white"
              size="2x"
              swapOpacity
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navigation;

//Logo
//Tab navigation
//GitHub and CV icons
