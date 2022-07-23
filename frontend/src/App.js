import React, {useState} from "react";
import './App.css';
import { BrowserRouter, Routes, Route, Link, Navigate} from "react-router-dom";
import { createTheme, ThemeProvider} from "@mui/material";
import Navbar from "./components/Navbar"
import Home from "./components/Home";


function App() {

  const [darkTheme, setDarkTheme] = useState(false);

  

  const myLightTheme = createTheme({
    palette: {
      primary: {
        main: '#e99d2e'
      }
    }
  })
  const myDarkTheme = createTheme({
    palette: {
      mode: 'dark',
      background: {
        paper: '#ccc'
      }
    }
  })

  

  return (
    <div>
    <ThemeProvider theme={darkTheme ? myDarkTheme : myLightTheme}>
    <BrowserRouter>

    <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>

    <Routes>
          <Route element={<Home></Home>} path="/home"/>
    </Routes>
    </BrowserRouter>
    </ThemeProvider>

    
    </div>
  )
}

export default App;
