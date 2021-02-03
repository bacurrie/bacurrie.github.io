import React, { useState, useEffect } from "react";
import Scene from "./scene.js";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import About from './contents/About';
import Education from './contents/Education';
import Skills from './contents/Skills';
import Contact from './contents/Contact';
import Home from './contents/Home';

/*
TODO add transparent background to condiv
TODO add src button that links to repo master
TODO add projects page
TODO geobasket 
*/

function App() {
  const [state, setState] = useState({
    isLoaded: true
  });

  /* eslint-disable */
  useEffect(() => {
    setTimeout(() => {
      setState(state => {
        return {
          isLoaded: false
        };
      });
    }, 2000);
  }, []);

  return (
    <div className="App">

      {state.isLoaded && <div className="loading"></div>}

      <header>NAVIGATION      </header>
      <BrowserRouter>
      <div className="App">  
        <Navbar/>

        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/education">
          <Education />
        </Route>
        <Route path="/skills">
          <Skills />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </div>
      </BrowserRouter>
      <Scene/>
    </div>
  );
}

export default App;
