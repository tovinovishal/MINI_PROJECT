import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Nav = () => {
  

  return (
    <div>
      <nav className="navbar">
        <div>
        </div>
        <ul className="nav-items">
        <li>
            <Link to="/shop">Shop</Link>
          </li>
        <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/signup">Logout</Link>
          </li>
          
        </ul>
      </nav>
    </div>
  );
};

export default Nav;