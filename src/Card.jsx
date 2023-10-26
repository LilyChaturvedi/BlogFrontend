import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  console.log(props.value.title, "props");
  return (
    <div style={{ height: "40vh", width: "30vw" }}>
      <Link to={`about/${props.value._id}`}>
        {" "}
        <button>{props.value.title}</button>
      </Link>
    </div>
  );
};

export default Card;
