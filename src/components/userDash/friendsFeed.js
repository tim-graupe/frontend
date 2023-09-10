//make an api call to get recent friend's posts & activity
//use this to add to the user's homepage/ dashboard that they see upon login
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
            let date = new Date(post.date_posted);
            const options = {
              weekday: "short",
              year: "numeric",
              month: "short",
              day: "numeric",
            };
            return (
              <div
                className="timeline-individual-comment-card"
                key={post.date_posted}
              >
                <Link to={`/user/${post.id}`} className="timeline-post">
                  <img
                    src={post.poster.profile_pic}
                    alt="profile pic"
                    className="profile-pic-post"
                  />{" "}
                  <p>
                    {post.poster.firstName} {post.poster.lastName}{" "}
                  </p>
                  <br></br>
                </Link>
                <p>{post.content}</p>
                <input
                  id="comment"
                  type="text"
                  onChange={(e) => setComment(e.target.value)}
                />
                <button onClick={() => likePost(post._id)}>Like</button>
                <button onClick={() => commentOnPost(post._id)}>
                  Reply
                </button>{" "}
                <br></br>
                <sub>{post.comments.length} comments</sub>{" "}
                <sub>{post.likes.length} likes</sub>{" "}
                <sub>{date.toLocaleDateString("en-US", options)}</sub>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
