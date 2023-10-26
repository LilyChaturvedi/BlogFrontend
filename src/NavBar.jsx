import React from "react";
import About from "./About";
import Help from "./Help";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div
      style={{
        backgroundColor: "dimgray",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
      }}
    >
      <h3>Blog</h3>
      <div
        style={{
          width: "20rem",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Link to="/">home</Link>
        <Link to="about">About</Link>
        <Link to="help">Help</Link>
      </div>
      <div
        style={{
          width: "12rem",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <button>Login</button>
        <button>LogOut</button>
      </div>
    </div>
  );
};

export default NavBar;
