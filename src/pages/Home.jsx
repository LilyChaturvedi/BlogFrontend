import axios from "axios";
import React, { useEffect, useState } from "react";
import { json, useLocation } from "react-router-dom";
import Card from "../components/Card";
import mystyle from "./home.module.css";
import Login from "./Login";
import { Box, Container } from "@mui/material";

const Home = (props) => {
  // const location = useLocation();
  console.log("location:", location);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(props.value, "home");

  const fetchData = async () => {
    try {
      setLoading(true);
      let token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:3000/api/blog/", {
        headers: { Authorization: `Bearer ${token}` },
      });
      // const result = await response.json();
      console.log(response);
      setData([...response.data.result]);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
    console.log("data");
  }, []);

  if (loading) return <h5>Loading....</h5>;

  return (
    <>
      <Container
        sx={{
          display: "flex",
          alignItem: "center",
          flexWrap: "wrap",
          gap: "20px",
          marginTop: "4rem",
        }}
      >
        {data.map((item) => {
          return <Card key={item._id} value={item} />;
        })}
        {data.map((item) => {
          return <Card key={item._id} value={item} />;
        })}
      </Container>
    </>
  );
};

export default Home;
