import React from "react";
import "./footCss.css";
//UIComponents
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useWindowSize } from "../../Hook/useWindowSize";

const Footer = () => {
  const breakpoint = 710;

  const size = useWindowSize();

  return (
    <div className="footer">
      <div className="footerContactD">
        <h1>Contact Details: </h1>
        <p>
          <strong>Name: </strong>Tebogo Dube
        </p>
        <p>
          <strong>Email: </strong>Tebogodube11@outlook.com
        </p>
        <p>
          <strong>Number: </strong> 07762 241739{" "}
        </p>
      </div>
      <div>
        {size.width < breakpoint ? (
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
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Footer;
