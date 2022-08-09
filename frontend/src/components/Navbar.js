import React from "react";
import { NavLink } from "react-router-dom";
import { Switch } from "@mui/material";
const Navbar = ({ darkTheme, setDarkTheme }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <a className="navbar-brand mt-2 mt-lg-0" href="#">
            <img
              src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/photo-editor-app-icon-design-template-4422455fe13e1c4e7008958f0b058eb5_screen.jpg?ts=1577021462"
              height="40"
              width="40"
              alt="MDB Logo"
              loading="lazy"
            />
          </a>

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/home" >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/imageeditor">
                Editor
              </NavLink>
            </li>
            
          </ul>
        </div>

        <div class="d-flex align-items-center">
        <NavLink to="/login">
                    <button
                      type="button"
                      class="btn btn-link px-3 mb-1 me-2"
                      aria-controls="#picker-editor"
                      
                    >
                      Login
                    </button>
                    </NavLink>
                    <NavLink to="/signup">
                    <button
                      type="button"
                      class="btn btn-primary mb-1 me-lg-3"
                      aria-controls="#picker-editor"
                      
                    >
                      Sign up
                    </button>
                    </NavLink>
                    </div>

        </div>
      
    </nav>
    </div>
  );
};

export default Navbar;
