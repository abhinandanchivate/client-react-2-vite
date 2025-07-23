import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">🔧 Asset Manager</Link>
      </div>
      <nav className="nav">
        <Link to="/user/register">Register</Link>
        <Link to="/user/login">Login</Link>

        <div className="dropdown">
          <button className="dropbtn">Asset ⬇</button>
          <div className="dropdown-content">
            <a href="/asset/create">Create</a>
            <a href="/asset/view">View</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
