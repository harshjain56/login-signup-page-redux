import React from "react";
import Login from "./Components/Login";
import { Routes,Route } from "react-router-dom";
import Signup from "./Components/Signup";
import Profile from "./Components/Profile";
function App() {
  return (
    <div className="App">
      <Routes>
       
        <Route path="/" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path ="/profile" element={<Profile/>}/>
      </Routes>
    </div>
  );
}

export default App;
