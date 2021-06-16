import "./App.css";
import React, { useState } from "react";
//Navigation
import Navigation from "./Containers/Nav/Navigation";
//Introduction
import Home from "./Containers/Home/Home";
//Contact
import Contact from "./Containers/Contact/Contact";
//Projects
import Projects from "./Containers/Projects/Projects";
//Footer
import Footer from "./Containers/Footer/footer";
//Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

function App() {
  const [currentPage, setcurrentPage] = useState("");

  const changeScreen = (screen) => {
    setcurrentPage(screen);
    console.log(screen);
  };

  const renderPage = (page) => {
    switch (page) {
      case "Home":
        return <Home />;
      case "Projects":
        return <Projects />;
      case "Contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };
  return (
    <div className="App">
      <nav className="App-header">
        <Navigation screenSelector={changeScreen} />
      </nav>
      <div>
        {/* rendering Pages*/}
        {renderPage(currentPage)}
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
