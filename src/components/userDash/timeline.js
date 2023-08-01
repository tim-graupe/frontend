import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const Timeline = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const id = useParams().id;

  useEffect(() => {
    const getAllEntries = () => {
      fetch(`http://localhost:4000/user/${id}/posts`, {
        mode: "cors",
      })
        .then((response) => response.json())
        .then((response) => setPosts(response.posts));
    };
    getAllEntries();
    setIsLoading(false);
  }, []);

  return (
    <div className="timeline-container">
      {isLoading ? (
        <p>Loading please wait...</p>
      ) : (
        <div>
          {posts.map((post) => {
            return (
              <div className="timeline-post">
                <p key={post.content}>{post.content}</p>
                <sub>
                  {/* add google icons */}
                  {post.replies.length} {post.likes.length}
                </sub>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
