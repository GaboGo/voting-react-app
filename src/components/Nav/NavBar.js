import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
const NavBar = () => {
  return (
    <nav
      className="navbar"
      style={{
        position: useLocation().pathname === "/home" ? "absolute" : "relative"
      }}
    >
      <Col>
        <Link to="/home" className="text-white">
          Rule of Thumb.
        </Link>
      </Col>
      <Col lg={7} className="breadcrumbs">
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
      </Col>
    </nav>
  );
};
export default NavBar;
