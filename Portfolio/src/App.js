import React, { useState } from "react";
import "./css/App.css";

// COMPONENTS
import AboutMe from "./components/AboutMe";
import Introduction from "./components/Introduction";
import Projects from "./components/Projects";
import NavBar from "./components/NavBar";
import Contact from "./components/Contact";
import Backdrop from "./components/Backdrop";
import SideDrawer from "./components/SideDrawer";

const App = () => {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <div className="App">
      <NavBar hamburger={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <div className="content">
        <Introduction />
        <Projects />
        <AboutMe />
        <Contact />
      </div>
    </div>
  );
};

export default App;
