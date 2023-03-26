import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React, { Component } from "react";
import "./navBar.css";
const divStyle = {
  marginLeft: "730px",
};
const NavBar = () => {
  return (
    <nav class='navbar navbar-expand-lg navbar-light bg-light'>
      <a class='navbar-brand' style={divStyle}>
        <strong>Hobby-India</strong>
      </a>
    </nav>
  );
};

export default NavBar;
