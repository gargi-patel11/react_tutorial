import React, { useState } from "react";

export default function Textarea(props) {
  const hendleUPClicked = () => {
    setText(text.toUpperCase());
  };
  const hendledwClicked = () => {
    setText(text.toLowerCase());
  };

  const onchangefun = (event) => {
    setText(event.target.value);
  };
  const copytext = () => {
    let text22 = document.getElementById("exampleFormControlTextarea1");
    text22.select();
    navigator.clipboard.writeText(text22.value);
  };
  const removeextraspaces = () => {
    let find = text.split(/[" "]+/)
    setText(find.join(" "))
    console.log("hello im here")
  };


  const [text, setText] = useState("");
  return (
    <>
      <div>
        <h1>{props.heading}</h1>

        <div className="form-group textarea ">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="9"
            placeholder="enter your text here"
            value={text}
            onChange={onchangefun}
          ></textarea>
          <button
            className="btn btn-primary my-3 mx-3"
            onClick={hendleUPClicked}
          >
            Conver to UpperCase
          </button>
          <button
            className="btn btn-primary my-3 mx-3"
            onClick={hendledwClicked}
          >
            Conver to LowerrCase
          </button>
          <button className="btn btn-primary my-3 mx-3" onClick={copytext}>
            copy text
          </button>
          <button
            className="btn btn-primary my-3 mx-3"
            onClick={removeextraspaces}
          >
            remove extra spaces 
          </button>
        </div>
      </div>
      <div className="container">
        <h3>text summary </h3>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
      </div>
      <div>
        <h3>text preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
