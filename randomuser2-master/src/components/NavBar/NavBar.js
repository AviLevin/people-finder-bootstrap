import React from "react";
import { Link } from "react-router-dom";
import classes from "./NavBar.module.css";

const Nav = () => {
  return (
    <div className={classes.navbar}>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <Link to="/">
              <li className="nav-item active">
                <a className="nav-link">Users</a>
              </li>
            </Link>

            <Link to="/favorites">
              <li className="nav-item">
                <a className="nav-link">favorites</a>
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
