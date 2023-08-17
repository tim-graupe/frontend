import React, { useState } from "react";
import { useParams } from "react-router-dom";

export const NewPost = ({ props }) => {
  const [content, setContent] = useState("");
  const id = useParams().id;
  const jsonData = {
    content: content,
  };

  function handleClick() {
    //change id on 13 to props and pass user's _id
    fetch(`http://localhost:4000/user/${props}/new_post`, {
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
      <label>Something on your mind?</label>
      <br></br>
      <textarea
        type="text"
        name="content"
        maxLength="2000"
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
