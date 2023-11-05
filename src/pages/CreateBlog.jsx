import React, { useState } from "react";

const CreateBlog = () => {
  const [input, setInput] = useState({
    title: "",
    decription: "",
  });
  const OnInputHandler = (e) => {
    console.log(e.target.name);
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div>
        <label>Title :</label>
        <input
          name="title"
          value={input.title}
          onChange={(e) => OnInputHandler(e)}
        />
      </div>
      <div>
        <label>Description :</label>
        <input
          name="description"
          value={input.decription}
          onChange={(e) => OnInputHandler(e)}
        />
      </div>
    </>
  );
};

export default CreateBlog;
