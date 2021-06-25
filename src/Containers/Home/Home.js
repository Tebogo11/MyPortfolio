import React from "react";
import Intro from "./Intro/introduction";
import AboutMe from "./AboutMe/AboutMe";
import Certificates from "./certificates/certificatesPage";
const Home = () => {
  return (
    <div>
      <Intro />
      <Certificates />
      <AboutMe />
    </div>
  );
};

export default Home;
