import React from "react";
import about from "../img/about1.svg"
import Navbar from "./Navbar"
import "./css/aboutus.css"

const AboutUs = () => {
  return (
    <div>
    <Navbar/>
    <div className="about-adjust margin-below-navbar ">
        <img src={about} alt="" controls></img>
    </div>
    </div>

  );
};

export default AboutUs;
