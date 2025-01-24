// import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import Navbar from "./components/Navbar"
import Textarea from "./components/Textarea"
import About from "./components/About"


function App() {
  return (
    <>
    <Navbar />
    <div className="container">
    <Textarea heading="add your text here" />
    <About ></About>
  </div>    
    </>
  );
}



export default App;
