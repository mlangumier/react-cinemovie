import React from "react";
import { NavLink } from "react-router-dom";
import Style from "./Header.module.scss";

function Header() {
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          CineMovie
        </a>
        <button className="navbar-toggler">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav me-0">
            <li className="nav-item active">
              <NavLink
                to="/films"
                className={({ isActive }) =>
                  "nav-link " + (isActive ? Style.activeLink : "")
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/favorites"
                className={({ isActive }) =>
                  "nav-link " + (isActive ? Style.activeLink : "")
                }
              >
                Favorites
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
