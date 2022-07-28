import React, {useState} from "react";
import './App.css';
import { BrowserRouter, Routes, Route, Link, Navigate} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login"
import Editor from "./components/Editor"
import Signup from "./components/Signup"
import DragDrop from "./components/DragDrop"

function App() {
  

  return (
    
    <BrowserRouter>
    <Routes>
          <Route element={<Home />} path="/"/>
          <Route element={<Home></Home>} path="/home"/>
          <Route element={<Login></Login>} path="/login"/>
          <Route element={<Editor></Editor>} path="/editor"/>
          <Route element={<Signup></Signup>} path="/signup"/>
          <Route element={<DragDrop></DragDrop>} path="/dragdrop"/>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App;
