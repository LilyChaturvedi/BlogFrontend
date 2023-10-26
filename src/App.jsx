import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./NavBar";
import Help from "./Help";
import { Route, Router, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App" style={{ height: "100vh", width: "100vw" }}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about/:id" element={<About />}></Route>
        <Route path="help" element={<Help />}></Route>
      </Routes>
    </div>
  );
}

export default App;
