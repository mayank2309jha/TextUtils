import './App.css';
import React,{useState} from 'react'
import Navbar from "./Navbar";
import TextForm from './TextForm';
import About from './About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light');//Whether dark mode is enabled or not.

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#192734';
      document.title = "TextUtils - Dark Mode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.title = "TextUtils - Light Mode";
    }
  }
  return (
    <Router>
      <Navbar titiel = "TextUtils" mode = {mode} toggleMode = {toggleMode}/>
      <div className = "container my-3">
      <Routes>
        <Route path="/" element={<TextForm heading = {"Enter the Text to Analyze below"} mode = {mode}/>} />
        <Route path="/about" element={<About />} />
      </Routes>
      
      </div>
    </Router>
  );
}

export default App;
