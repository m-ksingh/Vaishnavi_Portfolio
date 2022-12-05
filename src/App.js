import React from "react";
import Navbar from "./Component/Header/Header";
import Footers from "./Component/Footer/Footer"
import About from "./Page/About/About";
import { Skills } from "./Page/Skills/Skills";
import {BrowserRouter as Router} from "react-router-dom"
import { Services } from "./Page/Services/Services";
import { Contact } from "./Page/Contact/Contact";

function App() {
  return (
    <div >
      <Router>
      <Navbar/>
      <Services/>
      <Skills/>
    <Contact/>

    <Footers/>
      </Router>
  
    </div>
  );
}

export default App;
