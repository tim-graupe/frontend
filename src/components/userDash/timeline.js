import React, { useEffect, useState } from "react";
import { Post } from "../postComponent";
import config from "../../config";
export const Timeline = ({ props }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const apiUrl =
    process.env.NODE_ENV === "development"
      ? config.development.apiUrl
      : config.production.apiUrl;
  useEffect(() => {
    const getPosts = () => {
      if (props) {
        fetch(`${apiUrl}/user/${props}/posts`, {
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
