import React from "react";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <ul className="d-flex justify-content-between align-items-center">
          <li>
            <ul className="nav-list">
              <li>
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/home"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/projects"
                >
                  Projects
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <ul className="nav-list">
              <li>
                <a
                  className="nav-link"
                  href="https://github.com/nrvarun/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github
                </a>
              </li>
              <li>
                <a
                  className="nav-link"
                  href="https://www.linkedin.com/in/varunnr/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
