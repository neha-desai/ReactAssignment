import React, { useEffect } from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/home">
            Twitter
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  activeclassname="active"
                  className="nav-link"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  activeclassname="active"
                  className="nav-link"
                  to="/profile"
                >
                  Profile
                </NavLink>
              </li>
            </ul>

            {!localStorage.getItem("user") ? (
              <div></div>
            ) : (
              <button className="btn btn-primary" onClick={handleLogout}>
                Logout
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
