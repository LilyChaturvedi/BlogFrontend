import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const About = () => {
  const resp = useParams();

  //console.log(resp);
  return <div>{resp.id}</div>;
};

export default About;
