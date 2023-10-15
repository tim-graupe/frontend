import React, { useEffect, useState } from "react";
import { Post } from "../postComponent";
export const Timeline = ({ props }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const apiUrl = process.env.API_URL || "http://localhost:4000";

  useEffect(() => {
    const getPosts = () => {
      if (props) {
        fetch(
          `https://backend-production-f695.up.railway.app/user/${props}/posts`,
          {
            credentials: "include",
          }
        )
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
