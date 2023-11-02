import React, { useEffect, useState } from "react";
import About from "../pages/About";
import Help from "../pages/Help";
import { Link, Outlet } from "react-router-dom";
import Login from "../pages/Login";
import { Button } from "@mui/material";

const NavBar = ({ children }) => {
  const [islogin, setIsLogin] = useState(false);
  // const loginPageHandler = () => {
  //   props.setIsLogin(!props.value);
  // };

  // useEffect(() => console.log(props.value), [props.value]);
  return (
    <>
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
          <Button onClick={() => loginPageHandler()}>
            <Link to="Login">Login</Link>
          </Button>

          <button>
            <Link to="signUp">signUp</Link>
          </button>
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default NavBar;
