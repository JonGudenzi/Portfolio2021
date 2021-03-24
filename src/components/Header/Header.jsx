import React from "react";
import "./Header.css";

function Header() {
    return (
      
        <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Logo</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down navLinks">
        <li><a href="sass.html">About Me</a></li>
        <li><a href="badges.html">Work</a></li>
        <li><a href="collapsible.html">Contact</a></li>
        <li><a href="collapsible.html">Resume</a></li>
      </ul>
    </div>
  </nav>
    );
}

export default Header;