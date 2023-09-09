import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Timeline = ({ props }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

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
                <Link to={`/user/${post.user._id}`} className="timeline-post">
                  <img
                    src={post.poster.profile_pic}
                    alt="profile pic"
                    className="profile-pic-post"
                  />
                  <p key={post.date_posted}>{post.content}</p>
                  <sub>
                    <p>
                      {post.poster.firstName} {post.poster.lastName}{" "}
                    </p>
                    {date.toLocaleDateString("en-US", options)}
                  </sub>
                </Link>
                <button onClick={() => console.log(post.user)}>Like</button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
