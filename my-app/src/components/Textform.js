import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    console.log("Uppercase has clicked");
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    console.log("Lowercase has clicked");
    setText(newText);
  };

  const handleClearClick = () => {
    let newText = '';
     setText(newText);
  };


  const Copy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };


  const handleSpeak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  };

  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  }


  const [text, setText] = useState("Enter Text Here");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="my-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="10"
          ></textarea>
        </div>


        <button className="btn btn-success mx-1" onClick={handleUpClick}>
          Convert To Uppercase
        </button>


        <button className="btn btn-info mx-2" onClick={handleLoClick}>
          Convert To Lowercase
        </button>


        <button className="btn  mx-2" style={{ backgroundColor: '#9B7EBD', color: 'white' }} onClick={handleClearClick}>
          Clear
        </button>

        {/* <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button> */}

        <button className="btn mx-2" style={{ backgroundColor: '#98DED9', color: 'white' }} onClick={handleSpeak} >speak</button>

        <button className="btn mx-2" style={{ backgroundColor: '#CDC1FF', color: 'black' }} onClick={Copy}  >Copy</button>

        <button className="btn mx-1" style={{ backgroundColor: '#BFECFF', color: 'black' }} onClick={handleExtraSpaces}>Remove extra spaces</button>




      </div>
      <div className="container" my-3>
        <h1>Your Text Summary </h1>
        <p>
          <p>
            {text.trim().split(/\s+/).length} Words and {text.length} Characters
          </p>
        </p>
        <p>{0.008 * text.split(" ").length} Minutes take to read it</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
