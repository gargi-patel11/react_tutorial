// import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import Navbar from "./components/Navbar"
import Textarea from "./components/Textarea"
// import About from "./components/About"
import { useState } from 'react';
import Alert from './components/Alert';


function App() {
  
  let [mode , setMode]=useState('light')
  let[alert , setalert]=useState(null)

  const createalert = (message , type)=>{
    setalert(
      {
        message :message,
        type : type
      }
    )
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }
    

  const darkmodeenalbe =()=>{
    if(mode==='light'){
    setMode('dark')
    document.body.style.backgroundColor="rgb(8 35 62)"
    createalert("dark mode enable" ,"dark")
    


    }
    else{
      setMode('light')
      document.body.style.backgroundColor="white"
      createalert("dark mode disable" ,"success")

    }


  }
  return (
    <>

    <Navbar mode={mode} darkmode={darkmodeenalbe}/>
    <Alert alert={alert}/>
    <div className="container">
    <Textarea heading="add your text here" mode={mode} createalert ={createalert}/>
    {/* <About /> */}
  </div> 
      </>
  );
}



export default App;
