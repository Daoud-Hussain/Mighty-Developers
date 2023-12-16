import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Contact from "./Contact";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary col-10 mx-auto fw-semibold">
        <div className="container-fluid nav_bg ">
          <a className="navbar-brand" href="#">
            Mighty Freelancers
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href='/home'>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href='/about'>
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href='/services'>
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href='/contact'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
