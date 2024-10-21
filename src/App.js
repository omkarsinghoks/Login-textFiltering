import logo from './logo.svg';
import './App.css';
 import Home from './Home';
import Homi from './Homi';
import SearchPosts from './SearchPosts';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./Home";
import LoginPage from "./LoginPage";


function App() {
  return (
    <div className="App">
     
        <h1 className='heading'> Blog Post Website </h1>
        <Home></Home>
        {/* <Homi></Homi> */}
       
        
     
    
    </div>
  );
}

export default App;
