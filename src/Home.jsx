import axios from "axios";
import React, { useEffect, useState } from "react";
import { json } from "react-router-dom";
import Card from "./Card";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:3000/api/blog/");
      // const result = await response.json();
      setData([...response.data.result]);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <h5>Loading....</h5>;

  return (
    <div>
      {" "}
      {data.map((item) => (
        <Card key={item._id} value={item} />
      ))}
    </div>
  );
};

export default Home;
