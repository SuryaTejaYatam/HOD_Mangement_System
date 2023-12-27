import React from "react";
import { Link } from "react-router-dom";

const NavBarLogin = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Please Login
        </Link>
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
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/HodLogin">
                Head of Department
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/TeacherLogin">
                Teacher
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/StudentRegistration">
                Student
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBarLogin;
