import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const NewPost = () => {
  const [content, setContent] = useState("");
  const [loggedUser, setLoggedUser] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [test, settest] = useState(useParams().id);
  const id = useParams().id;

  useEffect(() => {
    const getUserProfile = () => {
      fetch(`http://localhost:4000/`, {
        credentials: "include",
      })
        .then((res) => res.json())
        .then((res) => setLoggedUser(res.user));
      setIsLoading(false);
    };
    getUserProfile();
  }, []);

  function handleClick(req, res) {
    fetch(`http://localhost:4000/user/${id}/new_post`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: content,
        poster: loggedUser._id,
        id: id,
        date: new Date(),
      }),
    })
      // .then((response) => console.log(loggedUser.firstName))
      .then(setContent(""));
  }

  return (
    <div>
      <br></br>
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
