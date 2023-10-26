import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const About = () => {
  const resp = useParams();
  const [description, setDecription] = useState("");
  console.log(resp, "response");
  const fetchData = async () => {
    const response = await axios.get(
      `http://localhost:3000/api/blog/${resp.id}`
    );
    //console.log(response.result.description);
    setDecription(response.data.result.description);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div>{description}</div>;
};

export default About;
