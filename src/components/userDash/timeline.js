import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Timeline = ({ props }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [comment, setComment] = useState("");

  useEffect(() => {
    const getPosts = () => {
      if (props) {
        fetch(`http://localhost:4000/user/${props}/posts`, {
          credentials: "include",
        })
          .then((res) => res.json())
          .then((res) => {
            setPosts(res);
            setIsLoading(false);
          });
      }
    };
    getPosts();
    setIsLoading(false);
  }, [props]);

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
    // .then((response) => console.log(loggedUser.firstName))
  };

  const likePost = (postId) => {
    console.log(`http://localhost:4000/post/${postId}/`);
    fetch(`http://localhost:4000/post/${postId}/`, {
      method: "POST",
      mode: "cors",
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

  return (
    <div className="timeline-container">
      {isLoading ? (
        <p>Loading please wait...</p>
      ) : (
        <div>
          {props.map((post) => {
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
                <Link to={`/user/${post.poster._id}`} className="timeline-post">
                  <img
                    src={post.poster.profile_pic}
                    alt="profile pic"
                    className="profile-pic-post"
                  />{" "}
                  {post.poster.firstName} {post.poster.lastName}
                  <sub></sub>
                </Link>
                <p>{post.content}</p>
                <input
                  id="comment"
                  type="text"
                  onChange={(e) => setComment(e.target.value)}
                />
                <button onClick={() => commentOnPost(post._id)}>Comment</button>
                <button onClick={() => likePost(post._id)}>Like</button>
                <br></br>
                <sub>{post.comments.length} comments</sub>{" "}
                <sub>{post.likes.length} likes</sub>{" "}
                <sub> {date.toLocaleDateString("en-US", options)}</sub>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
