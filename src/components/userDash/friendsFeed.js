//make an api call to get recent friend's posts & activity
//use this to add to the user's homepage/ dashboard that they see upon login
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Post } from "../postComponent";

export const FriendsFeed = ({ props }) => {
  const [friendsPosts, setFriendsPosts] = useState([]);
  const [comment, setComment] = useState("");

  useEffect(() => {
    const getFriendsPosts = () => {
      if (props) {
        fetch(`http://localhost:4000/getFriendsPosts/${props}`, {
          credentials: "include",
        })
          .then((res) => res.json())
          .then((res) => {
            setFriendsPosts(res.friendsPosts);
          });
      }
    };
    getFriendsPosts();
  }, [props]);

  const likePost = (postId) => {
    fetch(`http://localhost:4000/likePost/${postId}`, {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        postId: postId,
        // date: new Date(),
      }),
    });
    // .then((response) => console.log(loggedUser.firstName))
  };

  const commentOnPost = (postId) => {
    fetch(`http://localhost:4000/commentOnPost/${postId}`, {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        postId: postId,
        comment: comment,
        // date: new Date(),
      }),
    });
  };

  return (
    <div className="profile-container">
      {!props ? (
        <p>Loading please wait...</p>
      ) : (
        <div>
          {friendsPosts.map((post) => {
            return <Post props={post} />;
          })}
        </div>
      )}
    </div>
  );
};
