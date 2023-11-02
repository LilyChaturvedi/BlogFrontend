import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

export const validateemail = new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$");
const Login = (props) => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [emailValidate, setemailValidate] = useState("");
  const [passwordValidate, setpasswordValidate] = useState("");
  const [inputVal, setInputVal] = useState({
    email: "",
    password: "",
  });
  console.log(props.value);

  const OnInputChnageHandler = (e) => {
    setInputVal((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    if (!validateemail.test(inputVal.email)) {
      setemailValidate("enter correct email");
    } else {
      setemailValidate("");
    }
    if (!RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$").test(inputVal.password)) {
      setpasswordValidate("min 8 character ,alphanum, one upper letter");
    } else {
      setpasswordValidate("");
    }
  };

  const OnLoginHandler = async (e) => {
    e.preventDefault();
    setIsSubmit(true);
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        inputVal
      );
      setIsSubmit(false);
      toast.success("successfully Login");
      inputVal.email = "";
      inputVal.password = "";
    } catch (err) {
      console.log(err);
      setIsSubmit(false);
      toast.error("failed to Login");
    }
  };

  useEffect(() => {
    console.log(inputVal);
  }, [inputVal]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "90vh",
        width: "100vw",
        margin: "20px",
      }}
    >
      <ToastContainer
        position="top-center"
        autoClose={4995}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div
        style={{
          height: "40vh",
          width: "40vw",
          display: "flex",
          justifyContent: "center",
          border: "2px solid Black",
          borderRadius: "5px",
        }}
      >
        <form>
          <div>
            <label>Email : </label>
            <input
              placeholder="enter your name"
              type="text"
              value={inputVal.email}
              name="email"
              onChange={(e) => OnInputChnageHandler(e)}
            />
          </div>
          <h4>{emailValidate}</h4>
          <div>
            <label>Password : </label>
            <input
              placeholder="enter your name"
              type="text"
              onChange={(e) => OnInputChnageHandler(e)}
              name="password"
              value={inputVal.password}
            />
          </div>
          <h4>{passwordValidate}</h4>
          {isSubmit ? (
            <h4>Loading...</h4>
          ) : (
            <input
              type="submit"
              value="Login"
              onClick={(e) => OnLoginHandler(e)}
            ></input>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
