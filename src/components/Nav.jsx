import React from "react";
import Logo from "../icon.png";
import SearchBar from "./SearchBar.jsx";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav({ onSearch }) {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg navbar-expand-md navbar-expand-sm bg-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img
            style={{ marginRight: "30px" }}
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
          Weather App
        </Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/about" className="aboutLink">
              <span>About</span>
            </Link>
          </div>
        </div>
        <SearchBar onSearch={onSearch} />
      </div>
    </nav>
  );
}

export default Nav;
