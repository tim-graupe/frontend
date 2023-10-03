import React, { useEffect, useState } from "react";
import { Post } from "../postComponent";
export const Timeline = ({ props }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = () => {
      if (props) {
        fetch(`https://tim-graupe.github.io/user/${props}/posts`, {
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

  return (
    <div className="timeline-container">
      {!props ? (
        <p>Loading please wait...</p>
      ) : (
        <div>
          {props.map((post) => {
            return (
              <div key={post._id}>
                <Post props={post} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
