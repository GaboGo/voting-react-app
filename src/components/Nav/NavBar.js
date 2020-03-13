import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
const NavBar = () => {
  return (
    <nav
      className="navbar"
    >
      <Link to="/home" className="text-white">
        Rule of Thumb.
      </Link>
      <ul className="breadcrumbs">
        <li>
          <Link to="/past/trial">Past Trials</Link>
        </li>
        <li>
          <Link to="/information/works">How It Works</Link>
        </li>
        <li>Log In / Sign Up</li>
        <li>
          <input
            type="search"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL +
                `/assets/search.png`})`
            }}
          ></input>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
