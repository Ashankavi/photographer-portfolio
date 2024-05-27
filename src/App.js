import React from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Portfolio from "./Components/Portfolio";
import Studio from "./Components/Studio";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Studio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
