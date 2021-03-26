import React from "react";
import "./Header.css";

function Header() {

  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light headerNav">
      <div className="container-fluid">
        <h1 className="name nameJon">Jon Gudenzi</h1>
        <ul className="navbar-nav navList col-5">
          <li className="nav-item">
            <a className="navText" aria-current="page" href="#aboutMeNav">About Me</a>
          </li>
          <li className="nav-item">
            <a className="navText " href="#workNav">Work</a>
          </li>
          <li className="nav-item">
            <a className="navText" href="#contactNav">Contact</a>
          </li>
          <li className="nav-item">
            <a className="navText"
              href="https://docs.google.com/document/d/1RrJq8kZ_P1p-k3GWtwcuCztp4hL40FXpl4GtruKDvZ0/edit?usp=sharing"
              target="_blank">Resume</a>

          </li>

        </ul>
      </div>
    </nav>

  );

}

export default Header;