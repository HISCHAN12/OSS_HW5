import React from "react";
import { Link } from "react-router-dom";
import "./Common.css";
export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="https://www.smentertainment.com/en/" target="_blank" style={{ color: 'red', fontSize: '30px'}}>
            {/*<span className="navbar-text">SM</span>*/}
            <img
              src="/sm.jpg"
              alt="SM Logo"
              style={{ width: '110px' }}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="create-user">
                  Create User
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="show-user">
                  Show User
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="show-handol">
                  Show Hanndol
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
