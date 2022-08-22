import React, { useState } from "react"
import "./App.css"
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom"
import Home from "./components/Home"
import Login from "./components/Login"
import Editor from "./components/Editor"
import Signup from "./components/Signup"
import DragDrop from "./components/DragDrop"
import Auth from "./components/Auth"
import ImageEditor from "./components/ImageEditor"
import ContactUs from "./components/ContactUs"
import AboutUs from "./components/AboutUs"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Home></Home>} path="/home" />
        <Route element={<Login></Login>} path="/login" />
        <Route
          element={
            <Auth>
              <Editor></Editor>
            </Auth>
          }
          path="/editor"
        />
        <Route
          element={
            <Auth>
              <ImageEditor />
            </Auth>
          }
          path="/imageeditor"
        />
        <Route element={<Signup></Signup>} path="/signup" />
        <Route element={<DragDrop></DragDrop>} path="/dragdrop" />
        <Route element={<ContactUs></ContactUs>} path="/contactus"/>
        <Route element={<AboutUs></AboutUs>} path="/aboutus"/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
