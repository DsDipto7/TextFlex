// import logo from './logo.svg';
//import { useState } from "react";
import "./App.css";
//import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";

function App() {
 

  
  return (
    <>
      <Navbar title="TextFlex"  aboutText="About Text" />
      <div className="container" my-5>
        <Textform heading="Enter Your Text To Analyze" />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
