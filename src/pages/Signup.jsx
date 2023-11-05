import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const validateemail = new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$");
const Signup = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [emailValidate, setemailValidate] = useState("");
  const [passwordValidate, setpasswordValidate] = useState("");
  const navigate = useNavigate();
  const [inputVal, setInputVal] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const OnInputChnageHandler = (e) => {
    setInputVal({
      ...inputVal,
      [e.target.name]: e.target.value,
    });
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
  const OnSignUpHandler = async (e) => {
    e.preventDefault();
    setIsSubmit(true);
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/register",
        inputVal
      );
      console.log(response, "signup");
      // localStorage("token",response.data.r)

      setIsSubmit(false);
      inputVal.firstName = "";
      inputVal.lastName = "";
      inputVal.email = "";
      inputVal.password = "";
      navigate("/Login");
    } catch (err) {
      console.log(err);
    }
  };
  //   const OnLoginHandler = async () => {
  //     const response = await axios.post("http://localhost:3000/api/auth/login" ,{});
  //     console.log(response);
  //   };
  //   useEffect(() => {
  //     OnLoginHandler();
  //   }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "80vh",
        width: "100vw",
        margin: "20px",
      }}
    >
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
            <label>firstName : </label>
            <input
              placeholder="enter your first name"
              name="firstName"
              onChange={(e) => OnInputChnageHandler(e)}
              type="text"
              value={inputVal.firstName}
            />
          </div>

          <div>
            <label>lastName : </label>
            <input
              placeholder="enter your Last Name"
              name="lastName"
              onChange={(e) => OnInputChnageHandler(e)}
              type="text"
              value={inputVal.lastName}
            />
          </div>

          <div>
            <label>email : </label>
            <input
              placeholder="enter your email"
              type="text"
              onChange={(e) => OnInputChnageHandler(e)}
              name="email"
              value={inputVal.email}
            />
          </div>
          <h6>{emailValidate}</h6>
          <div>
            <label>Password : </label>
            <input
              placeholder="enter your Password"
              type="text"
              name="password"
              onChange={(e) => OnInputChnageHandler(e)}
              value={inputVal.password}
            />
          </div>
          <h6>{passwordValidate}</h6>
          {isSubmit ? (
            <h5>Loading...</h5>
          ) : (
            <input type="submit" onClick={(e) => OnSignUpHandler(e)}></input>
          )}
        </form>
      </div>
    </div>
  );
};

export default Signup;
//after request disbale the summ=bmit button and add loading ...
//email validation...
//  password .. min 8  charct   general valiafdtion
