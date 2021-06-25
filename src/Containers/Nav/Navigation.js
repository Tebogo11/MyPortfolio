import React from "react";
//useWindowSize
import { useWindowSize } from "../../Hook/useWindowSize";

import logo from "../../asserts/Logo.png";
import "./NavCss.css";
//UIComponents
import Button from "@material-ui/core/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navigation = ({ screenSelector }) => {
  const setCurrentPage = (screen) => {
    screenSelector(screen);
  };

  const breakpoint = 710;

  const size = useWindowSize();

  return (
    <div className="Navigation">
      <div>
        <img style={{ width: "120px", margin: "10px" }} alt="logo" src={logo} />
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
      {size.width < breakpoint ? (
        ""
      ) : (
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
      )}
    </div>
  );
};

export default Navigation;

//Logo
//Tab navigation
//GitHub and CV icons
