import React, { useState } from "react";
import { useParams } from "react-router-dom";

export const NewPost = () => {
  const [content, setContent] = useState("");
  const id = useParams().id;
  const jsonData = {
    content: content,
  };

  function handleClick() {
    fetch(`http://localhost:4000/user/${id}/new_post`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonData),
    }).then((response) => console.log(response));
  }

  return (
    <div>
      <br></br>
      <label>Content</label>
      <br></br>
      <textarea
        type="text"
        name="content"
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button
        onClick={() => {
          handleClick();
        }}
      >
        Submit
      </button>
    </div>
  );
};