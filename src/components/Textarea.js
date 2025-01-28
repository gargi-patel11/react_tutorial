import React, { useState } from "react";
// import props.createalertert from './Alert'


export default function Textarea(props) {
  const hendleUPClicked = () => {
    document.title=props.title
    setText(text.toUpperCase());
    if(props.mode==="dark")
      {
        props.createalert(
          "converted to UpperCase " , "dark"
        )
      }
      else{
    props.createalert(
      "converted to UpperCase " , "success"
    )
  }
  };
  const hendledwClicked = () => {
    setText(text.toLowerCase());
    if(props.mode==="dark")
      {
    props.createalert(
      "converted to LowerCase " , "dark"
    )
  }
  else{
    props.createalert(
      "converted to LowerCase " , "success"
    )
  }
  
  };

  const onchangefun = (event) => {
    setText(event.target.value);
   
  };
  const copytext = () => {
    let text22 = document.getElementById("exampleFormControlTextarea1");
    text22.select();
    navigator.clipboard.writeText(text22.value);
    if(props.mode==="dark")
    {
      props.createalert(
        "text copy to clipBoard " , "dark"
      )
    }
      else{
      props.createalert(
        "text copy to clipBoard " , "success"
      )
    }
  };
  const removeextraspaces = () => {
    let find = text.split(/[" "]+/)
    setText(find.join(" "))
    if(props.mode === "dark")
    {
    props.createalert(
      "removed extra spaces " , "dark"
    )
  }
  else{
    props.createalert(
      "removed extra spaces " , "success"
    )
  }
    
  };
  const hendlecleartext =()=>{
    setText("");
    if(props.mode === "dark")
      {
        props.createalert(
          "text cleared" , "dark"
        )
      }
      else{
    props.createalert(
      "text cleared" , "success"
    )
  }
  }
  const [text, setText] = useState("");
  return (
    <>
      <div >
        <h1 className= {`text-${props.mode === 'dark' ? 'white' :'dark'}`}>{props.heading}</h1>

        <div className="form-group textarea" style={{backgroundColor:(props.mode==="dark" ? "rgb(8 35 62)" : "white" ), color:(props.mode==="light" ? "rgb(8 35 62)" : "white") }}>
          <textarea
            className= {`form-control text-${props.mode === 'dark' ? 'white' :'dark'}  `}
            style={{backgroundColor:(props.mode==="dark" ? "rgb(8 35 62)" : "white") }}
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
          <button
            className="btn btn-primary my-3 mx-3"
            onClick={hendlecleartext}
          >
            clear text
          </button>
        </div>
      </div>
      <div className="container">
        <h3 className= {`text-${props.mode === 'dark' ? 'white' :'dark'}`}>text summary </h3>
        <p className= {`text-${props.mode === 'dark' ? 'white' :'dark'}`}>
          {text.split(" ").filter((element)=>{return element.length !== 0}).length} words and {text.split("").filter((element)=>{return element !== " "}).length} characters
        </p>
      </div>
      <div>
        <h3 className= {`text-${props.mode === 'dark' ? 'white' :'dark'}`}>text preview</h3>
        <p className= {`text-${props.mode === 'dark' ? 'white' :'dark'}`}>{text}</p>
      </div>
    </>
  );
}
