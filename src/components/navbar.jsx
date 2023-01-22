import React, { Component } from "react";

// Stateless Functional Componenet
const NavBar = ({ totalCounters }) => {
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar <span>{totalCounters}</span>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
