import "./App.css";
import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from "./components/Login";
import Sigenup from "./components/Sigenup";
import Home from "./components/Home";
import { Nav } from "./components/Nav";
import {UserAuthContextProvider} from "./context/UserAuthContext"


function App() {
  return (
 
      <Router>
        <Nav/>
       
        <UserAuthContextProvider>
        <Routes>
        
          <Route path="/" element={<Home/>}/>
          <Route path="/sigenup" element={<Sigenup/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
        </UserAuthContextProvider>
      </Router>
     
     
     
  );
}

export default App;
