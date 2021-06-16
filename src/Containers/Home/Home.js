import React from "react";
import Intro from "./Intro/introduction";
import AboutMe from "./AboutMe/AboutMe";
import Certificates from "./certificates/certificatesPage";
const Home = () => {
  return (
    <div>
      <Intro />
      <AboutMe />
      <Certificates />
    </div>
  );
};

export default Home;
