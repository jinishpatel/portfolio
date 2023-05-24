import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons";

const Navbar = () => {
  return (
    <div className="header">
      <Link to="/">
        <h1>PortFolio</h1>
      </Link>

      <ul className="nav-menu">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Contact">Contact Me</Link>
        </li>
        <li>
          <Link to="/Project">Project</Link>
        </li>
        <li>
          <Link to="/Resume">Get Resume</Link>
        </li>
      </ul>
      <div className="hamburger-menu">
        <FaBars></FaBars>
      </div>
    </div>
  );
};

export default Navbar;
