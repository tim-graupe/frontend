// props.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Comment } from "./comment";
import "../styles/posts.css";

export const Post = ({ props }) => {
  const [comment, setComment] = useState("");

  const commentOnPost = (postId) => {
    fetch(
      `https://backend-production-f695.up.railway.app/commentOnPost/${postId}`,
      {
        method: "POST",
        mode: "cors",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          postId: postId,
          comment: comment,
          date: new Date(),
        }),
      }
    );
  };

  const likePost = async (postId) => {
    try {
      const response = await fetch(
        `https://backend-production-f695.up.railway.app/likePost/${postId}/`,
        {
          method: "POST",
          mode: "cors",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            postId: postId,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`Error liking post (Status: ${response.status})`);
      }

      console.log(`Like sent successfully for post ${postId}`);
    } catch (error) {
      console.error(error.message);
    }
  };

  function formatDate(dateString) {
    const options = {
      year: "2-digit",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  }

  function showFloatingSymbol(e) {
    const symbol = document.getElementById("floating-symbol");
    symbol.classList.remove("hide");
    const buttonRect = e.target.getBoundingClientRect();
    symbol.style.top = `${buttonRect.top}px`;
    symbol.style.left = `${buttonRect.left}px`;

    setTimeout(() => {
      symbol.classList.add("hide");
    }, 2000);
  }

  return (
    <div className="post-container">
      <div className="timeline-individual-comment-card" key={props.date_posted}>
        <Link to={`/user/${props.poster._id}`} className="timeline-post">
          <img
            src={props.poster.profile_pic}
            alt="profile pic"
            className="profile-pic-post"
          />{" "}
          {props.poster.firstName} {props.poster.lastName}
          <sub></sub>
        </Link>
        <p>{props.content}</p>
        <input
          placeholder="Reply"
          id="comment"
          type="text"
          onChange={(e) => setComment(e.target.value)}
        />
        <button onClick={() => commentOnPost(props._id)}>Comment</button>
        <button
          onClick={(e) => {
            console.log(props._id);
            likePost(props._id);
            showFloatingSymbol(e);
          }}
        >
          Like
        </button>
        <span id="floating-symbol" className="material-symbols-outlined hide">
          thumb_up
        </span>
        <br></br>
        <sub>
          {props.comments.length === 1
            ? `${props.comments.length} comment`
            : `${props.comments.length} comments`}
        </sub>{" "}
        <sub>
          {props.likes.length === 1
            ? `${props.likes.length} like`
            : `${props.likes.length} likes`}
        </sub>
        <sub> {formatDate(props.date_posted)}</sub>
        <div className="comments-container">
          {props.comments.map((comment) => (
            <div className="post-repdives-card" key={comment._id}>
              <Comment key={comment._id} comment={comment} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
