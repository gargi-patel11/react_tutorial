// import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import Navbar from "./components/Navbar"
import Textarea from "./components/Textarea"
import About from "./components/About"
import { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter as Router, Route , Routes} from "react-router-dom";



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
    // setInterval(() => {
    //   document.title="dark mode is enable"
    // }, 2000);
    // setInterval(() => {                                                
    //   document.title="dark mode is running now"
    // }, 1500);
    }
    else{
      setMode('light')
      document.body.style.backgroundColor="white"
      createalert("dark mode disable" ,"success")
    }
  }
 
  return (
    <>
  <Router>
    <Navbar mode={mode} darkmode={darkmodeenalbe}/>
    <Alert alert={alert}/>
    <div className="container">
  <Routes>
      <Route exact path="/" element ={<Textarea heading="add your text here" mode={mode} createalert ={createalert} title="textutils -home"/>}/>
      <Route path="/about" element={  <About  title="textutils -about" mode={mode}/>} />
    </Routes>
    </div>
  </Router>

 
 

      </>
  );
}



export default App;
