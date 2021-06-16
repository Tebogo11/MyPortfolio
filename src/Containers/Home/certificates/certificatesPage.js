import React from "react";
import "./CertCss.css";
const certificatesPage = () => {
  const data = [
    {
      CertificateUrl: "./Image/ReactNative.png",
      Title: "React Native - The Practical Guide [2021 Edition]",
      Auther: "Maximilian Schwarzmüller",
      Link: "https://www.udemy.com/course/react-native-the-practical-guide/",
    },
    {
      CertificateUrl: "./Image/WebDevelopment.jpg",
      Title: "The Complete Web Developer in 2021: Zero to Mastery",
      Auther: "Andrei Neagoie",
      Link: "https://www.udemy.com/course/the-complete-web-developer-zero-to-mastery/",
    },
  ];
  return (
    <div className="Container">
      <h1 className="title ">Certificates</h1>
      <hr className="hrAbout " />
      <div className="ContainerCertificates">
        {data.map((item) => {
          const url = item.CertificateUrl;
          const imageUrl = require(url + "");
          return (
            <div>
              <img src={imageUrl.default} alt="Certificate" />
              <h4>
                <a href={item.Link} target="_blank" rel="noopener noreferrer">
                  {item.Title}
                </a>
              </h4>
              <p>{`Created By: ${item.Auther}`}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default certificatesPage;
