import React from "react";
import './style.css';

const Header = () => {
  return (
    <div>
      <div className="headerBlock">
        <div className="logo">
          <p>RPP</p>
          <small>Real Estate Agency</small>
        </div>
        <div className="navSection">
          <ul className="navList">
            <li>Home</li>
            <li>About</li>
            <li>Properties</li>
            <li>Agents</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="registerButton">
          <button>Submit a property</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
