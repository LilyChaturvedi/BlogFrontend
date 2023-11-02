import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Help from "./pages/Help";
import { Route, Router, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  const [count, setCount] = useState(0);
  const [islogin, setIsLogin] = useState(false);

  return (
    <div className="App" style={{ height: "100vh", width: "100vw" }}>
      {/* {islogin ? <Login /> : <NavBar value={islogin} setIsLogin={setIsLogin} />} */}
      {/* <NavBar value={islogin} setIsLogin={setIsLogin} /> */}
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home value={islogin} />} />
          <Route path="about/:id" element={<About />} />
          <Route path="help" element={<Help />} />
        </Route>
        <Route path="Login" element={<Login />} />
        <Route path="signUp" element={<Signup />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;

const ErrorPage = () => {
  console.log("Hit");
  return <div>404 Page Not Found</div>;
};
