import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/posts.css";
export const NewPost = () => {
  const [content, setContent] = useState("");
  const [loggedUser, setLoggedUser] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const id = useParams().id;
  const apiUrl = process.env.API_URL || "http://localhost:4000";

  useEffect(() => {
    const getUserProfile = () => {
      fetch(`https://backend-production-f695.up.railway.app/`, {
        credentials: "include",
      })
        .then((res) => res.json())
        .then((res) => setLoggedUser(res.user));
      setIsLoading(false);
    };
    getUserProfile();
  }, []);

  function handleClick(req, res) {
    fetch(
      `https://backend-production-f695.up.railway.app/user/${id}/new_post`,
      {
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
      }
    ).then(setContent(""));
  }

  function showFloatingMessage(e) {
    const message = document.getElementById("post-sent-message");
    message.classList.remove("hide");
    const buttonRect = e.target.getBoundingClientRect();
    message.style.top = `${buttonRect.top}px`;
    message.style.left = `${buttonRect.left}px`;

    setTimeout(() => {
      message.classList.add("hide");
    }, 2000);
  }

  return (
    <div className="post-container">
      <br></br>
      <br></br>
      <textarea
        className="new-post-text-area"
        type="text"
        name="content"
        maxLength="2000"
        onChange={(e) => setContent(e.target.value)}
        placeholder="Say what's on your mind"
      ></textarea>
      <button
        onClick={(e) => {
          handleClick();
          showFloatingMessage(e);
        }}
      >
        Submit
      </button>
      <div id="post-sent-message" className="post-sent-message hide">
        Post sent!
      </div>
    </div>
  );
};
