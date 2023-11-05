import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Help from "./pages/Help";
import { Navigate, Outlet, Route, Router, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Search from "./pages/Search";
import Notification from "./pages/Notification";
import CreateBlog from "./pages/CreateBlog";

function App() {
  const [count, setCount] = useState(0);
  const [islogin, setIsLogin] = useState(false);

  return (
    <div className="App" style={{ height: "100vh", width: "100vw" }}>
      {/* {islogin ? <Login /> : <NavBar value={islogin} setIsLogin={setIsLogin} />} */}
      {/* <NavBar value={islogin} setIsLogin={setIsLogin} /> */}
      <CreateBlog />
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route
            index
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="about/:id"
            element={
              <ProtectedRoute>
                <About />
              </ProtectedRoute>
            }
          />
          <Route
            path="help"
            element={
              <ProtectedRoute>
                <Help />
              </ProtectedRoute>
            }
          />
          <Route path="notification" element={<Notification />} />
          <Route path="search" element={<Search />} />
        </Route>
        <Route
          path="Login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="signUp"
          element={
            <PublicRoute>
              <Signup />
            </PublicRoute>
          }
        />
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

const ProtectedRoute = ({ children }) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);
  if (!token) {
    return <Navigate to={"/Login"} />;
  }
  return <>{children}</>;
};

const PublicRoute = ({ children }) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);
  if (token) {
    return <Navigate to={"/"} />;
  }
  return <>{children}</>;
};
